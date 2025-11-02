'use client';

import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
    href: string; 
    name: string;
    resume: string; 
    src: string; 
    techList?: string[]; 
}

export const Card: React.FC<CardProps> = ({
    techList = [],
    src,
    href,
    name,
    resume
}) => {
    const imageAlt = `Imagem do projeto ${name}`;

    return (
        <Link
            href={href}
            className="block group relative w-full h-full rounded-2xl border-2 border-custom-100 
                 overflow-hidden transition-all duration-300 ease-in-out 
                 hover:shadow-lg hover:shadow-custom-100/30 hover:scale-[1.01]"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

                <div className="relative w-full  h-auto overflow-hidden">
                    <Image
                        src={src}
                        alt={imageAlt}
                        fill
                        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                        priority={false}
                    />
                </div>

                <div className="flex flex-col justify-between p-4 md:p-6 bg-white">
                    <div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-custom-100 font-bold font-[Roboto]">
                            {name}
                        </h2>
                        <p className="text-sm md:text-base text-gray-700 mt-2 line-clamp-3">
                            {resume}
                        </p>
                    </div>

                    {techList.length > 0 && (
                        <div className="flex justify-between flex-wrap gap-x-4 gap-y-2 mt-4 text-custom-100 text-sm">
                            <ul className="list-none p-0 m-0">
                                {techList.slice(0, Math.ceil(techList.length / 2)).map((tech, index) => (
                                    <li key={index} className="flex items-center gap-1">
                                        <span className="text-custom-100 text-xs">●</span> {tech}
                                    </li>
                                ))}
                            </ul>
                            <ul className="list-none p-0 m-0">
                                {techList.slice(Math.ceil(techList.length / 2)).map((tech, index) => (
                                    <li key={index} className="flex items-center gap-1">
                                        <span className="text-custom-100 text-xs">●</span> {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
};