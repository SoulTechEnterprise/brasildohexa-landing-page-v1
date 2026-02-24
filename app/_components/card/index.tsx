import { LucideIcon } from "lucide-react";

interface ICard {
    icon: LucideIcon
    title: string
    desc: string
}

export function Card({icon: Icon, title, desc}: ICard) {
    return (
        <div className="flex flex-col gap-4 p-8 rounded bg-green-500/10 border border-solid border-green-100/50">
            <div className="flex items-center justify-center size-16 bg-green-950 border border-solid border-green-100/50 rounded">
                <Icon className="size-8 fill-green-500 text-green-500" />
            </div>
            
            <h4 className="text-4xl font-bold">{title}</h4>
            <p className="text-zinc-400">{desc}</p>
        </div>
    )
}