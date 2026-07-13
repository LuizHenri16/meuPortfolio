import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Luiz Henrique - Engenheiro de Software",
  description:
    "Portfólio de Luiz Henrique Bastos — Desenvolvedor Full Stack com experiência em Java, Spring Boot, NestJS, React e Next.js. 3+ anos construindo produtos completos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${archivo.variable} bg-white min-h-screen`}>
      <body className="antialiased font-sans text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-primary focus:brutal-border focus:brutal-shadow-sm focus:text-sm focus:font-bold"
        >
          Pular para o conteúdo
        </a>
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
