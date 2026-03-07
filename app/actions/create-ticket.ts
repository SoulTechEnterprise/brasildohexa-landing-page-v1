'use server'

import axios from "axios"
import { ITax } from "../_context/tax"
import { IClient } from "../_context/client"
import { IAddress } from "../_context/address"
import { ICart } from "../_context/cart"

interface _create_ticket {
    tax: ITax
    client: IClient
    address: IAddress
    product: ICart[]
}

export async function create_ticket({ tax, client, address, product }: _create_ticket) {
    const totalItems = product.reduce((acc, p) => acc + p.quantity, 0);

    const payload = {
      service: tax.id,
      from: {
        name: "Alberto Rossi Pinto Nogueira",
        email: "betorossi2001@gmail.com",
        phone: "14998322510",
        document: "50848592824",
        address: "Rua José Monteiro de Mello",
        number: "150",
        district: "Bairro Gleba Palhano",
        city: "Londrina",
        postal_code: "86050430",
        state_abbr: "PR"
      },
      to: {
        name: client.name, 
        email: client.email,
        phone: client.phone,
        document: client.document,
        address: address.street,
        number: address.number,
        district: address.district,
        city: address.city,
        postal_code: address.zip_code,
        state_abbr: address.state
      },
      products: product.map((p: ICart) => ({
        name: p.title,
        quantity: p.quantity,
        unitary_value: p.price
      })),
      volumes: [
            {
                height: 20,
                width: 20,
                length: 16 + (totalItems * 2),
                weight: totalItems * 0.3
            }
        ],
      options: {
        platform: "Brasil do Hexa",
        insurance_value: 50.0,
        receipt: false,
        own_hand: false,
        reverse: false
      }
    }

    await axios.post(`https://${process.env.NODE_ENV === "development" ? "sandbox.melhorenvio.com.br" : "melhorenvio.com.br"}/api/v2/me/cart`, payload, {
        headers: {
            authorization: `Bearer ${process.env.MELHOR_ENVIO_API_TOKEN}`
        }
    })
}