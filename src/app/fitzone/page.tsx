export default function () {
  return (
    <>
      <div className="bg-[#f3f3f3] px-5 py-10 flex flex-col items-center justify-center font-[Roboto] tracking-wide text-[#6B3E23]">
        <div className=" 0 text-xl self-start flex gap-10 ">
          <a className="font-bold hover:text-custom-100/80" href="/projetos">
            ← Voltar
          </a>
        </div>

        <img
          className="mt-5 w-[80%] md:w-[50%] lg:w-[30%]"
          src="/images/fitzoneProjetoCompleto.png"
          alt="Imagem logo do projeto"
        />

        <h3 className="space mt-5 px-5">
          O<span className="font-bold"> FitZone</span> é um sistema para
          realizar a gerência de academias.
        </h3>

        <div className="flex flex-col">
          <p className="flex self-start mt-5 font-bold ">
            Características do Projeto
          </p>

          <ul className="flex flex-col gap-2 list-disc px-5 mt-5">
            <li>
              <span className="font-bold">Alunos:</span> cadastrar, editar,
              listar, excluir, cadastrar pagamento de mensalidade
            </li>
            <li>
              <span className="font-bold">Despesas:</span> cadastrar, editar,
              listar e excluir.
            </li>
            <li>
              <span className="font-bold">Financeiro:</span> despesas,
              mensalidade, valor
            </li>
            <li>
              <span className="font-bold">Acesso:</span> cadastrar, editar,
              listar, excluir e login.
            </li>
            <li>
              <span className="font-bold">Permissões:</span> usuários com
              permissões de acesso diferentes.{" "}
            </li>
            <li>
              <span className="font-bold">Segurança:</span> dados sensíveis com
              criptografia no banco de dados.{" "}
            </li>
          </ul>

          <div className="mt-10 flex flex-col items-center">
            <p className="text-custom-100 self-start text-xl">// Imagens</p>

            <img
              className="mt-5 w-[90%]"
              src="/images/TelaInicial.png"
              alt="imagem projeto"
            />
            <img
              className="mt-10 w-[90%] "
              src="/images/TelaListaCadastro.png"
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
              className="md:text-xl"
              href="https://github.com/LuizHenri16/Fitzone"
              target="_blank"
            >
              LuizHenri16/Fitzone
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
