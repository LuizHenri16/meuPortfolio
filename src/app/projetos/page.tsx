import { Card, Template } from "@/components";

export default function Projetos() {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center px-5
                            sm:px-4
                            md:px-6
                            lg:px-10 font-[Roboto]"
      >
        <div className=" text-custom-100 mt-5 text-xl self-start flex gap-10 ">
          <a className="font-bold hover:text-custom-100/80" href="/home">
            ← Voltar{" "}
          </a>{" "}
          <p className="">// Projetos</p>
        </div>

        <div
          className="grid grid-cols-1
                                md:grid-cols-2 gap-5
                                lg:gap-10         "
        >
          <Card
            src="/images/fitzoneProjeto.png"
            name="Fitzone"
            resume="Sitema desktop de gerenciamento de academias."
            list=""
            href="/fitzone"
          >
            <div className="grid grid-cols px-4 text-custom-100 text-sm">
              <ul className="">
                <li>● Java</li>
                <li>● Javaswing</li>
              </ul>

              <ul>
                <li>● Hibernate</li>
                <li>● MySQL</li>
              </ul>
            </div>
          </Card>
          <Card
            src="/images/crProjeto.png"
            name="Sistema CR"
            resume="Sitema para cadastro de dados de empresas para consultas rápidas."
            href="/carteirarelacionamento"
          >
            <div className="grid grid-cols-2 px-4 text-custom-100 text-sm">
              <ul>
                <li>● Java</li>
                <li>● Javaswing</li>
              </ul>

              <ul>
                <li>● Hibernate</li>
                <li>● MySQL</li>
              </ul>
            </div>
          </Card>

          <Card
            src="/images/psProjeto.png"
            name="Pascoa Solidária"
            resume="Site para facilitar doações para projetos sociais. "
            href="/home"
          >
            <div className="grid grid-cols-2 px-4">
              <ul>
                <li>● HTML</li>
                <li>● Javascript</li>
              </ul>

              <ul>
                <li>● CSS</li>
                <li>● FiGMA</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
