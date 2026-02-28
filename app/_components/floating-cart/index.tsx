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
                <div className="flex items-center justify-center size-14 sm:size-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 group-hover:shadow-xl group-hover:shadow-green-500/50">
                    <ShoppingCart className="size-6 sm:size-7 text-white" />
                </div>

                {/* Badge com contador */}
                <div className="absolute -top-2 -right-2 flex items-center justify-center min-w-6 h-6 px-2 bg-yellow-500 rounded-full border-2 border-black shadow-lg animate-pulse">
                    <span className="text-xs font-bold text-black">
                        {totalItems > 99 ? '99+' : totalItems}
                    </span>
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-zinc-900 text-white text-sm font-semibold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-zinc-800">
                    Ver Carrinho
                    <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900"></div>
                </div>
            </div>
        </Link>
    )
}
