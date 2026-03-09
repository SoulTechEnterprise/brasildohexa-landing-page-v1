'use server'

import axios from "axios"

export async function create_client_google_sheets(
  name: string,
  email: string,
  phone: string,
  zip_code: string,
  street: string,
  number: string,
  district: string,
  city: string,
  state: string
) {
  await axios.post("https://aly-n8n.soultech.agency/webhook/9837c327-f2cf-476c-b318-98d5dfc67866", {
    name,
    email,
    phone,
    zip_code,
    street,
    number,
    district,
    city,
    state
  }, {})
}