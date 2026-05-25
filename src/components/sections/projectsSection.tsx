import { ProjectCard } from "../card/ProjectCard"
import { projects } from "@/constants/projects";

export const ProjectsSection = () => {
    return (
        <section id="projetos" className="mt-10 md:mt-20 max-w-[1120px] mx-auto px-4">
            <div className="flex flex-col gap-1">
                <p className="font-[Sora] text-small font-semibold text-terracota-50 tracking-widest uppercase">Trabalhos</p>
                <h2 className="font-[Sora] text-3xl mt-1 mb-8">Projetos</h2>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        pageUrl={project.pageUrl}
                        name={project.name}
                        resume={project.resume}
                        stack={project.stack}
                        stacks={project.stacks}
                        images={project.images}
                    />
                ))}
            </div>
        </section>
    )
}
