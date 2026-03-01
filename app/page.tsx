import { Droplet, Shield, Shirt, Timer } from "lucide-react";
import { Card } from "./_components/card";
import { Footer } from "./_components/includes/footer";

import Cart from "./_components/cart";

export default function Home() {
  return (
    <main className="w-full overflow-y-scroll snap-y snap-proximity scroll-smooth text-white bg-black">
      
      <div className="relative h-dvh w-full snap-start overflow-hidden">
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

        <section className="relative max-w-7xl m-auto p-4 h-full grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center z-30">
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <div className="flex px-4 py-2 border border-solid border-green-500 bg-yellow-500/10 items-center gap-2 rounded-full">
              <span className="size-4 bg-yellow-500 rounded-full" />
              <p className="uppercase font-bold text-xs lg:text-sm">Edição Oficial 2026</p>
            </div>

            <h1 className="text-4xl text-center lg:text-left lg:text-7xl font-bold">O Manto do Hexa: <span className="text-yellow-500">Vista a Paixão Nacional</span></h1>

            <p className="text-center lg:text-left">Entre em campo com estilo e garanta a camisa que une tecnologia de ponta e a tradição do futebol mais vitorioso do mundo.</p>
          </div>

          <div className="hidden lg:flex aspect-square w-full relative bg-[url('/hero.png')] bg-contain bg-center bg-no-repeat" />
        </section>
      </div>

      <div className="relative h-dvh w-full snap-start overflow-hidden">
        <div className="absolute inset-0 z-20 bg-black/90" />
        <div className="absolute inset-0 z-10 bg-[url('/stadio.png')] bg-cover bg-center bg-no-repeat" />

        <section className="relative z-30 max-w-7xl m-auto p-4 h-full flex flex-col gap-4 items-center justify-center text-center">
          <h2 className="text-4xl lg:text-7xl font-bold max-w-3xl">Mais que uma camisa. Um sentimento.</h2>
          <p>Sinta a vibração de milhões de corações batendo em um só ritmo.</p>
        </section>
      </div>

      <div className="relative h-dvh w-full snap-start bg-green-500/10 overflow-hidden">
        <section className="max-w-7xl m-auto p-4 h-full flex flex-col items-center justify-center gap-8 lg:gap-16">
          <div className="flex flex-col gap-5 text-center">
            <span className="hidden lg:flex uppercase font-bold text-green-500 text-base">Especificações Técnicas</span>
            <h2 className="text-4xl lg:text-7xl font-bold">Tecnologia e Paixão em Cada Detalhe</h2>
            <p className="hidden lg:flex">Desenvolvida para torcedores exigentes que não abrem mão de qualidade, performance e conforto absoluto.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
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

      <div className="relative h-dvh w-full snap-start">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl m-auto p-4 items-center justify-center h-full">
          <div className="hidden lg:flex aspect-square border border-solid border-white rounded bg-[url('/history.webp')] bg-contain bg-center bg-no-repeat" />

          <div className="flex flex-col gap-8 text-center lg:text-left">
            <h2 className="font-bold text-4xl lg:text-7xl">A camisa que carrega história</h2>
            <p className="text-zinc-400">Não é apenas tecido. São cinco estrelas conquistadas com suor, talento e a ginga que só o brasileiro tem. Ao vestir este manto, você carrega o legado de Pelé, Ronaldo, Romário e tantos outros gigantes.</p>

            <div className="w-full h-px bg-white rounded-full" />

            <div className="flex gap-8 justify-center lg:justify-start">
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

        <div className="absolute bottom-0 left-0 w-screen p-4 bg-yellow-500">
          <div className="max-w-7xl m-auto flex items-center justify-center gap-8 lg:gap-16 text-black">
            <div className="flex gap-4 items-center">
              <Timer className="fill-black size-8" />
              <h4 className="uppercase font-bold">Edição Limitada da Copa</h4>
            </div>

            <span className="hidden lg:flex size-2 bg-black rounded-full" />

            <p className="hidden lg:flex">Restam poucas unidades do lote atual. Garanta antes que acabe.</p>
          </div>
        </div>
      </div>

      <Cart />
      <Footer />
    </main>
  );
}