"use client"

import { Minus, Plus, Trash, ShoppingBag, ArrowLeft } from "lucide-react"
import { useCartStore } from "../_context/cart"
import { useMemo } from "react"

import Link from "next/link"

export default function Cart() {
  const cart = useCartStore(el => el.cart)
  const { increaseQuantity, decreaseQuantity, removeItem } = useCartStore();

  const subtotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  }, [cart])

  const totalItems = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0)
  }, [cart])

    return (
        <main className="min-h-dvh text-white bg-black">
            <section className="max-w-4xl m-auto p-4 py-6 sm:py-8 lg:py-16">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 lg:mb-12 gap-4">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
                  Seu <span className="text-yellow-500">Carrinho</span>
                </h1>
                <Link 
                  href="/"
                  className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  <ArrowLeft className="size-4" />
                  <span className="hidden sm:inline">Continuar comprando</span>
                  <span className="sm:hidden">Voltar</span>
                </Link>
              </div>

              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center">
                  <ShoppingBag className="size-16 sm:size-20 text-zinc-700 mb-4" />
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">Seu carrinho está vazio</h2>
                  <p className="text-zinc-400 mb-6 text-sm sm:text-base">Adicione produtos para continuar</p>
                  <Link 
                    href="/"
                    className="bg-green-500 text-white px-6 py-3 rounded font-bold hover:bg-green-600 transition-colors text-sm sm:text-base"
                  >
                    Ver Produtos
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Lista de Produtos */}
                  <div className="lg:col-span-2 flex flex-col gap-4">
                    {cart.map(el => (
                      <div key={el.id} className="bg-zinc-900 rounded-lg p-3 sm:p-4 border border-zinc-800 hover:border-zinc-700 transition-colors">
                        <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] gap-3 sm:gap-4">
                          <div 
                            className="w-full aspect-square bg-black rounded bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(/t-shirt/${el.color.toLowerCase()}.jpeg)` }}
                          />

                          <div className="flex flex-col justify-between gap-2 sm:gap-0">
                            <div>
                              <div className="flex justify-between items-start mb-1 sm:mb-2">
                                <div>
                                  <p className="font-bold text-base sm:text-lg">{el.title}</p>
                                  <p className="text-xs sm:text-sm text-zinc-400">
                                    {el.color} • Tamanho {el.size}
                                  </p>
                                </div>
                                <button 
                                  onClick={() => removeItem(el.id)} 
                                  className="flex items-center justify-center hover:bg-red-500/10 border border-zinc-700 hover:border-red-500 rounded size-7 sm:size-8 cursor-pointer transition-colors group ml-2"
                                  title="Remover item"
                                >
                                  <Trash className="size-3 sm:size-4 text-zinc-400 group-hover:text-red-500 transition-colors" />
                                </button>
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex gap-1 sm:gap-2 items-center bg-black border border-zinc-700 rounded">
                                <button 
                                  onClick={() => decreaseQuantity(el.id)} 
                                  className="px-2 sm:px-3 py-1.5 sm:py-2 cursor-pointer hover:bg-zinc-800 transition-colors"
                                  title="Diminuir quantidade"
                                >
                                  <Minus className="size-3 sm:size-4" />
                                </button>
                                <span className="font-bold px-1 sm:px-2 min-w-8 text-center text-sm sm:text-base">{el.quantity}</span>
                                <button 
                                  onClick={() => increaseQuantity(el.id)} 
                                  className="px-2 sm:px-3 py-1.5 sm:py-2 cursor-pointer hover:bg-zinc-800 transition-colors"
                                  title="Aumentar quantidade"
                                >
                                  <Plus className="size-3 sm:size-4" />
                                </button>
                              </div>

                              <p className="font-bold text-base sm:text-xl text-green-500">
                                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(el.price * el.quantity)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Resumo do Pedido */}
                  <div className="lg:col-span-1">
                    <div className="bg-zinc-900 rounded-lg p-4 sm:p-6 border border-zinc-800 lg:sticky lg:top-4">
                      <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Resumo</h2>

                      <div className="space-y-3 mb-4 sm:mb-6">
                        <div className="flex justify-between text-sm sm:text-base text-zinc-400">
                          <span>{totalItems} {totalItems === 1 ? 'item' : 'itens'}</span>
                          <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(subtotal)}</span>
                        </div>
                        
                        <div className="pt-3 border-t border-zinc-800">
                          <div className="flex justify-between text-base sm:text-lg font-bold">
                            <span>Subtotal</span>
                            <span className="text-yellow-500">
                              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(subtotal)}
                            </span>
                          </div>
                          <p className="text-xs text-zinc-400 mt-2">
                            Frete calculado na próxima etapa
                          </p>
                        </div>
                      </div>

                      <Link 
                        className="block w-full uppercase font-bold text-center bg-green-500 px-4 py-3 sm:py-4 rounded text-white cursor-pointer hover:bg-green-600 transition-colors text-sm sm:text-base" 
                        href="/entrega"
                      >
                        Continuar
                      </Link>

                      <Link 
                        href="/"
                        className="block text-center text-sm text-zinc-400 hover:text-white transition-colors mt-4"
                      >
                        Adicionar mais produtos
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </section>
        </main>
    )
}