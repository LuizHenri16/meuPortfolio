import { Card, Template } from "@/components";

export default function Projetos() {
  return (
    <div className="mb-10">
      <div
        className="flex flex-col items-center justify-center px-4 md:px-6 lg:px-10 font-[Roboto]">
        <div className=" text-custom-100 mt-5 text-xl self-start flex gap-10 ">
          <a className="flex gap-5 font-bold hover:opacity-80 text-[#9D5C63]" href="/home">
            <img className="w-5" src="/icons/Arrow 1.svg" alt="arrow icone" /> Voltar
          </a>
          <p className="">// Projetos</p>
        </div>

        <section
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
          <Card src="/images/fitzoneProjeto.png" name="Fitzone"
            resume="Sitema desktop de gerenciamento de academias."
            href="/projetos/fitzone"
            techList={["Java", "Javaswing", "Hibernate", "MySQL"]}
          />
          <Card
            src="/images/crProjeto.png"
            name="Sistema CR"
            resume="Sitema para cadastro de dados de empresas para consultas rápidas."
            href="/projetos/carteirarelacionamento"
            techList={["Java", "Javaswing", "Hibernate", "MySQL"]}
          />
          <Card
            src="/images/mytaskProjeto.png"
            name="Mytasks"
            resume="Aplicativo todolist minimalista."
            href="/projetos/mytasks"
            techList={["Typescript", "React Native", "Figma"]}
          />
        </section>
      </div>
    </div>
  );
}
