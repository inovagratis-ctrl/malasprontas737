"use client";

import { useState } from "react";
import Link from "next/link";
import { Post } from "@/data/posts";
import PostCard from "@/components/PostCard";
import { AffiliateDisclosureBanner } from "@/components/AffiliateBox";
import AdSlot from "@/components/AdSlot";
import {
  Search,
  Compass,
  Calculator,
  CheckSquare,
  Sparkles,
  ArrowRight,
  Wrench,
  Calendar
} from "lucide-react";

interface HubStat {
  label: string;
  value: string;
  detail: string;
}

interface HubTableData {
  title: string;
  subtitle: string;
  headers: string[];
  rows: string[][];
}

interface HubTemplateProps {
  badge: string;
  title: string;
  subtitle: string;
  heroImage: string;
  posts: Post[];
  stats: HubStat[];
  tableData?: HubTableData;
  customWidget?: React.ReactNode;
  allowAdSense?: boolean;
}

export default function HubTemplate({
  badge,
  title,
  subtitle,
  heroImage,
  posts,
  stats,
  tableData,
  customWidget,
  allowAdSense = true,
}: HubTemplateProps) {
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.destination.toLowerCase().includes(search.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      p.stateCountry.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* HERO */}
      <section className="relative bg-stone-900 text-white py-16 lg:py-22 overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-stone-900/50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-orange-400" />
            {badge}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
            {title}
          </h1>

          <p className="mt-4 text-sm sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-stone-400 bg-stone-950/60 px-3 py-1 rounded-full border border-stone-800">
            <Calendar className="w-3.5 h-3.5 text-orange-400" />
            Dados e faixas de preços verificados em Outubro de 2026 • Tarifas sujeitas a variação
          </div>

          {/* Search inside Hub */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-stone-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filtrar guias e roteiros nesta seção..."
              className="w-full pl-12 pr-4 py-3 bg-white text-stone-900 rounded-2xl shadow-xl text-sm sm:text-base focus:outline-hidden"
            />
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-12">
        {/* Quick Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stats.map((st, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-stone-200/90 p-6 shadow-md"
            >
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 block mb-1">
                {st.label}
              </span>
              <p className="text-lg sm:text-xl font-black text-stone-900">{st.value}</p>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">{st.detail}</p>
            </div>
          ))}
        </div>

        {/* Disclosure */}
        <AffiliateDisclosureBanner variant="compact" />

        {/* Reference Table when present */}
        {tableData && (
          <section className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-sm">
            <div className="mb-5">
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                {tableData.title}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                {tableData.subtitle}
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-stone-200 rounded-2xl overflow-hidden text-xs sm:text-sm">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    {tableData.headers.map((h, i) => (
                      <th key={i} className="p-3.5 font-bold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  {tableData.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-stone-50">
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className={`p-3.5 ${
                            cIdx === 0 ? "font-bold text-stone-900" : "text-stone-700"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-stone-500 italic mt-3">
              *Referência consultada em Outubro/2026. Os valores servem como base de planejamento e variam conforme câmbio, antecedência e sazonalidade.
            </p>
          </section>
        )}

        {/* Custom Interactive Widget */}
        {customWidget && <section>{customWidget}</section>}

        {/* AdSlot if allowed */}
        {allowAdSense && <AdSlot slotId="hub-informational-slot" pageCategory="hub" />}

        {/* Posts & Guides Grid */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 flex items-center gap-1.5">
                <Compass className="w-4 h-4" />
                Curadoria Verificada
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                Guias Práticos e Roteiros Completos ({filteredPosts.length})
              </h2>
            </div>
            <Link
              href="/destinos"
              className="text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
            >
              <span>Ver todos os 37 guias do site</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-stone-200 p-10 text-center">
              <p className="text-stone-600 font-medium text-sm">
                Nenhum guia encontrado para &quot;{search}&quot;.
              </p>
              <button
                type="button"
                onClick={() => setSearch("")}
                className="mt-3 bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-xl"
              >
                Mostrar Todos
              </button>
            </div>
          )}
        </section>

        {/* Shortcut Bar to Interactive Tools */}
        <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
                <Wrench className="w-4 h-4" />
                Ferramentas Gratuitas de Planejamento
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold">
                Planeje sua viagem sem planilha complicada
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Use nossas ferramentas interativas para simular custos por CEP, comparar hospedagens, verificar documentos e montar o checklist da mala.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/calculadora-viagem"
                className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-3 rounded-xl inline-flex items-center gap-1.5 transition-colors"
              >
                <Calculator className="w-4 h-4" />
                Calculadora de Custos
              </Link>
              <Link
                href="/checklist"
                className="bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold px-4 py-3 rounded-xl inline-flex items-center gap-1.5 transition-colors"
              >
                <CheckSquare className="w-4 h-4" />
                Checklist da Mala
              </Link>
              <Link
                href="/ferramentas"
                className="bg-stone-800 hover:bg-stone-700 text-stone-100 border border-stone-700 text-xs font-bold px-4 py-3 rounded-xl inline-flex items-center gap-1.5 transition-colors"
              >
                <Wrench className="w-4 h-4 text-amber-400" />
                Todas as 5 Ferramentas
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
