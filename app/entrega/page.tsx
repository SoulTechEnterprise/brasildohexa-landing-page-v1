"use client"

import axios from "axios";
import Link from "next/link";
import { useState, useMemo } from "react";
import { useCartStore } from "../_context/cart";
import { createPayment } from "../actions/mercadopago";
import { MoveRight, Package, MapPin, CheckCircle2, Search, ArrowLeft } from "lucide-react";

export default function Delivery() {
    const cart = useCartStore(el => el.cart)

    const [CEP, setCEP] = useState<string>("")
    const [street, setStreet] = useState<string>("")
    const [number, setNumber] = useState<string>("")
    const [district, setDistrict] = useState<string>("")
    const [city, setCity] = useState<string>("")
    const [state, setState] = useState<string>("")
    const [isLoadingCEP, setIsLoadingCEP] = useState(false)
    const [cepError, setCepError] = useState(false)

    const getAddress = async (cep: string) => {
        const cleanCEP = cep.replace(/\D/g, '')
        if(cleanCEP.length === 8) {
            setIsLoadingCEP(true)
            setCepError(false)
            try {
                const response = await axios.get(`https://viacep.com.br/ws/${cleanCEP}/json/`)
                const data = await response.data
                
                if (data.erro) {
                    setCepError(true)
                } else {
                    setStreet(data.logradouro || "")
                    setDistrict(data.bairro || "")
                    setCity(data.localidade || "")
                    setState(data.uf || "")
                }
            } catch (error) {
                setCepError(true)
            } finally {
                setIsLoadingCEP(false)
            }
        }
    }

    const [isLoading, setIsLoading] = useState(false)

    const subtotal = useMemo(() => {
        return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    }, [cart])

    const isFormValid = CEP.length >= 8 && street && number && district && city && state

    const handlePayment = async () => {
        if (cart.length === 0 || !isFormValid) return

        setIsLoading(true)

        const address = {
            cep: CEP,
            street,
            number,
            district,
            city,
            state
        }
        
        const response = await createPayment(cart, address)

        if (response.url) {
            window.location.href = response.url
        } else {
            setIsLoading(false)
        }
    }

    const formatCEP = (value: string) => {
        const cleaned = value.replace(/\D/g, '')
        if (cleaned.length <= 5) return cleaned
        return `${cleaned.slice(0, 5)}-${cleaned.slice(5, 8)}`
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
                    {/* Resumo do Pedido */}
                    <div className="flex flex-col gap-4 lg:gap-6 order-2 lg:order-1">
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
                                            style={{ backgroundImage: `url(/t-shirt/${item.color.toLowerCase()}.jpeg)` }}
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

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between text-lg font-bold">
                                    <span>Total</span>
                                    <span className="text-yellow-500">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(subtotal)}</span>
                                </div>
                                <p className="text-xs text-zinc-400">
                                    Frete calculado na próxima etapa
                                </p>
                            </div>
                        </div>

                        <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-4">
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
                    </div>

                    <div className="bg-zinc-900 rounded-lg p-4 sm:p-6 border border-zinc-800 order-1 lg:order-2">
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
                                        required 
                                        value={CEP} 
                                        onChange={(e) => {
                                            const formatted = formatCEP(e.target.value)
                                            setCEP(formatted)
                                            getAddress(formatted)
                                        }} 
                                        placeholder="00000-000"
                                        maxLength={9}
                                        className={`w-full px-4 py-3 rounded bg-black border ${cepError ? 'border-red-500' : 'border-zinc-700'} text-white outline-none focus:border-green-500 transition-colors`}
                                        id="cep" 
                                    />
                                    {isLoadingCEP && (
                                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-5 text-zinc-400 animate-pulse" />
                                    )}
                                </div>
                                {cepError && (
                                    <span className="text-xs text-red-500">CEP não encontrado</span>
                                )}
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
                                        required 
                                        value={street} 
                                        onChange={(e) => setStreet(e.target.value)} 
                                        placeholder="Rua, Avenida..."
                                        className="w-full px-4 py-3 rounded bg-black border border-zinc-700 text-white outline-none focus:border-green-500 transition-colors"
                                        id="street" 
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="number" className="text-sm font-medium text-zinc-300">
                                        Número *
                                    </label>
                                    <input 
                                        required 
                                        value={number} 
                                        onChange={(e) => setNumber(e.target.value)} 
                                        placeholder="123"
                                        className="w-full px-4 py-3 rounded bg-black border border-zinc-700 text-white outline-none focus:border-green-500 transition-colors"
                                        id="number" 
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="district" className="text-sm font-medium text-zinc-300">
                                    Bairro *
                                </label>
                                <input 
                                    required 
                                    value={district} 
                                    onChange={(e) => setDistrict(e.target.value)} 
                                    placeholder="Centro"
                                    className="w-full px-4 py-3 rounded bg-black border border-zinc-700 text-white outline-none focus:border-green-500 transition-colors"
                                    id="district" 
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="flex flex-col gap-2 sm:col-span-2">
                                    <label htmlFor="city" className="text-sm font-medium text-zinc-300">
                                        Cidade *
                                    </label>
                                    <input 
                                        required 
                                        value={city} 
                                        onChange={(e) => setCity(e.target.value)} 
                                        placeholder="São Paulo"
                                        className="w-full px-4 py-3 rounded bg-black border border-zinc-700 text-white outline-none focus:border-green-500 transition-colors"
                                        id="city" 
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="state" className="text-sm font-medium text-zinc-300">
                                        UF *
                                    </label>
                                    <input 
                                        required 
                                        value={state} 
                                        onChange={(e) => setState(e.target.value.toUpperCase())} 
                                        placeholder="SP"
                                        maxLength={2}
                                        className="w-full px-4 py-3 rounded bg-black border border-zinc-700 text-white outline-none focus:border-green-500 transition-colors uppercase"
                                        id="state" 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 space-y-3">
                            <button
                                onClick={handlePayment}
                                disabled={isLoading || !isFormValid || cart.length === 0}
                                className="w-full cursor-pointer flex items-center justify-center gap-3 bg-green-500 text-white uppercase py-4 rounded font-bold text-center hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-green-500"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Redirecionando...
                                    </>
                                ) : (
                                    <>
                                        Finalizar Pagamento
                                        <MoveRight className="size-5" />
                                    </>
                                )}
                            </button>

                            <Link 
                                href="/pedidos"
                                className="block text-center text-sm text-zinc-400 hover:text-white transition-colors"
                            >
                                Voltar ao carrinho
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}