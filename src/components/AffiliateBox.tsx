"use client";

import Link from "next/link";
import {
  AFFILIATE_PARTNERS,
  AffiliatePartner,
  buildAffiliateUrl,
  getPartnerById,
} from "@/data/affiliates";
import { SITE_CONFIG } from "@/data/siteConfig";
import { trackConversionEvent } from "@/lib/analytics";
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  Info,
  Sparkles,
  Scale,
  Calendar,
  HeartHandshake,
} from "lucide-react";

interface AffiliateDisclosureBannerProps {
  variant?: "top" | "bottom" | "compact";
  customDate?: string;
}

export function AffiliateDisclosureBanner({
  variant = "top",
  customDate = SITE_CONFIG.lastPriceConsultationDate,
}: AffiliateDisclosureBannerProps) {
  if (variant === "compact") {
    return (
      <div className="bg-stone-100/90 border border-stone-200/90 rounded-2xl px-4 py-3 text-xs text-stone-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <p className="flex items-start sm:items-center gap-2">
          <Info className="w-4 h-4 text-orange-600 shrink-0 mt-0.5 sm:mt-0" />
          <span>
            <strong>Transparência:</strong> Links identificados com{" "}
            <code className="bg-stone-200 px-1 py-0.5 rounded text-[10px]">Parceiro Verificado</code>{" "}
            são afiliados (<code className="text-[10px]">rel=&quot;sponsored nofollow&quot;</code>) sem custo extra para você.
          </span>
        </p>
        <span className="text-[11px] font-semibold text-stone-700 shrink-0 flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5 text-orange-600" />
          Preços consultados em {customDate} (sujeitos a variação)
        </span>
      </div>
    );
  }

  return (
    <aside
      aria-label="Aviso de transparência editorial e variação de preços"
      className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 sm:p-5 my-6 text-xs sm:text-sm text-stone-700 space-y-2"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200/60 pb-2">
        <span className="font-bold text-stone-900 flex items-center gap-1.5 text-xs uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-orange-600" />
          Transparência Editorial & Aviso de Tarifas
        </span>
        <span className="bg-white border border-amber-200 text-stone-800 text-[11px] font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
          <Calendar className="w-3 h-3 text-orange-600" />
          Referência de Preços: {customDate}
        </span>
      </div>
      <p className="leading-relaxed text-xs text-stone-700">
        {SITE_CONFIG.affiliateTransparencyBanner}
      </p>
      <p className="leading-relaxed text-[11px] text-stone-600 italic">
        <strong>Aviso de variação de tarifas:</strong> {SITE_CONFIG.priceVariationNotice}{" "}
        <Link href="/metodologia-editorial" className="text-orange-700 underline font-semibold hover:text-orange-800">
          Conheça nossa Metodologia Editorial
        </Link>{" "}
        e{" "}
        <Link href="/transparencia-editorial" className="text-orange-700 underline font-semibold hover:text-orange-800">
          Política de Afiliados
        </Link>
        .
      </p>
    </aside>
  );
}

interface AffiliateBoxProps {
  partnerId?: string;
  categoryFilter?: AffiliatePartner["category"];
  title?: string;
  campaign?: string;
  showComparisonTable?: boolean;
}

export default function AffiliateBox({
  partnerId = "booking-stay22",
  categoryFilter,
  title,
  campaign = "editorial-guide",
  showComparisonTable = true,
}: AffiliateBoxProps) {
  const primaryPartner =
    getPartnerById(partnerId) ||
    (categoryFilter
      ? AFFILIATE_PARTNERS.find((p) => p.category === categoryFilter)
      : AFFILIATE_PARTNERS[0]) ||
    AFFILIATE_PARTNERS[0];

  const trackedUrl = buildAffiliateUrl(primaryPartner.id, {
    source: "malasprontas",
    medium: "affiliate_box",
    campaign,
    content: primaryPartner.id,
  });

  const handleAffiliateClick = (partner: AffiliatePartner) => {
    trackConversionEvent(partner.conversionEvent, {
      partner: partner.name,
      category: partner.category,
      label: `${partner.id}_${campaign}`,
    });
  };

  return (
    <section
      aria-label={`Análise e comparativo: ${primaryPartner.name}`}
      className="my-10 bg-white rounded-3xl border-2 border-stone-200/90 shadow-lg overflow-hidden"
    >
      {/* Top Header */}
      <div className="bg-stone-900 text-white p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-orange-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Análise Técnica & Comparativo
            </span>
            <span className="bg-stone-800 text-amber-300 border border-stone-700 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
              {primaryPartner.category}
            </span>
            <span className="text-[11px] text-stone-400">
              • Verificado em {primaryPartner.lastVerifiedDate}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            {title || primaryPartner.name}
          </h3>
        </div>
        <span className="bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold px-3.5 py-1.5 rounded-xl shrink-0 self-start sm:self-center">
          {primaryPartner.badge}
        </span>
      </div>

      {/* Body */}
      <div className="p-6 sm:p-8 space-y-6">
        {/* 1. Resposta Direta & Para quem é adequado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-orange-50/70 border border-orange-200/80 rounded-2xl p-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-orange-800 mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-orange-600" />
              Resposta Direta da Redação
            </h4>
            <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
              {primaryPartner.directAnswer}
            </p>
          </div>

          <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-stone-700 mb-1.5 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-stone-600" />
              Para Quem É Adequado
            </h4>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {primaryPartner.idealFor}
            </p>
          </div>
        </div>

        {/* 2. Critérios de Escolha */}
        <div className="bg-stone-50/70 rounded-2xl p-5 border border-stone-200/70">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-stone-800 mb-3">
            Critérios Técnicos que Avaliamos Antes de Recomendar:
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {primaryPartner.selectionCriteria.map((crit, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-800 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{crit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Pontos Positivos e Limitações Reais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-5">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-900 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Pontos Positivos Verificados
            </h4>
            <ul className="space-y-2">
              {primaryPartner.pros.map((pro, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-stone-800 flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-5">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-900 mb-3 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              Limitações e Cuidados Necessários
            </h4>
            <ul className="space-y-2">
              {primaryPartner.limitations.map((lim, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-stone-800 flex items-start gap-2">
                  <span className="text-amber-600 font-bold mt-0.5">!</span>
                  <span>{lim}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4. Faixa de Preço Consultada com Data e CTA Afiliado Identificado */}
        <div className="bg-stone-900 text-white rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400 block">
              Faixa de Preço Consultada ({primaryPartner.lastVerifiedDate})
            </span>
            <p className="text-sm sm:text-base font-bold text-white">
              {primaryPartner.priceRange}
            </p>
            <p className="text-[11px] text-stone-400">
              *Tarifas variam conforme antecedência, câmbio e temporada. Link de afiliado identificado (rel=&quot;sponsored nofollow&quot;).
            </p>
          </div>

          <a
            href={trackedUrl}
            target="_blank"
            rel={primaryPartner.rel}
            onClick={() => handleAffiliateClick(primaryPartner)}
            className="w-full md:w-auto bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-orange-600/30 transition-all flex items-center justify-center gap-2 shrink-0"
          >
            <span>{primaryPartner.ctaLabel}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* 5. Alternativa Gratuita / Econômica Sem Afiliado (Obrigatório pela Governança Editorial) */}
        <div className="bg-stone-100 border border-stone-200 rounded-2xl p-4 flex items-start gap-3">
          <HeartHandshake className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
          <div className="text-xs text-stone-700 leading-relaxed">
            <strong className="text-stone-900 block mb-0.5">
              Opção Independente (Sem Link de Afiliado):
            </strong>
            {primaryPartner.freeAlternative}
          </div>
        </div>

        {/* 6. Comparação Rápida de Opções (quando habilitado) */}
        {showComparisonTable && (
          <div className="pt-2">
            <details className="group">
              <summary className="cursor-pointer text-xs font-bold text-stone-600 hover:text-orange-600 flex items-center justify-between py-2 border-t border-stone-100">
                <span>Ver tabela comparativa de parceiros verificados por categoria</span>
                <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700 border-b border-stone-200">
                      <th className="p-2.5 font-bold">Serviço / Parceiro</th>
                      <th className="p-2.5 font-bold">Categoria</th>
                      <th className="p-2.5 font-bold">Faixa Consultada (Out/2026)</th>
                      <th className="p-2.5 font-bold">Ação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {AFFILIATE_PARTNERS.slice(0, 6).map((p) => (
                      <tr key={p.id} className="hover:bg-stone-50">
                        <td className="p-2.5 font-semibold text-stone-900">{p.name}</td>
                        <td className="p-2.5 text-stone-600">{p.category}</td>
                        <td className="p-2.5 text-stone-600">{p.priceRange.split("—")[0]}</td>
                        <td className="p-2.5">
                          <a
                            href={buildAffiliateUrl(p.id, {
                              source: "malasprontas",
                              medium: "comparison_table",
                              campaign,
                            })}
                            target="_blank"
                            rel="sponsored nofollow"
                            onClick={() => handleAffiliateClick(p)}
                            className="text-orange-600 hover:underline font-bold inline-flex items-center gap-1"
                          >
                            Consultar <ExternalLink className="w-3 h-3" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </details>
          </div>
        )}
      </div>
    </section>
  );
}
