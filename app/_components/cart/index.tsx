'use client';

import { useState } from 'react';
import { initMercadoPago } from '@mercadopago/sdk-react';
import { useCartZustand } from '@/app/_context/cart';
import { Color, Size } from './enum';

import { toast } from "sonner"

initMercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY!);

export default function Cart() {
  const { addToCart } = useCartZustand()

  const [color, setColor] = useState<Color>(Color.AMARELO)
  const [size, setSize] = useState<Size>(Size.M)

  const handleCart = () => {
    console.log(color)
    console.log(size)

    const item = {
      id: `${color}-${size}-camiseta-do-brasil`,
      title: "Camiseta",
      color,
      size,
      quantity: 1,
      price: 120.00,
    }

    toast.success("Adicionado com sucesso!", {position: "top-center"})

    addToCart(item)
  }

  return (
    <div id="cart" className="h-dvh w-full snap-start">
        <section className="max-w-7xl m-auto px-4 md:px-6 lg:px-8 h-full grid items-center lg:justify-center text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 lg:gap-8 bg-zinc-900 border border-zinc-800 rounded-xl p-3 md:p-5 lg:p-8">
            <div 
              key={color}
              className="aspect-square bg-zinc-800 rounded-lg bg-cover bg-center bg-no-repeat cart-image-fade"
              style={{ backgroundImage: `url(/t-shirt/${color}.webp)` }}
            />

            <div className="flex flex-col gap-3 md:gap-5 lg:gap-8 justify-between">
              <div className='flex gap-3 md:flex-col md:gap-3 lg:gap-8'>
                <h4 className="font-bold text-xs sm:text-sm md:text-2xl lg:text-4xl self-center md:self-start">Camisa Seleção Pro 2026</h4>
                <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-green-500">R$120,00</p>
              </div>

              <span className="w-full h-px bg-white/10 rounded-full" />

              <div className="flex md:flex-col gap-3 md:gap-4">
                <span className="font-bold text-sm md:text-xl lg:text-2xl">Cor</span>

                <div className="flex gap-2 md:gap-3 lg:gap-4">
                  <div className="relative">
                    <input onClick={() => {setColor(Color.AMARELO)}} value="AMARELO" name="color" id="yellow" type="radio" className="peer hidden" defaultChecked />
                    <label 
                      htmlFor="yellow" 
                      className="block size-8 md:size-10 bg-yellow-500 rounded-full cursor-pointer transition-all peer-checked:ring-2 peer-checked:ring-green-500 peer-checked:ring-offset-2 peer-checked:ring-offset-zinc-900" 
                    />
                  </div>

                  <div className="relative">
                    <input onClick={() => {setColor(Color.PRETO)}} value="PRETO" name="color" id="black" type="radio" className="peer hidden" />
                    <label 
                      htmlFor="black" 
                      className="block size-8 md:size-10 bg-black border border-zinc-600 rounded-full cursor-pointer transition-all peer-checked:ring-2 peer-checked:ring-green-500 peer-checked:ring-offset-2 peer-checked:ring-offset-zinc-900" 
                    />
                  </div>

                  <div className="relative">
                    <input onClick={() => {setColor(Color.AZUL)}} value="AZUL" name="color" id="blue" type="radio" className="peer hidden" />
                    <label 
                      htmlFor="blue" 
                      className="block size-8 md:size-10 bg-blue-500 rounded-full cursor-pointer transition-all peer-checked:ring-2 peer-checked:ring-green-500 peer-checked:ring-offset-2 peer-checked:ring-offset-zinc-900" 
                    />
                  </div>
                  
                  <div className="relative">
                    <input onClick={() => {setColor(Color.BRANCO)}} value="BRANCO" name="color" id="white" type="radio" className="peer hidden" />
                    <label 
                      htmlFor="white" 
                      className="block size-8 md:size-10 bg-white rounded-full cursor-pointer transition-all peer-checked:ring-2 peer-checked:ring-green-500 peer-checked:ring-offset-2 peer-checked:ring-offset-zinc-900" 
                    />
                  </div>
                </div>
              </div>

              <div className="flex md:flex-col gap-3 md:gap-4">
                <span className="font-bold text-sm md:text-xl lg:text-2xl">Tamanho</span>

                <div className="grid grid-cols-5 gap-1.5 md:gap-2 lg:gap-4 text-white w-full">
                  <div>
                    <input onClick={() => {setSize(Size.P)}} value="P" type="radio" name="size" id="size-p" className="peer hidden" disabled />
                    <label 
                      htmlFor="size-p" 
                      className="flex w-full items-center justify-center size-8 md:size-10 lg:size-12 border border-solid border-zinc-700 rounded-lg text-center cursor-pointer transition-all peer-checked:border-green-500 peer-checked:bg-green-500 peer-checked:text-white text-zinc-300 peer-disabled:opacity-20"
                    >
                      <span className="uppercase font-bold text-xs md:text-sm">P</span>
                    </label>
                  </div>

                  <div>
                    <input onClick={() => {setSize(Size.M)}} value="M" type="radio" name="size" id="size-m" className="peer hidden" defaultChecked />
                    <label 
                      htmlFor="size-m" 
                      className="flex w-full items-center justify-center size-8 md:size-10 lg:size-12 border border-solid border-zinc-700 rounded-lg text-center cursor-pointer transition-all peer-checked:border-green-500 peer-checked:bg-green-500 peer-checked:text-white text-zinc-300 peer-disabled:opacity-20"
                    >
                      <span className="uppercase font-bold text-xs md:text-sm">M</span>
                    </label>
                  </div>

                  <div>
                    <input onClick={() => {setSize(Size.G)}} value="G" type="radio" name="size" id="size-g" className="peer hidden" />
                    <label 
                      htmlFor="size-g" 
                      className="flex w-full items-center justify-center size-8 md:size-10 lg:size-12 border border-solid border-zinc-700 rounded-lg text-center cursor-pointer transition-all peer-checked:border-green-500 peer-checked:bg-green-500 peer-checked:text-white text-zinc-300 peer-disabled:opacity-20"
                    >
                      <span className="uppercase font-bold text-xs md:text-sm">G</span>
                    </label>
                  </div>

                  <div>
                    <input onClick={() => {setSize(Size.GG)}} value="GG" type="radio" name="size" id="size-gg" className="peer hidden" disabled />
                    <label 
                      htmlFor="size-gg" 
                      className="flex w-full items-center justify-center size-8 md:size-10 lg:size-12 border border-solid border-zinc-700 rounded-lg text-center cursor-pointer transition-all peer-checked:border-green-500 peer-checked:bg-green-500 peer-checked:text-white text-zinc-300 peer-disabled:opacity-20"
                    >
                      <span className="uppercase font-bold text-xs md:text-sm">GG</span>
                    </label>
                  </div>

                  <div>
                    <input onClick={() => {setSize(Size.XG)}} type="radio" name="size" id="size-xg" className="peer hidden" disabled />
                    <label 
                      htmlFor="size-xg" 
                      className="flex w-full items-center justify-center size-8 md:size-10 lg:size-12 border border-solid border-zinc-700 rounded-lg text-center cursor-pointer transition-all peer-checked:border-green-500 peer-checked:bg-green-500 peer-checked:text-white text-zinc-300 peer-disabled:opacity-20"
                    >
                      <span className="uppercase font-bold text-xs md:text-sm">XG</span>
                    </label>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleCart} 
                className="btn-ripple w-full cursor-pointer uppercase font-bold text-xs sm:text-sm md:text-base text-center bg-green-500 text-white px-4 py-2.5 md:py-3 lg:py-4 rounded-lg hover:bg-green-600 transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </section>
      </div>
  );
}