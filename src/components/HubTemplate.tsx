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
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-20">
      {/* HERO LIGHT MODE */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-blue-600" />
            {badge}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            {title}
          </h1>

          <p className="mt-4 text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100 px-3.5 py-1 rounded-full border border-slate-200">
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            Dados e faixas de preços verificados em Outubro de 2026 • Tarifas sujeitas a variação
          </div>

          {/* Search inside Hub */}
          <div className="mt-7 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filtrar guias e roteiros nesta seção..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-300 text-slate-900 rounded-xl text-sm sm:text-base focus:outline-hidden focus:border-blue-500"
            />
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        {/* Quick Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stats.map((st, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs"
            >
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 block mb-1">
                {st.label}
              </span>
              <p className="text-lg sm:text-xl font-black text-slate-900">{st.value}</p>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{st.detail}</p>
            </div>
          ))}
        </div>

        <AffiliateDisclosureBanner variant="compact" />

        {/* Reference Table when present */}
        {tableData && (
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
            <div className="mb-5">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {tableData.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {tableData.subtitle}
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-slate-200 rounded-xl overflow-hidden text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    {tableData.headers.map((h, i) => (
                      <th key={i} className="p-3.5 font-bold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {tableData.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50">
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className={`p-3.5 ${
                            cIdx === 0 ? "font-bold text-slate-900" : "text-slate-700"
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
            <p className="text-[11px] text-slate-500 italic mt-3">
              *Referência consultada em Outubro/2026. Os valores servem como base de planejamento e variam conforme câmbio, antecedência e sazonalidade.
            </p>
          </section>
        )}

        {customWidget && <section>{customWidget}</section>}

        {allowAdSense && <AdSlot slotId="hub-informational-slot" pageCategory="hub" />}

        {/* Posts & Guides Grid */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1.5">
                <Compass className="w-4 h-4" />
                Curadoria Verificada
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Guias Práticos e Roteiros Completos ({filteredPosts.length})
              </h2>
            </div>
            <Link
              href="/destinos"
              className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
            >
              <span>Ver todos os 37 guias do site</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center">
              <p className="text-slate-600 font-medium text-sm">
                Nenhum guia encontrado para &quot;{search}&quot;.
              </p>
              <button
                type="button"
                onClick={() => setSearch("")}
                className="mt-3 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-xl"
              >
                Mostrar Todos
              </button>
            </div>
          )}
        </section>

        {/* Shortcut Bar to Interactive Tools (100% Light Mode) */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 flex items-center gap-1.5">
                <Wrench className="w-4 h-4" />
                Ferramentas Gratuitas de Planejamento
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Planeje sua viagem sem planilha complicada
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Use nossas ferramentas interativas para simular custos, comparar hospedagens, verificar documentos e montar o checklist da mala.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/calculadora-viagem"
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-3 rounded-xl inline-flex items-center gap-1.5 transition-colors"
              >
                <Calculator className="w-4 h-4" />
                Calculadora de Custos
              </Link>
              <Link
                href="/checklists"
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-3 rounded-xl inline-flex items-center gap-1.5 transition-colors"
              >
                <CheckSquare className="w-4 h-4" />
                Checklists Imprimíveis
              </Link>
              <Link
                href="/ferramentas"
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-bold px-4 py-3 rounded-xl inline-flex items-center gap-1.5 transition-colors"
              >
                <Wrench className="w-4 h-4 text-blue-600" />
                Todas as 5 Ferramentas
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
