'use server'

import { MercadoPagoConfig, Preference } from 'mercadopago'
import { CartItem } from '../_context/cart'
import { randomUUID } from 'node:crypto'
import axios from 'axios'

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
})

interface Address {
  cep: string
  street: string
  number: string
  district: string
  city: string
  state: string
}

export async function createPayment(cart: CartItem[], address: Address) {
  try {
    const items = cart.map(el => {
      return { 
        id: randomUUID(),
        title: el.title,
        unit_price: el.price,
        quantity: el.quantity,
        currency_id: 'BRL',
      }
    })

    const products = cart.map(el => {
      return {
        id: el.id,
        width: 20,
        height: 20,
        length: 10,
        weight: 0.3,
        insurance_value: el.price,
        quantity: el.quantity
      }
    })

    const { data } = await axios.post(`${process.env.MELHOR_ENVIO_API_URL}/me/shipment/calculate`!, {
      "from": {
        "postal_code": "96020360"
      },
      "to": {
        "postal_code": address.cep
      },
      "products": products
    }, {
      headers: {
        authorization: `Bearer ${process.env.MELHOR_ENVIO_API_TOKEN}`
      }
    })
    
    const cheapest = data
    .filter((el: any) => el.price)
    .reduce((prev: any, curr: any) => {
      return (Number(curr.price) < Number(prev.price)) ? curr : prev
    })

    const preference = new Preference(client)
    const result = await preference.create({
      body: {
        items,
        shipments: {
          cost: Number(cheapest.price)
        },
        auto_return: 'approved',
        back_urls: {
          success: 'https://aly-n8n.soultech.agency/webhook-test/5ca9a2c9-1d8b-4004-ba35-c2cd6e91fe3d',
          failure: 'https://www.google.com',
          pending: 'https://www.google.com'
        },
        metadata: {
          products,
          address,
          cheapest
        }
      },
    })

    return { url: result.init_point }
  } catch (error) {
    return { error: 'Falha na comunicação com Mercado Pago' }
  }
}