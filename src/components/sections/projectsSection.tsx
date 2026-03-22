import { ProjectCard } from "../card/Card"

export const ProjectsSection: React.FC = () => {

    const projects = [
        {
            pageUrl: "/projetos/fitzone",
            name: "Fitzone",
            resume: "Plataforma Full Stack para gestão operacional de academias, integrando controle de matrículas, treinos e pagamentos com uma ótima arquitetura em Spring Boot e Next.js.",
            stack: "Web • Full Stack",
            stacks: ["Next.JS", "TypeScript", "Tailwind", "Java", "Spring Boot", "MySQL"],
            src: "/images/fitzoneProjetoCompleto.png"
        },
        {
            pageUrl: "/projetos/carteirarelacionamento",
            name: "Insight",
            resume: "Hub de inteligência de dados projetado para centralizar informações não estruturadas, transformando dados brutos em insights organizados através de uma infraestrutura escalável com Supabase.",
            stack: "Web • Full Stack",
            stacks: ["React", "TypeScript", "Tailwind", "Supabase"],
            src: "/images/crProjetoCompleto.png"
        },
        {
            pageUrl: "/projetos/mytasks",
            name: "MyTasks",
            resume: "Aplicação mobile com o foco em gerenciamento de tarefas pessoais, com uma interface simples e intuitiva.",
            stack: "Mobile",
            stacks: ["ReactNative", "TypeScript", "Android"],
            src: "/images/mytaskProjetoCompleto.png"
        },
        {
            pageUrl: "/projetos/clh",
            name: "CLH ERP",
            resume: "Sistema ERP focado em automação comercial, otimizando o fluxo de inventário e fechamento de vendas com uma interface moderna e reativa.",
            stack: "Web • Frontend",
            stacks: ["Next.JS", "TypeScript"],
            src: "/images/clh-logo.png"
        }
    ]


    return (
        <section id="projetos" className="mt-10 md:mt-20 max-w-[1120px] mx-auto px-4">
            <div className="flex flex-col gap-1">
                <p className="font-[Sora] text-small font-semibold text-terracota-50">Trabalhos</p>
                <h2 className="font-[Sora] text-3xl mt-1 mb-8">Projetos</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-5 sm:grid-cols-1 md:grid-cols-2">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        pageUrl={project.pageUrl}
                        name={project.name}
                        resume={project.resume}
                        stack={project.stack}
                        stacks={project.stacks}
                        src={project.src}
                    />
                ))}
            </div>
        </section>
    )
}