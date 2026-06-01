export const FooterSection = () => {
    return (
        <footer className="mt-16 md:mt-24 max-w-[1120px] mx-auto px-4 pb-8">
            <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-[Sora] text-[0.68rem] text-text3 font-medium">
                    2026 © Luiz Henrique Bastos. Todos os direitos reservados.
                </p>
                <div className="flex gap-3">
                    <FooterLink href="https://github.com/LuizHenri16" label="GitHub" />
                    <FooterLink href="https://www.linkedin.com/in/luiz-henrique-bastos-santana-395922213/" label="LinkedIn link" />
                    <FooterLink href="mailto:lbastos722@gmail.com" label="Contato" />
                </div>
            </div>
        </footer>
    )
}

const FooterLink = ({ href, label }: { href: string; label: string }) => (
    <a href={href} target="_blank" rel="noreferrer" className="font-[Sora] text-[0.68rem] font-semibold text-text3 hover:text-terracota-50 transition-colors duration-200">{label}</a>
)
