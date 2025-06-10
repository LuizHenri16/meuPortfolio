interface ButtonProps {
    id?: string
    name?: string
    onClick?: (event : any) => void 
}

interface IconButtonProps {
    id?: string
    children: React.ReactNode
    href?: string
    onClick?: (event : any) => void 
}

export const Button: React.FC<ButtonProps> = ({ id, name , onClick } : ButtonProps) => {

    return (
        <button className="flex px-3 py-2 rounded-2xl text-tiny sm:text-sm whitespace-nowrap
                           border-2 border-custom-100 text-custom-100 cursor-pointer
                           hover:text-textcustom-100 hover:bg-custom-100 active:bg-custom-100/90 active:border-custom-100/90  
                           " id={ id } onClick={ onClick } >
            { name }
        </button>
    )
}

export const IconButton: React.FC<IconButtonProps> = ({ href, id, children, onClick } : IconButtonProps) => {

    return (
        <a className=" w-14 cursor-pointer hover:opacity-80" href={href} id={ id } onClick={ onClick } target="_blank">
            {children}
        </a>
    )
}