import { Metadata } from "next";
import { POSTS } from "@/data/posts";
import HubTemplate from "@/components/HubTemplate";
import DocumentCheckerWidget from "@/components/DocumentCheckerWidget";

export const metadata: Metadata = {
  title: "Primeira Viagem Internacional: Guia Completo Passo a Passo do Zero | Malas Prontas",
  description:
    "Vai viajar para o exterior pela primeira vez? Confira o passo a passo de passaporte, destinos sem visto, entrevista de imigração, câmbio, bagagem de 10kg e seguro viagem.",
  alternates: {
    canonical: "https://malasprontas737.com.br/primeira-viagem-internacional",
  },
};

export default function PrimeiraViagemInternacionalHubPage() {
  const starterPosts = POSTS.filter(
    (p) =>
      p.slug.includes("primeira-viagem-internacional") ||
      p.slug.includes("custo-total-viagem-internacional") ||
      p.slug.includes("bagagem-de-mao") ||
      p.slug.includes("seguro-viagem") ||
      p.slug.includes("taxas-inesperadas-no-aeroporto") ||
      p.slug.includes("buenos-aires") ||
      p.slug.includes("peru") ||
      p.slug.includes("bariloche")
  );

  return (
    <HubTemplate
      badge="Guia do Estreante • Do Zero ao Embarque"
      title="Primeira Viagem Internacional: Tudo o Que Você Precisa Saber Antes de Embarcar"
      subtitle="Perder o medo da imigração, da conexão no aeroporto e do câmbio é mais simples do que parece quando você segue um roteiro estruturado etapa por etapa."
      heroImage="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80"
      posts={starterPosts}
      stats={[
        {
          label: "Passo 1: Documento",
          value: "RG (<10 anos) ou Passaporte",
          detail: "No Mercosul basta o RG original recente; para Europa, Ásia e África, emita o passaporte na Polícia Federal.",
        },
        {
          label: "Passo 2: Pastinha Impressa",
          value: "Voo Volta + Hotel + Seguro",
          detail: "Ter os comprovantes impressos em papel elimina 99% do nervosismo no guichê de imigração.",
        },
        {
          label: "Passo 3: Meios de Pagamento",
          value: "80% Conta Global + 20% Espécie",
          detail: "Mais seguro e até 6% mais barato em IOF/spread do que usar apenas cartão de crédito tradicional.",
        },
      ]}
      tableData={{
        title: "Checklist Regressivo para sua Primeira Viagem ao Exterior (Outubro/2026)",
        subtitle: "Siga esta ordem cronológica para não esquecer nada e pagar mais barato em cada etapa:",
        headers: ["Prazo Antes do Voo", "O Que Resolver Nesta Etapa", "Onde Fazer Oficialmente", "Custo Estimado"],
        rows: [
          ["6 a 4 Meses Antes", "Emitir Passaporte ou verificar data de expedição do RG", "Site da Polícia Federal (gov.br/pf) ou Poupatempo", "Passaporte: R$ 257,25 (Taxa GRU)"],
          ["4 a 3 Meses Antes", "Comprar passagens aéreas (Ida e Volta no mesmo localizador)", "Comparadores verificados / Cias aéreas", "R$ 1.350 (Mercosul) a R$ 4.200 (Europa)"],
          ["3 a 2 Meses Antes", "Reservar hospedagem com Cancelamento Grátis e nota 8.0+", "Booking.com / Stay22", "A partir de US$ 45 a US$ 110 / noite"],
          ["30 Dias Antes", "Tomar vacina de Febre Amarela (se exigida) e emitir CIVP", "Posto de saúde + App Meu SUS Digital", "100% Gratuito pelo SUS"],
          ["15 a 5 Dias Antes", "Contratar Seguro Viagem, ativar eSIM e imprimir comprovantes", "Ekta Seguro + Airalo eSIM", "Seguro: ~R$ 14/dia | eSIM: ~US$ 6"],
        ],
      }}
      customWidget={<DocumentCheckerWidget />}
    />
  );
}
