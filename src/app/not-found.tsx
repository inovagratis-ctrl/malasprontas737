"use client";

import { useState } from "react";
import Link from "next/link";
import { POSTS } from "@/data/posts";
import {
  Compass,
  Search,
  Calculator,
  CheckSquare,
  Wrench,
  MapPin,
  ArrowRight,
  Luggage
} from "lucide-react";

export default function NotFound() {
  const [query, setQuery] = useState("");

  const matchingPosts = query.trim()
    ? POSTS.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.destination.toLowerCase().includes(query.toLowerCase()) ||
          p.stateCountry.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 4)
    : POSTS.slice(0, 4);

  return (
    <div className="min-h-[80vh] bg-stone-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-12 shadow-xl text-center space-y-8">
        <div>
          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4 text-orange-600" />
            Erro 404 • Rota Fora do Mapa
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
            Ops! Esta página pegou o voo errado.
          </h1>
          <p className="mt-3 text-stone-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            O endereço que você tentou acessar mudou ou não existe mais. Use a busca abaixo ou acesse nossas ferramentas gratuitas para continuar seu planejamento:
          </p>
        </div>

        {/* Busca Rápida */}
        <div className="max-w-xl mx-auto">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-stone-400 absolute left-4" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar destino ou guia (ex: Peru, Bagagem 10kg, Seguro, Natal...)"
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-stone-300 text-sm focus:outline-hidden focus:border-orange-500 text-stone-900"
            />
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {matchingPosts.map((post) => (
              <Link
                key={post.id}
                href={`/post/${post.slug}`}
                className="p-3.5 rounded-2xl bg-stone-50 hover:bg-orange-50 border border-stone-200 hover:border-orange-200 transition-all flex items-start justify-between gap-2 group"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-orange-600 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {post.destination}
                  </span>
                  <p className="text-xs font-bold text-stone-900 group-hover:text-orange-700 line-clamp-1 mt-0.5">
                    {post.title}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-orange-600 shrink-0 mt-1" />
              </Link>
            ))}
          </div>
        </div>

        {/* Atalhos Principais */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-stone-100">
          <Link
            href="/"
            className="p-3.5 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold flex flex-col items-center gap-1.5 transition-colors"
          >
            <Compass className="w-5 h-5 text-orange-400" />
            <span>Página Inicial</span>
          </Link>
          <Link
            href="/ferramentas"
            className="p-3.5 rounded-2xl bg-orange-50 hover:bg-orange-100 text-orange-900 border border-orange-200 text-xs font-bold flex flex-col items-center gap-1.5 transition-colors"
          >
            <Wrench className="w-5 h-5 text-orange-600" />
            <span>5 Ferramentas</span>
          </Link>
          <Link
            href="/calculadora-viagem"
            className="p-3.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs font-bold flex flex-col items-center gap-1.5 transition-colors"
          >
            <Calculator className="w-5 h-5 text-emerald-600" />
            <span>Simulador Custos</span>
          </Link>
          <Link
            href="/checklist"
            className="p-3.5 rounded-2xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold flex flex-col items-center gap-1.5 transition-colors"
          >
            <Luggage className="w-5 h-5 text-amber-600" />
            <span>Checklist Mala</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
