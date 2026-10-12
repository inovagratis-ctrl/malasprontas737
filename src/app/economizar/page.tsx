import { Metadata } from "next";
import { POSTS } from "@/data/posts";
import HubTemplate from "@/components/HubTemplate";
import AccommodationComparator from "@/components/AccommodationComparator";

export const metadata: Metadata = {
  title: "Como Economizar na Viagem Sem Cortar Passeios: Guia Financeiro | Malas Prontas",
  description:
    "Aprenda a reduzir até 35% do custo total da sua viagem cortando taxas invisíveis, escolhendo a hospedagem certa, viajando na meia-estação e evitando armadilhas em aeroportos.",
  alternates: {
    canonical: "https://malasprontas737.com.br/economizar",
  },
};

export default function EconomizarHubPage() {
  const economyPosts = POSTS.filter(
    (p) =>
      p.hubSlug === "economizar" ||
      p.budgetLevel === "$" ||
      p.category === "Mochilão" ||
      p.slug.includes("baratos") ||
      p.slug.includes("mercadinho")
  );

  return (
    <HubTemplate
      badge="Hub de Utilidade • Economia Inteligente"
      title="Como Economizar na Viagem Sem Cortar os Passeios Mais Importantes"
      subtitle="Cortar gastos invisíveis (bagagem, câmbio caro, taxas de limpeza e restaurantes pega-turista) é o segredo para viajar com conforto gastando até 35% menos."
      heroImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1600&q=80"
      posts={economyPosts}
      stats={[
        {
          label: "Economia na Meia-Estação",
          value: "-30% a -45% em Voos e Hotéis",
          detail: "Viajar em Abril, Maio, Setembro, Outubro ou Novembro reduz custos drasticamente com clima excelente.",
        },
        {
          label: "Economia na Mala 10kg",
          value: "R$ 240 a R$ 800 por Casal",
          detail: "Viajar apenas com mala de bordo padrão ANAC + mochila pessoal elimina taxas de despacho.",
        },
        {
          label: "Regra das 3 Quadras",
          value: "-40% na Alimentação Diária",
          detail: "Almoçar o menu executivo a 3 quadras da praça turística principal entrega comida melhor pela metade do preço.",
        },
      ]}
      tableData={{
        title: "Onde Cortar Gastos vs. Onde Nunca Economizar (Outubro/2026)",
        subtitle: "Veja como remanejar seu orçamento para aproveitar todas as atrações principais sem dívidas:",
        headers: ["Categoria", "Onde Cortar Sem Perder Qualidade", "Economia Média", "Onde NUNCA Economizar"],
        rows: [
          ["Passagens & Bagagem", "Voar terça/quarta/sábado apenas com mala de 10kg", "R$ 450 a R$ 950", "Não comprar conexões separadas com menos de 2h"],
          ["Hospedagem", "Usar o comparador abaixo (Hotel vs. Flat por nº de noites)", "R$ 300 a R$ 850", "Nunca ficar em bairro inseguro ou longe de transporte"],
          ["Alimentação", "Café forte no hotel + Menu Executivo no almoço + Mercadinho", "R$ 500 a R$ 1.100", "Reservar pelo menos 1 jantar típico especial do destino"],
          ["Câmbio & Cartões", "Usar Conta Global (IOF reduzido e câmbio comercial)", "4% a 6% do total", "Nunca viajar para o exterior sem Seguro Viagem válido"],
        ],
      }}
      customWidget={<AccommodationComparator />}
    />
  );
}
