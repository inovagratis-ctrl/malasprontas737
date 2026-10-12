"use client";

import { useState } from "react";
import Link from "next/link";
import { AFFILIATES } from "@/data/affiliates";
import { trackConversionEvent } from "@/lib/analytics";
import {
  FileCheck,
  ShieldAlert,
  Globe,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  Baby,
  Car,
  Syringe,
  Sparkles
} from "lucide-react";

type DestinationZone =
  | "brasil"
  | "mercosul"
  | "europa_schengen"
  | "eua_canada"
  | "sudeste_asiatico"
  | "africa_do_sul";

interface ZoneRequirement {
  name: string;
  idDocument: string;
  visaRequirement: string;
  vaccineRequirement: string;
  insuranceRequirement: string;
  drivingRequirement: string;
  currencyTip: string;
  officialLink: { label: string; url: string };
}

const ZONE_REQUIREMENTS: Record<DestinationZone, ZoneRequirement> = {
  brasil: {
    name: "Brasil (Voos Domésticos Nacionais)",
    idDocument:
      "RG físico original, CNH física ou digital (app Carteira Digital de Trânsito oficial), Passaporte válido ou Carteira de Trabalho/Conselho Profissional com foto.",
    visaRequirement: "Não aplicável (Território Nacional).",
    vaccineRequirement:
      "Vacina contra Febre Amarela recomendada com pelo menos 10 dias de antecedência para áreas de mata/ecoturismo (Amazônia, Jalapão, Chapadas, Bonito).",
    insuranceRequirement:
      "Opcional se você tiver plano de saúde com abrangência nacional; recomendado seguro viagem nacional caso seu convênio seja apenas regional.",
    drivingRequirement: "CNH brasileira física ou digital dentro do prazo de validade.",
    currencyTip: "Real (R$). Leve sempre um pouco de dinheiro físico para taxas de cachoeiras e comunidades sem sinal.",
    officialLink: {
      label: "ANAC — Documentos para Embarque Doméstico",
      url: "https://www.gov.br/anac/pt-br/assuntos/passageiros/documentos-para-embarque",
    },
  },
  mercosul: {
    name: "América do Sul / Mercosul (Argentina, Chile, Peru, Uruguai, Colômbia)",
    idDocument:
      "RG físico original em excelente estado de conservação e com menos de 10 anos de emissão OU Passaporte válido. ATENÇÃO: CNH e carteiras profissionais NÃO são aceitas na fronteira internacional!",
    visaRequirement: "Isento de visto para turismo por até 90 dias.",
    vaccineRequirement:
      "Certificado Internacional de Vacinação contra Febre Amarela (CIVP - Anvisa/Meu SUS Digital) exigido para Colômbia e recomendado para áreas de selva no Peru/Bolívia (tomar 10 dias antes).",
    insuranceRequirement:
      "Fortemente exigido na prática migratória (Argentina e Chile verificam cobertura médica). Recomendado mínimo de US$ 30.000 DMHO.",
    drivingRequirement:
      "CNH Física original válida (Carta Verde obrigatória se entrar com carro próprio na Argentina/Uruguai/Paraguai).",
    currencyTip:
      "Cartão de débito internacional global + Dólares em notas de US$ 100 novas (cara grande / faixa azul) ou Pesos/Soles sacados localmente.",
    officialLink: {
      label: "Itamaraty — Acordo de Documentos de Viagem do Mercosul",
      url: "https://www.gov.br/mre/pt-br/assuntos/portal-consular",
    },
  },
  europa_schengen: {
    name: "Europa — Espaço Schengen (Portugal, Espanha, França, Itália, Alemanha +24 países)",
    idDocument:
      "Passaporte brasileiro válido por pelo menos 3 a 6 meses APÓS a data planejada de saída da Europa.",
    visaRequirement:
      "Isento de visto consular para turismo até 90 dias a cada 180 dias. Verificar exigência da autorização eletrônica europeia ETIAS e passagem de volta confirmada.",
    vaccineRequirement: "Sem exigência de CIVP para voos diretos do Brasil para a Europa.",
    insuranceRequirement:
      "OBRIGATÓRIO POR LEI: Apólice de Seguro Viagem com cobertura mínima de € 30.000 (trinta mil euros) para despesas médicas e repatriação.",
    drivingRequirement:
      "CNH Física válida + Passaporte. Permissão Internacional para Dirigir (PID emitida no Detran) exigida na Itália, Grécia e Áustria.",
    currencyTip:
      "Comprovação financeira exigida na imigração (média de € 65 a € 100 por dia de estadia em cartão global/extrato + reserva de hotel paga/confirmada).",
    officialLink: {
      label: "Portal Consular Itamaraty — Entrada na União Europeia",
      url: "https://www.gov.br/mre/pt-br/assuntos/portal-consular/vamos-viajar",
    },
  },
  eua_canada: {
    name: "Estados Unidos & Canadá",
    idDocument: "Passaporte brasileiro válido durante todo o período da viagem (recomendado 6 meses de folga).",
    visaRequirement:
      "EUA: Visto Americano B1/B2 válido estampado no passaporte. Canadá: Visto Canadense ou autorização eletrônica eTA (para brasileiros que já possuem visto americano válido ou tiveram visto canadense nos últimos 10 anos, chegando de avião).",
    vaccineRequirement: "Nenhuma vacina específica exigida na imigração atualmente.",
    insuranceRequirement:
      "Altamente indispensável! Os EUA têm a medicina privada mais cara do mundo. Contrate cobertura de US$ 60.000 a US$ 100.000 DMHO.",
    drivingRequirement: "CNH Física original dentro da validade + Passaporte.",
    currencyTip: "Dólar Americano (US$) ou Canadense (CAD). Cartões por aproximação (Apple Pay / Google Pay) são aceitos em 99% dos locais.",
    officialLink: {
      label: "Polícia Federal — Emissão de Passaporte Brasileiro",
      url: "https://www.gov.br/pf/pt-br/assuntos/passaporte",
    },
  },
  sudeste_asiatico: {
    name: "Sudeste Asiático (Tailândia, Vietnã, Indonésia, Singapura)",
    idDocument:
      "Passaporte válido por no mínimo 6 meses a contar da data de entrada e com pelo menos 2 páginas em branco.",
    visaRequirement:
      "Tailândia e Singapura: Isento de visto para brasileiros por até 90/30 dias. atenção: na Tailândia é obrigatório passar primeiro no balcão 'Health Control' antes da fila de imigração!",
    vaccineRequirement:
      "OBRIGATÓRIO POR LEI: Certificado Internacional de Vacinação contra Febre Amarela (CIVP emitido no Meu SUS Digital) com vacina aplicada pelo menos 10 dias antes do embarque.",
    insuranceRequirement: "Recomendado mínimo de US$ 60.000 DMHO (incluindo cobertura para passeios marítimos/barco).",
    drivingRequirement: "Exige obrigatoriamente a PID (Permissão Internacional para Dirigir) junto com a CNH física.",
    currencyTip: "Leve dólares em notas de US$ 100 novas ('faixa azul' pós-2013 sem carimbos nem rasgos) para trocar por Baht Tailandês.",
    officialLink: {
      label: "ANVISA — Emissão Gratuita do Certificado Internacional de Vacinação (CIVP)",
      url: "https://www.gov.br/pt-br/servicos/obter-o-certificado-internacional-de-vacinacao-e-profilaxia",
    },
  },
  africa_do_sul: {
    name: "África do Sul (Cidade do Cabo, Joanesburgo & Kruger Park)",
    idDocument: "Passaporte válido por no mínimo 30 dias após a saída e com 2 páginas em branco.",
    visaRequirement: "Isento de visto para turismo por até 90 dias.",
    vaccineRequirement:
      "OBRIGATÓRIO POR LEI: Certificado Internacional de Vacinação contra Febre Amarela (CIVP) para todos os viajantes vindos do Brasil.",
    insuranceRequirement: "Recomendado mínimo de US$ 50.000 DMHO.",
    drivingRequirement: "CNH Física válida + PID recomendada (atenção: direção em mão inglesa do lado esquerdo!).",
    currencyTip: "Rand Sul-Africano (ZAR). Cartão de débito global é amplamente aceito até nos pedágios e parques.",
    officialLink: {
      label: "ANVISA — Orientações de Saúde do Viajante",
      url: "https://www.gov.br/anvisa/pt-br/assuntos/paf/orientacoes-de-viagem",
    },
  },
};

export default function DocumentCheckerWidget() {
  const [zone, setZone] = useState<DestinationZone>("mercosul");
  const [withMinors, setWithMinors] = useState<boolean>(false);
  const [rentingCar, setRentingCar] = useState<boolean>(false);

  const current = ZONE_REQUIREMENTS[zone];

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-lg">
      <div className="border-b border-stone-100 pb-5 mb-6">
        <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-1">
          <Sparkles className="w-4 h-4" />
          Verificador Oficial Interativo
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 flex items-center gap-2">
          <FileCheck className="w-6 h-6 text-orange-600" />
          Consultor de Documentos, Vistos e Vacinas por Destino
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          Selecione para onde você vai viajar e confira imediatamente o que é exigido no embarque e na imigração (Atualizado em Outubro/2026).
        </p>
      </div>

      {/* Controles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="md:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
            1. Selecione o Destino ou Região da Viagem:
          </label>
          <select
            value={zone}
            onChange={(e) => setZone(e.target.value as DestinationZone)}
            className="w-full px-4 py-3 rounded-2xl border border-stone-200 bg-stone-50 text-sm font-bold text-stone-900 focus:outline-hidden focus:border-orange-500"
          >
            <option value="mercosul">🌎 América do Sul / Mercosul (Argentina, Chile, Peru, Uruguai)</option>
            <option value="europa_schengen">🇪🇺 Europa — Tratado de Schengen (Portugal, Espanha, França, Itália...)</option>
            <option value="eua_canada">🇺🇸 Estados Unidos & Canadá</option>
            <option value="sudeste_asiatico">🇹🇭 Sudeste Asiático (Tailândia, Singapura, Indonésia)</option>
            <option value="africa_do_sul">🇿🇦 África do Sul (Cidade do Cabo & Kruger)</option>
            <option value="brasil">🇧🇷 Brasil (Voos Nacionais)</option>
          </select>
        </div>

        <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200/80 flex flex-col justify-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-700">
            2. Condições Especiais:
          </span>
          <label className="flex items-center gap-2 text-xs font-semibold text-stone-800 cursor-pointer">
            <input
              type="checkbox"
              checked={withMinors}
              onChange={(e) => setWithMinors(e.target.checked)}
              className="w-4 h-4 accent-orange-600 rounded"
            />
            <Baby className="w-4 h-4 text-orange-600" />
            <span>Viajando com menor de 18 anos</span>
          </label>
          <label className="flex items-center gap-2 text-xs font-semibold text-stone-800 cursor-pointer">
            <input
              type="checkbox"
              checked={rentingCar}
              onChange={(e) => setRentingCar(e.target.checked)}
              className="w-4 h-4 accent-orange-600 rounded"
            />
            <Car className="w-4 h-4 text-emerald-600" />
            <span>Pretendo alugar carro e dirigir</span>
          </label>
        </div>
      </div>

      {/* Painel de Resultado */}
      <div className="bg-stone-50 rounded-2xl p-5 sm:p-6 border border-stone-200/90 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
          <h4 className="font-extrabold text-stone-900 text-base sm:text-lg flex items-center gap-2">
            <Globe className="w-5 h-5 text-orange-600" />
            {current.name}
          </h4>
          <a
            href={current.officialLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-orange-700 hover:underline inline-flex items-center gap-1"
          >
            <span>Fonte Oficial: {current.officialLink.label}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl border border-stone-200/80">
            <span className="text-xs font-extrabold uppercase text-stone-900 flex items-center gap-1.5 mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Documento de Identidade Aceito
            </span>
            <p className="text-xs text-stone-700 leading-relaxed">{current.idDocument}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200/80">
            <span className="text-xs font-extrabold uppercase text-stone-900 flex items-center gap-1.5 mb-1">
              <FileCheck className="w-4 h-4 text-blue-600" />
              Exigência de Visto / Permissão
            </span>
            <p className="text-xs text-stone-700 leading-relaxed">{current.visaRequirement}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200/80">
            <span className="text-xs font-extrabold uppercase text-stone-900 flex items-center gap-1.5 mb-1">
              <Syringe className="w-4 h-4 text-amber-600" />
              Vacinas & Certificado Anvisa (CIVP)
            </span>
            <p className="text-xs text-stone-700 leading-relaxed">{current.vaccineRequirement}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200/80">
            <span className="text-xs font-extrabold uppercase text-stone-900 flex items-center gap-1.5 mb-1">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              Seguro Viagem & Cobertura Médica
            </span>
            <p className="text-xs text-stone-700 leading-relaxed">{current.insuranceRequirement}</p>
          </div>
        </div>

        {withMinors && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-950 space-y-1">
            <strong className="flex items-center gap-1.5 font-extrabold text-amber-900">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              Atenção Obrigatória — Embarque com Menores de 18 Anos (Norma CNJ / Polícia Federal):
            </strong>
            <p>
              {zone === "brasil"
                ? "Em voos nacionais, menores de 16 anos acompanhados de pais, avós ou tios maiores de 18 anos precisam de Certidão de Nascimento ou RG original que comprove a filiação. Desacompanhados ou com terceiros exigem Autorização Judicial ou Extrajudicial em cartório/AEV."
                : "Em viagens internacionais, se o menor de 18 anos viajar com APENAS UM dos pais ou desacompanhado, a Polícia Federal exige Autorização de Viagem Internacional em 2 vias com firma reconhecida por autenticidade (ou AEV digital via e-Notariado), mesmo que o destino seja no Mercosul com RG!"}
            </p>
          </div>
        )}

        {rentingCar && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <strong className="font-extrabold block mb-0.5">
                Requisito para Alugar Carro neste Destino:
              </strong>
              <span>{current.drivingRequirement} + Cartão de Crédito Físico Nominal para o Caução.</span>
            </div>
            <Link
              href="/post/o-que-conferir-antes-de-alugar-um-carro-viagem"
              className="text-emerald-800 underline font-bold shrink-0"
            >
              Ver Guia de Locação →
            </Link>
          </div>
        )}

        {zone !== "brasil" && (
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-stone-200">
            <span className="text-xs text-stone-600">
              Precisa emitir a apólice de Seguro Viagem exigida pela imigração?
            </span>
            <a
              href={AFFILIATES.EKTA_SEGURO}
              target="_blank"
              rel="sponsored nofollow noopener"
              onClick={() =>
                trackConversionEvent("click_insurance", {
                  partner: "Ekta Seguro",
                  category: "Seguro Viagem",
                  label: `doc_checker_${zone}`,
                })
              }
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Cotar Seguro Viagem Oficial (Rel=Sponsored)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
