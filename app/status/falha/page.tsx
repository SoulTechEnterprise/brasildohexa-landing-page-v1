import { XCircle, RefreshCcw, ShoppingCart, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function Falha() {
    return (
        <main className="min-h-dvh flex items-center justify-center bg-black text-white p-4">
            <div className="max-w-2xl w-full">
                {/* Ícone de Falha */}
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <div className="absolute inset-0 bg-red-500/20 rounded-full blur-2xl"></div>
                        <div className="relative bg-red-500/10 p-8 rounded-full border-4 border-red-500">
                            <XCircle className="size-24 text-red-500" strokeWidth={2} />
                        </div>
                    </div>
                </div>

                {/* Conteúdo Principal */}
                <div className="text-center space-y-6 mb-8">
                    <h1 className="text-4xl lg:text-5xl font-bold">
                        Pagamento <span className="text-red-500">Não Aprovado</span>
                    </h1>
                    
                    <p className="text-xl text-zinc-400">
                        Infelizmente não conseguimos processar seu pagamento.
                    </p>
                </div>

                {/* Possíveis Causas */}
                <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 space-y-4 mb-6">
                    <div className="flex items-start gap-4">
                        <HelpCircle className="size-6 text-yellow-500 shrink-0 mt-1" />
                        <div className="flex-1">
                            <h3 className="font-bold text-lg mb-2">Possíveis causas:</h3>
                            <ul className="space-y-2 text-sm text-zinc-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 mt-1">•</span>
                                    <span>Dados do cartão incorretos ou inválidos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 mt-1">•</span>
                                    <span>Saldo ou limite insuficiente</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 mt-1">•</span>
                                    <span>Cartão bloqueado ou vencido</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 mt-1">•</span>
                                    <span>Transação rejeitada pela operadora do cartão</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 mt-1">•</span>
                                    <span>Problemas técnicos temporários</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* O que fazer */}
                <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 space-y-4 mb-8">
                    <h3 className="font-bold text-lg flex items-center gap-2">
                        <RefreshCcw className="size-5 text-green-500" />
                        O que você pode fazer?
                    </h3>
                    <div className="space-y-3 text-sm text-zinc-400">
                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-3">
                            <p className="text-yellow-500">
                                <strong>Recomendação:</strong> Verifique os dados do cartão e tente novamente, 
                                ou utilize outra forma de pagamento.
                            </p>
                        </div>
                        <p>
                            Entre em contato com a operadora do seu cartão para mais informações sobre a recusa.
                        </p>
                        <p>
                            Seu pedido não foi finalizado e os itens continuam disponíveis no carrinho.
                        </p>
                    </div>
                </div>

                {/* Ações */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                        href="/pedidos"
                        className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-4 rounded-lg font-bold hover:bg-green-600 transition-colors"
                    >
                        <ShoppingCart className="size-5" />
                        Voltar ao Carrinho
                    </Link>
                    <a 
                        href="https://wa.me/5511999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 border-2 border-green-500 text-white py-4 rounded-lg font-bold hover:bg-green-500/10 transition-colors"
                    >
                        Preciso de Ajuda
                    </a>
                </div>

                {/* Informação de Suporte */}
                <div className="mt-8 bg-zinc-900 rounded-lg p-4 border border-zinc-800">
                    <p className="text-sm text-zinc-400 text-center">
                        <strong className="text-white">Está com dúvidas?</strong><br />
                        Nossa equipe está pronta para ajudar! Entre em contato pelo WhatsApp ou e-mail.
                    </p>
                </div>

                {/* Informação Extra */}
                <div className="text-center mt-6">
                    <p className="text-xs text-zinc-500">
                        Nenhum valor foi cobrado desta tentativa de pagamento
                    </p>
                </div>
            </div>
        </main>
    )
}
