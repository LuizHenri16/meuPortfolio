import { Template } from "@/components"

export default function About() {
    return (
        <>

        <div className="flex flex-col items-center justify-center h-screen font-[Roboto] text-xl font-normal text-custom-100  ">
            <Template>
                <div className="w-[70%] sm:w-[50%] md:w-[40%] text-center items-center flex flex-col gap-8 mt-10 mb-8" >
                    <p className="">
                    Oi, eu sou Luiz! <strong>Desenvolvedor de Software</strong>, com
                    foco no desenvolvimento <strong>Java</strong>. Tenho como objetivo
                    criar aplicações que sejam confortáveis para
                    <strong> longos usos</strong> e com uma ótima identidade visual.
                 </p>

                 <p className=" ">
                   Para passar o tempo costumo ler, aprender algo novo, pilotar
                   virtualmente e escutar música. Tendo o interesse de me conhecer,
                   <strong> entre em contato comigo!</strong>
                 </p>
                </div>
            </Template>
        </div>
        </>
    )
}