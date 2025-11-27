"use client";
import { Skillcard, Template } from "@/components";

export default function Skills() {
  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen px-4">
      <Template>
        <main className="flex flex-col justify-center items-center gap-8 mt-5 mb-5  ">
          <div className="flex flex-col items-center gap-4">
            <h2 className="px-2 py-1 rounded-lg bg-custom-100 text-white text-center">
              Linguagens de Programação
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
              <Skillcard name="Java" alt="icone do java" icon="/icons/skills/java-icon.svg" />
              <Skillcard name="Javascript" alt="icone do javascript" icon="/icons/skills/javascript-icon.svg" />
              <Skillcard name="Typescript" alt="icone do typescript" icon="/icons/skills/typescript-icon.svg" />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="px-2 py-1 rounded-lg bg-custom-100 text-white text-center">
              Frontend
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
              <Skillcard name="React" alt="icone do react" icon="/icons/skills/react-icon.svg" />
              <Skillcard name="TailwindCSS" alt="icone do tailwind" icon="/icons/skills/tailwindcss-icon.svg" />
              <Skillcard name="HTML/CSS" alt="icone do html/css" icon="/icons/skills/htmlcss-icon.svg" />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="px-2 py-1 rounded-lg bg-custom-100 text-white text-center">
              Backend e Banco de Dados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
              <Skillcard name="Spring Boot" alt="icone do springboot" icon="/icons/skills/springboot-icon.svg" />
              <Skillcard name="MySQL" alt="icone do mysql" icon="/icons/skills/mysql-icon.svg" />
              <Skillcard name="PostgreSQL" alt="icone do postgresql" icon="/icons/skills/postgre-icon.svg" />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="px-2 py-1 rounded-lg bg-custom-100 text-white text-center">
              Ferramentas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
              <Skillcard name="VS Code" alt="icone do vscode" icon="/icons/skills/vscode-icon.svg" />
              <Skillcard name="GIT/GITHUB" alt="icone do github" icon="/icons/skills/github-icon.svg" />
              <Skillcard name="Intellij" alt="icone do intellij" icon="/icons/skills/intellij-icon.svg" />
            </div>
          </div>
        </main>
      </Template>
    </div>
  );
}
