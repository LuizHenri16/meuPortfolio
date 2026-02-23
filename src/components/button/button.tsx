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
        <button className="p-2 text-white button3D whitespace-nowrap" id={id} onClick={onClick} >
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