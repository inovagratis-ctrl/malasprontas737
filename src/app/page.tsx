"use client";

import { useState } from "react";
import Link from "next/link";
import { POSTS, CATEGORIES } from "@/data/posts";
import PostCard from "@/components/PostCard";
import ChecklistWidget from "@/components/ChecklistWidget";
import TravelGearShowcase from "@/components/TravelGearShowcase";
import {
  Search,
  Compass,
  Luggage,
  Sparkles,
  Palmtree,
  Mountain,
  Trees,
  Landmark,
  Backpack,
  ArrowRight,
  MapPin,
  Flame,
  DollarSign
} from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  // Filter posts
  const filteredPosts = POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === "Todas" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.stateCountry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = POSTS.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-stone-900 text-white py-20 lg:py-28">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80"
            alt="Viagem na estrada"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/70 to-stone-900/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-orange-400" />
            Roteiros sinceros, dicas de economia e mapas reais
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight sm:leading-none">
            O mundo te espera. <br />
            Suas <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400">malas estão prontas?</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Descubra roteiros completos dia a dia, custos reais de cada viagem, o que levar na mala e segredos para viajar mais gastando menos.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative flex items-center bg-white/95 backdrop-blur-md rounded-2xl p-2 shadow-2xl border border-white/20">
              <div className="pl-3 pr-2 text-stone-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Para onde você quer ir? (Ex: Maragogi, Gramado, Buenos Aires...)"
                className="w-full bg-transparent text-stone-900 text-sm sm:text-base placeholder-stone-600 focus:outline-hidden py-2"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-3 text-xs font-semibold text-stone-600 hover:text-stone-900"
                >
                  Limpar
                </button>
              )}
            </div>
          </div>

          {/* Quick Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  type="button"
                  className={`text-xs sm:text-sm font-medium px-4 py-2 rounded-xl transition-all ${
                    isActive
                      ? "bg-orange-600 text-white shadow-md shadow-orange-600/30 scale-105"
                      : "bg-white/10 hover:bg-white/20 text-stone-200 border border-white/10"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* DESTAQUES DA SEMANA */}
        {selectedCategory === "Todas" && !searchQuery && (
          <section>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <div className="flex items-center gap-2 text-orange-600 text-xs font-bold uppercase tracking-wider mb-1">
                  <Flame className="w-4 h-4" />
                  Top Destinos Mais Amados
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                  Viagens em Destaque
                </h2>
              </div>
              <Link
                href="/destinos"
                className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 group"
              >
                Ver todos os destinos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.slice(0, 3).map((post) => (
                <PostCard key={post.id} post={post} priority />
              ))}
            </div>
          </section>
        )}

        {/* FEED DE TODOS OS ROTEIROS */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-orange-600 text-xs font-bold uppercase tracking-wider mb-1">
                <Compass className="w-4 h-4" />
                Explore Nossos Roteiros
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                {selectedCategory === "Todas" ? "Últimos Roteiros Publicados" : `Roteiros em: ${selectedCategory}`}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-700">
              {filteredPosts.length} {filteredPosts.length === 1 ? "viagem encontrada" : "viagens encontradas"}
            </p>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
              <Luggage className="w-12 h-12 text-stone-300 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-stone-800">Nenhum roteiro encontrado</h3>
              <p className="text-sm text-stone-500 mt-1 max-w-md mx-auto">
                Não encontramos viagens para a busca "{searchQuery}". Tente pesquisar por outro destino ou selecione "Todas as Viagens".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Todas");
                }}
                className="mt-4 inline-block bg-orange-600 text-white text-xs font-semibold px-4 py-2 rounded-xl"
              >
                Limpar Filtros
              </button>
            </div>
          )}
        </section>

        {/* RECURSO EXCLUSIVO: CHECKLIST DA MALA */}
        <section id="checklist-section">
          <ChecklistWidget />
        </section>

        {/* VITRINE DE EQUIPAMENTOS & ACESSÓRIOS */}
        <section id="vitrine-section">
          <TravelGearShowcase />
        </section>

        {/* SEÇÃO OFICIAL YOUTUBE COM O BANNER */}
        <section className="bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-2xl text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Canal Oficial no YouTube
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-3 leading-tight">
                Acompanhe Nossos Roteiros Também em Vídeo!
              </h2>
              <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                Dicas práticas, guias de cidades, custos reais e experiências de viagem cinematográficas no nosso canal oficial. Inscreva-se para não perder nenhum destino!
              </p>
              <div className="mt-5">
                <a
                  href="https://www.youtube.com/@canalmalasprontas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-2xl shadow-lg shadow-red-600/30 transition-all hover:scale-105"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Inscrever-se no @canalmalasprontas
                </a>
              </div>
            </div>

            {/* Banner Oficial */}
            <a
              href="https://www.youtube.com/@canalmalasprontas"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl border border-stone-700/80 group block"
            >
              <img
                src="/banner.jpg"
                alt="Banner Oficial Malas Prontas YouTube"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </a>
          </div>
        </section>

        {/* BANNER POSTAL: SOBRE O BLOG */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-600 via-amber-600 to-amber-700 text-white p-8 sm:p-12 shadow-xl">
          <div className="relative z-10 max-w-2xl">
            <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Nossa Missão
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold mt-4 leading-tight">
              Viajar não precisa ser um luxo inalcançável.
            </h2>
            <p className="mt-3 text-stone-100 text-sm sm:text-base leading-relaxed">
              No <strong>Malas Prontas</strong>, nós testamos os passeios, calculamos os custos na ponta do lápis e mostramos o caminho das pedras para você realizar a viagem dos seus sonhos.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/sobre"
                className="bg-white text-orange-700 hover:bg-stone-100 font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-colors inline-flex items-center gap-2"
              >
                Conheça Nossa História
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/checklist"
                className="bg-orange-800/40 hover:bg-orange-800/60 border border-white/20 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors inline-flex items-center gap-2"
              >
                <Luggage className="w-4 h-4" />
                Arrumar as Malas Agora
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
