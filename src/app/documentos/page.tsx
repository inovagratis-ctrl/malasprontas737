import { Metadata } from "next";
import { POSTS } from "@/data/posts";
import HubTemplate from "@/components/HubTemplate";
import DocumentCheckerWidget from "@/components/DocumentCheckerWidget";

export const metadata: Metadata = {
  title: "Documentos para Viajar (Brasil, Mercosul, Europa e EUA): Guia Oficial | Malas Prontas",
  description:
    "Lista interativa de documentos exigidos por tipo de viagem: RG com menos de 10 anos no Mercosul, Passaporte na Polícia Federal, vacina CIVP Anvisa e Autorização de Menores CNJ.",
  alternates: {
    canonical: "https://malasprontas737.com.br/documentos",
  },
};

export default function DocumentosHubPage() {
  const docPosts = POSTS.filter(
    (p) =>
      p.hubSlug === "documentos" ||
      p.hubSlug === "primeira-viagem-internacional" ||
      p.slug.includes("criancas") ||
      p.slug.includes("primeira-viagem-internacional") ||
      p.slug.includes("alugar-um-carro") ||
      p.region === "Internacional"
  );

  return (
    <HubTemplate
      badge="Hub de Utilidade • Polícia Federal, ANAC, CNJ e Anvisa"
      title="Documentos para Viajar: Passaporte, RG no Mercosul, Vacinas e Menores"
      subtitle="Não corra o risco de ser impedido de embarcar no check-in: consulte a lista interativa de documentos exigidos para destinos no Brasil, América do Sul, Europa, EUA e Ásia."
      heroImage="https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&w=1600&q=80"
      posts={docPosts}
      stats={[
        {
          label: "Regra do RG no Mercosul",
          value: "Apenas RG Físico (< 10 Anos)",
          detail: "CNH NÃO é aceita para cruzar fronteiras na Argentina, Chile, Peru ou Uruguai. Leve RG original recente ou Passaporte.",
        },
        {
          label: "Emissão de Passaporte (PF)",
          value: "Taxa GRU R$ 257,25 (Validade 10 Anos)",
          detail: "Para adultos maiores de 18 anos. Crianças têm validade escalonada de 1 a 4 anos conforme a faixa etária.",
        },
        {
          label: "Certificado Anvisa (CIVP)",
          value: "Vacina 10 Dias Antes do Voo",
          detail: "A vacina de Febre Amarela deve ser tomada no mínimo 10 dias antes do embarque; o CIVP sai grátis no app Meu SUS Digital.",
        },
      ]}
      tableData={{
        title: "Resumo Oficial de Documentação por Tipo de Viagem (Outubro/2026)",
        subtitle: "Conferência rápida baseada nas normas da ANAC, Polícia Federal, CNJ e Itamaraty:",
        headers: ["Tipo de Viagem", "Documento Principal", "Menores Desacompanhados de 1 dos Pais", "Vacina CIVP / Seguro Obrigatório"],
        rows: [
          ["Voos Nacionais (Brasil)", "RG, CNH (Física/App gov.br) ou Passaporte (Menores <16: Certidão ou RG)", "Menores de 16 anos viajam com 1 dos pais, avós ou tios sem autorização extra", "Não exigidos no embarque"],
          ["Mercosul (Argentina, Chile, Peru, Uruguai)", "RG Físico (<10 anos) em bom estado OU Passaporte válido (CNH NÃO vale)", "Obrigatória Autorização Internacional (2 vias c/ firma ou AEV) para <18 anos", "CIVP p/ Colômbia/Selva | Seguro Recomendado"],
          ["Europa (29 Países de Schengen)", "Passaporte válido por 3 a 6 meses após a volta + Passagem de retorno", "Obrigatória Autorização Internacional (2 vias c/ firma ou AEV) para <18 anos", "Seguro Viagem Mínimo € 30.000 Obrigatório"],
          ["Estados Unidos & Canadá", "Passaporte válido + Visto B1/B2 (EUA) ou Visto/eTA (Canadá)", "Obrigatória Autorização Internacional (2 vias c/ firma ou AEV) para <18 anos", "Seguro Saúde US$ 60k+ Altamente Recomendado"],
          ["Tailândia & África do Sul", "Passaporte válido por 6 meses + 2 páginas em branco", "Obrigatória Autorização Internacional (2 vias c/ firma ou AEV) para <18 anos", "CIVP Febre Amarela OBRIGATÓRIO no Embarque"],
        ],
      }}
      customWidget={<DocumentCheckerWidget />}
    />
  );
}
