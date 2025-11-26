import { FeatureCard } from "@/components";

export default function Mytasks() {
  return (
    <div className="min-h-screen bg-[#FFFBF9] font-[Roboto] text-gray-700 py-10 px-5 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-3xl border-1 border-custom-100 shadow-xl overflow-hidden p-8 md:p-12">
        <div className="flex items-center mb-8">
          <a
            className="group flex items-center gap-2 font-bold text-[#9D5C63] transition-all hover:text-[#7a464c]"
            href="/projetos"
          >
            <div className="p-2 bg-[#fff0f1] rounded-full group-hover:bg-[#ffe0e2] transition-colors">
              <img className="w-4 h-4" src="/icons/Arrow 1.svg" alt="Voltar" />
            </div>
            <span>Voltar aos projetos</span>
          </a>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center text-center">
          <img
            className="w-32 md:w-48 drop-shadow-md mb-6"
            src="/images/mytaskProjetoCompleto.png"
            alt="Logo Mytasks"
          />

          <h1 className="text-3xl md:text-4xl font-bold text-[#7FBB95] mb-4">
            Mytasks - Todolist Minimalista
          </h1>
          
          <h3 className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            O<span className="font-bold text-[#7FBB95]"> Mytasks</span> é um aplicativo simples, focado em cadastrar tarefas de forma rápida e direta, priorizando o design minimalista para máxima concentração.
          </h3>
        </div>

        <hr className="my-10 border-gray-100" />

        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-6 text-center md:text-left text-custom-100">
            Principais Funcionalidades
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureCard
              title="Gestão de Tarefas" 
              desc="Cadastro imediato, visualização limpa, marcação rápida de tarefas concluídas e exclusão de itens." 
            />
            <FeatureCard 
              title="Minimalismo" 
              desc="Interface limpa e focada para evitar distrações, seguindo a filosofia 'menos é mais'." 
            />
            <FeatureCard 
              title="Tecnologia" 
              desc="Desenvolvido com React Native e Typescript, garantindo performance nativa e código robusto." 
            />
          </div>
        </div>

        <hr className="my-10 border-gray-100" />

        <div className="flex flex-col items-center ">
          <p className="font-mono text-sm uppercase text-custom-100 tracking-widest mb-6 border px-3 py-1 rounded-full">
            Galeria do Aplicativo
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full justify-items-center">
            
            <div className="group w-48 md:w-56 overflow-hidden rounded-3xl shadow-xl border border-gray-100">
              <img
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                src="/images/mytaskApp-image2.jpg"
                alt="Imagem da tela de cadastro de tarefas"
              />
            </div>
            
            <div className="group w-48 md:w-56 overflow-hidden rounded-3xl shadow-xl border border-gray-100">
              <img
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                src="/images/mytaskApp-image.jpg"
                alt="Imagem da lista de tarefas"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <a
            className="flex items-center gap-3 bg-[#7FBB95] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            href="https://github.com/LuizHenri16/mytasks"
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
