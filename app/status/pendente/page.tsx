import { Clock, Mail, RefreshCw, Home, Bell } from "lucide-react"
import Link from "next/link"

export default function Pendente() {
    return (
        <main className="min-h-dvh flex items-center justify-center bg-black text-white p-4">
            <div className="max-w-2xl w-full">
                {/* Ícone de Pendente */}
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-2xl"></div>
                        <div className="relative bg-yellow-500/10 p-8 rounded-full border-4 border-yellow-500">
                            <Clock className="size-24 text-yellow-500" strokeWidth={2} />
                        </div>
                    </div>
                </div>

                {/* Conteúdo Principal */}
                <div className="text-center space-y-6 mb-8">
                    <h1 className="text-4xl lg:text-5xl font-bold">
                        Pagamento <span className="text-yellow-500">em Análise</span>
                    </h1>
                    
                    <p className="text-xl text-zinc-400">
                        Seu pedido está sendo processado!
                    </p>
                </div>

                {/* Informações de Status */}
                <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 space-y-4 mb-6">
                    <div className="flex items-start gap-4">
                        <RefreshCw className="size-6 text-yellow-500 shrink-0 mt-1 animate-spin" />
                        <div className="flex-1">
                            <h3 className="font-bold text-lg mb-2">O que está acontecendo?</h3>
                            <p className="text-sm text-zinc-400 mb-4">
                                Seu pagamento está sendo analisado pela instituição financeira. 
                                Este processo geralmente é rápido, mas pode levar até alguns minutos ou horas 
                                dependendo da forma de pagamento escolhida.
                            </p>
                            <ul className="space-y-2 text-sm text-zinc-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-500 mt-1">⏱</span>
                                    <span><strong>Pix:</strong> Aprovação em até 5 minutos após pagamento</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-500 mt-1">⏱</span>
                                    <span><strong>Boleto:</strong> Aprovação em até 2 dias úteis após pagamento</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-500 mt-1">⏱</span>
                                    <span><strong>Cartão:</strong> Aprovação em até 48 horas</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Notificações */}
                <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 space-y-4 mb-6">
                    <div className="flex items-start gap-4">
                        <Bell className="size-6 text-green-500 shrink-0 mt-1" />
                        <div className="flex-1">
                            <h3 className="font-bold text-lg mb-2">Você será notificado!</h3>
                            <p className="text-sm text-zinc-400">
                                Assim que o pagamento for confirmado, você receberá:
                            </p>
                            <ul className="space-y-2 text-sm text-zinc-400 mt-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>E-mail de confirmação do pedido</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Detalhes da compra e prazo de entrega</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Código de rastreamento quando disponível</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Informação do E-mail */}
                <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 space-y-4 mb-8">
                    <h3 className="font-bold text-lg flex items-center gap-2">
                        <Mail className="size-5 text-yellow-500" />
                        Recibo enviado
                    </h3>
                    <p className="text-sm text-zinc-400">
                        Enviamos um e-mail com os detalhes do seu pedido pendente. 
                        Guarde este e-mail para acompanhamento.
                    </p>
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-3 text-sm">
                        <p className="text-yellow-500">
                            <strong>Importante:</strong> Não é necessário fazer nenhuma ação no momento. 
                            Aguarde a confirmação do pagamento.
                        </p>
                    </div>
                </div>

                {/* Ações */}
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

                {/* Informação Extra */}
                <div className="text-center mt-8">
                    <p className="text-sm text-zinc-500">
                        Pedido registrado em {new Date().toLocaleDateString('pt-BR', { 
                            day: '2-digit', 
                            month: 'long', 
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                        })}
                    </p>
                    <p className="text-xs text-zinc-600 mt-2">
                        Verifique seu e-mail regularmente ou entre em contato para checar o status
                    </p>
                </div>
            </div>
        </main>
    )
}
