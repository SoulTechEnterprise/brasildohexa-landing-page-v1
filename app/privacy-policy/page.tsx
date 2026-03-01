import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
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
                        Política de Privacidade
                    </h1>
                    
                    <p className="text-zinc-400 mb-8">
                        Última atualização: 01 de março de 2026
                    </p>

                    <div className="space-y-8 text-zinc-300">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Introdução</h2>
                            <p className="leading-relaxed">
                                O Brasil do Hexa respeita sua privacidade e está comprometido em proteger seus dados pessoais. 
                                Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas 
                                informações de acordo com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Dados Coletados</h2>
                            <p className="leading-relaxed mb-3">
                                Coletamos os seguintes tipos de dados pessoais:
                            </p>
                            
                            <h3 className="text-xl font-semibold text-green-500 mt-4 mb-2">2.1. Dados Fornecidos por Você</h3>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Cadastro:</strong> Nome, e-mail, telefone</li>
                                <li><strong>Compra:</strong> Endereço de entrega, CPF</li>
                                <li><strong>Pagamento:</strong> Dados processados pelo Mercado Pago</li>
                                <li><strong>Comunicação:</strong> Mensagens enviadas ao suporte</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-green-500 mt-4 mb-2">2.2. Dados Coletados Automaticamente</h3>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Navegação:</strong> IP, navegador, sistema operacional</li>
                                <li><strong>Cookies:</strong> Preferências, carrinho de compras</li>
                                <li><strong>Analytics:</strong> Páginas visitadas, tempo de permanência</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Finalidade do Tratamento</h2>
                            <p className="leading-relaxed mb-3">
                                Utilizamos seus dados para:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Processar pedidos:</strong> Confirmar, embalar e entregar suas compras</li>
                                <li><strong>Pagamentos:</strong> Validar transações e prevenir fraudes</li>
                                <li><strong>Comunicação:</strong> Enviar confirmações, atualizações e ofertas</li>
                                <li><strong>Suporte:</strong> Atender solicitações e resolver problemas</li>
                                <li><strong>Melhorias:</strong> Analisar comportamento para otimizar o site</li>
                                <li><strong>Segurança:</strong> Proteger contra atividades fraudulentas</li>
                                <li><strong>Obrigações legais:</strong> Cumprir requisitos fiscais e jurídicos</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Base Legal</h2>
                            <p className="leading-relaxed mb-3">
                                O tratamento dos seus dados pessoais está fundamentado em:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Consentimento:</strong> Para envio de comunicações de marketing</li>
                                <li><strong>Execução de contrato:</strong> Para processar e entregar pedidos</li>
                                <li><strong>Obrigação legal:</strong> Para cumprimento de leis fiscais e comerciais</li>
                                <li><strong>Legítimo interesse:</strong> Para segurança e prevenção de fraudes</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Compartilhamento de Dados</h2>
                            <p className="leading-relaxed mb-3">
                                Podemos compartilhar seus dados com:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Mercado Pago:</strong> Processamento de pagamentos</li>
                                <li><strong>Transportadoras:</strong> Entrega dos produtos</li>
                                <li><strong>Provedores de serviço:</strong> Hospedagem, e-mail, analytics</li>
                                <li><strong>Autoridades:</strong> Quando exigido por lei</li>
                            </ul>
                            <p className="leading-relaxed mt-3">
                                <strong className="text-yellow-500">Importante:</strong> Nunca vendemos seus dados pessoais 
                                para terceiros.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Cookies e Tecnologias Similares</h2>
                            <p className="leading-relaxed mb-3">
                                Utilizamos cookies para:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Essenciais:</strong> Funcionamento do site e carrinho</li>
                                <li><strong>Performance:</strong> Análise de uso e melhorias</li>
                                <li><strong>Marketing:</strong> Personalização de anúncios</li>
                            </ul>
                            <p className="leading-relaxed mt-3">
                                Você pode gerenciar cookies nas configurações do seu navegador.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Armazenamento e Segurança</h2>
                            <p className="leading-relaxed mb-3">
                                Medidas de segurança implementadas:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Criptografia SSL/TLS para transmissão de dados</li>
                                <li>Servidores com proteção contra invasões</li>
                                <li>Acesso restrito apenas a funcionários autorizados</li>
                                <li>Backups regulares dos dados</li>
                                <li>Monitoramento contínuo de segurança</li>
                            </ul>
                            <p className="leading-relaxed mt-3">
                                <strong>Retenção:</strong> Mantemos seus dados pelo tempo necessário para as finalidades 
                                descritas ou conforme exigido por lei (geralmente 5 anos após a última compra).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">8. Seus Direitos (LGPD)</h2>
                            <p className="leading-relaxed mb-3">
                                Você tem direito a:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Confirmação:</strong> Saber se tratamos seus dados</li>
                                <li><strong>Acesso:</strong> Obter cópia dos seus dados</li>
                                <li><strong>Correção:</strong> Corrigir dados incompletos ou desatualizados</li>
                                <li><strong>Anonimização/Bloqueio:</strong> Limitar o uso dos seus dados</li>
                                <li><strong>Eliminação:</strong> Excluir dados desnecessários</li>
                                <li><strong>Portabilidade:</strong> Transferir dados para outro fornecedor</li>
                                <li><strong>Revogação:</strong> Retirar consentimento a qualquer momento</li>
                                <li><strong>Oposição:</strong> Opor-se a tratamentos específicos</li>
                            </ul>
                            
                            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-4">
                                <p className="text-sm">
                                    <strong className="text-green-500">Para exercer seus direitos:</strong><br />
                                    Entre em contato através do e-mail: <strong>privacidade@brasildohexa.com.br</strong><br />
                                    Responderemos em até 15 dias.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">9. Dados de Menores</h2>
                            <p className="leading-relaxed">
                                Não coletamos intencionalmente dados de menores de 18 anos sem autorização dos responsáveis. 
                                Se identificarmos coleta não autorizada, eliminaremos os dados imediatamente.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">10. Transferência Internacional</h2>
                            <p className="leading-relaxed">
                                Alguns provedores de serviço podem estar localizados fora do Brasil. Nestes casos, 
                                garantimos que suas informações recebam proteção adequada conforme LGPD.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">11. Alterações na Política</h2>
                            <p className="leading-relaxed">
                                Esta política pode ser atualizada periodicamente. Notificaremos sobre mudanças significativas 
                                por e-mail ou aviso no site. A data da última atualização está sempre indicada no topo da página.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">12. Encarregado de Dados (DPO)</h2>
                            <p className="leading-relaxed mb-3">
                                Nosso Encarregado de Proteção de Dados está disponível para esclarecer dúvidas:
                            </p>
                            <div className="bg-zinc-800 p-4 rounded space-y-2">
                                <p><strong className="text-green-500">Nome:</strong> [Nome do DPO]</p>
                                <p><strong className="text-green-500">E-mail:</strong> dpo@brasildohexa.com.br</p>
                                <p><strong className="text-green-500">Contato geral:</strong> privacidade@brasildohexa.com.br</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">13. Autoridade Nacional</h2>
                            <p className="leading-relaxed">
                                Você também pode contatar a Autoridade Nacional de Proteção de Dados (ANPD) 
                                em caso de dúvidas ou reclamações:
                            </p>
                            <div className="bg-zinc-800 p-4 rounded mt-3 space-y-2">
                                <p><strong className="text-green-500">Site:</strong> www.gov.br/anpd</p>
                                <p><strong className="text-green-500">E-mail:</strong> comunicacao@anpd.gov.br</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">14. Contato</h2>
                            <p className="leading-relaxed mb-3">
                                Para dúvidas sobre esta política ou tratamento de dados:
                            </p>
                            <div className="bg-zinc-800 p-4 rounded space-y-2">
                                <p><strong className="text-green-500">E-mail:</strong> contato@brasildohexa.com.br</p>
                                <p><strong className="text-green-500">WhatsApp:</strong> (11) 99999-9999</p>
                                <p><strong className="text-green-500">Horário:</strong> Segunda a Sexta, 9h às 18h</p>
                            </div>
                        </section>

                        <div className="border-t border-zinc-700 pt-6 mt-8">
                            <p className="text-sm text-zinc-500 text-center">
                                Brasil do Hexa - CNPJ: XX.XXX.XXX/XXXX-XX
                                <br />
                                Esta política é regida pela Lei 13.709/2018 (LGPD)
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
