export default function Mytasks() {
  return (
    <>
      <div className="bg-[#f3f3f3] px-5 py-10 flex flex-col items-center justify-center font-[Roboto] tracking-wide">
        <div className=" 0 text-xl self-start flex gap-5">
          <a
            className="flex gap-5 font-bold hover:opacity-80"
            href="/projetos"
          >
            <img className="w-5" src="/icons/Arrow 1.svg" /> Voltar
          </a>
        </div>

        <img
          className="mt-5 w-[80%] md:w-[50%] lg:w-[30%]"
          src="/images/mytaskProjetoCompleto.png"
          alt="Imagem logo do projeto"
        />

        <h3 className="space mt-5 px-5">
          O<span className="font-bold text-[#7FBB95]"> Mytasks</span> é um aplicativo todolist simples com o objetivo 
          de cadastrar tarefas de forma <br/> rápida e direta, sendo simples e minimalista.
        </h3>

        <div className="flex flex-col">
          <p className="flex self-start mt-5 font-bold ">
            Características do Projeto
          </p>

          <ul className="flex flex-col gap-2 list-disc px-5 mt-5">
            <li>
              <span className="font-bold text-[#7FBB95]">Tarefas:</span> cadastrar, visualizar, marcar como feito e excluir.
            </li>
          </ul>

          <div className="mt-10 flex flex-col items-center">
            <p className="text-custom-100 self-start text-xl">// Imagens</p>

            <img
              className="mt-5 w-[40%] rounded-2xl shadow-md"
              src="/images/mytaskApp-image2.jpg"
              alt="imagem projeto"
            />
            <img
              className="mt-10 w-[40%] rounded-2xl shadow-md"
              src="/images/mytaskApp-image.jpg"
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
              href="https://github.com/LuizHenri16/mytasks"
              target="_blank"
            >
              LuizHenri16/mytasks
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
