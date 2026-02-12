import { FeatureCard } from "@/components";

export default function ERPCLH() {
  return (
    <div className="min-h-screen bg-[#FFFBF9] font-[Roboto] text-[#725743] py-10 px-5 flex justify-center">
      <div className="w-full max-w-4xl bg-white border-1 border-custom-100 rounded-3xl shadow-xl overflow-hidden p-8 md:p-12">

        <div className="flex items-center mb-8">
          <a
            className="group flex items-center gap-2 font-bold text-custom-100 transition-all hover:text-[#7a464c]"
            href="/projetos"
          >
            <div className="p-2 bg-[#fff0f1] rounded-full group-hover:bg-[#ffe0e2] transition-colors">
              <img className="w-4 h-4" src="/icons/Arrow 1.svg" alt="Voltar" />
            </div>
            <span>Voltar aos projetos</span>
          </a>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            className="w-32 md:w-48 drop-shadow-md mb-6"
            src="/images/clh-logo.png"
            alt="Logo ERP-CLH"
          />

          <h1 className="text-3xl md:text-4xl font-bold text-[#5e4534] mb-4">
            Projeto ERP-CLH
          </h1>

          <h3 className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            O<span className="font-bold text-[#5e4534]"> ERP-CLH</span> é um sistema completo desenvolvido para o gerenciamento inteligente de comércios e depósitos de bebidas.
          </h3>
        </div>

        <hr className="my-10 border-gray-100" />

        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-6 text-center md:text-left text-custom-100">
            Principais Funcionalidades
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureCard title="Clientes" desc="Cadastro completo, visualização de histórico e exclusão." />
            <FeatureCard title="Fornecedores" desc="Gerenciamento dos Fornecedores." />
            <FeatureCard title="Produtos" desc="Controle de estoque, edição dos produtos e catálogo." />
            <FeatureCard title="Vendas" desc="Registro de saídas." />
            <FeatureCard title="Permissões" desc="Controle de acesso por tipo de usuário." />
            <FeatureCard title="Segurança" desc="Criptografia de ponta a ponta para dados sensíveis." />
          </div>
        </div>

        <hr className="my-10 border-gray-100" />

        <div className="flex flex-col items-center">
          <p className="text-[#9D5C63] font-mono text-sm uppercase tracking-widest mb-6 border border-[#9D5C63] px-3 py-1 rounded-full">
            Galeria do Sistema
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="group overflow-hidden rounded-2xl shadow-lg border border-gray-100">
              <img
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                src="/images/clhimagem1.jpg"
                alt="Dashboard do sistema"
              />
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-lg border border-gray-100">
              <img
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                src="/images/clhimagem2.jpg"
                alt="Tela de cadastro"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            className="flex items-center gap-3 bg-[#5e4534] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-[#24292e] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            href="https://github.com/CLH-project/ERP-Frontend"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-8"
              src="/icons/github-icon.svg"
              alt="GitHub"
            />
            <span>Ver código no GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}

