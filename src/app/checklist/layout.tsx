import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checklist Interativo da Mala de Viagem 10kg | Malas Prontas",
  description: "Checklist gratuito e interativo para organizar sua mala de mão 10kg padrão ANAC sem esquecer nada. Dicas de roupas, frascos de 100ml, documentos e eletrônicos.",
  alternates: {
    canonical: "https://malasprontas737.com.br/checklist",
  },
  openGraph: {
    title: "Checklist Interativo da Mala de Viagem 10kg | Malas Prontas",
    description: "Checklist gratuito e interativo para organizar sua mala de mão 10kg padrão ANAC sem esquecer nada. Dicas de roupas, frascos de 100ml, documentos e eletrônicos.",
    url: "https://malasprontas737.com.br/checklist",
    siteName: "Malas Prontas",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
