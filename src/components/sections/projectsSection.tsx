import { ProjectCard } from "../card/ProjectCard"
import { projects } from "@/constants/projects";

export const ProjectsSection = () => {
    return (
        <section id="projetos" className="mt-10 md:mt-20 max-w-[1120px] mx-auto px-4">
            <h2 className="brutal-section-title">
                <span aria-hidden="true" className="deco-star">✦</span>
                Projetos
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
