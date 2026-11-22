"use client";

import { useState } from "react";
import { ITEMS_ALLOWED_DATA, TravelItemRule, PermissionStatus } from "@/data/itemsAllowedData";
import {
  Search,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  HelpCircle,
  Shield,
  Plane,
  Luggage,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Tag
} from "lucide-react";

export default function CanIBringTool() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "Todos os Itens" },
    { id: "eletronicos", label: "Eletrônicos & Baterias" },
    { id: "cosmeticos", label: "Cosméticos & Higiene" },
    { id: "alimentos", label: "Alimentos & Bebidas" },
    { id: "saude", label: "Medicamentos & Saúde" },
    { id: "ferramentas", label: "Ferramentas & Lâminas" },
    { id: "artigos", label: "Artigos & Conforto" },
  ];

  const quickSearches = [
    "Powerbank",
    "Chapinha",
    "Secador",
    "Cigarro eletrônico",
    "Desodorante aerossol",
    "Perfume",
    "Vinho",
    "Tesourinha",
    "Remédios"
  ];

  const filteredItems = ITEMS_ALLOWED_DATA.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase().trim();
    const inName = item.name.toLowerCase().includes(query);
    const inKeywords = item.keywords.some((k) => k.toLowerCase().includes(query));
    const inAdvice = item.practicalAdvice.toLowerCase().includes(query);

    return inName || inKeywords || inAdvice;
  });

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const getStatusBadge = (status: PermissionStatus, text: string) => {
    if (status === "allowed") {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          {text}
        </span>
      );
    }
    if (status === "restricted") {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-black bg-amber-100 text-amber-800 border border-amber-300">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
          {text}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-black bg-rose-100 text-rose-800 border border-rose-300">
        <XCircle className="w-3.5 h-3.5 text-rose-600" />
        {text}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
      {/* Top Banner Aeronáutico */}
      <div className="bg-[#0B1E36] text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5" />
            Scanner Oficial ANAC & TSA Brasil 2026
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Buscador "Posso Levar Isso no Avião?"
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            Consulte instantaneamente se o seu item vai na mala de mão, na mala despachada ou se é proibido a bordo pelas normas da ANAC, Receita Federal e IATA.
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Barra de Busca Estilo Google */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Digite o item: chapinha, powerbank, perfume, remédio, vinho, tesoura..."
            className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 text-base font-medium focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden transition-all shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 px-2 py-1 rounded-md"
            >
              Limpar
            </button>
          )}
        </div>

        {/* Pílulas de Busca Rápida */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-bold text-slate-500 mr-1">Mais buscados:</span>
          {quickSearches.map((query) => (
            <button
              key={query}
              onClick={() => setSearchQuery(query)}
              className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 transition-colors"
            >
              {query}
            </button>
          ))}
        </div>

        {/* Filtro por Categorias */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs font-bold px-3 py-1.5 rounded-xl transition-all ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Lista de Resultados */}
        <div className="space-y-4 pt-2">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
              <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h4 className="font-bold text-slate-700 text-base">Nenhum item encontrado</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Não encontramos correspondência exata para "{searchQuery}". Tente usar palavras mais simples como "bateria", "creme" ou "tesoura".
              </p>
            </div>
          ) : (
            filteredItems.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <div
                  key={item.id}
                  className="border border-slate-200/90 rounded-2xl bg-white hover:border-slate-300 transition-all shadow-xs overflow-hidden"
                >
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className="p-4 sm:p-5 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                          {item.categoryLabel}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          Ref: {item.regulatoryAgency}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {item.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="flex flex-col sm:flex-row gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-semibold text-slate-500">Cabine:</span>
                          {getStatusBadge(item.carryOn.status, item.carryOn.badgeText)}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-semibold text-slate-500">Porão:</span>
                          {getStatusBadge(item.checked.status, item.checked.badgeText)}
                        </div>
                      </div>

                      <button
                        type="button"
                        className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
                        aria-label="Expandir detalhes"
                      >
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Detalhes Expandidos */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 border-t border-slate-100 bg-slate-50/70 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                          <div className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-1">
                            <Luggage className="w-4 h-4 text-blue-600" />
                            Regra para Mala de Mão / Cabine:
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {item.carryOn.description}
                          </p>
                        </div>

                        <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                          <div className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-1">
                            <Plane className="w-4 h-4 text-slate-600" />
                            Regra para Mala Despachada / Porão:
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {item.checked.description}
                          </p>
                        </div>
                      </div>

                      <div className="bg-amber-50/90 border border-amber-200 p-3.5 rounded-xl">
                        <div className="text-xs font-bold text-amber-950 mb-0.5">
                          💡 Dica de Ouro da Equipe Malas Prontas:
                        </div>
                        <p className="text-xs text-amber-900 leading-relaxed">
                          {item.practicalAdvice}
                        </p>
                      </div>

                      <div className="text-[11px] text-slate-400">
                        <strong>Fundamento Técnico:</strong> {item.officialRuleText} ({item.regulatoryAgency})
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
