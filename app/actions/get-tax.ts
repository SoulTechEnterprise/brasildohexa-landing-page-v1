'use server'

import axios from "axios"
import { CartItem } from "../_context/cart"

export interface _get_tax { 
    zip_code: string
    products: CartItem[]
}

export async function get_tax({zip_code, products}: _get_tax) {
    const productsForShipping = products.map(el => {
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

    const { data } = await axios.post(`${process.env.MELHOR_ENVIO_API_URL}/me/shipment/calculate`, {
      "from": {
        "postal_code": "96020360"
      },
      "to": {
        "postal_code": zip_code
      },
      "products": productsForShipping
    }, {
      headers: {
        authorization: `Bearer ${process.env.MELHOR_ENVIO_API_TOKEN}`
      }
    })
    
    const cheapest = data
    .filter((el: any) => el.price && el.company?.name === 'Correios')
    .reduce((prev: any, curr: any) => {
    return (Number(curr.price) < Number(prev.price)) ? curr : prev
    })

    return cheapest
}