import { AboutSection } from "@/components/sections/aboutSection";
import { ContactFormSection } from "@/components/sections/contactFormSection";
import { EducationSection } from "@/components/sections/educationSection";
import { FooterSection } from "@/components/sections/footerSection";
import { ProjectsSection } from "@/components/sections/projectsSection";
import { SkillSection } from "@/components/sections/skillSection";

export default function Home() {
    return (
        <div className="px-4 md:px-6 lg:px-8">
            <AboutSection />
            <ProjectsSection />
            <EducationSection />
            <SkillSection />
            <ContactFormSection />
            <FooterSection />
        </div>
    )
}
