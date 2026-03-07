'use server'

import { MercadoPagoConfig, Payment } from 'mercadopago'

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
})

export async function create_payment(
  amount: number,
  email: string,
  document: string,
  paymentData: any 
) {
  const payment = new Payment(client)

  const result = await payment.create({
    body: {
      transaction_amount: amount,
      token: paymentData.token,
      description: "",
      installments: paymentData.installments,
      payment_method_id: paymentData.payment_method_id,
      issuer_id: paymentData.issuer_id,
      payer: {
        email: email,
        identification: {
          type: 'CPF',
          number: document
        }
      }
    }
  })

  return { 
    status: result.status, 
    id: result.id,
    detail: result.status_detail 
  }
}