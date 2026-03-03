import { createTicket } from "@/app/actions/melhorenvio"
import { CheckCircle2, Package, Mail, Home } from "lucide-react"
import Link from "next/link"

export default async function Sucesso() {
    await createTicket({id: "147883529741"})

    return (
        <main className="min-h-dvh flex items-center justify-center bg-black text-white p-4">
            <div className="max-w-2xl w-full">
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl"></div>
                        <div className="relative bg-green-500/10 p-8 rounded-full border-4 border-green-500">
                            <CheckCircle2 className="size-24 text-green-500" strokeWidth={2} />
                        </div>
                    </div>
                </div>

                <div className="text-center space-y-6 mb-8">
                    <h1 className="text-4xl lg:text-5xl font-bold">
                        Pagamento <span className="text-green-500">Confirmado!</span>
                    </h1>
                    
                    <p className="text-xl text-zinc-400">
                        Seu pedido foi processado com sucesso!
                    </p>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 space-y-4 mb-6">
                    <div className="flex items-start gap-4">
                        <Package className="size-6 text-yellow-500 shrink-0 mt-1" />
                        <div className="flex-1">
                            <h3 className="font-bold text-lg mb-2">O que acontece agora?</h3>
                            <ul className="space-y-2 text-sm text-zinc-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Você receberá um e-mail com os detalhes do pedido</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Seu pedido será preparado e despachado em até 2 dias úteis</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Código de rastreamento será enviado por e-mail</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Prazo de entrega: 7 a 14 dias úteis após postagem</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 space-y-4 mb-8">
                    <h3 className="font-bold text-lg flex items-center gap-2">
                        <Mail className="size-5 text-yellow-500" />
                        Confirmação enviada
                    </h3>
                    <p className="text-sm text-zinc-400">
                        Um e-mail de confirmação foi enviado para seu endereço cadastrado com todos os 
                        detalhes da compra e informações de acompanhamento.
                    </p>
                    <div className="bg-green-500/10 border border-green-500/30 rounded p-3 text-sm">
                        <p className="text-green-500">
                            <strong>Dica:</strong> Verifique sua caixa de spam caso não encontre o e-mail.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                        href="/"
                        className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-4 rounded-lg font-bold hover:bg-green-600 transition-colors"
                    >
                        <Home className="size-5" />
                        Voltar para Home
                    </Link>
                    <a 
                        href="https://wa.me/5511999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 border-2 border-green-500 text-white py-4 rounded-lg font-bold hover:bg-green-500/10 transition-colors"
                    >
                        Falar com Suporte
                    </a>
                </div>

                <div className="text-center mt-8">
                    <p className="text-sm text-zinc-500">
                        Pedido realizado em {new Date().toLocaleDateString('pt-BR', { 
                            day: '2-digit', 
                            month: 'long', 
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                        })}
                    </p>
                </div>
            </div>
        </main>
    )
}
