export default function () {
  return (
    <>
      <div className="bg-[#f3f3f3] px-5 py-10 flex flex-col items-center justify-center font-[Roboto] tracking-wide ">
        <div className=" 0 text-xl self-start flex gap-10 ">
          <a
            className="font-bold hover:text-custom-100/80 text-[#9D5C63]"
            href="/projetos"
          >
            ← Voltar
          </a>
        </div>

        <img
          className="mt-5 w-[80%] md:w-[50%] lg:w-[30%]"
          src="/images/crProjetoCompleto.png"
          alt="Imagem logo do projeto"
        />

        <h3 className="space mt-5 px-5 ">
          O<span className="font-bold text-[#FF7A00]"> Sistema CR </span> tem o
          objetivo de ajudar a centralizar e cadastrar dados para realizar
          acessos rápidos.
        </h3>

        <div className="flex flex-col">
          <p className="flex self-start mt-5 font-bold text-[#FF7A00]">
            Características do Projeto
          </p>

          <ul className="flex flex-col gap-2 list-disc px-5 mt-5">
            <li>
              <span className="font-bold text-[#FF7A00]">Dados Empresa:</span>{" "}
              cadastrar, editar, listar, excluir.
            </li>
            <li>
              <span className="font-bold text-[#FF7A00]">Serviços:</span>{" "}
              cadastrar, editar, listar e excluir.
            </li>
            <li>
              <span className="font-bold text-[#FF7A00]">
                Rating de Crédito:
              </span>{" "}
              cadastrar, editar, listar e excluir.
            </li>
            <li>
              <span className="font-bold text-[#FF7A00]">Consulta:</span>{" "}
              consultas feitas com filtros de acordo com a escolha e permissões
              de usuário.
            </li>
            <li>
              <span className="font-bold text-[#FF7A00]">Permissões:</span>{" "}
              usuários com permissões de acesso diferentes.{" "}
            </li>
            <li>
              <span className="font-bold text-[#FF7A00]">Segurança:</span> dados
              sensíveis com criptografia no banco de dados.{" "}
            </li>
          </ul>

          <div className="mt-10 flex flex-col items-center">
            <p className="text-custom-100 self-start text-xl">// Imagens</p>

            <img
              className="mt-10 w-[90%] "
              src="/images/crProjetoTelaInicial.png"
              alt="imagem projeto"
            />
          </div>

          <div className="hover:opacity-80 cursor-pointer ml-2 flex mt-5 gap-2">
            <img
              className="w-8"
              src="/icons/github-icon.svg"
              alt="iconeGithub"
            />
            <a
              className="md:text-xl text-[#9D5C63]"
              href="https://github.com/LuizHenri16"
              target="_blank"
            >
              LuizHenri16/CRSystem
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
