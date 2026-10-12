import { Metadata } from "next";
import Link from "next/link";
import { EDITORIAL_TEAM, SITE_CONFIG } from "@/data/siteConfig";
import {
  FileCheck,
  ShieldCheck,
  Scale,
  Calendar,
  BookOpen,
  HeartHandshake,
  Users,
  ArrowLeft,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Metodologia Editorial, Equipe e Critérios de Avaliação | Malas Prontas",
  description:
    "Conheça a metodologia de apuração de custos, verificação de regras oficiais (ANAC, Polícia Federal, Itamaraty), política de atualização de preços e equipe editorial do Malas Prontas.",
  alternates: {
    canonical: "https://malasprontas737.com.br/metodologia-editorial",
  },
};

export default function MetodologiaEditorialPage() {
  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <section className="bg-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            <FileCheck className="w-4 h-4" />
            Governança & Rigor Técnico (E-E-A-T)
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Metodologia Editorial, Apuração de Preços e Equipe
          </h1>
          <p className="mt-3 text-stone-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Como levantamos faixas de custos reais, validamos normas oficiais de embarque e mantemos independência absoluta entre conteúdo útil e monetização.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-10">
        <div className="bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-12 shadow-xs leading-relaxed text-stone-700 space-y-8">
          {/* 1. Como Calculamos Preços e Orçamentos */}
          <section className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
                <Scale className="w-6 h-6 text-orange-600" />
                1. Metodologia de Apuração de Preços e Variação Tarifária
              </h2>
              <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Ciclo Atual: {SITE_CONFIG.lastPriceConsultationDate}
              </span>
            </div>
            <p>
              Todo viajante sabe que tarifas aéreas e hoteleiras são dinâmicas. Para evitar que você planeje uma viagem com números defasados ou irreais, todos os 37+ guias e ferramentas do <strong>Malas Prontas</strong> seguem quatro regras obrigatórias de precificação:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong>Data de Consulta Explícita:</strong> Todas as tabelas comparativas e blocos de recomendação informam o mês/ano da cotação (atualmente <strong>{SITE_CONFIG.lastPriceConsultationDate}</strong>).
              </li>
              <li>
                <strong>Três Perfis de Orçamento ($, $$, $$$):</strong> Nunca apresentamos um número único mágico. Separamos os custos em <em>Econômico (Hostel / Transporte Público / Menu Executivo)</em>, <em>Moderado (Hotel 3★ / Passeios Clássicos)</em> e <em>Conforto (Hotel 4★ / Transfers Privativos)</em>.
              </li>
              <li>
                <strong>Inclusão de Custos Ocultos:</strong> Nossas estimativas somam taxas de embarque, taxas municipais de turismo (City Tax), taxa de limpeza em apartamentos de temporada, IOF/spread cambial e reserva de segurança de 15%.
              </li>
              <li>
                <strong>Aviso de Variação:</strong> {SITE_CONFIG.priceVariationNotice}
              </li>
            </ul>
          </section>

          {/* 2. Fontes Oficiais Primárias */}
          <section className="space-y-4 pt-4 border-t border-stone-100">
            <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-emerald-600" />
              2. Verificação em Fontes Primárias e Órgãos Oficiais
            </h2>
            <p className="text-sm sm:text-base">
              Informações sobre documentação, franquia de bagagem, vacinas e direitos do passageiro nunca são baseadas em boatos de redes sociais. Consultamos diretamente:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <strong className="text-stone-900 block mb-1">ANAC (Agência Nacional de Aviação Civil)</strong>
                Resolução nº 400/2016: franquia mínima de 10kg na cabine, assistência material em atrasos (1h, 2h e 4h) e direito de arrependimento em 24h.
              </div>
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <strong className="text-stone-900 block mb-1">Polícia Federal & CNJ</strong>
                Emissão de passaportes, controle migratório e Resolução CNJ nº 295/493 sobre autorização de viagem nacional e internacional para menores.
              </div>
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <strong className="text-stone-900 block mb-1">Itamaraty (Portal Consular MRE) & Anvisa</strong>
                Acordos de documentos no Mercosul, isenção de vistos, exigência do Tratado de Schengen (€ 30.000) e emissão do CIVP de Febre Amarela.
              </div>
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <strong className="text-stone-900 block mb-1">Banco Central & Receita Federal</strong>
                Regras de IOF em cartões internacionais, porte de moeda em espécie (e-DBV) e cotas alfandegárias de retorno ao Brasil.
              </div>
            </div>
          </section>

          {/* 3. Equipe Editorial */}
          <section className="space-y-4 pt-4 border-t border-stone-100">
            <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Users className="w-6 h-6 text-orange-600" />
              3. Nossa Equipe Editorial e Especialistas Responsáveis
            </h2>
            <div className="grid grid-cols-1 gap-5">
              {EDITORIAL_TEAM.map((member) => (
                <div
                  key={member.id}
                  className="p-5 rounded-2xl bg-stone-50 border border-stone-200/90 flex flex-col sm:flex-row items-start gap-4"
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-orange-500 shrink-0"
                  />
                  <div className="space-y-2">
                    <div>
                      <h3 className="font-extrabold text-stone-900 text-base">
                        {member.name}
                      </h3>
                      <p className="text-xs font-bold text-orange-600">{member.role}</p>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">{member.bio}</p>
                    <p className="text-[11px] text-stone-500 italic">{member.credentials}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {member.specialties.map((spec, idx) => (
                        <span
                          key={idx}
                          className="bg-white border border-stone-200 text-stone-700 text-[10px] font-semibold px-2.5 py-0.5 rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Regra da Alternativa Sem Afiliado */}
          <section className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
            <h2 className="text-xl font-bold text-emerald-950 flex items-center gap-2">
              <HeartHandshake className="w-6 h-6 text-emerald-700" />
              4. Regra de Ouro dos Comparativos: Sempre uma Alternativa Sem Afiliado
            </h2>
            <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
              No <strong>Malas Prontas</strong>, nenhum artigo existe apenas para empurrar um clique comercial. Em todos os nossos blocos comparativos de afiliados (hospedagem, seguro viagem, chip eSIM, aluguel de carro, indenização aérea e malas), exigimos a presença de: (1) Resposta direta, (2) Para quem é adequado, (3) Critérios técnicos, (4) Pontos positivos e limitações reais, (5) Faixa de preço datada, (6) Atributo <code>rel=&quot;sponsored nofollow&quot;</code> e (7) <strong>Uma alternativa pública, gratuita ou econômica sem nenhum link de afiliado</strong> (como o Consumidor.gov.br da ANAC, o PB4/CDAM do Ministério da Saúde ou mapas offline gratuitos).
            </p>
          </section>

          <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/transparencia-editorial"
              className="text-xs sm:text-sm font-bold text-orange-600 hover:underline flex items-center gap-1"
            >
              <CheckCircle2 className="w-4 h-4" />
              Ver também nossa Política de Imagens 100% Reais e Transparência
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-stone-600 hover:text-orange-600 text-xs sm:text-sm font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Início
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
