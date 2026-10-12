import { Metadata } from "next";
import { POSTS } from "@/data/posts";
import HubTemplate from "@/components/HubTemplate";
import ChecklistWidget from "@/components/ChecklistWidget";
import TravelGearShowcase from "@/components/TravelGearShowcase";

export const metadata: Metadata = {
  title: "Regras de Bagagem ANAC (10kg e 23kg): Medidas, Líquidos e Taxas | Malas Prontas",
  description:
    "Tabelas oficiais de medidas e peso de bagagem de mão (55x35x25 cm - 10kg), item pessoal e mala despachada na Gol, Latam, Azul e voos internacionais.",
  alternates: {
    canonical: "https://malasprontas737.com.br/bagagem",
  },
};

export default function BagagemHubPage() {
  const bagagemPosts = POSTS.filter(
    (p) =>
      p.hubSlug === "bagagem" ||
      p.slug.includes("bagagem") ||
      p.slug.includes("mala") ||
      p.slug.includes("kits-essenciais") ||
      p.slug.includes("aeroporto") ||
      p.slug.includes("criancas")
  );

  return (
    <HubTemplate
      badge="Hub de Utilidade • Normas ANAC & IATA"
      title="Central da Bagagem: Medidas Oficiais (10kg), Líquidos e Como Viajar Leve"
      subtitle="Consulte as tabelas de dimensões das companhias aéreas, o que pode ou não passar no raio-X e organize sua mala sem pagar excesso no aeroporto."
      heroImage="https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=1600&q=80"
      posts={bagagemPosts}
      stats={[
        {
          label: "Mala de Bordo (Padrão ANAC)",
          value: "55 x 35 x 25 cm (Até 10 kg)",
          detail: "Medida total externa incluindo rodinhas, alça e bolsos aceita na cabine da Gol, Latam e Azul.",
        },
        {
          label: "Artigo Pessoal Gratuito",
          value: "40 x 30 x 15 cm (Sob Assento)",
          detail: "Toda passagem dá direito a 1 mochila ou bolsa que caiba embaixo da poltrona da frente.",
        },
        {
          label: "Líquidos na Cabine",
          value: "100 ml (Int.) | 300 ml (Nacional)",
          detail: "Em voos internacionais, frascos de até 100 ml devem ir dentro de 1 saquinho plástico vedado de 1 litro.",
        },
      ]}
      tableData={{
        title: "Tabela Oficial de Medidas e Taxas de Bagagem por Companhia Aérea (Outubro/2026)",
        subtitle: "Confira os limites exatos e a diferença de preço entre comprar bagagem despachada online vs. no balcão do aeroporto:",
        headers: ["Companhia Aérea", "Mala de Mão (10 kg)", "Item Pessoal (Sob Assento)", "Mala Despachada 23 kg (Online)", "Mala Despachada 23 kg (Balcão)"],
        rows: [
          ["GOL Linhas Aéreas", "55 x 35 x 25 cm (Inclusa)", "40 x 30 x 20 cm (Incluso)", "R$ 110 a R$ 145 / trecho", "R$ 180 a R$ 220 / trecho"],
          ["LATAM Airlines", "55 x 35 x 25 cm (Inclusa*)", "45 x 35 x 20 cm (Incluso)", "R$ 115 a R$ 165 / trecho", "R$ 185 a R$ 240 / trecho"],
          ["Azul Linhas Aéreas", "55 x 35 x 25 cm (Inclusa)", "45 x 35 x 20 cm (Incluso)", "R$ 120 a R$ 160 / trecho", "R$ 190 a R$ 230 / trecho"],
          ["TAP / Air France / Iberia", "55 x 40 x 20-23 cm (8 a 10 kg)", "40 x 30 x 15 cm (Incluso)", "US$ 65 a € 75 / trecho (Light)", "€ 90 a € 120 / trecho"],
          ["Low-Costs (Sky / JetSmart / Ryanair)", "Paga à parte na tarifa Zero/Basic", "40 x 25 x 20 cm (Único item grátis)", "US$ 28 a € 45 / trecho", "US$ 65 a € 75 no portão"],
        ],
      }}
      customWidget={
        <div className="space-y-12">
          <ChecklistWidget />
          <TravelGearShowcase />
        </div>
      }
      allowAdSense={false}
    />
  );
}
