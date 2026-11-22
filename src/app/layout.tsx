import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://malasprontas737.com.br"),
  title: "Malas Prontas 737 | Verificador de Bagagem de Mão, Scanner ANAC & Mala Inteligente",
  description:
    "Portal prático aeronáutico: verifique as medidas da sua mala contra o gabarito oficial da Gol, LATAM, Azul e TAP, consulte o scanner 'Posso Levar Isso no Avião?', simule a regra dos líquidos de 100ml e gere seu checklist de viagem em PDF.",
  keywords: [
    "medidas mala de mao",
    "gabarito anac gol latam azul",
    "posso levar no aviao",
    "powerbank mala despachada",
    "regra dos liquidos 100ml aviao",
    "packpoint brasil",
    "checklist de viagem imprimivel",
    "mala de bordo 10kg",
    "taxa portao embarque mala"
  ],
  authors: [{ name: "Equipe Editorial Malas Prontas 737" }],
  openGraph: {
    title: "Malas Prontas 737 | Suíte Completa de Bagagem & Aviação",
    description: "Verificador de mala por companhia aérea, scanner de itens ANAC, simulador de líquidos de 100ml e gerador de checklist de viagem em PDF.",
    url: "https://malasprontas737.com.br",
    siteName: "Malas Prontas 737",
    type: "website",
    locale: "pt_BR",
  },
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "google-adsense-account": "ca-pub-3922432751903141",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="google-adsense-account" content="ca-pub-3922432751903141" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3922432751903141"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
