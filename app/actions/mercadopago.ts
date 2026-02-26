'use server'

import { MercadoPagoConfig, Preference } from 'mercadopago'
import { CartItem } from '../_context/cart'
import { randomUUID } from 'node:crypto'

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
})

export async function createPayment(data: CartItem[]) {
  try {
    const items = data.map(el => {
      return { 
        id: randomUUID(),
        title: el.title,
        unit_price: el.price,
        quantity: el.quantity,
        currency_id: 'BRL',
      }
    })

    const preference = new Preference(client)
    const result = await preference.create({
      body: {
        items,
        shipments: {
          cost: 10
        },
        auto_return: 'approved',
        back_urls: {
          success: 'https://www.google.com',
          failure: 'https://www.google.com',
          pending: 'https://www.google.com'
        },
      },
    })

    return { url: result.init_point }
  } catch (error) {
    return { error: 'Falha na comunicação com Mercado Pago' }
  }
}