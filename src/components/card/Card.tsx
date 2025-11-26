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

export const Card: React.FC<CardProps> = ({techList = [], src, href, name, resume}) => {
    const imageAlt = `Imagem do projeto ${name}`;

    return (
        <Link 
            href={href} 
            className="group block rounded-4xl shadow-md hover:shadow-xl transition-shadow duration-300 border-custom-100 bg-white overflow-hidden border"
        >
            <div className="flex flex-col md:flex-row items-center md:items-start p-6 gap-6">
                <div className="flex-shrink-0">
                    <Image 
                        src={src} 
                        alt={imageAlt} 
                        width={220} 
                        height={220} 
                        className="object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <div className="flex flex-col justify-between w-full">
                    <div>
                        <h2 className="text-2xl md:text-3xl text-custom-100 font-bold font-[Roboto] group-hover:text-custom-200 transition-colors duration-300">
                            {name}
                        </h2>
                        <p className="text-sm md:text-base text-gray-600 mt-2 line-clamp-3">
                            {resume}
                        </p>
                    </div>

                    {techList.length > 0 && (
                        <div className="mt-4 grid grid-cols-2 gap-2">
                            <ul className="space-y-1">
                                {techList.slice(0, Math.ceil(techList.length / 2)).map((tech, index) => (
                                    <li 
                                        key={index} 
                                        className="flex items-center gap-1 text-xs md:text-sm text-white bg-custom-100 px-2 py-1 rounded-md"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-1">
                                {techList.slice(Math.ceil(techList.length / 2)).map((tech, index) => (
                                    <li 
                                        key={index} 
                                        className="flex items-center gap-1 text-xs md:text-sm text-white bg-custom-100 px-2 py-1 rounded-md"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <p className='text-sm text-custom-100 opacity-90 mt-5 self-end'>Clique para ver mais</p>
                </div>
            </div>
        </Link>
    );
};
