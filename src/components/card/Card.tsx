'use client';

import { Skill } from '@/constants/skills';

export const SkillCard = ({ name, icon: Icon, color, level }: Skill) => {
    return (
        <div className="flex flex-col items-center justify-center p-5 gap-2.5 bg-white brutal-border brutal-shadow-sm brutal-card-hover cursor-default">
            <div className="p-2.5 bg-white brutal-border brutal-shadow-sm">
                <Icon size={28} color={color} />
            </div>
            <p className="font-sans text-ink text-xs font-black text-center leading-tight">{name}</p>
            <p className="font-sans text-[0.6rem] text-muted font-bold text-center uppercase tracking-wider">{level}</p>
        </div>
    );
};
