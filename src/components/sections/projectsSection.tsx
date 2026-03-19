import { ProjectCard } from "../card/Card"

export const ProjectsSection: React.FC = () => {
    return (
        <section id="projetos" className="mt-10 md:mt-20 max-w-[1120px] mx-auto px-4">
            <div className="flex flex-col gap-1">
                <p className="font-[Sora] text-small font-semibold text-terracota-50">Trabalhos</p>
                <h2 className="font-[Sora] text-3xl mt-1 mb-8">Projetos</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-5 sm:grid-cols-1 md:grid-cols-2">
                <ProjectCard pageUrl="/projetos/fitzone" name="Fitzone" resume="Projeto para gerenciamento de academias." stack="Web • Full Stack" stacks={["Next.JS", "TypeScript", "Tailwind", "Java", "Spring Boot", "MySQL"]} src="/images/fitzoneProjetoCompleto.png" />
                <ProjectCard pageUrl="/projetos/carteirarelacionamento" name="Insight" resume="Projeto para cadastro de dados com foco em centralizar dados de clientes." stack="Web • Full Stack" stacks={["React", "TypeScript", "Tailwind", "Supabase"]} src="/images/crProjetoCompleto.png" />
                <ProjectCard pageUrl="/projetos/mytasks" name="MyTasks" resume="Projeto para gerenciamento de tarefas." stack="Mobile" stacks={["ReactNative", "TypeScript", "Android"]} src="/images/mytaskProjetoCompleto.png" />
                <ProjectCard pageUrl="/clh" name="CLH ERP" resume="Projeto para controle de estoque e vendas." stack="Web • Frontend" stacks={["Next.JS", "TypeScript"]} src="/images/clh-logo.png" />
            </div>
        </section>
    )
}