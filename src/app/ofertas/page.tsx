"use client";

import AffiliateBox, { AffiliateDisclosureBanner } from "@/components/AffiliateBox";
import { AFFILIATE_PARTNERS, buildAffiliateUrl } from "@/data/affiliates";
import { trackConversionEvent } from "@/lib/analytics";
import {
  ShoppingBag,
  ExternalLink,
  Calendar,
  HeartHandshake,
} from "lucide-react";

export default function OfertasPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-20">
      {/* HERO LIGHT MODE */}
      <section className="bg-white border-b border-slate-200 py-14 lg:py-18 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 border border-blue-200 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            <ShoppingBag className="w-4 h-4 text-blue-600" />
            Diretório de Serviços e Recursos de Viagem
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Comparativo de Serviços Essenciais para Viajantes
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Consulte as plataformas de reserva, seguro viagem, conectividade internacional e direitos do passageiro analisadas pela nossa equipe — sempre acompanhadas da faixa de preço consultada e de uma alternativa gratuita ou sem afiliado.
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200">
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            Faixas de preço auditadas em Outubro de 2026 • Links com atributo rel=&quot;sponsored nofollow&quot;
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        <AffiliateDisclosureBanner variant="top" />

        {/* Grid de Parceiros de Serviços de Viagem */}
        <section>
          <div className="mb-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
              Comparativo Transparente
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Hospedagem, Seguros, Conectividade e Transporte
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AFFILIATE_PARTNERS.map((partner) => {
              const url = buildAffiliateUrl(partner.id, {
                source: "malasprontas",
                medium: "ofertas_page",
                campaign: "central_ofertas",
              });

              return (
                <div
                  key={partner.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:border-blue-400 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="bg-slate-100 text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-full">
                        {partner.category}
                      </span>
                      <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                        Verificado {partner.lastVerifiedDate}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900">
                      {partner.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {partner.directAnswer}
                    </p>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <strong className="text-slate-900 block">Faixa de Preço Consultada:</strong>
                      <span className="text-slate-700">{partner.priceRange}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200 text-[11px] text-slate-700">
                      <strong className="text-emerald-950 flex items-center gap-1 mb-0.5">
                        <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
                        Alternativa Sem Afiliado:
                      </strong>
                      {partner.freeAlternative}
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <a
                      href={url}
                      target="_blank"
                      rel="sponsored nofollow noopener"
                      onClick={() =>
                        trackConversionEvent(partner.conversionEvent, {
                          partner: partner.name,
                          category: partner.category,
                          label: `ofertas_${partner.id}`,
                        })
                      }
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-2xs"
                    >
                      <span>{partner.ctaLabel}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Destaque Comparativo Seguro Viagem */}
        <AffiliateBox partnerId="ekta-seguro" campaign="ofertas-highlight" />
      </main>
    </div>
  );
}
