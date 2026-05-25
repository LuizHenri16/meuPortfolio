import { ProjectPageLayout } from "@/components/ProjectPageLayout";

export default function ERPCLH() {
    return (
        <ProjectPageLayout
            name="ERP-CLH — Automação Comercial"
            tagline="Sistema ERP colaborativo para gerenciamento inteligente de comércios e depósitos, otimizando o fluxo de inventário e fechamento de vendas."
            logoSrc="/images/clh-logo.png"
            logoAlt="Logo ERP-CLH"
            type="Frontend · Web · Colaborativo"
            githubUrl="https://github.com/CLH-project/ERP-Frontend"
            features={[
                { title: "Clientes", desc: "Cadastro completo, visualização de histórico e exclusão de clientes." },
                { title: "Fornecedores", desc: "Gerenciamento e controle dos fornecedores cadastrados." },
                { title: "Produtos", desc: "Controle de estoque, edição de produtos e catálogo." },
                { title: "Vendas", desc: "Registro de saídas e fechamento de vendas." },
                { title: "Permissões", desc: "Controle de acesso por tipo de usuário." },
                { title: "Segurança", desc: "Criptografia de ponta a ponta para dados sensíveis." },
            ]}
            gallery={[
                { src: "/images/clhimagem1.jpg", alt: "Dashboard do sistema CLH" },
                { src: "/images/clhimagem2.jpg", alt: "Tela de cadastro CLH" },
            ]}
        />
    );
}
