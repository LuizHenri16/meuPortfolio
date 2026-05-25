'use client'

import { NavButton } from "./button/button"

export default function Nav() {
    return (
        <nav className="w-full flex flex-row items-center justify-between glass-bg border-1 glass-bdr p-4
         rounded-3xl backdrop-blur-lg shadow-nav lg:p-5">
            <div className="flex flex-row gap-1">
                <NavButton iconUrl="/icons/iconstack.io - (Linkedin).svg" text="Linkedin" onClick={() => window.open('https://www.linkedin.com/in/luiz-bastos-395922213/', '_blank')} />
                <NavButton iconUrl="/icons/iconstack.io - (Github).svg" text="LuizHenri16" onClick={() => window.open('https://github.com/LuizHenri16', '_blank')} />
                <NavButton iconUrl="/icons/iconstack.io - (Mail).svg" text="lbastos722@gmail.com" onClick={() => window.open('mailto:lbastos722@gmail.com', '_blank')} />
            </div>
            <a
                href="#projetos"
                className="hidden md:flex items-center gap-1.5 text-[0.72rem] font-semibold font-[Sora] text-terracota-50 hover:text-terracota-800 transition-colors duration-200"
            >
                Ver projetos
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
            </a>
        </nav>
    )
}
