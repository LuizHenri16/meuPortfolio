import { FeatureCard } from "@/components";

export default function Fitzone() {

  return (
    <div className="min-h-screen bg-[#FFFBF9] font-[Roboto] py-10 px-5 flex justify-center">

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
            src="/images/fitzoneProjetoCompleto.png"
            alt="Logo FitZone"
          />

          <h1 className="text-3xl md:text-4xl font-bold text-[#6B3E23] mb-4">
            FitZone - Gestão de Academias
          </h1>

          <h3 className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            O<span className="font-bold text-[#6B3E23]"> FitZone</span> é um sistema focado na administração completa e eficiente de academias e estúdios fitness.
          </h3>
        </div>

        <hr className="my-10 border-gray-100" />
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-6 text-center md:text-left text-custom-100">
            Principais Funcionalidades
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureCard
              title="Alunos & Mensalidades"
              desc="Cadastro, edição e lista completa de alunos, com registro de pagamentos e status de atividade."
            />
            <FeatureCard
              title="Controle de Despesas"
              desc="Cadastramento e gestão de todas as despesas operacionais da academia (listar, editar e excluir)."
            />
            <FeatureCard
              title="Financeiro Detalhado"
              desc="Visão unificada das despesas, mensalidades e valor total em caixa para gestão precisa."

            />
            <FeatureCard
              title="Acesso e Login"
              desc="Sistema de controle de acesso para colaboradores, com cadastro e exclusão de contas."
            />
            <FeatureCard
              title="Permissões de Usuário"
              desc="Diferentes níveis de permissão para restringir ou liberar funcionalidades."
            />
            <FeatureCard
              title="Segurança de Dados"
              desc="Criptografia robusta para garantir a proteção de todas as informações sensíveis no banco."
            />
          </div>
        </div>

        <hr className="my-10 border-gray-100" />

        <div className="flex flex-col items-center">
          <p className="text-custom-100 font-mono text-sm uppercase tracking-widest mb-6 border border-custom-100 px-3 py-1 rounded-full">
            Galeria do Sistema
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="group overflow-hidden rounded-2xl shadow-lg border border-gray-100">
              <img
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                src="/images/TelaInicial.png"
                alt="Imagem da tela inicial"
              />
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-lg border border-gray-100">
              <img
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                src="/images/TelaListaCadastro.png"
                alt="Imagem da tela de lista e cadastro"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            className="flex items-center gap-3 bg-[#E7FFFA] text-custom-100 px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-[#9be0d1] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            href="https://github.com/LuizHenri16/Fitzone"
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