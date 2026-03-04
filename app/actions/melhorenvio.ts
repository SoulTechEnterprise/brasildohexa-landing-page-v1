'use server'

import axios from "axios"


export async function createTicket({id}: {id: string}) {
  const { data } = await axios.get(`${process.env.MERCADO_PAGO_API_URL}/payments/${id}`, {
      headers: {
        authorization: `Bearer ${process.env.MERCADO_PAGO_API_TOKEN}`
      }
    })

    const payload = {
      service: data.metadata.cheapest.id,
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
        name: data.metadata.personal.name, 
        email: data.metadata.personal.email,
        phone: data.metadata.personal.phone,
        document: data.metadata.personal.document,
        address: data.metadata.address.street,
        number: data.metadata.address.number,
        district: data.metadata.address.district,
        city: data.metadata.address.city,
        postal_code: data.metadata.address.cep.replace(/\D/g, ""),
        state_abbr: data.metadata.address.state
      },
      products: data.metadata.products.map((p: any) => ({
        name: p.name || data.description,
        quantity: p.quantity || 1,
        unitary_value: p.price || data.transaction_amount
      })),
      volumes: data.metadata.cheapest.packages.map((v: any) => ({
        height: v.dimensions.height,
        width: v.dimensions.width,
        length: v.dimensions.length,
        weight: v.weight
      })),
      options: {
        platform: "Brasil do Hexa",
        insurance_value: 50,
        receipt: false,
        own_hand: false,
        reverse: false
      }
    }


    await axios.post(`${process.env.MELHOR_ENVIO_API_URL}/me/cart`, payload, {
      headers: {
        authorization: `Bearer ${process.env.MELHOR_ENVIO_API_TOKEN}`
      }
    })

    return data
}