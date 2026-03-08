import { Droplet, Shield, Shirt, Timer, ChevronDown } from "lucide-react";
import { Card } from "./_components/card";
import { Footer } from "./_components/includes/footer";
import { PageEffects } from "./_components/page-effects";
import { CountdownTimer } from "./_components/countdown";
import { ScrollToButton } from "./_components/scroll-to-button";

import Cart from "./_components/cart";

const testimonials = [
  {
    name: "Rafael M.",
    location: "São Paulo, SP",
    text: "Qualidade absurda! O tecido é muito confortável e o acabamento é impecável. Melhor camisa que já comprei.",
  },
  {
    name: "Camila S.",
    location: "Rio de Janeiro, RJ",
    text: "Chegou super rápido e a camisa ficou perfeita. Meu marido amou o presente! Já quero comprar outra cor.",
  },
  {
    name: "Lucas P.",
    location: "Belo Horizonte, MG",
    text: "O caimento é perfeito, nem parece camisa de torcedor. Usei no jogo e recebi vários elogios. Recomendo demais!",
  },
];

export default function Home() {
  return (
    <main className="w-full h-dvh overflow-y-auto snap-y snap-mandatory text-white bg-black">
      <PageEffects />

      <div id="hero" className="relative h-dvh w-full snap-start overflow-hidden">
        <div className="absolute inset-0 z-20 bg-linear-to-b from-black/95 via-black/85 to-black/95" />

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

        <section className="relative max-w-7xl m-auto px-4 md:px-6 lg:px-8 h-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-center justify-center z-30">
          <div className="flex flex-col gap-3 md:gap-5 lg:gap-6 items-center lg:items-start">
            <div className="flex px-3 md:px-4 py-1.5 md:py-2 border border-solid border-green-500 bg-yellow-500/10 items-center gap-2 rounded-full animate-[fadeInDown_0.6s_ease-out_both]">
              <span className="size-3 md:size-4 bg-yellow-500 rounded-full animate-pulse" />
              <p className="uppercase font-bold text-[10px] md:text-xs lg:text-sm">Edição Oficial 2026</p>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl text-center lg:text-left lg:text-7xl font-bold animate-[fadeInUp_0.8s_ease-out_0.15s_both]">O Manto do Hexa: <span className="text-yellow-500">Vista a Paixão Nacional</span></h1>

            <p className="text-xs sm:text-sm md:text-base text-center lg:text-left text-zinc-300 animate-[fadeInUp_0.8s_ease-out_0.3s_both] max-w-lg lg:max-w-none">Entre em campo com estilo e garanta a camisa que une tecnologia de ponta e a tradição do futebol mais vitorioso do mundo.</p>

            <ScrollToButton 
              targetId="cart" 
              className="btn-ripple bg-green-500 hover:bg-green-600 text-white font-bold uppercase px-6 md:px-8 py-3 md:py-4 rounded-lg text-xs sm:text-sm md:text-base transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] cursor-pointer animate-[fadeInUp_0.8s_ease-out_0.45s_both]"
            >
              Garanta a Sua
            </ScrollToButton>
          </div>

          <div className="hidden lg:flex aspect-square w-full relative bg-[url('/hero.webp')] bg-contain bg-center bg-no-repeat animate-[scaleIn_1s_ease-out_0.3s_both]" />
        </section>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
          <ChevronDown className="size-6 text-white/50" />
        </div>
      </div>

      <div id="emotion" className="relative h-dvh w-full snap-start overflow-hidden">
        <div className="absolute inset-0 z-20 bg-linear-to-b from-black/95 via-black/80 to-black/95" />
        <div className="absolute inset-0 z-10 bg-[url('/stadio.webp')] bg-cover bg-center bg-no-repeat" />

        <section className="relative z-30 max-w-7xl m-auto px-4 md:px-6 lg:px-8 h-full flex flex-col gap-3 md:gap-6 items-center justify-center text-center">
          <h2 data-animate="fade-up" className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold max-w-3xl">Mais que uma camisa. <span className="text-yellow-500">Um sentimento.</span></h2>
          <p data-animate="fade-up" data-delay="1" className="text-xs sm:text-sm md:text-base text-zinc-300 max-w-xl">Sinta a vibração de milhões de corações batendo em um só ritmo.</p>
        </section>
      </div>

      <div id="specs" className="relative h-dvh w-full snap-start bg-linear-to-b from-green-500/10 via-green-500/5 to-black overflow-hidden">
        <section className="max-w-7xl m-auto px-4 md:px-6 lg:px-8 h-full flex flex-col items-center justify-center gap-6 md:gap-10 lg:gap-16">
          <div className="flex flex-col gap-2 md:gap-4 text-center">
            <span data-animate="fade-down" className="hidden md:flex uppercase font-bold text-green-500 text-sm md:text-base mx-auto tracking-widest">Especificações Técnicas</span>
            <h2 data-animate="fade-up" data-delay="1" className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold">Tecnologia e paixão em <span className="text-green-500">cada detalhe</span></h2>
            <p data-animate="fade-up" data-delay="2" className="hidden md:flex text-xs md:text-sm lg:text-base max-w-3xl mx-auto text-zinc-300">Desenvolvida para torcedores exigentes que não abrem mão de qualidade, performance e conforto absoluto.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-8 max-w-2xl lg:max-w-none mx-auto w-full">
            <div data-animate="fade-up" data-delay="3">
              <Card
                icon={Droplet}
                title="Dry-Fit Premium"
                desc="Tecnologia de evaporação avançada que mantém o corpo seco e ventilado, ideal para o clima tropical brasileiro."
              />
            </div>

            <div data-animate="fade-up" data-delay="4">
              <Card
                icon={Shield}
                title="Escudo Bordado"
                desc="Acabamento de luxo com o brasão oficial em alta definição e fios dourados resistêntes a lavagens."
              />
            </div>

            <div data-animate="fade-up" data-delay="5">
              <Card
                icon={Shirt}
                title="Caimento Perfeito"
                desc="Modelagem anatômica que valoriza o corpo sem apertar, garantindo liberdade total de movimentos na hora do gol."
              />
            </div>
          </div>
        </section>
      </div>

      <div id="history" className="relative h-dvh w-full snap-start bg-linear-to-br from-zinc-950 to-black">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 max-w-7xl m-auto px-4 md:px-6 lg:px-8 items-center justify-center h-full">
          <div data-animate="fade-right" className="hidden lg:flex aspect-square border border-solid border-white/20 rounded-lg bg-[url('/history.webp')] bg-contain bg-center bg-no-repeat hover:border-white/40 transition-colors" />

          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 text-center lg:text-left">
            <h2 data-animate="fade-up" className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-7xl">A camisa que carrega <span className="text-yellow-500">história</span></h2>
            <p data-animate="fade-up" data-delay="1" className="text-zinc-400 text-xs sm:text-sm md:text-base">Não é apenas tecido. São cinco estrelas conquistadas com suor, talento e a ginga que só o brasileiro tem. Ao vestir este manto, você carrega o legado de Pelé, Ronaldo, Romário e tantos outros gigantes.</p>

            <div data-animate="fade-up" data-delay="2" className="w-full h-px bg-linear-to-r from-transparent via-white/50 to-transparent rounded-full" />

            <div data-animate="fade-up" data-delay="3" className="flex gap-4 md:gap-6 lg:gap-8 justify-center lg:justify-start">
              <div className="flex flex-col gap-1 md:gap-2">
                <h4 className="text-yellow-500 font-bold text-2xl md:text-3xl lg:text-4xl">5</h4>
                <p className="text-zinc-400 text-[10px] sm:text-xs md:text-sm">Títulos Mundiais</p>
              </div>

              <div className="flex flex-col gap-1 md:gap-2">
                <h4 className="text-yellow-500 font-bold text-2xl md:text-3xl lg:text-4xl">220M</h4>
                <p className="text-zinc-400 text-[10px] sm:text-xs md:text-sm">Corações Apaixonados</p>
              </div>
            </div>
          </div>
        </section>

        <div className="absolute bottom-0 left-0 w-screen p-3 md:p-4 bg-linear-to-r from-yellow-500 via-yellow-400 to-yellow-500">
          <div className="max-w-7xl m-auto flex items-center justify-center gap-3 md:gap-6 lg:gap-12 text-black">
            <div className="flex gap-2 md:gap-3 items-center shrink-0">
              <Timer className="fill-black size-5 md:size-7" />
              <h4 className="uppercase font-bold text-[10px] md:text-xs lg:text-sm">Copa 2026</h4>
            </div>

            <CountdownTimer />

            <p className="hidden lg:flex text-sm font-medium">Garanta antes que acabe!</p>
          </div>
        </div>
      </div>

      <div id="testimonials" className="relative h-dvh w-full snap-start bg-linear-to-b from-black via-yellow-500/5 to-black overflow-hidden">
        <section className="max-w-7xl m-auto px-4 md:px-6 lg:px-8 h-full flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-10 lg:gap-12 py-6 md:py-0">
          <div className="flex flex-col gap-1 md:gap-4 text-center shrink-0">
            <span data-animate="fade-down" className="uppercase font-bold text-yellow-500 text-[10px] sm:text-xs md:text-sm lg:text-base tracking-widest">Depoimentos</span>
            <h2 data-animate="fade-up" data-delay="1" className="text-xl sm:text-2xl md:text-5xl lg:text-7xl font-bold">O que nossos <span className="text-yellow-500">torcedores</span> dizem</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5 sm:gap-2 md:gap-4 lg:gap-6 w-full shrink-0">
            {testimonials.map((t, i) => (
              <div key={i} data-animate="fade-up" data-delay={String(i + 2)} className="bg-white/5 md:backdrop-blur-sm border border-white/10 rounded-xl p-2.5 sm:p-3 md:p-6 lg:p-8 flex flex-col gap-1 md:gap-4 card-hover">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className="text-yellow-500 text-xs sm:text-sm md:text-lg">&#9733;</span>
                  ))}
                </div>
                <p className="text-zinc-300 text-[11px] sm:text-xs md:text-base leading-snug sm:leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-auto pt-1.5 sm:pt-2 md:pt-4 border-t border-white/10">
                  <p className="font-bold text-white text-xs sm:text-sm md:text-base">{t.name}</p>
                  <p className="text-[9px] sm:text-[10px] md:text-xs text-zinc-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Cart />
      <Footer />
    </main>
  );
}