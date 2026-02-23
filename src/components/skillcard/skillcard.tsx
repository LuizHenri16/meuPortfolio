import Image from "next/image"

interface SkillcardProps {
    icon: string
    name: string
    alt: string
}

export const Skillcard = ({ icon, name, alt }: SkillcardProps) => {
    return (
        <div className="h-16 flex items-center justify-center gap-2 rounded-xl border-t-2 border-l-2 border-r-2 border-b-6  border-custom-100 px-5 py-1 cursor-pointer bg-white shadow-md hover:translate-y-1 hover:border-b-2 transition-all duration-100  ">
            <img className="w-8" src={icon} alt={alt} />
            <p className="text-md font-[Roboto] text-gray-500">{name}</p>
        </div>
    )
}
