import { ProjectPageLayout } from "@/components/ProjectPageLayout";

export default function CRSystem() {
    return (
        <ProjectPageLayout
            name="Insight — Gestão Empresarial"
            tagline="Hub de inteligência de dados para centralizar informações de empresas, sócios, investimentos e limites de crédito em uma interface moderna."
            logoSrc="/images/crProjetoCompleto.png"
            logoAlt="Logo Insight"
            type="Full Stack · Web"
            githubUrl="https://github.com/LuizHenri16/Insight"
            features={[
                { title: "Dados de Empresas", desc: "Controle total de cadastro, edição, listagem e exclusão de empresas e seus dados." },
                { title: "Sócios & Investimentos", desc: "Gerenciamento de sócios vinculados e acompanhamento de investimentos." },
                { title: "Rating de Crédito", desc: "Sistema de avaliação e classificação de crédito por empresa, editável." },
                { title: "Consultas Avançadas", desc: "Filtros dinâmicos e personalizados integrados ao Supabase com paginação." },
                { title: "Autenticação SSR", desc: "Controle de acesso com Supabase Auth e Server-Side Rendering no Next.js 15." },
                { title: "Segurança", desc: "Row Level Security no Supabase para proteção de dados sensíveis por usuário." },
            ]}
            gallery={[
                { src: "/images/insightprint1.png", alt: "Tela inicial do Insight" },
                { src: "/images/insightprint2.png", alt: "Painel de dados do Insight" },
            ]}
        />
    );
}
