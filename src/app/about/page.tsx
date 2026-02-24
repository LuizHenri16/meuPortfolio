import { Template } from "@/components"

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center h-screen font-[Roboto] text-xl font-normal text-terracota-800  ">
            <Template>
                <div className="w-[70%] sm:w-[50%] md:w-[40%] text-center items-center flex flex-col gap-8 mt-10 mb-8" >
                    <p className="">
                        Oi, eu sou Luiz! <strong>Desenvolvedor de Software Full Stack</strong>. Tenho como objetivo
                        criar aplicações que sejam confortáveis para
                        <strong> longos usos</strong> e com uma ótima identidade visual.
                    </p>

                    <p className="">
                        Atualmente, dedico meu tempo aos estudos de <strong>Engenharia de Software</strong>,
                        sempre focado em desenvolver novas soluções técnicas. Tendo interesse no meu serviço,
                        <strong> entre em contato comigo!</strong>
                    </p>
                </div>
            </Template>
        </div>
    )
}