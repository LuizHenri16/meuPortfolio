import { ProjectPageLayout } from "@/components/ProjectPageLayout";

export default function Mytasks() {
    return (
        <ProjectPageLayout
            name="MyTasks — Todolist Minimalista"
            tagline="Aplicativo mobile focado em cadastrar tarefas de forma rápida e direta, com design minimalista para máxima concentração."
            logoSrc="/images/mytaskProjetoCompleto.png"
            logoAlt="Logo MyTasks"
            type="Mobile · React Native"
            githubUrl="https://github.com/LuizHenri16/mytasks"
            isMobile={true}
            features={[
                { title: "Gestão de Tarefas", desc: "Cadastro imediato, marcação de tarefas concluídas e exclusão de itens." },
                { title: "Minimalismo", desc: "Interface limpa e focada para evitar distrações — menos é mais." },
                { title: "Performance Nativa", desc: "Desenvolvido com React Native e TypeScript para código robusto e fluido." },
            ]}
            gallery={[
                { src: "/images/mytaskApp-image2.jpg", alt: "Tela de cadastro de tarefas" },
                { src: "/images/mytaskApp-image.jpg", alt: "Lista de tarefas" },
            ]}
        />
    );
}
