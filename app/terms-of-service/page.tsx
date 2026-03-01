import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsOfService() {
    return (
        <main className="min-h-dvh text-white bg-black">
            <section className="max-w-4xl m-auto p-4 py-6 sm:py-8 lg:py-16">
                <Link 
                    href="/"
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-6"
                >
                    <ArrowLeft className="size-4" />
                    Voltar
                </Link>

                <div className="bg-zinc-900 rounded-lg p-6 sm:p-8 border border-zinc-800">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-yellow-500">
                        Termos de Serviço
                    </h1>
                    
                    <p className="text-zinc-400 mb-8">
                        Última atualização: 01 de março de 2026
                    </p>

                    <div className="space-y-8 text-zinc-300">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
                            <p className="leading-relaxed">
                                Ao acessar e utilizar o site Brasil do Hexa, você concorda em cumprir estes Termos de Serviço. 
                                Se você não concordar com qualquer parte destes termos, não utilize nosso serviço.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Descrição do Serviço</h2>
                            <p className="leading-relaxed mb-3">
                                O Brasil do Hexa é uma plataforma de e-commerce especializada na venda de camisetas oficiais 
                                da Seleção Brasileira de Futebol. Oferecemos:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Produtos oficiais licenciados</li>
                                <li>Diferentes tamanhos e cores</li>
                                <li>Entrega em todo território nacional</li>
                                <li>Pagamento seguro via Mercado Pago</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Cadastro e Conta</h2>
                            <p className="leading-relaxed mb-3">
                                Para realizar compras, você deverá:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Fornecer informações verdadeiras e atualizadas</li>
                                <li>Manter a confidencialidade de suas credenciais</li>
                                <li>Ter no mínimo 18 anos ou autorização dos responsáveis</li>
                                <li>Notificar imediatamente sobre uso não autorizado</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Produtos e Preços</h2>
                            <p className="leading-relaxed mb-3">
                                Nos reservamos o direito de:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Modificar preços sem aviso prévio</li>
                                <li>Limitar quantidades por pedido</li>
                                <li>Descontinuar produtos a qualquer momento</li>
                                <li>Recusar pedidos por motivos legítimos</li>
                            </ul>
                            <p className="leading-relaxed mt-3">
                                Todos os preços estão em Reais (BRL) e incluem impostos aplicáveis.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Pedidos e Pagamento</h2>
                            <p className="leading-relaxed mb-3">
                                Ao finalizar um pedido:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>O pagamento é processado via Mercado Pago</li>
                                <li>Confirmação será enviada por e-mail</li>
                                <li>Pedido só é processado após confirmação do pagamento</li>
                                <li>Reservamos o direito de cancelar pedidos fraudulentos</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Entrega</h2>
                            <p className="leading-relaxed mb-3">
                                Sobre entregas:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Prazo estimado: 7 a 14 dias úteis</li>
                                <li>Rastreamento disponível após postagem</li>
                                <li>Endereço deve ser completo e correto</li>
                                <li>Não nos responsabilizamos por erros no endereço fornecido</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Política de Troca e Devolução</h2>
                            <p className="leading-relaxed mb-3">
                                Conforme o Código de Defesa do Consumidor (CDC):
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Direito de arrependimento em até 7 dias</li>
                                <li>Produto deve estar sem uso e com etiquetas</li>
                                <li>Defeitos de fabricação: troca imediata</li>
                                <li>Frete de devolução por arrependimento: responsabilidade do cliente</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">8. Propriedade Intelectual</h2>
                            <p className="leading-relaxed">
                                Todo o conteúdo do site (textos, imagens, logos, marcas) é protegido por direitos autorais. 
                                É proibida a reprodução sem autorização prévia.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">9. Limitação de Responsabilidade</h2>
                            <p className="leading-relaxed mb-3">
                                Não nos responsabilizamos por:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Danos indiretos ou consequenciais</li>
                                <li>Interrupções no serviço</li>
                                <li>Erros ou omissões no conteúdo</li>
                                <li>Problemas com operadora de pagamento</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">10. Modificações dos Termos</h2>
                            <p className="leading-relaxed">
                                Reservamos o direito de modificar estes termos a qualquer momento. 
                                As alterações entram em vigor imediatamente após publicação no site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">11. Lei Aplicável</h2>
                            <p className="leading-relaxed">
                                Estes termos são regidos pela legislação brasileira, especialmente:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                                <li>Código de Defesa do Consumidor (Lei 8.078/90)</li>
                                <li>Marco Civil da Internet (Lei 12.965/14)</li>
                                <li>Lei Geral de Proteção de Dados (Lei 13.709/18)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">12. Contato</h2>
                            <p className="leading-relaxed">
                                Para dúvidas ou suporte sobre estes termos:
                            </p>
                            <div className="bg-zinc-800 p-4 rounded mt-4 space-y-2">
                                <p><strong className="text-green-500">E-mail:</strong> contato@brasildohexa.com.br</p>
                                <p><strong className="text-green-500">WhatsApp:</strong> (11) 99999-9999</p>
                                <p><strong className="text-green-500">Horário:</strong> Segunda a Sexta, 9h às 18h</p>
                            </div>
                        </section>

                        <div className="border-t border-zinc-700 pt-6 mt-8">
                            <p className="text-sm text-zinc-500 text-center">
                                Brasil do Hexa - CNPJ: XX.XXX.XXX/XXXX-XX
                                <br />
                                Todos os direitos reservados © 2026
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
