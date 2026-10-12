import { Metadata } from "next";
import { POSTS } from "@/data/posts";
import HubTemplate from "@/components/HubTemplate";

export const metadata: Metadata = {
  title: "Viagens pelo Brasil: Roteiros Dia a Dia, Custos Reais e Praias | Malas Prontas",
  description:
    "Guia completo para viajar pelo Brasil gastando menos: roteiros detalhados pelo Nordeste, Sul, Amazônia, Chapadas e Sudeste com tabelas de custos atualizadas em Outubro de 2026.",
  alternates: {
    canonical: "https://malasprontas737.com.br/brasil",
  },
};

export default function BrasilHubPage() {
  const brasilPosts = POSTS.filter(
    (p) =>
      p.region !== "Internacional" ||
      p.slug === "como-economizar-na-viagem-sem-cortar-passeios" ||
      p.slug === "hotel-hostel-ou-apartamento-qual-escolher"
  );

  return (
    <HubTemplate
      badge="Hub Regional • Turismo Nacional"
      title="Viagens pelo Brasil: Roteiros Reais, Custos e Melhores Épocas"
      subtitle="Das piscinas naturais de Maragogi e dunas dos Lençóis Maranhenses ao frio da Serra Gaúcha e fervedouros do Jalapão: planeje sua viagem nacional na ponta do lápis."
      heroImage="/images/destinations/lencois_dunas_aerea.jpg"
      posts={brasilPosts}
      stats={[
        {
          label: "Custo Médio Diário no Brasil",
          value: "R$ 240 a R$ 460 / pessoa",
          detail: "Média moderada incluindo pousada/hotel 3★ em quarto duplo, alimentação e passeios (Outubro/2026).",
        },
        {
          label: "Antecedência Ideal de Voos",
          value: "45 a 75 dias antes",
          detail: "Janela estatística de menor preço em rotas domésticas da Gol, Latam e Azul fora de feriados.",
        },
        {
          label: "Documento Obrigatório",
          value: "RG, CNH Física ou Digital",
          detail: "Em voos domésticos você embarca com documento oficial com foto (físico ou app gov.br).",
        },
      ]}
      tableData={{
        title: "Comparativo de Custos Médios por Região do Brasil (Outubro/2026)",
        subtitle: "Estimativa diária por pessoa em perfil econômico a moderado e melhor época climática para evitar chuvas:",
        headers: ["Região Brasileira", "Destaques Principais", "Gasto Médio Diário", "Melhor Época (Seca / Sol)"],
        rows: [
          ["Nordeste (AL, RN, MA, PE, BA)", "Maragogi, Natal, Lençóis, Noronha", "R$ 230 a R$ 450 / dia", "Setembro a Março (Lençóis: Jun a Set)"],
          ["Sul (RS, SC, PR)", "Gramado, Florianópolis, Foz do Iguaçu", "R$ 260 a R$ 480 / dia", "Inverno: Jun-Ago (Serra) | Verão: Dez-Mar (Praias)"],
          ["Norte (AM, PA, TO)", "Manaus, Belém, Jalapão", "R$ 250 a R$ 490 / dia", "Junho a Novembro (Menos chuvas)"],
          ["Centro-Oeste (GO, MS)", "Chapada dos Veadeiros, Bonito", "R$ 270 a R$ 520 / dia", "Maio a Setembro (Águas cristalinas)"],
          ["Sudeste (RJ, MG, SP)", "Rio de Janeiro, Arraial do Cabo, Ouro Preto", "R$ 240 a R$ 440 / dia", "Abril a Outubro (Clima seco e tarifas menores)"],
        ],
      }}
    />
  );
}
