import Nav from "@/components/nav";
import { AboutSection } from "@/components/sections/aboutSection";
import { FooterSection } from "@/components/sections/footerSection";
import { ProjectsSection } from "@/components/sections/projectsSection";
import { SkillSection } from "@/components/sections/skillSection";

export default function Home() {
    return (
        <div className="px-4 md:px-6 lg:px-8">
            <div className="w-full sticky top-2.5 z-100">
                <Nav />
            </div>
            <AboutSection />
            <SkillSection />
            <ProjectsSection />
            <FooterSection />
        </div>
    )
}
