import Image from "next/image"

interface SkillcardProps {
    icon: string
    name: string
    alt: string
}

export const Skillcard = ({icon, name, alt} : SkillcardProps) => {
    return (
        <div className="h-16 flex items-center justify-center gap-2 border-custom-100 border-2 border-t-4 rounded-xl px-5 py-1 cursor-pointer bg-white hover:shadow-md">
            <img className="w-8" src={icon} alt={alt} />
            <p className="text-md font-[Roboto] text-gray-500">{name}</p>
        </div>
    )
}
