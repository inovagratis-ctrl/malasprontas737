"use client";

import { useState } from "react";
import { POSTS, CATEGORIES } from "@/data/posts";
import PostCard from "@/components/PostCard";
import { Search, MapPin, Compass, Globe, Filter } from "lucide-react";

export default function DestinosPage() {
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("Todas");
  const [categoryFilter, setCategoryFilter] = useState("Todas");

  const regions = ["Todas", "Nordeste", "Sul", "Centro-Oeste", "Sudeste", "Norte", "Internacional"];

  const filtered = POSTS.filter((post) => {
    const matchSearch =
      post.destination.toLowerCase().includes(search.toLowerCase()) ||
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.stateCountry.toLowerCase().includes(search.toLowerCase());
    const matchRegion = regionFilter === "Todas" || post.region === regionFilter;
    const matchCat = categoryFilter === "Todas" || post.category === categoryFilter;
    return matchSearch && matchRegion && matchCat;
  });

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold mb-4">
            <Globe className="w-4 h-4" />
            Catálogo de Viagens & Roteiros
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Descubra Seu Próximo Destino
          </h1>
          <p className="mt-3 text-stone-300 max-w-xl mx-auto text-sm sm:text-base">
            De praias paradisíacas com piscinas naturais a cânions misteriosos e cidades históricas.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-stone-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar cidade, estado ou país..."
              className="w-full pl-12 pr-4 py-3 bg-white text-stone-900 rounded-2xl shadow-lg text-sm sm:text-base focus:outline-hidden"
            />
          </div>
        </div>
      </section>

      {/* Filters & Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Filters bar */}
        <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Region filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider shrink-0 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> Região:
            </span>
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setRegionFilter(reg)}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors shrink-0 ${
                  regionFilter === reg
                    ? "bg-orange-600 text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {reg}
              </button>
            ))}
          </div>

          {/* Category filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider shrink-0 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Tipo:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors shrink-0 ${
                  categoryFilter === cat.id
                    ? "bg-stone-900 text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Compass className="w-5 h-5 text-orange-600" />
            Destinos Encontrados ({filtered.length})
          </h2>
          {(regionFilter !== "Todas" || categoryFilter !== "Todas" || search) && (
            <button
              onClick={() => {
                setRegionFilter("Todas");
                setCategoryFilter("Todas");
                setSearch("");
              }}
              className="text-xs text-orange-600 hover:underline font-medium"
            >
              Resetar todos os filtros
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-stone-200 p-8">
            <p className="text-stone-500 text-base font-medium">
              Nenhum destino corresponde aos filtros aplicados.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
