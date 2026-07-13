import Image from "next/image";

export const AboutSection: React.FC = () => {
    return (
        <section id="about" className="relative mt-10 md:mt-20 max-w-[1120px] mx-auto px-4 overflow-hidden">

            {/* ── Background blur orbs ─────────────────────────────── */}
            <div
                aria-hidden="true"
                className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#5C6BF5] opacity-[0.12] blur-3xl pointer-events-none"
            />
            <div
                aria-hidden="true"
                className="absolute top-10 right-0 md:-right-16 w-56 h-56 rounded-full bg-[#FFC857] opacity-[0.15] blur-3xl pointer-events-none"
            />
            <div
                aria-hidden="true"
                className="absolute bottom-0 left-1/3 w-48 h-48 rounded-full bg-[#5C6BF5] opacity-[0.08] blur-2xl pointer-events-none"
            />

            {/* ── Decorative stars ─────────────────────────────────── */}
            <span aria-hidden="true" className="section-deco text-[#5C6BF5] text-4xl md:text-5xl top-0 -left-2 md:left-0 opacity-80 animate-spin-slow">
                ✦
            </span>
            <span
                aria-hidden="true"
                className="section-deco text-[#FFC857] text-xl top-4 left-10 md:left-14 opacity-60"
            >
                ✦
            </span>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 pt-6">

                {/* Left — text content */}
                <div className="flex flex-col gap-5 md:gap-7 animate-fade-up">
                    <div className="flex flex-col gap-3">
                        <span className="brutal-tag inline-block w-fit tracking-normal">
                            Desenvolvedor Full Stack
                        </span>

                        <h1 className="font-sans font-black text-5xl text-ink md:text-7xl lg:text-8xl leading-[0.9] tracking-[-0.03em]">
                            Luiz<br />
                            <span className="relative inline-block">
                                <span className="relative z-10">Henrique</span>
                                <span
                                    aria-hidden="true"
                                    className="absolute left-0 bottom-1 w-full h-[14px] md:h-[18px] bg-[#5C6BF5] opacity-30 -z-0 rounded"
                                />
                            </span>
                        </h1>
                    </div>

                    <p className="font-sans text-base text-ink font-[400] leading-relaxed max-w-lg">
                        Desenvolvedor Full Stack com 3 anos de experiência em projetos comerciais e 5 anos de estudo em desenvolvimento de software. Foco em construir produtos completos, de APIs robustas a interfaces modernas e criativas.
                    </p>

                    <div className="flex flex-row flex-wrap gap-2 mt-1">
                        <ContactChip
                            href="https://github.com/LuizHenri16"
                            icon="/icons/iconstack.io - (Github).svg"
                            label="LuizHenri16"
                        />
                        <ContactChip
                            href="https://www.linkedin.com/in/luizhenrique-dev16/"
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

                {/* Right — photo + stats */}
                <div className="flex flex-col items-center md:items-end gap-5 shrink-0 animate-fade-up delay-200">
                    <div className="relative">
                        {/* Glow ring behind photo */}
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 rounded-full bg-[#5C6BF5] opacity-20 blur-xl scale-110 pointer-events-none"
                        />

                        <div className="relative w-40 h-40 md:w-52 md:h-52 overflow-hidden border-4 rounded-full">
                            <Image
                                src="/images/foto.png"
                                alt="Foto de Luiz Henrique"
                                width={400}
                                height={400}
                                quality={100}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Available badge — glass */}
                        <div className="absolute -bottom-3 -right-3 bg-white/80 backdrop-blur-sm brutal-border brutal-shadow-sm px-3 py-1.5 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#22C55E] block animate-pulse" />
                            <span className="font-sans text-[0.65rem] font-bold text-ink">Disponível</span>
                        </div>
                    </div>

                    {/* Stat chips — glass */}
                    <div className="flex gap-3">
                        <StatChip value="3+" label="anos exp." />
                        <StatChip value="4+" label="projetos" />
                    </div>

                    <p className="font-sans text-[0.65rem] text-muted font-bold italic text-right">
                        Freela · Job · Colaboração
                    </p>
                </div>
            </div>

            {/* Horizontal rule with deco */}
            <div className="mt-12 md:mt-16 flex items-center gap-4">
                <div className="flex-1 h-[2px] bg-ink" />
                <span aria-hidden="true" className="text-[#5C6BF5] font-black text-lg">✦</span>
                <div className="w-8 h-[2px] bg-ink" />
            </div>
        </section>
    )
}

const ContactChip = ({ href, icon, label }: { href: string; icon: string; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 bg-white/70 backdrop-blur-sm brutal-border brutal-shadow-sm hover:brutal-shadow-hover transition-all duration-150"
    >
        <Image src={icon} alt={label} width={14} height={14} />
        <span className="font-sans text-[0.68rem] font-bold text-ink">{label}</span>
    </a>
)

const StatChip = ({ value, label }: { value: string; label: string }) => (
    <div className="bg-white/70 backdrop-blur-sm brutal-border brutal-shadow-sm px-4 py-2 text-center">
        <p className="font-sans font-black text-xl text-ink">{value}</p>
        <p className="font-sans text-[0.6rem] text-muted uppercase tracking-wider font-bold">{label}</p>
    </div>
)
