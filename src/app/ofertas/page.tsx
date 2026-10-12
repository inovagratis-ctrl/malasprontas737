"use client";

import Link from "next/link";
import TravelGearShowcase from "@/components/TravelGearShowcase";
import AffiliateBox, { AffiliateDisclosureBanner } from "@/components/AffiliateBox";
import { AFFILIATE_PARTNERS, buildAffiliateUrl } from "@/data/affiliates";
import { trackConversionEvent } from "@/lib/analytics";
import {
  ShoppingBag,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Calendar,
  HeartHandshake,
  ArrowRight
} from "lucide-react";

export default function OfertasPage() {
  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* HERO */}
      <section className="bg-stone-900 text-white py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            Central de Parceiros Verificados & Equipamentos
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Ofertas de Viagem, Seguros, Passagens e Equipamentos
          </h1>
          <p className="mt-4 text-stone-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Compare tarifas nos parceiros oficiais que nós mesmos usamos nas expedições do Malas Prontas — sempre com transparência de preços, critérios claros e opções gratuitas.
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-stone-400 bg-stone-950/70 px-3.5 py-1 rounded-full border border-stone-800">
            <Calendar className="w-3.5 h-3.5 text-orange-400" />
            Faixas de preço auditadas em Outubro de 2026 • Links com atributo rel=&quot;sponsored nofollow&quot;
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-14">
        <AffiliateDisclosureBanner variant="top" />

        {/* Grid de Parceiros de Serviços de Viagem */}
        <section>
          <div className="mb-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600">
              Serviços Essenciais de Viagem
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              Plataformas Verificadas de Passagens, Hotéis, Seguros e Conectividade
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
                  className="bg-white rounded-3xl border border-stone-200/90 p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="bg-stone-100 text-stone-800 text-[11px] font-bold px-2.5 py-1 rounded-full">
                        {partner.category}
                      </span>
                      <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                        Verificado {partner.lastVerifiedDate}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-stone-900">
                      {partner.name}
                    </h3>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {partner.directAnswer}
                    </p>

                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/70 text-xs">
                      <strong className="text-stone-900 block">Faixa de Preço Consultada:</strong>
                      <span className="text-stone-700">{partner.priceRange}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-200/60 text-[11px] text-stone-700">
                      <strong className="text-emerald-950 flex items-center gap-1 mb-0.5">
                        <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
                        Alternativa Sem Afiliado:
                      </strong>
                      {partner.freeAlternative}
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-stone-100">
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
                      className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
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

        {/* Vitrine Completa de Equipamentos (32 Produtos) */}
        <section id="equipamentos">
          <TravelGearShowcase />
        </section>

        <div className="text-center pt-4">
          <Link
            href="/vitrine"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-stone-700 hover:text-orange-600 underline"
          >
            <span>Acessar também pelo atalho clássico /vitrine</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
