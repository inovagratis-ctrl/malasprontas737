"use client";

import { useState } from "react";
import { CHECKLIST_PRESETS } from "@/data/posts";
import { CheckCircle2, Circle, Luggage, Plus, RefreshCw, Sparkles, Check, Download } from "lucide-react";

export default function ChecklistWidget() {
  const [activeTab, setActiveTab] = useState<"geral" | "praia" | "frio" | "ecoturismo">("geral");
  
  // Combine general items + selected preset
  const currentItems = [
    ...CHECKLIST_PRESETS.geral,
    ...(activeTab !== "geral" ? CHECKLIST_PRESETS[activeTab] : [])
  ];

  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({
    g1: true,
    g3: true
  });
  const [customItemText, setCustomItemText] = useState("");
  const [customItems, setCustomItems] = useState<{ id: string; text: string; category: string }[]>([]);

  const allItems = [...currentItems, ...customItems];
  const completedCount = allItems.filter(item => checkedIds[item.id]).length;
  const progressPercent = allItems.length > 0 ? Math.round((completedCount / allItems.length) * 100) : 0;

  const toggleItem = (id: string) => {
    setCheckedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customItemText.trim()) return;
    const newItem = {
      id: `c-${Date.now()}`,
      text: customItemText.trim(),
      category: "Personalizado"
    };
    setCustomItems(prev => [...prev, newItem]);
    setCustomItemText("");
  };

  const handleReset = () => {
    setCheckedIds({});
    setCustomItems([]);
  };

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-lg shadow-orange-950/5">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
            <Luggage className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-xl text-stone-900 flex items-center gap-2">
              Checklist Interativo da Mala
              <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                Exclusivo
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-700">
              Não esqueça nada importante antes de fechar o zíper e sair de casa!
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            type="button"
            className="text-xs text-stone-700 hover:text-stone-900 px-3 py-1.5 rounded-lg border border-stone-200 hover:bg-stone-50 flex items-center gap-1.5 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reiniciar
          </button>
        </div>
      </div>

      {/* Tabs / Trip Type */}
      <div className="flex flex-wrap gap-2 mt-6">
        <button
          onClick={() => setActiveTab("geral")}
          type="button"
          className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all ${
            activeTab === "geral"
              ? "bg-stone-900 text-white shadow-xs"
              : "bg-stone-100 text-stone-600 hover:bg-stone-200"
          }`}
        >
          🎒 Mala Básica (Essencial)
        </button>
        <button
          onClick={() => setActiveTab("praia")}
          type="button"
          className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all ${
            activeTab === "praia"
              ? "bg-sky-600 text-white shadow-xs"
              : "bg-stone-100 text-stone-600 hover:bg-stone-200"
          }`}
        >
          🏖️ Praias & Mar
        </button>
        <button
          onClick={() => setActiveTab("frio")}
          type="button"
          className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all ${
            activeTab === "frio"
              ? "bg-indigo-600 text-white shadow-xs"
              : "bg-stone-100 text-stone-600 hover:bg-stone-200"
          }`}
        >
          ❄️ Serras & Frio
        </button>
        <button
          onClick={() => setActiveTab("ecoturismo")}
          type="button"
          className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all ${
            activeTab === "ecoturismo"
              ? "bg-emerald-600 text-white shadow-xs"
              : "bg-stone-100 text-stone-600 hover:bg-stone-200"
          }`}
        >
          🌲 Ecoturismo & Trilhas
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mt-6 bg-stone-50 rounded-2xl p-4 border border-stone-100">
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
          <span className="text-stone-700 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-orange-500" />
            Progresso da Bagagem:
          </span>
          <span className="text-orange-600 font-bold">
            {completedCount} de {allItems.length} itens ({progressPercent}%)
          </span>
        </div>
        <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-orange-500 to-amber-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        {progressPercent === 100 && (
          <p className="text-xs font-bold text-emerald-600 mt-2 flex items-center gap-1">
            <Check className="w-4 h-4" /> Parabéns! Suas malas estão 100% prontas para a viagem!
          </p>
        )}
      </div>

      {/* Item List */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-2.5 max-h-96 overflow-y-auto pr-1">
        {allItems.map((item) => {
          const isChecked = !!checkedIds[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none ${
                isChecked
                  ? "bg-emerald-50/50 border-emerald-200/80 text-stone-500 line-through"
                  : "bg-stone-50/70 border-stone-200 hover:bg-white hover:border-orange-200 text-stone-800"
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {isChecked ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                ) : (
                  <Circle className="w-5 h-5 text-stone-300" />
                )}
              </div>
              <div className="text-xs sm:text-sm leading-tight">
                <p className={`font-medium ${isChecked ? "line-through text-stone-400" : "text-stone-800"}`}>
                  {item.text}
                </p>
                <span className="text-[10px] text-stone-400 font-normal mt-0.5 inline-block">
                  {item.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Custom Item */}
      <form onSubmit={handleAddCustom} className="mt-6 flex gap-2 pt-4 border-t border-stone-100">
        <input
          type="text"
          value={customItemText}
          onChange={(e) => setCustomItemText(e.target.value)}
          placeholder="Adicionar item personalizado à sua mala..."
          className="flex-1 text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-hidden focus:border-orange-500 transition-colors"
        />
        <button
          type="submit"
          className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors shrink-0"
        >
          <Plus className="w-4 h-4" />
          Adicionar
        </button>
      </form>
    </div>
  );
}
