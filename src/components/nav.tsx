"use client"

import { NavButton } from "./button/button"

export default function Nav() {
    return (
        <nav className="w-full flex flex-row items-center justify-between glass-bg border-1 glass-bdr p-4
         rounded-3xl backdrop-blur-lg shadow-nav">
            <div className="flex flex-row gap-1">
                <NavButton iconUrl="/icons/iconstack.io - (Linkedin).svg" text="Linkedin" onClick={() => window.open('https://www.linkedin.com/in/luiz-henrique-5a6b3c2d/', '_blank')} />
                <NavButton iconUrl="/icons/iconstack.io - (Github).svg" text="LuizHenri16" onClick={() => window.open('https://github.com/luizhenri16', '_blank')} />
                <NavButton iconUrl="/icons/iconstack.io - (Mail).svg" text="lbastos722@gmail.com" onClick={() => window.open('https://github.com/luizhenrique000', '_blank')} />
            </div>
            <div>
            </div>
        </nav>
    )
}