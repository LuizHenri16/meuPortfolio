"use client"

import { SKILLS } from "@/constants/skills"
import { SkillCard } from "../card/Card"

const categories = [
    { key: "Backend", label: "Backend" },
    { key: "Frontend", label: "Frontend" },
    { key: "Database", label: "Banco de Dados" },
    { key: "DevOps", label: "Infraestrutura" },
] as const;

export const SkillSection: React.FC = () => {
    return (
        <section id="skills" className="mt-10 md:mt-20 max-w-[1120px] mx-auto px-4">
            <h2 className="brutal-section-title">
                <span aria-hidden="true" className="deco-star">✦</span>
                Habilidades
            </h2>

            {categories.map((cat) => {
                const filtered = SKILLS.filter((s) => s.category === cat.key);
                if (filtered.length === 0) return null;
                return (
                    <div key={cat.key} className="mb-8 last:mb-0">
                        <h3 className="font-sans text-sm font-bold text-ink mb-3 uppercase tracking-wider">
                            {cat.label}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {filtered.map((skill, index) => (
                                <SkillCard key={index} {...skill} />
                            ))}
                        </div>
                    </div>
                );
            })}
        </section>
    )
}
