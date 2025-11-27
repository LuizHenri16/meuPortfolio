"use client";
import { Skillcard, Template } from "@/components";

export default function Skills() {
  return (
      <div className="w-[100%] flex flex-col justify-center items-center h-screen">
        <Template>
          <main className="flex flex-col justify-center items-center gap-8 mt-5 mb-5">
            <div className="flex flex-col items-center gap-4">
              <h2 className="px-2 py-1 rounded-lg bg-custom-100 text-white">Linguagens de Programação</h2>

              <div className="w-full flex items-center justify-center gap-4">
                <Skillcard name="Java" alt="icone do java" icon="/icons/skills/java-icon.svg" />
                <Skillcard name="Javascript" alt="teste" icon="/icons/skills/javascript-icon.svg" />
                <Skillcard name="Typescript" alt="icone do typescript" icon="/icons/skills/typescript-icon.svg" />
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <h2 className="px-2 py-1 rounded-lg bg-custom-100 text-white">Frontend</h2>

              <div className="w-full flex items-center justify-center gap-4">
                <Skillcard name="React" alt="icone do java" icon="/icons/skills/react-icon.svg" />
                <Skillcard name="TailwindCSS" alt="teste" icon="/icons/skills/tailwindcss-icon.svg" />
                <Skillcard name="HTML/CSS" alt="icone do typescript" icon="/icons/skills/htmlcss-icon.svg" />
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <h2 className="px-2 py-1 rounded-lg bg-custom-100 text-white">Backend e Banco de Dados</h2>

              <div className="w-full flex items-center justify-center gap-4">
                <Skillcard name="Spring Boot" alt="icone do java" icon="/icons/skills/springboot-icon.svg" />
                <Skillcard name="MySQL" alt="teste" icon="/icons/skills/mysql-icon.svg" />
                <Skillcard name="PostgreSQL" alt="icone do typescript" icon="/icons/github-icon.svg" />
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <h2 className="px-2 py-1 rounded-lg bg-custom-100 text-white">Ferramentas</h2>

              <div className="w-full flex items-center justify-center gap-4">
                <Skillcard name="VS Code" alt="icone do java" icon="/icons/skills/vscode-icon.svg" />
                <Skillcard name="GIT/GITHUB" alt="teste" icon="/icons/skills/github-icon.svg" />
                <Skillcard name="Intellij" alt="icone do typescript" icon="/icons/skills/intellij-icon.svg" />
              </div>
            </div>
          </main>
        </Template>
      </div>
  );
}
