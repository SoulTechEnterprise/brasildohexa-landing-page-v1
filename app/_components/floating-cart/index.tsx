'use client'

import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useCartStore } from "@/app/_context/cart"
import { useMemo } from "react"

export function FloatingCart() {
    const cart = useCartStore(state => state.cart)
    
    const totalItems = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }, [cart])

    if (totalItems === 0) return null

    return (
        <Link 
            href="/pedidos"
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Ver carrinho"
        >
            <div className="relative">
                {/* Botão do carrinho */}
                <div className="flex items-center justify-center size-16 sm:size-20 bg-green-500 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 ring-4 ring-green-500/30 hover:ring-green-400/50">
                    <ShoppingCart className="size-8 sm:size-10 text-white stroke-[2.5]" strokeWidth={2.5} />
                </div>

                {/* Badge com contador */}
                <div className="absolute -top-2 -right-2 flex items-center justify-center min-w-7 h-7 px-2.5 bg-yellow-400 rounded-full border-3 border-black shadow-xl animate-pulse">
                    <span className="text-sm font-extrabold text-black">
                        {totalItems > 99 ? '99+' : totalItems}
                    </span>
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-white text-black text-sm font-bold rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border-2 border-green-500">
                    Ver Carrinho
                    <div className="absolute top-full right-6 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-white"></div>
                </div>
            </div>
        </Link>
    )
}
