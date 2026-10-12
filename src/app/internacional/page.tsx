import { Metadata } from "next";
import { POSTS } from "@/data/posts";
import HubTemplate from "@/components/HubTemplate";
import AffiliateBox from "@/components/AffiliateBox";

export const metadata: Metadata = {
  title: "Viagens Internacionais: Roteiros pelo Mundo, Custos em Dólar/Euro e Guias | Malas Prontas",
  description:
    "Roteiros internacionais completos para brasileiros: Peru, Argentina, Tailândia, África do Sul, Europa e EUA com custos reais, seguro viagem, chip eSIM e dicas de imigração.",
  alternates: {
    canonical: "https://malasprontas737.com.br/internacional",
  },
};

export default function InternacionalHubPage() {
  const intlPosts = POSTS.filter((p) => p.region === "Internacional" || p.isPracticalGuide);

  return (
    <HubTemplate
      badge="Hub Global • Destinos Internacionais"
      title="Viagens Internacionais Sem Mistério: Roteiros, Câmbio e Imigração"
      subtitle="Planeje sua expedição pela América do Sul, Europa, África do Sul ou Sudeste Asiático com previsibilidade de gastos em moeda estrangeira e zero dor de cabeça."
      heroImage="/images/destinations/tailandia_bangkok_loha_prasat_capa.jpg"
      posts={intlPosts}
      stats={[
        {
          label: "Antecedência Ideal Internacional",
          value: "90 a 150 dias antes",
          detail: "Garante tarifas aéreas até 35% mais baratas e permite comprar dólar/euro aos poucos mês a mês.",
        },
        {
          label: "Proteção Médica Recomendada",
          value: "€ 30.000 a US$ 60.000+",
          detail: "Obrigatória nos 29 países do Tratado de Schengen (Europa) e indispensável nos EUA, Ásia e América Latina.",
        },
        {
          label: "Conectividade no Pouso",
          value: "Chip Virtual eSIM (US$ 4,50+)",
          detail: "Permite abrir mapas, Uber e comprovantes de hotel assim que o avião toca a pista no exterior.",
        },
      ]}
      tableData={{
        title: "Custos Médios de Viagens Internacionais Saindo do Brasil (Outubro/2026)",
        subtitle: "Comparativo de investimento total estimado para 7 a 10 dias por pessoa (voo + hospedagem + alimentação + passeios):",
        headers: ["Destino Internacional", "Visto p/ Brasileiros?", "Passagem Média (Ida/Volta)", "Gasto Terrestre Diário", "Orçamento Total (8 Dias)"],
        rows: [
          ["Buenos Aires / Bariloche (Argentina)", "Isento (Apenas RG ou Passaporte)", "R$ 1.350 a R$ 2.400", "US$ 65 a US$ 105 / dia", "R$ 3.600 a R$ 5.800"],
          ["Cusco & Machu Picchu (Peru)", "Isento (Apenas RG ou Passaporte)", "R$ 1.650 a R$ 2.750", "US$ 55 a US$ 90 / dia", "R$ 4.100 a R$ 6.300"],
          ["Cidade do Cabo & Kruger (África do Sul)", "Isento até 90 dias (Exige CIVP)", "R$ 3.400 a R$ 5.200", "US$ 65 a US$ 115 / dia", "R$ 6.500 a R$ 9.800"],
          ["Lisboa, Porto & Madri (Europa)", "Isento até 90 dias (Seguro €30k)", "R$ 3.600 a R$ 5.400", "€ 95 a € 145 / dia", "R$ 8.200 a R$ 12.400"],
          ["Bangkok, Chiang Mai & Phi Phi (Tailândia)", "Isento até 90 dias (Exige CIVP)", "R$ 5.800 a R$ 8.100", "US$ 40 a US$ 75 / dia", "R$ 8.100 a R$ 11.600"],
        ],
      }}
      customWidget={<AffiliateBox partnerId="airalo-esim" campaign="hub-internacional" />}
    />
  );
}
