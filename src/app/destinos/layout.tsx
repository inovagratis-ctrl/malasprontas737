import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinos & Roteiros de Viagem no Brasil e no Mundo | Malas Prontas",
  description: "Explore nossos roteiros completos dia a dia, dicas reais de passeios, melhor época para viajar e custos detalhados para os melhores destinos do Brasil e do mundo.",
  alternates: {
    canonical: "https://malasprontas737.com.br/destinos",
  },
  openGraph: {
    title: "Destinos & Roteiros de Viagem no Brasil e no Mundo | Malas Prontas",
    description: "Explore nossos roteiros completos dia a dia, dicas reais de passeios, melhor época para viajar e custos detalhados para os melhores destinos do Brasil e do mundo.",
    url: "https://malasprontas737.com.br/destinos",
    siteName: "Malas Prontas",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
