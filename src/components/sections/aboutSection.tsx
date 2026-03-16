export const AboutSection: React.FC = () => {
    return (
        <section className="mt-10 md:mt-20 max-w-[1120px] mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-10">
            <div className="flex flex-col gap-2 md:gap-5">
                <h1 className="font-[Cormorant_Garamond] font-bold text-4xl text-terracota-800 md:text-6xl lg:text-7xl duration-200">Luiz Henrique</h1>
                <p className="font-[Sora] text-sm text-terracota-50 md:text-base lg:text-lg duration-200">Engenheiro de Software</p>
            </div>
            <p className="font-[Sora] text-base text-text2 font-light text-justify md:text-lg md:w-1/2 duration-200">Desenvolvedor Back-end com 2 anos de experiência em Java,
                evoluindo para Full Stack com React. Focado em construir sistemas robustos no lado do servidor e integrá-los a interfaces dinâmicas, escolhendo sempre a melhor tecnologia para cada projeto.
            </p>
        </section>
    )
}