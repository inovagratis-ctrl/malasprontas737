import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simulador de Custos de Viagem: Calcule seu Orçamento | Malas Prontas",
  description: "Calcule o custo total da sua viagem em segundos: passagens aéreas, hospedagem, passeios, alimentação e transporte. Ferramenta 100% gratuita do Malas Prontas.",
  alternates: {
    canonical: "https://malasprontas737.com.br/calculadora-viagem",
  },
  openGraph: {
    title: "Simulador de Custos de Viagem: Calcule seu Orçamento | Malas Prontas",
    description: "Calcule o custo total da sua viagem em segundos: passagens aéreas, hospedagem, passeios, alimentação e transporte. Ferramenta 100% gratuita do Malas Prontas.",
    url: "https://malasprontas737.com.br/calculadora-viagem",
    siteName: "Malas Prontas",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
