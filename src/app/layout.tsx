import type { Metadata } from "next";
import { Sora, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luiz Henrique - Engenheiro de Software",
  description: "Portfólio de Luiz Henrique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased bg-portfolio`}
      >
        {children}
      </body>
    </html>
  );
}
