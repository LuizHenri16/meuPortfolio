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

export const Card: React.FC<CardProps> = ({ techList = [], src, href, name, resume }) => {
    const imageAlt = `Imagem do projeto ${name}`;

    return (
        <Link
            href={href}
            className="group block rounded-4xl shadow-md hover:shadow-xl transition-shadow duration-300 border-terracota-100 bg-white overflow-hidden border"
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
                        <h2 className="text-2xl md:text-3xl text-terracota-800 font-bold font-[Roboto] group-hover:text-terracota-500 transition-colors duration-300">
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
                                        className="flex items-center gap-1 text-xs md:text-sm text-white bg-terracota-800 px-2 py-1 rounded-md"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-1">
                                {techList.slice(Math.ceil(techList.length / 2)).map((tech, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-1 text-xs md:text-sm text-white bg-terracota-800 px-2 py-1 rounded-md"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <p className='text-sm text-terracota-100 opacity-90 mt-5 self-end'>Clique para ver mais</p>
                </div>
            </div>
        </Link>
    );
};

interface SkillCardProps {
    iconUrl: string;
    iconBgColor?: string;
    name: string;
    timeExperience: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ iconUrl, iconBgColor, name, timeExperience }) => {
    return (
        <div className="flex flex-col items-center justify-center p-6 gap-2 glass-bdr glass-bg backdrop-blur-2xl rounded-4xl cursor-pointer shadow hover:shadow-lg hover:backdrop-blur-3xl hover:scale-105 duration-200">
            <div className=''>
                <Image src={iconUrl} alt={name} width={34} height={34} />
            </div>
            <p className="font-[Sora] text-terracota-800 text-sm font-bold">{name}</p>
            <p className="font-[Sora] text-xs text-text2">{timeExperience}</p>
        </div>
    )
}

interface ProjectCardProps {
    pageUrl: string;
    name: string;
    resume: string;
    stack: string;
    stacks: string[];
    src: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ pageUrl, name, resume, stack, stacks, src }) => {
    return (
        <div className='hover:shadow-xl hover:scale-102 cursor-pointer glass-bg rounded-4xl duration-200'>
            <Image className='w-full h-60' quality={100} src={src} alt={name} width={220} height={220} />
            <div className='p-4'>
                <p className='font-[Sora] text-text2 text-small font-light'>{stack}</p>
                <p className='font-[Sora] text-terracota-800 text-lg font-bold'>{name}</p>
                <p className='mb-2 mt-2 font-[Sora] text-text2 text-sm font-light'>{resume}</p>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-2 mb-2'>
                    {stacks.map((stack, index) => (
                        <div className='border-1 flex justify-center items-center p-1 text-center border-terracota-100 bg-[#FFF5F6] rounded-2xl text-small text-terracota-50 font-semibold font-[Sora]' key={index}>
                            <p>{stack}</p>
                        </div>
                    ))}
                </div>
                <a className='text-sm text-terracota-800 opacity-90 mt-6' href={pageUrl}>Ver mais</a>
            </div>
        </div>
    )
}