import Image from "next/image"

interface ButtonProps {
    id?: string
    name?: string
    onClick?: (event: any) => void
}

interface IconButtonProps {
    id?: string
    children: React.ReactNode
    href?: string
    onClick?: (event: any) => void
}

export const Button: React.FC<ButtonProps> = ({ id, name, onClick }: ButtonProps) => {

    return (
        <button className="p-2 font-bold text-white flex items-center justify-center button3D whitespace-nowrap text-[12px] sm:text-sm md:text-base lg:text-lg" id={id} onClick={onClick} >
            {name}
        </button>
    )
}

export const IconButton: React.FC<IconButtonProps> = ({ href, id, children, onClick }: IconButtonProps) => {

    return (
        <a className="p-1 w-11 h-11 flex items-center justify-center cursor-pointer button3D" href={href} id={id} onClick={onClick} target="_blank">
            {children}
        </a>
    )
}

interface NavButtonProps {
    iconUrl: string
    text: string
    href?: string
    onClick?: (event: any) => void
}

export const NavButton: React.FC<NavButtonProps> = ({ iconUrl, text, onClick }: NavButtonProps) => {
    return (
        <button onClick={onClick} className="flex flex-row items-center justify-center gap-2 bg-white px-2 py-1 border-2 border-gray-50 cursor-pointer duration-200 hover:border-terracota-100 hover:bg-[#FFF5F6] rounded-2xl">
            <Image src={iconUrl} alt={text} width={18} height={18} />
            <p className="hidden md:block lg:block text-small font-medium font-[Sora] text-terracota-50">{text}</p>
        </button>
    )

}
