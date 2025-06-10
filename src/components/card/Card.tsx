'use client'
interface CardProps {
    href?: string
    name?: string
    list?: string
    resume?: string  
    src?:string
    children?: React.ReactNode
}

export const Card: React.FC<CardProps> = ({children, src, href, name, resume }: CardProps) => {
    return (
        <div className="grid grid-cols-2 mt-10 rounded-2xl border-2 border-custom-100
                        cursor-pointer hover:shadow-2xl hover:scale-101
                         ">
            <div className="object-cover">
                <img className="" src={src}/>
            </div>

            <div className="px-4 py-2">
                <div>
                    <h2 className="text-1xl
                                   md:text-2xl
                                   lg:text-3xl
                                 text-custom-100 font-[Roboto] font-bold">{ name }</h2>

                    <p className="text-sm text-custom-100 mt-2
                                  lg:text-lg
                    ">{ resume }</p>
                </div>

                <div className="text-custom-100 text-sm mt-5">
                    {children}
                </div>

                <div className="mt-5 ">
                    <a className="text-sm md:text-base font-bold text-custom-100 hover:text-custom-100/80 " href={href}>Veja completo → </a>
                </div>

            </div>
        </div>
    )
}