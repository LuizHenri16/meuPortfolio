'use client';

import { useState, useCallback } from "react";
import Image from "next/image";

interface ProjectCardProps {
    pageUrl: string;
    name: string;
    resume: string;
    stack: string;
    stacks: string[];
    images: string[];
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
        <div className='bg-white brutal-border brutal-shadow brutal-card-hover flex flex-col overflow-hidden'>

            <div className="relative overflow-hidden shrink-0 bg-gray-100 border-b-2 border-ink">
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

                {hasMultiple && (
                    <>
                        <button
                            onClick={prev}
                            aria-label="Imagem anterior"
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-white brutal-border cursor-pointer brutal-shadow-sm hover:brutal-shadow-hover transition-all duration-150"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        <button
                            onClick={next}
                            aria-label="Próxima imagem"
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-white brutal-border cursor-pointer brutal-shadow-sm hover:brutal-shadow-hover transition-all duration-150"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>

                        <div className="absolute bottom-2 right-3 bg-ink text-white font-sans text-[0.65rem] font-bold px-2 py-0.5">
                            {current + 1}/{images.length}
                        </div>
                    </>
                )}
            </div>

            <div className='p-5 flex flex-col flex-1 gap-3'>
                <p className='font-sans text-muted text-[0.65rem] font-bold uppercase tracking-wider'>{stack}</p>

                <div>
                    <p className='font-sans text-ink text-lg font-black leading-snug tracking-[-0.02em]'>{name}</p>
                    <p className='mt-1.5 font-sans text-ink text-sm font-[500] leading-relaxed line-clamp-3'>{resume}</p>
                </div>

                <div className='flex flex-wrap gap-1.5 mt-auto pt-1'>
                    {stacks.map((stack, index) => (
                        <span
                            key={index}
                            className='brutal-tag text-[0.6rem]'
                        >
                            {stack}
                        </span>
                    ))}
                </div>

                <a
                    href={pageUrl}
                    target={pageUrl.startsWith('http') ? '_blank' : undefined}
                    rel={pageUrl.startsWith('http') ? 'noreferrer' : undefined}
                    className='inline-flex items-center gap-1.5 text-xs font-black font-sans text-primary hover:text-primary-dark transition-colors duration-150 mt-1 uppercase tracking-wide'
                >
                    Ver detalhes
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    );
};
