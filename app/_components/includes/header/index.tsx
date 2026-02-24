import Link from "next/link";

export function Header() {
    return (
        <header className="fixed top-0 left-0 w-screen bg-black/75 z-100 border-b border-white/25">
            <div className="flex justify-between px-4 py-2 max-w-7xl m-auto items-center">
                <span className="text-white font-bold uppercase">Brasil do Hexa</span>

                <Link className="text-lg bg-green-500 text-white font-bold px-4 py-2 rounded" href="">Comprar Agora</Link>
            </div>
        </header>
    )
}