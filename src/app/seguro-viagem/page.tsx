import { Metadata } from "next";
import { POSTS } from "@/data/posts";
import HubTemplate from "@/components/HubTemplate";
import AffiliateBox from "@/components/AffiliateBox";

export const metadata: Metadata = {
  title: "Seguro Viagem 2026: Comparativo de Coberturas, Preços e Regras Schengen | Malas Prontas",
  description:
    "Compare seguros viagem para Europa (€ 30.000 obrigatórios), Estados Unidos, América do Sul e Brasil. Entenda DMHO, franquias, seguro do cartão de crédito e preços reais.",
  alternates: {
    canonical: "https://malasprontas737.com.br/seguro-viagem",
  },
};

export default function SeguroViagemHubPage() {
  const insurancePosts = POSTS.filter(
    (p) =>
      p.hubSlug === "seguro-viagem" ||
      p.slug.includes("seguro-viagem") ||
      p.slug.includes("primeira-viagem-internacional") ||
      p.slug.includes("custo-total-viagem-internacional") ||
      p.region === "Internacional"
  );

  return (
    <HubTemplate
      badge="Hub de Proteção • Comparativo Independente"
      title="Seguro Viagem: Como Escolher a Cobertura Certa Sem Pagar Mais Caro"
      subtitle="Entenda quanto de Despesa Médica Hospitalar (DMHO) contratar para cada país, onde a apólice é exigida na imigração e quando o seguro do cartão de crédito é suficiente."
      heroImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80"
      posts={insurancePosts}
      allowAdSense={false}
      stats={[
        {
          label: "Europa (Tratado de Schengen)",
          value: "Mínimo € 30.000 Obrigatório",
          detail: "Exigência legal para entrar em Portugal, Espanha, França, Itália, Alemanha e mais 24 países europeus.",
        },
        {
          label: "EUA, Canadá & Ásia",
          value: "US$ 60.000 a US$ 150.000",
          detail: "Recomendação técnica devido ao altíssimo custo de pronto-socorro e internação hospitalar privada.",
        },
        {
          label: "Custo Médio Consultados (Out/2026)",
          value: "R$ 9,90 a R$ 28,00 / dia",
          detail: "Menos de 2% do orçamento da viagem para proteger contra despesas médicas de centenas de milhares de reais.",
        },
      ]}
      tableData={{
        title: "Comparativo Técnico: Seguro Viagem Avulso Dedicado vs. Seguro do Cartão de Crédito (Outubro/2026)",
        subtitle: "Veja de forma transparente quando usar o benefício gratuito do cartão Black/Infinite e quando contratar apólice dedicada:",
        headers: ["Critério de Avaliação", "Seguro Viagem Dedicado (Ex: Ekta / Vai de Promo)", "Seguro Gratuito do Cartão (Visa Infinite / Mastercard Black)", "Alternativa Pública (CDAM / PB4)"],
        rows: [
          ["Condição para Ter Direito", "Qualquer viajante (basta contratar online antes de embarcar)", "Exige ter pago 100% da passagem aérea com o cartão elegível e emitir bilhete antes do voo", "Gratuito no gov.br apenas para Portugal, Itália e Cabo Verde (Acordo INSS)"],
          ["Cobertura para Acompanhantes", "Cobre qualquer pessoa incluída na apólice (amigos, namorados, pais, tios)", "Restrito geralmente ao titular, cônjuge legal e filhos dependentes conforme regra da bandeira", "Individual por CPF cadastrado no gov.br"],
          ["Atendimento em Emergência", "Central 24h via WhatsApp/App com indicação direta de hospital sem desembolso", "Exige abrir chamado na central internacional da bandeira antes de qualquer atendimento", "Atendimento apenas na rede pública estatal do país conveniado"],
          ["Traslado Médico e Regresso Sanitário", "Incluso em 100% das apólices internacionais", "Incluso conforme limites da apólice da bandeira", "NÃO inclui traslado de corpo nem repatriação sanitária em UTI aérea"],
          ["Faixa de Preço (Outubro/2026)", "A partir de R$ 9,90 a R$ 28,00 por dia de viagem", "R$ 0 adicional (embutido na anuidade do cartão Black/Infinite)", "100% Gratuito (Mas não substitui seguro completo para repatriação/bagagem)"],
        ],
      }}
      customWidget={
        <AffiliateBox
          partnerId="ekta-seguro"
          title="Recomendação Técnica de Seguro Viagem Internacional (Ekta)"
          campaign="hub-seguro-viagem"
        />
      }
    />
  );
}
