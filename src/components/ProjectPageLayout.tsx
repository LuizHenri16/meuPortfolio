import Image from "next/image";

interface ProjectPageProps {
    name: string;
    tagline: string;
    logoSrc: string;
    logoAlt: string;
    type: string;
    githubUrl: string;
    features: { title: string; desc: string }[];
    gallery: { src: string; alt: string }[];
    isMobile?: boolean;
}

export const ProjectPageLayout = ({
    name,
    tagline,
    logoSrc,
    logoAlt,
    type,
    githubUrl,
    features,
    gallery,
    isMobile = false,
}: ProjectPageProps) => {
    return (
        <div className="min-h-screen bg-[#F5F0EB] font-sans py-8 px-4 md:py-16 md:px-8 relative overflow-hidden">
            
            {/* ── Background Blur Orbs (Subtle Glass Contrast) ── */}
            <div aria-hidden="true" className="absolute top-10 left-10 w-[350px] h-[350px] rounded-full bg-[#5C6BF5] opacity-[0.12] blur-[100px] pointer-events-none" />
            <div aria-hidden="true" className="absolute bottom-20 right-10 w-[300px] h-[300px] rounded-full bg-[#FFC857] opacity-[0.12] blur-[100px] pointer-events-none" />

            {/* ── Main Container (Neo-Brutalist Frame with Rounded Corners) ── */}
            <div className="relative z-10 w-full max-w-5xl mx-auto bg-white brutal-border brutal-shadow p-6 md:p-10 flex flex-col gap-10">
                
                {/* ── Top Navigation / Back ── */}
                <div className="flex items-center justify-between border-b-2 border-ink pb-6">
                    <a
                        href="/#projetos"
                        className="group inline-flex items-center gap-2 text-xs font-black text-ink uppercase tracking-wider hover:text-[#5C6BF5] transition-colors duration-150"
                    >
                        <div className="p-1 bg-white brutal-border brutal-shadow-sm group-hover:shadow-[5px_5px_0px_#1A1A1A] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 5l-7 7 7 7" />
                            </svg>
                        </div>
                        Voltar aos projetos
                    </a>

                    <span className="brutal-tag bg-[#FFC857] text-[0.65rem] font-black text-ink uppercase tracking-widest brutal-shadow-sm">
                        {type}
                    </span>
                </div>

                {/* ── Header / Hero Section (Rounded corners matching main UI) ── */}
                <div className="flex flex-col items-start gap-8 bg-[#F5F0EB]/50 backdrop-blur-sm brutal-border p-6 md:p-8 brutal-shadow relative overflow-hidden">
                    
                    {/* Small inner glow for contrast */}
                    <div aria-hidden="true" className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#5C6BF5] opacity-20 blur-2xl pointer-events-none" />

                    <div className="flex-1 flex flex-col gap-4 relative z-10 w-full">
                        <h1 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-ink leading-[0.95] tracking-[-0.03em] uppercase">
                            {name}
                        </h1>
                        <p className="font-sans text-sm md:text-base text-ink font-[500] leading-relaxed max-w-3xl">
                            {tagline}
                        </p>
                    </div>
                </div>

                {/* ── Features Section ── */}
                <div>
                    <h2 className="font-sans font-black text-lg md:text-xl text-ink uppercase tracking-[-0.02em] mb-6 flex items-center gap-2">
                        <span aria-hidden="true" className="deco-star deco-star-sm">✦</span>
                        Principais Funcionalidades
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f, i) => (
                            <div
                                key={i}
                                className="brutal-card brutal-card-hover p-5 flex flex-col gap-3 relative overflow-hidden"
                            >
                                {/* Subtle blur decoration inside cards */}
                                <div aria-hidden="true" className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-[#5C6BF5] opacity-5 blur-md" />
                                
                                <span className="font-sans font-black text-2xl text-[#5C6BF5]/20 leading-none">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                
                                <div>
                                    <h3 className="font-sans font-black text-ink text-sm uppercase tracking-tight mb-1.5">
                                        {f.title}
                                    </h3>
                                    <p className="font-sans text-ink text-xs font-[500] leading-relaxed">
                                        {f.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Gallery Section ── */}
                <div className="border-t-2 border-ink pt-10">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="font-sans font-black text-lg md:text-xl text-ink uppercase tracking-[-0.02em] flex items-center gap-2">
                            <span aria-hidden="true" className="deco-star deco-star-sm">✦</span>
                            Galeria do Projeto
                        </h2>
                        
                        <span className="brutal-tag text-[0.65rem] font-black text-ink uppercase tracking-wider">
                            {isMobile ? "Mobile View" : "Desktop View"}
                        </span>
                    </div>

                    <div className={
                        isMobile
                            ? "flex flex-wrap justify-center gap-6"
                            : "grid grid-cols-1 md:grid-cols-2 gap-6"
                    }>
                        {gallery.map((img, i) => (
                            <div
                                key={i}
                                className={`
                                    group relative overflow-hidden brutal-border bg-white
                                    brutal-shadow hover:shadow-[7px_7px_0px_#1A1A1A]
                                    hover:-translate-x-0.5 hover:-translate-y-0.5
                                    transition-all duration-200
                                    ${isMobile ? "w-48" : ""}
                                    ${!isMobile && i === 0 && gallery.length >= 3 ? "md:col-span-2" : ""}
                                `}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={1200}
                                    height={800}
                                    quality={100}
                                    className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
                                />
                                
                                {/* Caption on Hover */}
                                <div className="absolute bottom-0 left-0 right-0 bg-ink/90 backdrop-blur-xs px-4 py-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-200 border-t-2 border-ink">
                                    <p className="font-sans text-[0.65rem] font-bold text-white uppercase tracking-wider truncate">
                                        {img.alt}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Footer CTA ── */}
                <div className="border-t-2 border-ink pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <p className="font-sans text-sm font-bold text-ink uppercase tracking-tight text-center sm:text-left">
                        Quer explorar os detalhes deste projeto?
                    </p>

                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="brutal-btn-primary font-sans font-bold text-xs uppercase tracking-widest px-6 py-3.5 flex items-center gap-3 shrink-0"
                    >
                        <Image
                            src="/icons/github-icon.svg"
                            alt="GitHub"
                            width={16}
                            height={16}
                            className="invert"
                        />
                        Ver Código no GitHub
                        <span className="group-hover:translate-x-0.5 transition-transform duration-150">→</span>
                    </a>
                </div>

            </div>
        </div>
    );
};
