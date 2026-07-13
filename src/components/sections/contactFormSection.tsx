"use client"

import { useState } from "react"

type FormState = "idle" | "sending" | "sent"

export const ContactFormSection: React.FC = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [formState, setFormState] = useState<FormState>("idle")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setFormState("sending")

        const subject = encodeURIComponent(`Contato via Portfólio — ${name}`)
        const body = encodeURIComponent(
            `Olá Luiz,\n\nMeu nome é ${name} e meu e-mail é ${email}.\n\n${message}\n\n—\nEnviado pelo formulário do portfólio.`
        )

        // Small delay for UX feedback before opening mailto
        setTimeout(() => {
            window.open(`mailto:lbastos722@gmail.com?subject=${subject}&body=${body}`)
            setFormState("sent")
            setName("")
            setEmail("")
            setMessage("")
        }, 600)
    }

    return (
        <section id="contato" className="relative mt-10 md:mt-20 max-w-[1120px] mx-auto px-4 overflow-hidden">

            {/* Background blur orb */}
            <div
                aria-hidden="true"
                className="absolute -bottom-10 right-0 w-80 h-80 rounded-full bg-[#5C6BF5] opacity-[0.08] blur-3xl pointer-events-none"
            />
            <div
                aria-hidden="true"
                className="absolute top-0 -left-10 w-56 h-56 rounded-full bg-[#FFC857] opacity-[0.10] blur-3xl pointer-events-none"
            />
            {/* Section header */}
            <h2 className="brutal-section-title">
                <span aria-hidden="true" className="deco-star">✦</span>
                Contato
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start">

                {/* Left — call to action text */}
                <div className="md:col-span-2 flex flex-col gap-5">
                    <p className="font-sans text-2xl font-black text-ink leading-snug tracking-tight">
                        Vamos construir algo{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10">incrível</span>
                            <span
                                aria-hidden="true"
                                className="absolute left-0 bottom-0.5 w-full h-[10px] bg-[#5C6BF5] opacity-25 -z-0 rounded"
                            />
                        </span>{" "}
                        juntos?
                    </p>
                    <p className="font-sans text-sm text-muted font-[400] leading-relaxed">
                        Disponível para freelas, jobs e colaborações. Preencha o formulário ao lado e seu cliente de e-mail irá abrir com a mensagem já formatada.
                    </p>

                    {/* Contact chips */}
                    <div className="flex flex-col gap-2 mt-2">
                        <InfoChip label="lbastos722@gmail.com" href="mailto:lbastos722@gmail.com" />
                        <InfoChip label="github.com/LuizHenri16" href="https://github.com/LuizHenri16" />
                        <InfoChip label="linkedin.com/in/luizhenrique-dev16" href="https://www.linkedin.com/in/luizhenrique-dev16/" />
                    </div>
                </div>

                {/* Right — form */}
                <div className="md:col-span-3">
                    {formState === "sent" ? (
                        <SuccessState onReset={() => setFormState("idle")} />
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="brutal-card bg-white/80 backdrop-blur-md p-6 md:p-8 flex flex-col gap-5"
                            noValidate
                        >
                            {/* Name + Email row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <FormField
                                    id="contact-name"
                                    label="Seu nome"
                                    type="text"
                                    value={name}
                                    onChange={setName}
                                    placeholder="João Silva"
                                    required
                                />
                                <FormField
                                    id="contact-email"
                                    label="Seu e-mail"
                                    type="email"
                                    value={email}
                                    onChange={setEmail}
                                    placeholder="joao@email.com"
                                    required
                                />
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-1.5">
                                <label
                                    htmlFor="contact-message"
                                    className="font-sans text-[0.72rem] font-bold text-ink uppercase tracking-wider"
                                >
                                    Mensagem <span className="text-[#5C6BF5]">*</span>
                                </label>
                                <textarea
                                    id="contact-message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Olá Luiz, tenho um projeto e gostaria de conversar..."
                                    required
                                    rows={5}
                                    className="font-sans text-sm text-ink bg-[#F5F0EB] brutal-border px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-[#5C6BF5] focus:ring-offset-1 transition-shadow"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={formState === "sending"}
                                id="contact-submit-btn"
                                className="brutal-btn-primary font-sans font-bold text-sm px-6 py-3 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                            >
                                {formState === "sending" ? (
                                    <>
                                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Abrindo e-mail...
                                    </>
                                ) : (
                                    <>
                                        Enviar mensagem
                                        <span aria-hidden="true">→</span>
                                    </>
                                )}
                            </button>

                            <p className="font-sans text-[0.62rem] text-muted text-center">
                                Ao enviar, seu cliente de e-mail será aberto com a mensagem pré-formatada.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}

/* ── Sub-components ──────────────────────────────────────── */

const FormField = ({
    id,
    label,
    type,
    value,
    onChange,
    placeholder,
    required,
}: {
    id: string
    label: string
    type: string
    value: string
    onChange: (v: string) => void
    placeholder: string
    required?: boolean
}) => (
    <div className="flex flex-col gap-1.5">
        <label
            htmlFor={id}
            className="font-sans text-[0.72rem] font-bold text-ink uppercase tracking-wider"
        >
            {label} {required && <span className="text-[#5C6BF5]">*</span>}
        </label>
        <input
            id={id}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            required={required}
            className="font-sans text-sm text-ink bg-[#F5F0EB] brutal-border px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#5C6BF5] focus:ring-offset-1 transition-shadow"
        />
    </div>
)

const InfoChip = ({ label, href }: { label: string; href: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="font-sans text-xs font-semibold text-ink bg-white brutal-border brutal-shadow-sm px-3 py-2 hover:brutal-shadow-hover transition-all duration-150 truncate"
    >
        {label}
    </a>
)

const SuccessState = ({ onReset }: { onReset: () => void }) => (
    <div className="brutal-card p-8 flex flex-col items-center justify-center gap-5 text-center min-h-[280px]">
        <div className="w-16 h-16 rounded-full bg-[#DCFCE7] brutal-border flex items-center justify-center text-3xl">
            ✓
        </div>
        <div>
            <p className="font-sans font-black text-xl text-ink">Tudo pronto!</p>
            <p className="font-sans text-sm text-muted mt-1">
                Seu e-mail está pronto para envio. Verifique seu cliente de e-mail.
            </p>
        </div>
        <button
            onClick={onReset}
            id="contact-reset-btn"
            className="brutal-btn font-sans text-sm font-bold px-5 py-2"
        >
            Enviar outra mensagem
        </button>
    </div>
)
