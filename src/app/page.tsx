import { AboutSection } from "@/components/sections/aboutSection";
import { FooterSection } from "@/components/sections/footerSection";
import { ProjectsSection } from "@/components/sections/projectsSection";
import { SkillSection } from "@/components/sections/skillSection";
import { ScrollReveal } from "@/components";

export default function Home() {
    return (
        <div className="px-4 md:px-6 lg:px-8">
            <ScrollReveal>
                <AboutSection />
            </ScrollReveal>

            <ScrollReveal>
                <SkillSection />
            </ScrollReveal>

            <ScrollReveal>
                <ProjectsSection />
            </ScrollReveal>

            <ScrollReveal>
                <FooterSection />
            </ScrollReveal>
        </div>
    )
}

