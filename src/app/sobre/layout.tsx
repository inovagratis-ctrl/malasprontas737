import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre o Canal Malas Prontas | Dicas Sinceras e Roteiros Reais",
  description: "Conheça o projeto Malas Prontas, nossa missão de inspirar pessoas a viajar mais gastando menos, e a transparência em nossas recomendações.",
  alternates: {
    canonical: "https://malasprontas737.com.br/sobre",
  },
  openGraph: {
    title: "Sobre o Canal Malas Prontas | Dicas Sinceras e Roteiros Reais",
    description: "Conheça o projeto Malas Prontas, nossa missão de inspirar pessoas a viajar mais gastando menos, e a transparência em nossas recomendações.",
    url: "https://malasprontas737.com.br/sobre",
    siteName: "Malas Prontas",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
