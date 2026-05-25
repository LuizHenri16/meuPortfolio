'use client';

import { Skill } from '@/constants/skills';

export const SkillCard = ({ name, icon: Icon, color, level }: Skill) => {
    return (
        <div className="group flex flex-col items-center justify-center p-5 gap-2.5 glass-bdr glass-bg backdrop-blur-2xl rounded-3xl cursor-default shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200">
            <div className="p-2.5 rounded-2xl bg-white shadow-sm group-hover:shadow transition-shadow duration-200">
                <Icon size={28} color={color} />
            </div>
            <p className="font-[Sora] text-terracota-800 text-xs font-bold text-center leading-tight">{name}</p>
            <p className="font-[Sora] text-[0.6rem] text-text3 text-center">{level}</p>
        </div>
    );
};
