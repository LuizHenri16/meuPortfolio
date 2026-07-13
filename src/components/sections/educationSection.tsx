export const EducationSection: React.FC = () => {
    return (
        <section id="educacao" className="mt-10 md:mt-20 max-w-[1120px] mx-auto px-4">
            {/* Section header */}
            <div className="flex items-center gap-3 mb-8">
                <h2 className="brutal-section-title">
                    <span aria-hidden="true" className="deco-star">✦</span>
                    Educação
                </h2>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <EducationCard
                    icon="🎓"
                    course="Bacharelado em Engenharia de Software"
                    institution="Faculdade Digital Descomplica"
                    status="ongoing"
                    date="Previsão: dez/2030"
                    description="Formação superior com foco em fundamentos de engenharia, arquitetura de software, qualidade e metodologias ágeis."
                    accentColor="#5C6BF5"
                />
                <EducationCard
                    icon="📜"
                    course="Técnico em Desenvolvimento de Sistemas"
                    institution="SENAC EAD"
                    status="done"
                    date="Concluído: dez/2025"
                    description="Curso técnico com ênfase em lógica de programação, banco de dados, desenvolvimento web e boas práticas de código."
                    accentColor="#22C55E"
                />
            </div>
        </section>
    )
}

type EducationCardProps = {
    icon: string
    course: string
    institution: string
    status: "ongoing" | "done"
    date: string
    description: string
    accentColor: string
}

const EducationCard = ({
    icon,
    course,
    institution,
    status,
    date,
    description,
    accentColor,
}: EducationCardProps) => {
    return (
        <article className="brutal-card brutal-card-hover p-6 flex flex-col gap-4 relative overflow-hidden">
            {/* Accent bar on top */}
            <div
                className="absolute top-0 left-0 w-full h-[4px]"
                style={{ background: accentColor }}
                aria-hidden="true"
            />

            {/* Header row */}
            <div className="flex items-start justify-between gap-3 mt-1">
                <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 brutal-border"
                    style={{ background: `${accentColor}18` }}
                    aria-hidden="true"
                >
                    {icon}
                </div>
                <div className="flex-1" />
                {status === "ongoing" ? (
                    <span className="edu-badge-ongoing">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFC857] inline-block" />
                        Em curso
                    </span>
                ) : (
                    <span className="edu-badge-done">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] inline-block" />
                        Concluído
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1.5">
                <h3 className="font-sans font-black text-lg text-ink leading-snug">
                    {course}
                </h3>
                <p className="font-sans text-sm font-semibold text-muted">
                    {institution}
                </p>
            </div>

            <p className="font-sans text-sm text-ink font-[400] leading-relaxed">
                {description}
            </p>

            {/* Footer — date */}
            <div
                className="mt-auto pt-3 border-t-2 border-ink flex items-center gap-2"
            >
                <span
                    className="font-sans text-[0.7rem] font-bold uppercase tracking-wider"
                    style={{ color: accentColor }}
                >
                    {date}
                </span>
            </div>
        </article>
    )
}
