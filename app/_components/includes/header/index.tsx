import Link from "next/link";

export function Header() {
    return (
        <header className="fixed top-0 left-0 w-screen bg-black/75 backdrop-blur-sm z-100 border-b border-white/25">
            <div className="flex justify-between px-4 md:px-6 py-2 md:py-3 max-w-7xl m-auto items-center">
                <span className="text-white font-bold uppercase text-sm md:text-base">Brasil do Hexa</span>

                <Link className="text-xs md:text-sm lg:text-base bg-green-500 text-white font-bold px-3 md:px-4 py-1.5 md:py-2 rounded hover:bg-green-600 transition-colors" href="">Comprar Agora</Link>
            </div>
        </header>
    )
}