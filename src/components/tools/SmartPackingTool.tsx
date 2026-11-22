"use client";

import { useState, useMemo } from "react";
import { generateSmartPackingList, PackingItem, PackingPlanParams } from "@/data/packingGeneratorData";
import {
  Luggage,
  Printer,
  Sparkles,
  CheckCircle2,
  Plus,
  Trash2,
  RotateCcw,
  Sun,
  Building,
  Snowflake,
  Compass,
  Briefcase,
  Scale,
  CheckSquare,
  Square,
  ArrowRight,
  ShieldAlert
} from "lucide-react";

export default function SmartPackingTool() {
  const [destinationType, setDestinationType] = useState<"praia" | "cidade" | "frio" | "aventura" | "negocios">("praia");
  const [days, setDays] = useState<number>(7);
  const [hasLaundry, setHasLaundry] = useState<boolean>(false);
  const [profile, setProfile] = useState<"feminino" | "masculino" | "neutro">("neutro");

  // Itens gerados e estado de marcação
  const initialGeneratedItems = useMemo(() => {
    return generateSmartPackingList({ destinationType, days, hasLaundry, profile });
  }, [destinationType, days, hasLaundry, profile]);

  const [activeItems, setActiveItems] = useState<PackingItem[]>(initialGeneratedItems);
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>({});
  const [customItemName, setCustomItemName] = useState("");
  const [customCategory, setCustomCategory] = useState<PackingItem["category"]>("vestuario");

  const handleRegenerate = () => {
    const fresh = generateSmartPackingList({ destinationType, days, hasLaundry, profile });
    setActiveItems(fresh);
    setCheckedMap({});
  };

  const toggleCheck = (id: string) => {
    setCheckedMap((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const addCustomItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customItemName.trim()) return;

    const newItem: PackingItem = {
      id: `custom-${Date.now()}`,
      name: customItemName.trim(),
      category: customCategory,
      estimatedWeightGrams: 200,
      categoryLabel:
        customCategory === "documentos"
          ? "Documentos & Dinheiro"
          : customCategory === "vestuario"
          ? "Vestuário & Roupas"
          : customCategory === "calcados"
          ? "Calçados & Acessórios"
          : customCategory === "higiene"
          ? "Higiene & Cuidados Pessoais"
          : customCategory === "eletronicos"
          ? "Eletrônicos & Cabos"
          : customCategory === "farmacia"
          ? "Farmácia de Viagem & Saúde"
          : "Mala de Mão & Bordo",
      essential: true
    };

    setActiveItems((prev) => [newItem, ...prev]);
    setCustomItemName("");
  };

  const removeItem = (id: string) => {
    setActiveItems((prev) => prev.filter((it) => it.id !== id));
    setCheckedMap((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  // Contagem de progresso
  const totalItemsCount = activeItems.length;
  const checkedCount = activeItems.filter((it) => !!checkedMap[it.id]).length;
  const progressPercent = totalItemsCount > 0 ? Math.round((checkedCount / totalItemsCount) * 100) : 0;

  // Cálculo de peso estimado
  const baseSuitcaseWeightGrams = 2200; // peso médio de mala vazia de bordo
  const itemsWeightGrams = activeItems.reduce((acc, it) => acc + (it.estimatedWeightGrams || 150), 0);
  const totalEstimatedWeightKg = ((itemsWeightGrams + baseSuitcaseWeightGrams) / 1000).toFixed(1);

  const categoriesList: { key: PackingItem["category"]; label: string }[] = [
    { key: "documentos", label: "Documentos & Dinheiro" },
    { key: "vestuario", label: "Vestuário & Roupas Calculadas" },
    { key: "calcados", label: "Calçados & Acessórios" },
    { key: "higiene", label: "Higiene & Cuidados Pessoais" },
    { key: "eletronicos", label: "Eletrônicos & Cabos" },
    { key: "farmacia", label: "Farmácia de Viagem & Saúde" },
    { key: "bordo", label: "Mala de Mão & Conforto a Bordo" },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden print:border-none print:shadow-none">
      {/* Top Banner Aeronáutico */}
      <div className="bg-[#0B1E36] text-white p-6 sm:p-8 relative overflow-hidden print:hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Luggage className="w-3.5 h-3.5" />
            Planejador Inteligente de Bagagem & Estimativa de Peso
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Gerador Dinâmico "Mala Pronta" com Estimativa de Peso
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            Informe o destino, duração e infraestrutura para calcular a quantidade sugerida de roupas, documentos e itens essenciais com estimativa de peso total.
          </p>
        </div>
      </div>

      {/* Formulário de 4 Perguntas */}
      <div className="p-6 sm:p-8 space-y-6 border-b border-slate-200 print:hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Pergunta 1: Destino */}
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-2">1. Qual o tipo de destino?</label>
            <div className="space-y-1.5">
              {[
                { id: "praia", label: "Praia / Calor", icon: Sun },
                { id: "cidade", label: "Cidade / Urbano", icon: Building },
                { id: "frio", label: "Frio / Inverno", icon: Snowflake },
                { id: "aventura", label: "Ecoturismo / Trilha", icon: Compass },
                { id: "negocios", label: "Trabalho / Negócios", icon: Briefcase },
              ].map((opt) => {
                const Icon = opt.icon;
                const isSelected = destinationType === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setDestinationType(opt.id as any)}
                    className={`w-full flex items-center gap-2 p-2.5 rounded-xl border text-left text-xs font-bold transition-all ${
                      isSelected
                        ? "bg-blue-50 border-blue-600 text-blue-900"
                        : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pergunta 2: Duração */}
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-2">2. Quantos dias de viagem?</label>
            <div className="space-y-1.5">
              {[
                { val: 3, label: "Fim de semana (3 dias)" },
                { val: 7, label: "1 Semana (7 dias)" },
                { val: 14, label: "2 Semanas (14 dias)" },
                { val: 21, label: "Longa duração (21 dias)" },
              ].map((dur) => (
                <button
                  key={dur.val}
                  type="button"
                  onClick={() => setDays(dur.val)}
                  className={`w-full p-2.5 rounded-xl border text-left text-xs font-bold transition-all ${
                    days === dur.val
                      ? "bg-blue-50 border-blue-600 text-blue-900"
                      : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  {dur.label}
                </button>
              ))}
            </div>
          </div>

          {/* Pergunta 3: Lavanderia */}
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-2">3. Terá lavanderia / máquina?</label>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setHasLaundry(true)}
                className={`w-full p-3 rounded-xl border text-left text-xs font-bold transition-all ${
                  hasLaundry
                    ? "bg-blue-50 border-blue-600 text-blue-900"
                    : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
                }`}
              >
                <div>🧺 Sim, vou lavar roupas</div>
                <div className="text-[11px] font-normal text-slate-500 mt-0.5">
                  Calcula giro para 5 dias de roupas, aliviando o peso da mala.
                </div>
              </button>

              <button
                type="button"
                onClick={() => setHasLaundry(false)}
                className={`w-full p-3 rounded-xl border text-left text-xs font-bold transition-all ${
                  !hasLaundry
                    ? "bg-blue-50 border-blue-600 text-blue-900"
                    : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
                }`}
              >
                <div>🚫 Não vou lavar roupas</div>
                <div className="text-[11px] font-normal text-slate-500 mt-0.5">
                  Calcula mudas de roupas para o itinerário completo.
                </div>
              </button>
            </div>
          </div>

          {/* Pergunta 4: Perfil de Roupa */}
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-2">4. Perfil do Guarda-Roupa:</label>
            <div className="space-y-1.5">
              {[
                { id: "neutro", label: "Unissex / Família" },
                { id: "feminino", label: "Feminino" },
                { id: "masculino", label: "Masculino" },
              ].map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setProfile(p.id as any)}
                  className={`w-full p-2.5 rounded-xl border text-left text-xs font-bold transition-all ${
                    profile === p.id
                      ? "bg-blue-50 border-blue-600 text-blue-900"
                      : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <button
              onClick={handleRegenerate}
              type="button"
              className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs py-2.5 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Recalcular Itens
            </button>
          </div>
        </div>
      </div>

      {/* Estimador de Peso da Mala & Barra de Progresso */}
      <div className="p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Checklist Personalizado de Viagem
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Configurado para: <strong>{days} dias</strong> ({destinationType}) — {hasLaundry ? "com lavanderia" : "sem lavanderia"}.
            </p>
          </div>

          <div className="flex items-center gap-2.5 print:hidden">
            <button
              onClick={handlePrint}
              type="button"
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-all flex items-center gap-2"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              Imprimir / Salvar em PDF A4
            </button>
          </div>
        </div>

        {/* Card do Estimador de Peso Real */}
        <div className="bg-blue-50/70 border border-blue-200 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 print:hidden">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600 text-white">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-700">Estimativa de Peso Carregado:</div>
              <div className="text-lg font-black text-slate-900">
                ~{totalEstimatedWeightKg} kg <span className="text-xs font-semibold text-slate-500">(Mala vazia ~2.2kg + Roupas/Itens ~{((itemsWeightGrams) / 1000).toFixed(1)}kg)</span>
              </div>
            </div>
          </div>
          <div className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white border border-blue-200 text-blue-900">
            {Number(totalEstimatedWeightKg) <= 10 ? "🟢 Encaixa na franquia de 10kg" : Number(totalEstimatedWeightKg) <= 12 ? "🟡 Atenção: limite de 12kg" : "🔴 Provável excesso de peso"}
          </div>
        </div>

        {/* Barra de Progresso Interativa */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 print:hidden">
          <div className="flex items-center justify-between text-xs font-bold mb-1.5">
            <span className="text-slate-700">Progresso da Mala:</span>
            <span className="text-blue-600">
              {checkedCount} de {totalItemsCount} itens guardados ({progressPercent}%)
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-blue-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Adicionar Item Customizado */}
        <form onSubmit={addCustomItem} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex flex-col sm:flex-row gap-2 print:hidden">
          <input
            type="text"
            value={customItemName}
            onChange={(e) => setCustomItemName(e.target.value)}
            placeholder="Adicionar item extra na sua lista (ex: Livro, Almofada de pescoço, Protetor extra)..."
            className="flex-1 text-xs bg-white border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
          />
          <select
            value={customCategory}
            onChange={(e) => setCustomCategory(e.target.value as any)}
            className="text-xs bg-white border border-slate-300 rounded-lg px-2.5 py-2 font-medium"
          >
            <option value="documentos">Documentos</option>
            <option value="vestuario">Vestuário</option>
            <option value="calcados">Calçados</option>
            <option value="higiene">Higiene</option>
            <option value="eletronicos">Eletrônicos</option>
            <option value="farmacia">Farmácia</option>
            <option value="bordo">Mala de Mão</option>
          </select>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-3.5 py-2 rounded-lg flex items-center justify-center gap-1"
          >
            <Plus className="w-3.5 h-3.5" />
            Adicionar
          </button>
        </form>

        {/* Exibição das Categorias */}
        <div className="space-y-6">
          {categoriesList.map((cat) => {
            const catItems = activeItems.filter((it) => it.category === cat.key);
            if (catItems.length === 0) return null;

            return (
              <div key={cat.key} className="space-y-2.5">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-1.5">
                  <span className="text-xs font-black uppercase tracking-wider text-blue-700">
                    {cat.label}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400">
                    ({catItems.length} {catItems.length === 1 ? "item" : "itens"})
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {catItems.map((item) => {
                    const isChecked = !!checkedMap[item.id];
                    return (
                      <div
                        key={item.id}
                        className={`flex items-start justify-between p-3 rounded-xl border transition-all ${
                          isChecked
                            ? "bg-slate-50/80 border-slate-200 opacity-60"
                            : "bg-white border-slate-200 hover:border-slate-300 shadow-2xs"
                        }`}
                      >
                        <div
                          onClick={() => toggleCheck(item.id)}
                          className="flex items-start gap-2.5 cursor-pointer select-none flex-1"
                        >
                          <button
                            type="button"
                            className="mt-0.5 text-blue-600 focus:outline-hidden"
                            aria-label="Marcar item"
                          >
                            {isChecked ? (
                              <CheckSquare className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <Square className="w-4 h-4 text-slate-400" />
                            )}
                          </button>

                          <div>
                            <div className="flex items-center gap-2">
                              <span
                                className={`text-xs font-bold ${
                                  isChecked ? "line-through text-slate-500" : "text-slate-900"
                                }`}
                              >
                                {item.name}
                              </span>
                              {item.quantity && (
                                <span className="text-[10px] font-black bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">
                                  {item.quantity} {item.unit || "un"}
                                </span>
                              )}
                            </div>
                            {item.tip && (
                              <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                                {item.tip}
                              </p>
                            )}
                          </div>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          type="button"
                          className="text-slate-300 hover:text-rose-500 p-1 print:hidden ml-2"
                          aria-label="Remover"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Aviso de Saúde / Farmácia */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-500 leading-relaxed print:hidden">
          <strong>Aviso de Saúde & Cuidados Médicos:</strong> As sugestões de farmácia são itens preventivos básicos de primeiros socorros. Nunca se automedique. Consulte sempre seu médico ou farmacêutico antes da viagem para orientações adequadas ao seu histórico clínico e aos destinos visitados.
        </div>

        {/* Rodapé de Impressão Especial */}
        <div className="hidden print:block pt-6 border-t border-slate-300 text-center text-xs text-slate-500">
          Checklist gerado por <strong>malasprontas737.com.br</strong> — Imprima e risque os itens com caneta enquanto arruma a mala!
        </div>
      </div>
    </div>
  );
}
