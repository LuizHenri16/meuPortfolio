import { SkillCard } from "../card/Card"

export const SkillSection: React.FC = () => {
    return (
        <section className="mt-10 md:mt-20 max-w-[1120px] mx-auto px-4">
            <p className="font-[Sora] text-small font-semibold text-terracota-50 ">Experiências</p>
            <h2 className="font-[Sora] text-3xl mt-1 mb-8">Habilidades e Tecnologias</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <SkillCard iconUrl="/icons/skills/java-icon.svg" name="Java" timeExperience="2 anos - intermediário" />
                <SkillCard iconUrl="/icons/skills/springboot-icon.svg" name="Spring Boot" timeExperience="1 ano - intermediário" />
                <SkillCard iconUrl="/icons/skills/react-icon.svg" name="React" timeExperience="1 anos - básico" />
                <SkillCard iconUrl="/icons/skills/typescript-icon.svg" name="TypeScript" timeExperience="1 anos - básico" />
                <SkillCard iconUrl="/icons/skills/mysql-icon.svg" name="Mysql" timeExperience="2 ano - intermediário" />
            </div>
        </section>
    )
}