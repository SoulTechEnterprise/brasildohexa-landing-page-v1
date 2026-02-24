import { Droplet, Shield, Shirt, Timer } from "lucide-react";
import { Card } from "./_components/card";

import Link from "next/link"

export default function Home() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth text-white bg-black">
      
      <div className="relative h-screen w-full snap-start overflow-hidden">
        <div className="absolute inset-0 z-20 bg-black/90" />

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute z-10 inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <section className="relative max-w-7xl m-auto p-4 h-full grid grid-cols-2 gap-4 items-center justify-center z-30">
          <div className="flex flex-col gap-4 items-start">
            <div className="flex px-4 py-2 border border-solid border-green-500 bg-yellow-500/10 items-center gap-2 rounded-full">
              <span className="size-4 bg-yellow-500 rounded-full" />
              <p className="uppercase font-bold text-sm">Edição Oficial 2026</p>
            </div>

            <h1 className="text-7xl font-bold">O Manto do Hexa: <span className="text-yellow-500">Vista a Paixão Nacional</span></h1>

            <p>Entre em campo com estilo e garanta a camisa que une tecnologia de ponta e a tradição do futebol mais vitorioso do mundo.</p>
          </div>

          <div className="aspect-square w-full relative bg-[url('/hero.png')] bg-contain bg-center bg-no-repeat" />
        </section>
      </div>

      <div className="relative h-screen w-full snap-start overflow-hidden">
        <div className="absolute inset-0 z-20 bg-black/90" />
        <div className="absolute inset-0 z-10 bg-[url('/stadio.png')] bg-cover bg-center bg-no-repeat" />

        <section className="relative z-30 max-w-7xl m-auto p-4 h-full flex flex-col gap-4 items-center justify-center text-center">
          <h2 className="text-7xl font-bold max-w-3xl">Mais Que Uma Camisa. Um Sentimento.</h2>
          <p>Sinta a vibração de milhões de corações batendo em um só ritmo.</p>
        </section>
      </div>

      <div className="relative h-screen w-full snap-start bg-green-500/10 overflow-hidden">
        <section className="max-w-7xl m-auto p-4 h-full flex flex-col items-center justify-center gap-16">
          <div className="flex flex-col gap-5 text-center">
            <span className="uppercase font-bold text-green-500">Especificações Técnicas</span>
            <h2 className="text-7xl font-bold">Tecnologia e Paixão em Cada Detalhe</h2>
            <p>Desenvolvida para torcedores exigentes que não abrem mão de qualidade, performance e conforto absoluto.</p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <Card
              icon={Droplet}
              title="Dry-Fit Premium"
              desc="Tecnologia de evaporação avançada que mantém o corpo seco e ventilado, ideal para o clima tropical brasileiro."
            />

            <Card
              icon={Shield}
              title="Escudo Bordado"
              desc="Acabamento de luxo com o brasão oficial em alta definição e fios dourados resistêntes a lavagens."
            />

            <Card
              icon={Shirt}
              title="Caimento Perfeito"
              desc="Modelagem anatômica que valoriza o corpo sem apertar, garantindo liberdade total de movimentos na hora do gol."
            />
          </div>
        </section>
      </div>

      <div className="relative h-screen w-full snap-start">
        <section className="grid grid-cols-2 gap-16 max-w-7xl m-auto p-4 items-center justify-center h-full">
          <div className="aspect-square border border-solid border-white rounded bg-[url('/history.png')] bg-contain bg-center bg-no-repeat" />

          <div className="flex flex-col gap-8">
            <h2 className="font-bold text-7xl">A Camisa Que Carrega História</h2>
            <p className="text-zinc-400">Não é apenas tecido. São cinco estrelas conquistadas com suor, talento e a ginga que só o brasileiro tem. Ao vestir este manto, você carrega o legado de Pelé, Ronaldo, Romário e tantos outros gigantes.</p>

            <div className="w-full h-px bg-white rounded-full" />

            <div className="flex gap-8">
              <div className="flex flex-col gap-2">
                <h4 className="text-yellow-500 font-bold text-4xl">5</h4>
                <p className="text-zinc-400">Títulos Mundiais</p>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="text-yellow-500 font-bold text-4xl">220M</h4>
                <p className="text-zinc-400">Corações Apaixonados</p>
              </div>
            </div>
          </div>
        </section>

        <div className="absolute bottom-0 left-0 w-screen p-8 bg-yellow-500">
          <div className="max-w-7xl m-auto flex items-center justify-center gap-16 text-black">
            <div className="flex gap-4 items-center">
              <Timer className="fill-black size-8" />
              <h4 className="uppercase font-bold">Edição Limitada da Copa</h4>
            </div>

            <span className="size-2 bg-black rounded-full" />

            <p>Restam poucas unidades do lote atual. Garanta antes que acabe.</p>
          </div>
        </div>
      </div>

      <div className="h-screen w-full snap-start">
        <section className="max-w-7xl m-auto p-4 h-full grid items-center text-black">
          <div className="grid grid-cols-2 gap-8 bg-zinc-100 rounded p-8">
            <div className="flex flex-col gap-8">
              <div className="aspect-square bg-black rounded" />

              <div className="grid grid-cols-3 gap-8">
                <div className="aspect-square bg-black rounded" />
                <div className="aspect-square bg-black rounded" />
                <div className="aspect-square bg-black rounded" />
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <h4 className="font-bold text-4xl">Camisa Seleção Pro 2026</h4>
              <div className="flex gap-8 items-center">
                <p className="text-4xl font-bold text-green-500">R$120,00</p>
                <span className="size-2 bg-black rounded-full" />
                <p className="text-4xl text-zinc-500 line-through">R$170,00</p>
              </div>

              <span className="w-full h-px bg-black rounded-full" />

              <div className="flex flex-col gap-4">
                <span className="font-bold text-2xl">Cor</span>

                <div className="flex gap-4">
                  <div className="relative">
                    <input name="color" id="yellow" type="radio" className="peer hidden" defaultChecked />
                    <label 
                      htmlFor="yellow" 
                      className="block size-8 bg-yellow-500 rounded-full cursor-pointer transition-all peer-checked:ring-2 peer-checked:ring-green-500 peer-checked:ring-offset-2" 
                    />
                  </div>

                  <div className="relative">
                    <input name="color" id="black" type="radio" className="peer hidden" />
                    <label 
                      htmlFor="black" 
                      className="block size-8 bg-black border border-black rounded-full cursor-pointer transition-all peer-checked:ring-2 peer-checked:ring-green-500 peer-checked:ring-offset-2" 
                    />
                  </div>

                  <div className="relative">
                    <input name="color" id="green" type="radio" className="peer hidden" />
                    <label 
                      htmlFor="green" 
                      className="block size-8 bg-green-500 rounded-full cursor-pointer transition-all peer-checked:ring-2 peer-checked:ring-green-500 peer-checked:ring-offset-2" 
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="font-bold text-2xl">Tamanho</span>

                <div className="grid grid-cols-6 gap-4 text-white">
                  <div>
                    <input type="radio" name="size" id="size-p" className="peer hidden" defaultChecked />
                    <label 
                      htmlFor="size-p" 
                      className="block px-4 py-2 border border-solid border-black rounded text-center cursor-pointer transition-all peer-checked:border-green-200 peer-checked:bg-green-500 peer-checked:text-white text-black"
                    >
                      <span className="uppercase font-bold">P</span>
                    </label>
                  </div>

                  <div>
                    <input type="radio" name="size" id="size-m" className="peer hidden" />
                    <label 
                      htmlFor="size-m" 
                      className="block px-4 py-2 border border-solid border-black rounded text-center cursor-pointer transition-all peer-checked:border-green-200 peer-checked:bg-green-500 peer-checked:text-white text-black"
                    >
                      <span className="uppercase font-bold">M</span>
                    </label>
                  </div>

                  <div>
                    <input type="radio" name="size" id="size-g" className="peer hidden" />
                    <label 
                      htmlFor="size-g" 
                      className="block px-4 py-2 border border-solid border-black rounded text-center cursor-pointer transition-all peer-checked:border-green-200 peer-checked:bg-green-500 peer-checked:text-white text-black"
                    >
                      <span className="uppercase font-bold">G</span>
                    </label>
                  </div>

                  <div>
                    <input type="radio" name="size" id="size-gg" className="peer hidden" />
                    <label 
                      htmlFor="size-gg" 
                      className="block px-4 py-2 border border-solid border-black rounded text-center cursor-pointer transition-all peer-checked:border-green-200 peer-checked:bg-green-500 peer-checked:text-white text-black"
                    >
                      <span className="uppercase font-bold">GG</span>
                    </label>
                  </div>

                  <div>
                    <input type="radio" name="size" id="size-xg" className="peer hidden" />
                    <label 
                      htmlFor="size-xg" 
                      className="block px-4 py-2 border border-solid border-black rounded text-center cursor-pointer transition-all peer-checked:border-green-200 peer-checked:bg-green-500 peer-checked:text-white text-black"
                    >
                      <span className="uppercase font-bold">XG</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button className="cursor-pointer uppercase font-bold text-center border border-solid border-green-500 px-2 py-4 rounded">Adicionar no Carrinho</button>
                <Link className="uppercase font-bold text-center bg-green-500 px-2 py-4 rounded text-white" href="">Comprar</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}