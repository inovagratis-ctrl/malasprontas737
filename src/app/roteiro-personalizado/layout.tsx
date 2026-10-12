import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gerador de Roteiro de Viagem com Inteligência Artificial | Malas Prontas",
  description: "Crie seu roteiro sob medida dia a dia com horários, atrações e dicas de economia usando nossa IA especializada em viagens.",
  alternates: {
    canonical: "https://malasprontas737.com.br/roteiro-personalizado",
  },
  openGraph: {
    title: "Gerador de Roteiro de Viagem com Inteligência Artificial | Malas Prontas",
    description: "Crie seu roteiro sob medida dia a dia com horários, atrações e dicas de economia usando nossa IA especializada em viagens.",
    url: "https://malasprontas737.com.br/roteiro-personalizado",
    siteName: "Malas Prontas",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
