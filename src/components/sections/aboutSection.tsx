import Image from "next/image";

export const AboutSection: React.FC = () => {
    return (
        <section className="mt-10 md:mt-20 max-w-[1120px] mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

                {/* Texto principal */}
                <div className="flex flex-col gap-4 md:gap-6">
                    <div className="flex flex-col gap-2">
                        <span className="font-[Sora] text-small font-semibold text-terracota-50 tracking-widest uppercase">
                            Engenheiro de Software
                        </span>
                        <h1 className="font-[Cormorant_Garamond] font-bold text-4xl text-terracota-800 md:text-6xl lg:text-7xl duration-200 leading-tight">
                            Luiz Henrique
                        </h1>
                    </div>

                    <p className="font-[Sora] text-sm text-text2 font-light leading-relaxed max-w-md">
                        Desenvolvedor Full Stack com 2 anos de experiência. Foco em construir
                        produtos completos — de APIs robustas com NestJS a interfaces modernas
                        com Next.js. Escolho sempre a tecnologia certa para cada problema.
                    </p>

                    {/* Links de contato */}
                    <div className="flex flex-row flex-wrap gap-2 mt-2">
                        <ContactChip
                            href="https://github.com/LuizHenri16"
                            icon="/icons/iconstack.io - (Github).svg"
                            label="LuizHenri16"
                        />
                        <ContactChip
                            href="https://www.linkedin.com/in/luiz-bastos-395922213/"
                            icon="/icons/iconstack.io - (Linkedin).svg"
                            label="LinkedIn"
                        />
                        <ContactChip
                            href="mailto:lbastos722@gmail.com"
                            icon="/icons/iconstack.io - (Mail).svg"
                            label="lbastos722@gmail.com"
                        />
                    </div>
                </div>

                {/* Foto + card de status */}
                <div className="flex flex-col items-center md:items-end gap-4 shrink-0">
                    <div className="relative">
                        <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <Image
                                src="/images/foto.png"
                                alt="Foto de Luiz Henrique"
                                width={192}
                                height={192}
                                className="w-full h-full object-cover"
                                quality={100}
                            />
                        </div>
                        {/* Badge de status */}
                        <div className="absolute -bottom-2 -right-2 bg-white border border-gray-100 shadow-md rounded-full px-3 py-1 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse block"></span>
                            <span className="font-[Sora] text-[0.65rem] font-semibold text-text2">Disponível</span>
                        </div>
                    </div>

                    {/* Mini stats */}
                    <div className="flex gap-3">
                        <StatChip value="2+" label="anos" />
                        <StatChip value="5+" label="projetos" />
                    </div>
                </div>
            </div>
        </section>
    )
}

const ContactChip = ({ href, icon, label }: { href: string; icon: string; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-white hover:border-terracota-100 hover:bg-[#FFF5F6] transition-all duration-200 shadow-sm"
    >
        <Image src={icon} alt={label} width={14} height={14} />
        <span className="font-[Sora] text-[0.68rem] font-medium text-text2">{label}</span>
    </a>
)

const StatChip = ({ value, label }: { value: string; label: string }) => (
    <div className="glass-bg glass-bdr shadow-sm rounded-2xl px-4 py-2 text-center">
        <p className="font-[Cormorant_Garamond] font-bold text-xl text-terracota-800">{value}</p>
        <p className="font-[Sora] text-[0.6rem] text-text3 uppercase tracking-wider">{label}</p>
    </div>
)
