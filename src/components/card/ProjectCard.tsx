'use client';

import { useState, useCallback } from "react";
import Image from "next/image";

interface ProjectCardProps {
    pageUrl: string;
    name: string;
    resume: string;
    stack: string;
    stacks: string[];
    images: string[]; // array de screenshots
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ pageUrl, name, resume, stack, stacks, images }) => {
    const [current, setCurrent] = useState(0);

    const prev = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        setCurrent(i => (i - 1 + images.length) % images.length);
    }, [images.length]);

    const next = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        setCurrent(i => (i + 1) % images.length);
    }, [images.length]);

    const hasMultiple = images.length > 1;

    return (
        <div className='group shadow-sm hover:shadow-lg glass-bg rounded-3xl duration-200 overflow-hidden border border-white hover:border-terracota-100/20 flex flex-col'>

            {/* Carrossel */}
            <div className="relative overflow-hidden rounded-t-3xl shrink-0 bg-gray-100">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {images.map((src, i) => (
                        <div key={i} className="w-full shrink-0">
                            <Image
                                src={src}
                                alt={`${name} - imagem ${i + 1}`}
                                width={600}
                                height={400}
                                quality={90}
                                className="w-full h-48 md:h-52 lg:h-56 object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Setas — só renderiza se tiver mais de 1 imagem */}
                {hasMultiple && (
                    <>
                        <button
                            onClick={prev}
                            aria-label="Imagem anterior"
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow hover:bg-white transition-all duration-150 opacity-0 group-hover:opacity-100"
                        >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#853B43" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        <button
                            onClick={next}
                            aria-label="Próxima imagem"
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow hover:bg-white transition-all duration-150 opacity-0 group-hover:opacity-100"
                        >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#853B43" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>

                        {/* Contador */}
                        <div className="absolute bottom-2 right-3 bg-black/40 backdrop-blur-sm text-white font-[Sora] text-[0.6rem] font-semibold px-2 py-0.5 rounded-full">
                            {current + 1}/{images.length}
                        </div>
                    </>
                )}
            </div>

            {/* Conteúdo */}
            <div className='p-5 flex flex-col flex-1 gap-3'>
                <p className='font-[Sora] text-text3 text-[0.65rem] font-medium uppercase tracking-wider'>{stack}</p>

                <div>
                    <p className='font-[Sora] text-terracota-800 text-lg font-bold leading-snug'>{name}</p>
                    <p className='mt-1.5 font-[Sora] text-text2 text-sm font-light leading-relaxed line-clamp-3'>{resume}</p>
                </div>

                {/* Stacks */}
                <div className='flex flex-wrap gap-1.5 mt-auto pt-1'>
                    {stacks.map((stack, index) => (
                        <span
                            key={index}
                            className='px-2.5 py-0.5 border border-terracota-100/40 bg-[#FFF5F6] rounded-full text-[0.62rem] text-terracota-50 font-semibold font-[Sora]'
                        >
                            {stack}
                        </span>
                    ))}
                </div>

                {/* Link */}
                <a
                    href={pageUrl}
                    className='inline-flex items-center gap-1 text-xs font-semibold font-[Sora] text-terracota-100 hover:text-terracota-800 transition-colors duration-200 mt-1'
                >
                    Ver detalhes
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    );
};
