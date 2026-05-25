import Image from "next/image";

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
        <div className='shadow-md hover:shadow-xl hover:scale-102 cursor-pointer glass-bg rounded-4xl duration-200'>
            <Image className='w-full h-50 md:h-55 lg:h-60' quality={100} src={src} alt={name} width={220} height={220} />
            <div className='p-4'>
                <p className='font-[Sora] text-text2 text-small font-light'>{stack}</p>
                <p className='font-[Sora] text-terracota-800 text-lg font-bold'>{name}</p>
                <p className='mb-3 mt-3 font-[Sora] text-text2 text-sm font-light'>{resume}</p>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-3 mb-3'>
                    {stacks.map((stack, index) => (
                        <div className='border-1 flex justify-center items-center p-1 text-center border-terracota-100 bg-[#FFF5F6] rounded-2xl text-small text-terracota-50 font-semibold font-[Sora]' key={index}>
                            <p>{stack}</p>
                        </div>
                    ))}
                </div>
                <a className='text-sm text-terracota-800 opacity-90 mt-8' href={pageUrl}>Ver mais</a>
            </div>
        </div>
    )
}