import Image from "next/image"

interface SkillcardProps {
    icon: string
    name: string
    alt: string
}

export const Skillcard = ({icon, name, alt} : SkillcardProps) => {
    return (
        <div className="flex items-center gap-2 border-custom-100 border-2 border-t-4 rounded-xl px-5 py-1">
            <Image src={icon} width={35} height={40} alt={alt}/>
            <p className="text-gray-600">{name}</p>
        </div>
    )
}
