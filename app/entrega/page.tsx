"use client"

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useCartZustand } from "../_context/cart";
import { create_payment } from "../actions/create-payment";
import { MoveRight, Package, MapPin, CheckCircle2, ArrowLeft, User } from "lucide-react";
import { Footer } from "../_components/includes/footer";
import { CardPayment, initMercadoPago } from '@mercadopago/sdk-react';

initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY as string);

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { get_tax } from "../actions/get-tax";
import { useTaxZustand } from "../_context/tax";
import { useClientZustand } from "../_context/client";
import { useAddressZustand } from "../_context/address";
import { create_ticket } from "../actions/create-ticket";
import { create_client_google_sheets } from "../actions/create-client-google-sheets";

const zodSchema = z.object({
    name: z.string().min(1),
    email: z.email(),
    phone: z.string().min(11),
    document: z.string().min(11),
    zip_code: z.string().min(8),
    street: z.string().nonempty(),
    number: z.string().nonempty(),
    district: z.string().nonempty(),
    city: z.string().nonempty(),
    state: z.string().nonempty()
})

type ZodSchema = z.infer<typeof zodSchema>

export default function Delivery() {
    const { cart, clearCart, total } = useCartZustand()
    const { data: tax, setTax, clearTax } = useTaxZustand()
    const { data: client, setClient } = useClientZustand()
    const { data: address, setAddress } = useAddressZustand()

    const [showCheckout, setShowCheckout] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<ZodSchema>({
        resolver: zodResolver(zodSchema),
        values: {
            name: client?.name || "",
            email: client?.email || "",
            phone: client?.phone || "",
            document: client?.document || "",
            zip_code: address?.zip_code || "",
            street: address?.street || "",
            number: address?.number || "",
            district: address?.district || "",
            city: address?.city || "",
            state: address?.state || "",
        }
    });

    const handleViaCep = async (e: React.FocusEvent<HTMLInputElement>) => {
        const cep = e.target.value.replace(/\D/g, ''); 

        if (cep.length !== 8) return; 

        clearTax()

        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const data = response.data;

        const { id, delivery_time, price } = await get_tax({zip_code: cep, products: cart})
        setTax({id, delivery_time, price: Number(price)})

        if (!data.erro) {
            setValue("street", data.logradouro, { shouldValidate: true });
            setValue("district", data.bairro, { shouldValidate: true });
            setValue("city", data.localidade, { shouldValidate: true });
            setValue("state", data.uf, { shouldValidate: true });

            document.getElementById("number")?.focus();
        } else {
            console.log("CEP não encontrado");
        }
    };

    const handleForm = async ({ zip_code, street, number, district, city, state, name, email, phone, document }: ZodSchema) => {
        setAddress({
            zip_code,
            street,
            number,
            district,
            city,
            state,
        })

        setClient({
            name, 
            email, 
            phone, 
            document
        })

        if(!tax?.price) return

        window.scrollTo(0, 0)
        setShowCheckout(true)
    }

    const onSubmit = async (paymentData: any) => {
        setIsLoading(true)

        if (!client || !tax) return

        const total_product = total()
        const _total = tax.price + total_product

        const response = await create_payment(_total, client.email, client.document, paymentData)

        console.log(response.status)

        switch(response.status) {
            case 'approved':
                    if(!tax || !client || !address || !cart) return

                    await create_ticket({ tax, client, address, product: cart })
                    await create_client_google_sheets(client.name, client.email, client.phone, address.zip_code, address.street, address.number, address.district, address.city, address.state)
                    clearCart()
                    window.location.href = "/status/sucesso"
                break
            case 'rejected':
                    window.location.href = "/status/falha"
                break
            case 'in_process':
                if(!tax || !client || !address || !cart) return

                await create_ticket({ tax, client, address, product: cart })
                clearCart()
                window.location.href = "/status/pendente"
                break
            default:
                window.location.href = "/status/falha"
        }

        if (!response) {
            setIsLoading(false)
            window.location.href = "/status/falha"
        } else {
            if(!tax || !client || !address || !cart) return

            await create_ticket({ tax, client, address, product: cart })
            clearCart()
            window.location.href = "/status/sucesso"
        }
    }

    return (
        <main className="min-h-dvh text-white bg-black">
            <section className="max-w-7xl m-auto p-4 py-6 sm:py-8 lg:py-16">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 lg:mb-12 gap-4">
                    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
                        Finalize seu <span className="text-yellow-500">Pedido</span>
                    </h1>
                    <Link 
                        href="/pedidos"
                        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="size-4" />
                        <span className="hidden sm:inline">Voltar ao carrinho</span>
                        <span className="sm:hidden">Voltar</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    <form id="main-form" onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
                        {!showCheckout ? (
                            <>
                                <div className="bg-zinc-900 rounded-lg p-4 sm:p-6 border border-zinc-800">
                                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                                        <User className="size-5 sm:size-6 text-yellow-500" />
                                        <h2 className="text-lg sm:text-xl font-bold">Dados Pessoais</h2>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                                                Nome Completo *
                                            </label>
                                            <input 
                                                {...register("name")}
                                                data-invalid={errors.name ? "true" : "false"}
                                                placeholder="João Silva"
                                                className="w-full px-4 py-3 rounded bg-black border border-zinc-700 text-white outline-none focus:border-green-500 transition-colors data-[invalid=true]:border-red-500"
                                                id="name"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                                                E-mail *
                                            </label>
                                            <input 
                                                {...register("email")}
                                                data-invalid={errors.email ? "true" : "false"}
                                                placeholder="joao@email.com"
                                                className="w-full px-4 py-3 rounded bg-black border border-zinc-700 text-white outline-none focus:border-green-500 transition-colors data-[invalid=true]:border-red-500"
                                                id="email" 
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="phone" className="text-sm font-medium text-zinc-300">
                                                    Telefone *
                                                </label>
                                                <input 
                                                    {...register("phone")}
                                                    data-invalid={errors.phone ? "true" : "false"}
                                                    placeholder="(11) 99999-9999"
                                                    maxLength={15}
                                                    className="w-full px-4 py-3 rounded bg-black border border-zinc-700 text-white outline-none focus:border-green-500 transition-colors data-[invalid=true]:border-red-500"
                                                    id="phone" 
                                                />
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="cpf" className="text-sm font-medium text-zinc-300">
                                                    CPF *
                                                </label>
                                                <input 
                                                    {...register("document")}
                                                    data-invalid={errors.document ? "true" : "false"}
                                                    placeholder="000.000.000-00"
                                                    maxLength={14}
                                                    className="w-full px-4 py-3 rounded bg-black border border-zinc-700 text-white outline-none focus:border-green-500 transition-colors data-[invalid=true]:border-red-500"
                                                    id="cpf" 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-zinc-900 rounded-lg p-4 sm:p-6 border border-zinc-800">
                                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                                        <MapPin className="size-5 sm:size-6 text-yellow-500" />
                                        <h2 className="text-lg sm:text-xl font-bold">Endereço de Entrega</h2>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="cep" className="text-sm font-medium text-zinc-300">
                                                CEP *
                                            </label>
                                            <div className="relative">
                                                <input 
                                                    {...register("zip_code")}
                                                    data-invalid={errors.zip_code ? "true" : "false"}
                                                    onChange={handleViaCep}
                                                    placeholder="00000-000"
                                                    className="w-full px-4 py-3 rounded bg-black border border-zinc-700 text-white outline-none focus:border-green-500 transition-colors data-[invalid=true]:border-red-500"
                                                    id="cep" 
                                                />
                                            </div>
                                            <a 
                                                href="https://buscacepinter.correios.com.br/app/endereco/index.php" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-xs text-green-500 hover:underline"
                                            >
                                                Não sei meu CEP
                                            </a>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            <div className="flex flex-col gap-2 sm:col-span-2">
                                                <label htmlFor="street" className="text-sm font-medium text-zinc-300">
                                                    Endereço *
                                                </label>
                                                <input 
                                                    {...register("street")}
                                                    data-invalid={errors.street ? "true" : "false"}
                                                    placeholder="Rua, Avenida..."
                                                    className="w-full px-4 py-3 rounded bg-black border border-zinc-700 text-white outline-none focus:border-green-500 transition-colors data-[invalid=true]:border-red-500"
                                                    id="street" 
                                                />
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="number" className="text-sm font-medium text-zinc-300">
                                                    Número *
                                                </label>
                                                <input 
                                                    {...register("number")}
                                                    data-invalid={errors.number ? "true" : "false"}
                                                    placeholder="123"
                                                    className="w-full px-4 py-3 rounded bg-black border border-zinc-700 text-white outline-none focus:border-green-500 transition-colors data-[invalid=true]:border-red-500"
                                                    id="number" 
                                                />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="district" className="text-sm font-medium text-zinc-300">
                                                Bairro *
                                            </label>
                                            <input 
                                                {...register("district")}
                                                data-invalid={errors.district ? "true" : "false"}
                                                placeholder="Centro"
                                                className="w-full px-4 py-3 rounded bg-black border border-zinc-700 text-white outline-none focus:border-green-500 transition-colors data-[invalid=true]:border-red-500"
                                                id="district" 
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            <div className="flex flex-col gap-2 sm:col-span-2">
                                                <label htmlFor="city" className="text-sm font-medium text-zinc-300">
                                                    Cidade *
                                                </label>
                                                <input 
                                                    {...register("city")}
                                                    data-invalid={errors.city ? "true" : "false"}
                                                    placeholder="São Paulo"
                                                    className="w-full px-4 py-3 rounded bg-black border border-zinc-700 text-white outline-none focus:border-green-500 transition-colors data-[invalid=true]:border-red-500"
                                                    id="city" 
                                                />
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="state" className="text-sm font-medium text-zinc-300">
                                                    UF *
                                                </label>
                                                <input 
                                                    {...register("state")}
                                                    data-invalid={errors.state ? "true" : "false"}
                                                    placeholder="SP"
                                                    className="w-full px-4 py-3 rounded bg-black border border-zinc-700 text-white outline-none focus:border-green-500 transition-colors uppercase data-[invalid=true]:border-red-500"
                                                    id="state" 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="bg-white rounded-lg p-4 sm:p-6 border border-zinc-800">
                                <CardPayment
                                    initialization={{ 
                                        amount: total() + (Number(tax?.price) || 0),
                                        payer: {
                                            email: client?.email,
                                            identification: {
                                                type: 'CPF',
                                                number: client?.document || ""
                                            }
                                        }
                                    }}
                                    onSubmit={onSubmit}
                                    onReady={() => setIsLoading(false)}
                                    onError={(error: any) => console.error(error)}
                                />
                                <button 
                                    onClick={() => setShowCheckout(false)}
                                    className="text-zinc-500 hover:text-zinc-800 text-sm mt-4 w-full text-center transition-colors"
                                >
                                    Voltar e alterar dados de entrega
                                </button>
                            </div>
                        )}
                    </form>

                    <div className="flex flex-col gap-6 lg:gap-8 order-2">
                        <div className="bg-zinc-900 rounded-lg p-4 sm:p-6 border border-zinc-800">
                            <div className="flex items-center gap-3 mb-4 sm:mb-6">
                                <Package className="size-5 sm:size-6 text-yellow-500" />
                                <h2 className="text-lg sm:text-xl font-bold">Resumo do Pedido</h2>
                            </div>

                            <div className="flex flex-col gap-4 mb-6">
                                {cart.map(item => (
                                    <div key={item.id} className="flex gap-4 pb-4 border-b border-zinc-800 last:border-0">
                                        <div 
                                            className="w-20 h-20 rounded bg-cover bg-center bg-no-repeat shrink-0"
                                            style={{ backgroundImage: `url(/t-shirt/${item.color.toLowerCase()}.webp)` }}
                                        />
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <p className="font-semibold">{item.title}</p>
                                                <p className="text-sm text-zinc-400">
                                                    {item.color} • Tamanho {item.size}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-zinc-400">Qtd: {item.quantity}</span>
                                                <span className="font-semibold text-green-500">
                                                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price * item.quantity)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 text-sm mb-6">
                                <div className="flex justify-between text-lg font-bold">
                                    <span>Total</span>
                                    <span className="text-yellow-500">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total() || 0)}</span>
                                </div>
                                <p className="text-xs text-zinc-400">
                                    Frete: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tax?.price || 0)}
                                </p>
                            </div>

                            <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-4 mb-6">
                                <div className="flex gap-3">
                                    <CheckCircle2 className="size-5 text-green-500 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-green-500">Compra Segura</p>
                                        <p className="text-sm text-zinc-400 mt-1">
                                            Pagamento protegido pelo Mercado Pago. Seus dados estão seguros.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {!showCheckout && (
                                <div className="space-y-3">
                                    <button
                                        id="add-payment-info"
                                        form="main-form"
                                        type="submit"
                                        className="w-full cursor-pointer flex items-center justify-center gap-3 bg-green-500 text-white uppercase py-4 rounded font-bold text-center hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-green-500"
                                    >
                                        Ir para o Pagamento
                                        <MoveRight className="size-5" />
                                    </button>

                                    <Link 
                                        href="/pedidos"
                                        className="block text-center text-sm text-zinc-400 hover:text-white transition-colors"
                                    >
                                        Voltar ao carrinho
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
