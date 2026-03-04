'use client'

import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useCartZustand } from "@/app/_context/cart"
import { useMemo } from "react"

export function FloatingCart() {
    const { cart } = useCartZustand()
    
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
                <div className="flex items-center justify-center size-16 sm:size-20 bg-green-500 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300">
                    <ShoppingCart className="size-8 sm:size-10 text-white stroke-[2.5]" strokeWidth={2.5} />
                </div>

                {/* Badge com contador */}
                <div className="absolute -top-2 -right-2 flex items-center justify-center size-8 bg-yellow-400 rounded-full border-3 border-black shadow-xl">
                    <span className="text-sm font-extrabold text-black">
                        {totalItems > 99 ? '99+' : totalItems}
                    </span>
                </div>
            </div>
        </Link>
    )
}
