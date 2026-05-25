'use client';

import { Skills } from '@/constants/skills';
import Image from 'next/image';

export const SkillCard = (skill: Skills) => {
    const { name, alt, icon, level } = skill;

    return (
        <div className="flex flex-col items-center justify-center p-6 gap-2 glass-bdr glass-bg backdrop-blur-2xl rounded-4xl cursor-pointer shadow hover:shadow-lg hover:backdrop-blur-3xl hover:scale-105 duration-200">
            <div className=''>
                <Image src={icon} alt={alt} width={34} height={34} />
            </div>
            <p className="font-[Sora] text-terracota-800 text-sm font-bold">{name}</p>
            <p className="font-[Sora] text-xs text-text2">{level}</p>
        </div>
    )
}

