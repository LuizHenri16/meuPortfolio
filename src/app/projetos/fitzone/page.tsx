import { ProjectPageLayout } from "@/components/ProjectPageLayout";

export default function Fitzone() {
    return (
        <ProjectPageLayout
            name="FitZone — Gestão de Academias"
            tagline="Sistema completo para administração de academias: controle de alunos, mensalidades, despesas e acesso com diferentes níveis de permissão."
            logoSrc="/images/fitzoneProjetoCompleto.png"
            logoAlt="Logo FitZone"
            type="Full Stack · Acadêmico"
            githubUrl="https://github.com/LuizHenri16/Fitzone-api"
            features={[
                { title: "Alunos & Mensalidades", desc: "Cadastro, edição e lista completa de alunos, com registro de pagamentos e status de atividade." },
                { title: "Controle de Despesas", desc: "Cadastramento e gestão de todas as despesas operacionais da academia." },
                { title: "Financeiro Detalhado", desc: "Visão unificada das despesas, mensalidades e valor total em caixa." },
                { title: "Acesso e Login", desc: "Sistema de controle de acesso para colaboradores, com cadastro e exclusão de contas." },
                { title: "Permissões de Usuário", desc: "Diferentes níveis de permissão para restringir ou liberar funcionalidades." },
                { title: "Segurança de Dados", desc: "Criptografia robusta para garantir a proteção de informações sensíveis no banco." },
            ]}
            gallery={[
                { src: "/images/TelaInicial.png", alt: "Tela inicial do FitZone" },
                { src: "/images/TelaListaCadastro.png", alt: "Tela de lista e cadastro" },
            ]}
        />
    );
}
