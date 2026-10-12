import { Metadata } from "next";
import { POSTS } from "@/data/posts";
import HubTemplate from "@/components/HubTemplate";
import DocumentCheckerWidget from "@/components/DocumentCheckerWidget";

export const metadata: Metadata = {
  title: "América do Sul: Roteiros por Peru, Argentina, Chile e Mercosul Apenas com RG | Malas Prontas",
  description:
    "Planeje sua viagem pela América do Sul sem precisar de passaporte ou visto: roteiros completos para Machu Picchu (Peru), Bariloche, Buenos Aires e Atacama com custos em reais.",
  alternates: {
    canonical: "https://malasprontas737.com.br/america-do-sul",
  },
};

export default function AmericaDoSulHubPage() {
  const southAmericaPosts = POSTS.filter(
    (p) =>
      p.slug.includes("peru") ||
      p.slug.includes("bariloche") ||
      p.slug.includes("buenos-aires") ||
      p.slug.includes("foz-do-iguacu") ||
      p.slug.includes("primeira-viagem-internacional") ||
      p.slug.includes("custo-total-viagem-internacional") ||
      p.slug.includes("seguro-viagem")
  );

  return (
    <HubTemplate
      badge="Hub Regional • Mercosul & Andes"
      title="América do Sul: Viaje para o Exterior Apenas com o RG"
      subtitle="De Machu Picchu e Cusco no Peru à neve de Bariloche e o charme portenho de Buenos Aires: descubra os destinos internacionais mais econômicos e próximos do Brasil."
      heroImage="/images/destinations/peru_machu_picchu_capa.jpg"
      posts={southAmericaPosts}
      stats={[
        {
          label: "Documentação Exigida",
          value: "Apenas RG (< 10 anos) ou Passaporte",
          detail: "Pelo acordo do Mercosul, brasileiros entram na Argentina, Chile, Peru, Uruguai e Colômbia apenas com o RG físico original.",
        },
        {
          label: "Voo Médio Ida e Volta",
          value: "R$ 1.290 a R$ 2.550",
          detail: "Tarifas médias saindo do Sudeste/Sul para Buenos Aires, Santiago e Lima (Consultado em Outubro/2026).",
        },
        {
          label: "Orçamento Diário Médio",
          value: "US$ 55 a US$ 95 / dia",
          detail: "Excelente custo-benefício para gastronomia, vinhos, passeios guiados e hotéis 3-4 estrelas.",
        },
      ]}
      tableData={{
        title: "Comparativo de Destinos na América do Sul para Brasileiros (Outubro/2026)",
        subtitle: "Veja os requisitos de entrada, moeda ideal para levar e custo médio por pessoa:",
        headers: ["Destino", "Documento Aceito", "Vacina CIVP Exigida?", "Moeda & Pagamento Recomendado", "Gasto Médio Diário"],
        rows: [
          ["Peru (Cusco, Lima, Machu Picchu)", "RG (<10 anos) ou Passaporte", "Recomendada p/ áreas de selva", "Cartão Global + Dólar p/ trocar por Soles", "US$ 55 a US$ 90 / dia"],
          ["Argentina (Buenos Aires, Bariloche)", "RG (<10 anos) ou Passaporte", "Não exigida", "Cartão Global (Câmbio MEP) + Dólar espécie", "US$ 65 a US$ 110 / dia"],
          ["Chile (Santiago, Atacama, Valle Nevado)", "RG (<10 anos) ou Passaporte", "Não exigida", "Cartão de Débito Internacional (Aceito em tudo)", "US$ 75 a US$ 125 / dia"],
          ["Uruguai (Montevidéu, Punta, Colônia)", "RG (<10 anos) ou Passaporte", "Não exigida", "Cartão Internacional (Devolução de IVA em restaurantes)", "US$ 70 a US$ 115 / dia"],
        ],
      }}
      customWidget={<DocumentCheckerWidget />}
    />
  );
}
