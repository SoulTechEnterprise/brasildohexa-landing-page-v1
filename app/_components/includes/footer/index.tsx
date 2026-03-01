import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-white/25 bg-black text-white">
            <div className="max-w-7xl m-auto px-4 py-8 lg:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {/* Sobre */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-yellow-500">Brasil do Hexa</h3>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                            Camisetas oficiais da Seleção Brasileira. 
                            Qualidade premium para torcedores apaixonados.
                        </p>
                    </div>

                    {/* Políticas */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Políticas</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/terms-of-service" className="text-zinc-400 hover:text-white transition-colors">
                                    Termos de Serviço
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="text-zinc-400 hover:text-white transition-colors">
                                    Política de Privacidade
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                                    Trocas e Devoluções
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contato</h3>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li>
                                <strong className="text-green-500">E-mail:</strong>
                                <br />
                                contato@brasildohexa.com.br
                            </li>
                            <li>
                                <strong className="text-green-500">WhatsApp:</strong>
                                <br />
                                (11) 99999-9999
                            </li>
                            <li className="text-xs">
                                Seg a Sex: 9h às 18h
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/25 pt-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
                        <p>© 2026 Brasil do Hexa. Todos os direitos reservados.</p>
                        <p className="text-xs">CNPJ: XX.XXX.XXX/XXXX-XX</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}