import Image from "next/image";
import { FeatureCard } from "@/components";

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
        <div className="min-h-screen project-page-bg font-[Sora] py-10 px-5 flex justify-center">
            <div className="w-full max-w-4xl project-card overflow-hidden p-8 md:p-12">

                {/* Voltar */}
                <div className="flex items-center mb-10">
                    <a
                        className="group flex items-center gap-2 text-sm font-semibold text-terracota-100 hover:text-terracota-800 transition-colors duration-200"
                        href="/#projetos"
                    >
                        <div className="p-1.5 bg-[#fff0f1] rounded-full group-hover:bg-[#ffe0e2] transition-colors">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 5l-7 7 7 7" />
                            </svg>
                        </div>
                        Voltar aos projetos
                    </a>
                </div>

                {/* Header */}
                <div className="flex flex-col items-center text-center gap-4 mb-10">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden shadow-md border border-gray-100 flex items-center justify-center bg-white">
                        <Image
                            src={logoSrc}
                            alt={logoAlt}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                            quality={100}
                        />
                    </div>

                    <div>
                        <span className="inline-block font-[Sora] text-[0.65rem] font-semibold text-terracota-50 tracking-widest uppercase mb-2">
                            {type}
                        </span>
                        <h1 className="font-[Cormorant_Garamond] text-3xl md:text-4xl font-bold text-terracota-800">
                            {name}
                        </h1>
                        <p className="mt-3 font-[Sora] text-text2 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
                            {tagline}
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-100 my-8" />

                {/* Funcionalidades */}
                <div className="mb-10">
                    <h2 className="font-[Sora] text-xl font-bold text-terracota-800 mb-5">
                        Principais Funcionalidades
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {features.map((f, i) => (
                            <FeatureCard key={i} title={f.title} desc={f.desc} />
                        ))}
                    </div>
                </div>

                <div className="border-t border-gray-100 my-8" />

                {/* Galeria */}
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-6">
                        <h2 className="font-[Sora] text-xl font-bold text-terracota-800">
                            Galeria
                        </h2>
                        <span className="text-[0.65rem] font-semibold font-[Sora] text-terracota-50 tracking-widest uppercase border border-terracota-100/30 px-2.5 py-0.5 rounded-full">
                            {isMobile ? "Mobile" : "Sistema"}
                        </span>
                    </div>

                    <div className={`grid gap-4 ${isMobile ? "grid-cols-2 max-w-sm mx-auto" : "grid-cols-1 md:grid-cols-2"}`}>
                        {gallery.map((img, i) => (
                            <div key={i} className="group overflow-hidden rounded-2xl shadow-md border border-gray-100">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={800}
                                    height={600}
                                    quality={95}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* GitHub */}
                <div className="flex justify-center">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2.5 bg-terracota-800 text-white px-7 py-3.5 rounded-2xl font-semibold text-sm shadow-md hover:bg-terracota-1000 hover:-translate-y-0.5 transition-all duration-200"
                    >
                        <Image src="/icons/github-icon.svg" alt="GitHub" width={18} height={18} className="invert" />
                        Ver código no GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};
