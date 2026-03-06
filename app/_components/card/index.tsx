import { LucideIcon } from "lucide-react";

interface ICard {
    icon: LucideIcon
    title: string
    desc: string
}

export function Card({icon: Icon, title, desc}: ICard) {
    return (
        <div className="card-hover text-center lg:text-left flex flex-col gap-2 md:gap-3 lg:gap-4 p-3 md:p-5 lg:p-8 rounded-xl bg-green-500/10 border border-solid border-green-100/50">
            <div className="hidden lg:flex items-center justify-center size-16 bg-green-950 border border-solid border-green-100/50 rounded-lg">
                <Icon className="size-8 fill-green-500 text-green-500" />
            </div>
            
            <h4 className="text-lg md:text-xl lg:text-4xl font-bold">{title}</h4>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base">{desc}</p>
        </div>
    )
}