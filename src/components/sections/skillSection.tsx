"use client"

import { SKILLS } from "@/constants/skills"
import { SkillCard } from "../card/Card"

export const SkillSection: React.FC = () => {
    return (
        <section className="mt-10 md:mt-20 max-w-[1120px] mx-auto px-4">
            <p className="font-[Sora] text-small font-semibold text-terracota-50 tracking-widest uppercase">Experiências</p>
            <h2 className="font-[Sora] text-3xl mt-1 mb-8">Habilidades e Tecnologias</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {SKILLS.map((skill, index) => (
                    <SkillCard key={index} {...skill} />
                ))}
            </div>
        </section>
    )
}
