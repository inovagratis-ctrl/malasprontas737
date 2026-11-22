"use client";

import { useState } from "react";
import { PRESET_LIQUID_ITEMS, LIQUIDS_REGULATION_GUIDELINES, PresetLiquidItem } from "@/data/liquidsData";
import {
  Droplets,
  AlertOctagon,
  CheckCircle2,
  AlertTriangle,
  Plus,
  Trash2,
  Info,
  ArrowRight,
  Plane,
  HeartPulse,
  Baby
} from "lucide-react";

interface ActiveLiquidItem {
  id: string;
  name: string;
  volumeMl: number;
}

export default function LiquidsSimulatorTool() {
  const [flightType, setFlightType] = useState<"international" | "domestic">("international");
  const [hasPrescriptionMeds, setHasPrescriptionMeds] = useState(false);
  const [hasBabyFood, setHasBabyFood] = useState(false);

  const [items, setItems] = useState<ActiveLiquidItem[]>([
    { id: "1", name: "Shampoo (Frasco Viagem)", volumeMl: 100 },
    { id: "2", name: "Condicionador", volumeMl: 100 },
    { id: "3", name: "Perfume / Colônia", volumeMl: 50 },
    { id: "4", name: "Pasta de Dente Mini", volumeMl: 70 },
    { id: "5", name: "Protetor Solar Facial", volumeMl: 80 }
  ]);

  const [customName, setCustomName] = useState("");
  const [customMl, setCustomMl] = useState<number>(50);

  // Cálculos matemáticos
  const totalVolume = items.reduce((acc, item) => acc + item.volumeMl, 0);
  const totalItemsCount = items.length;
  
  // Violações
  const violatingItems = flightType === "international" 
    ? items.filter((item) => item.volumeMl > 100)
    : items.filter((item) => item.volumeMl > 300); // Em voos nacionais, aerossóis e itens de higiene têm teto de 300ml

  const hasViolatingItem = violatingItems.length > 0;
  const exceedsPouchCapacity = flightType === "international" && totalVolume > 1000;
  const isTooCrowded = totalItemsCount > 9;

  let overallStatus: "approved" | "warning" | "danger" = "approved";
  if (hasViolatingItem || exceedsPouchCapacity) {
    overallStatus = "danger";
  } else if (isTooCrowded || totalVolume > 850) {
    overallStatus = "warning";
  }

  const addItemFromPreset = (preset: PresetLiquidItem) => {
    const newItem: ActiveLiquidItem = {
      id: Math.random().toString(36).substring(2, 9),
      name: preset.name,
      volumeMl: preset.defaultVolumeMl
    };
    setItems((prev) => [...prev, newItem]);
  };

  const addCustomItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim()) return;
    const newItem: ActiveLiquidItem = {
      id: Math.random().toString(36).substring(2, 9),
      name: customName.trim(),
      volumeMl: Number(customMl) || 50
    };
    setItems((prev) => [...prev, newItem]);
    setCustomName("");
    setCustomMl(50);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const clearAll = () => {
    setItems([]);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
      {/* Banner Superior Aeronáutico */}
      <div className="bg-[#0B1E36] text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Droplets className="w-3.5 h-3.5" />
            Simulador de Frascos & Embalagem Transparente
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Simulador da Regra de Líquidos (Matriz de 100ml)
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            Consulte os limites de cosméticos e pastas para a mala de cabine. Em voos internacionais, a capacidade máxima por frasco é de 100ml reunidos em embalagem transparente de até 1 Litro.
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Seletor de Cenário de Voo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setFlightType("international")}
            className={`p-3.5 rounded-2xl border text-left transition-all ${
              flightType === "international"
                ? "bg-blue-50 border-blue-600 shadow-xs ring-2 ring-blue-600/20 text-blue-950"
                : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
            }`}
          >
            <div className="text-xs font-bold flex items-center justify-between">
              <span>Voo Internacional / Conexão Exterior</span>
              <span className="text-[10px] font-black bg-blue-200/70 text-blue-900 px-2 py-0.5 rounded">
                Regra 100ml Rígida
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1 leading-tight">
              Aplica a norma da ANAC/TSA: recipientes individuais de até 100ml em saco vedável de até 1 Litro.
            </p>
          </button>

          <button
            type="button"
            onClick={() => setFlightType("domestic")}
            className={`p-3.5 rounded-2xl border text-left transition-all ${
              flightType === "domestic"
                ? "bg-blue-50 border-blue-600 shadow-xs ring-2 ring-blue-600/20 text-blue-950"
                : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
            }`}
          >
            <div className="text-xs font-bold flex items-center justify-between">
              <span>Voo 100% Nacional / Doméstico</span>
              <span className="text-[10px] font-black bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                Sem Limite de 100ml
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1 leading-tight">
              Cosméticos e aerossóis de higiene são permitidos até 300ml/300g por frasco (máx. 1,2kg total no Brasil).
            </p>
          </button>
        </div>

        {/* Exceções Regulamentadas (Medicamentos e Bebês) */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row gap-4">
          <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-700 select-none">
            <input
              type="checkbox"
              checked={hasPrescriptionMeds}
              onChange={(e) => setHasPrescriptionMeds(e.target.checked)}
              className="rounded text-blue-600 w-4 h-4"
            />
            <span className="flex items-center gap-1">
              <HeartPulse className="w-3.5 h-3.5 text-rose-600" />
              Levo medicamentos líquidos com receita médica
            </span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-700 select-none">
            <input
              type="checkbox"
              checked={hasBabyFood}
              onChange={(e) => setHasBabyFood(e.target.checked)}
              className="rounded text-blue-600 w-4 h-4"
            />
            <span className="flex items-center gap-1">
              <Baby className="w-3.5 h-3.5 text-blue-600" />
              Levo alimentação infantil/leite para bebê no voo
            </span>
          </label>
        </div>

        {/* Notificação de Exceção Legal */}
        {(hasPrescriptionMeds || hasBabyFood) && (
          <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 leading-relaxed">
            <strong>Exceção Prevista na Resolução ANAC:</strong> Medicamentos indispensáveis acompanhados de prescrição médica e alimentos infantis necessários para a duração do itinerário podem ultrapassar 100ml e ser transportados fora do saco transparente, devendo ser apresentados separadamente na inspeção.
          </div>
        )}

        {/* Painel do Saquinho Transparente (Gauge Visual) */}
        <div
          className={`p-6 sm:p-7 rounded-3xl border-2 transition-all ${
            overallStatus === "approved"
              ? "bg-emerald-50/70 border-emerald-500/80 text-emerald-950"
              : overallStatus === "warning"
              ? "bg-amber-50/70 border-amber-500/80 text-amber-950"
              : "bg-rose-50/70 border-rose-500/80 text-rose-950"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
            <div>
              <div className="flex items-center gap-2">
                {overallStatus === "approved" && <CheckCircle2 className="w-6 h-6 text-emerald-600" />}
                {overallStatus === "warning" && <AlertTriangle className="w-6 h-6 text-amber-600" />}
                {overallStatus === "danger" && <AlertOctagon className="w-6 h-6 text-rose-600 animate-pulse" />}
                <h3 className="text-xl font-black">
                  {overallStatus === "approved" && "🟢 Dentro dos Limites do Cenário Escolhido"}
                  {overallStatus === "warning" && "🟡 Alerta: Próximo da Capacidade Recomendada"}
                  {overallStatus === "danger" && "🔴 Alerta: Recipientes Fora dos Limites de Cabine"}
                </h3>
              </div>
              <p className="text-xs sm:text-sm mt-1 opacity-90">
                {flightType === "international"
                  ? "Regra internacional: frascos nominais de até 100ml reunidos em embalagem transparente de até 1 Litro."
                  : "Regra nacional: cosméticos comuns liberados; aerossóis limitados a 300ml por frasco (máx 1,2kg total)."}
              </p>
            </div>

            <div className="text-left md:text-right shrink-0">
              <div className="text-2xl font-black">
                {totalVolume} ml <span className="text-sm font-semibold text-slate-500">{flightType === "international" ? "/ 1.000 ml" : "(total)"}</span>
              </div>
              <div className="text-xs font-bold text-slate-600">
                {totalItemsCount} frascos simulados
              </div>
            </div>
          </div>

          {/* Barra de Progresso do Volume Acumulado */}
          {flightType === "international" && (
            <div className="w-full bg-slate-200/80 rounded-full h-4 overflow-hidden p-0.5">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  overallStatus === "approved"
                    ? "bg-emerald-500"
                    : overallStatus === "warning"
                    ? "bg-amber-500"
                    : "bg-rose-600"
                }`}
                style={{ width: `${Math.min(100, (totalVolume / 1000) * 100)}%` }}
              />
            </div>
          )}

          {/* Alertas Críticos de Frascos > 100ml */}
          {hasViolatingItem && (
            <div className="mt-4 bg-white/90 p-4 rounded-2xl border border-rose-300 text-rose-900 space-y-1">
              <div className="text-xs font-black uppercase tracking-wider flex items-center gap-1.5 text-rose-700">
                <AlertOctagon className="w-4 h-4" />
                Frasco Nominal Acima do Limite de Cabine:
              </div>
              {violatingItems.map((vi) => (
                <div key={vi.id} className="text-xs font-semibold">
                  • <strong>{vi.name} ({vi.volumeMl}ml)</strong>: A fiscalização confere a capacidade impressa na embalagem, não o volume restante. Em voos internacionais, frascos acima de 100ml não podem seguir na cabine e devem ser despachados no check-in se houver tempo hábil, caso contrário ficarão retidos no posto de segurança.
                </div>
              ))}
            </div>
          )}

          {exceedsPouchCapacity && (
            <div className="mt-3 text-xs font-bold text-rose-800">
              ⚠️ O volume somado ({totalVolume}ml) ultrapassa a capacidade máxima de 1.000ml (1 Litro) permitida por passageiro.
            </div>
          )}

          {isTooCrowded && !hasViolatingItem && (
            <div className="mt-3 text-xs font-bold text-amber-800">
              ⚠️ Você adicionou {totalItemsCount} frascos. Um saco plástico transparente padrão de 1 Litro pode não fechar completamente.
            </div>
          )}
        </div>

        {/* Adicionar Itens Rápidos Pré-configurados */}
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            Adicionar Cosméticos / Itens Populares:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {PRESET_LIQUID_ITEMS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => addItemFromPreset(preset)}
                type="button"
                className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 hover:border-blue-400 bg-slate-50 hover:bg-blue-50/50 text-slate-800 text-left transition-all text-xs font-semibold group"
              >
                <span className="truncate mr-1">{preset.name}</span>
                <span className="shrink-0 text-[10px] bg-white group-hover:bg-blue-600 group-hover:text-white px-2 py-0.5 rounded-md border border-slate-200 group-hover:border-blue-600 font-bold transition-colors">
                  +{preset.defaultVolumeMl}ml
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Adicionar Item Personalizado */}
        <form onSubmit={addCustomItem} className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <label className="block text-xs font-bold text-slate-700 mb-2">
            Adicionar produto específico com volume personalizado:
          </label>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="text"
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              placeholder="Nome do produto (ex: Demaquilante, Protetor Labial)"
              className="w-full sm:flex-1 text-sm bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
            />
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-28">
                <input
                  type="number"
                  value={customMl}
                  onChange={(e) => setCustomMl(Number(e.target.value) || 0)}
                  placeholder="ml"
                  className="w-full text-sm font-bold bg-white border border-slate-300 rounded-xl px-3 py-2.5 pr-8 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                />
                <span className="text-xs font-bold text-slate-400 absolute right-3 top-1/2 -translate-y-1/2">ml</span>
              </div>
              <button
                type="submit"
                className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <Plus className="w-4 h-4" />
                Adicionar
              </button>
            </div>
          </div>
        </form>

        {/* Lista de Itens no Saquinho */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-slate-800">
              Produtos na sua Nécessaire ({items.length}):
            </h3>
            {items.length > 0 && (
              <button
                onClick={clearAll}
                type="button"
                className="text-xs font-semibold text-rose-600 hover:text-rose-700"
              >
                Esvaziar lista
              </button>
            )}
          </div>

          {items.length === 0 ? (
            <div className="text-center py-8 bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-slate-500 text-xs">
              Sua lista de líquidos está vazia. Adicione os itens acima para simular a conformidade.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {items.map((item) => {
                const isOverLimit = flightType === "international" ? item.volumeMl > 100 : item.volumeMl > 300;
                return (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                      isOverLimit
                        ? "bg-rose-50 border-rose-300 text-rose-950"
                        : "bg-white border-slate-200 text-slate-800"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${isOverLimit ? "bg-rose-500" : "bg-emerald-500"}`} />
                      <span className="text-xs font-bold truncate">{item.name}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`text-xs font-black px-2 py-0.5 rounded ${isOverLimit ? "bg-rose-200 text-rose-900" : "bg-slate-100 text-slate-700"}`}>
                        {item.volumeMl} ml
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        type="button"
                        className="text-slate-400 hover:text-rose-600 p-1"
                        aria-label="Remover item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Guia Educativo Baseado em Fonte ANAC Oficial */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-3">
            <Info className="w-4 h-4 text-blue-600" />
            Diretrizes Oficiais da ANAC sobre Líquidos em Voo
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="bg-white p-3.5 rounded-xl border border-slate-200">
              <div className="text-xs font-bold text-slate-900 mb-1">
                1. Capacidade Nominal do Frasco
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                A norma da ANAC e da IATA restringe o tamanho do recipiente a até 100ml. Se o frasco tiver capacidade superior (ex: 200ml), não pode ser transportado na cabine mesmo que esteja quase vazio.
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200">
              <div className="text-xs font-bold text-slate-900 mb-1">
                2. Embalagem Plástica Transparente de até 1 Litro
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Todos os frascos devem ser acondicionados em 1 única embalagem plástica transparente e vedável (como saquinhos de fecho hermético de aprox. 20x20cm), facilitando a inspeção no raio-X.
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200">
              <div className="text-xs font-bold text-slate-900 mb-1">
                3. Pastas e Géis Contam como Líquidos
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Substâncias de consistência pastosa ou cremosa (como pasta de dente, protetor solar, pomada de cabelo e rímel) estão sujeitas às mesmas restrições de líquidos na cabine.
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200">
              <div className="text-xs font-bold text-slate-900 mb-1">
                4. Produtos Comprados em Free Shop (Duty Free)
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Bebidas e perfumes adquiridos no Duty Free após a inspeção do raio-X devem permanecer dentro da sacola inviolável (STEB) com nota fiscal visível até o destino final.
              </p>
            </div>
          </div>
        </div>

        {/* Callout de Acessório Oficial Amazon Brasil */}
        <div className="bg-gradient-to-r from-blue-900 to-[#0B1E36] rounded-2xl p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">Acessório Recomendado • Link de Afiliado</span>
            <h4 className="font-extrabold text-base sm:text-lg">Kit de Frascos de Silicone para Viagem (Até 100ml)</h4>
            <p className="text-xs text-slate-300 max-w-xl">
              Frascos com vedação anti-vazamento no padrão aceito pelos postos de segurança da ANAC e TSA.
            </p>
          </div>
          <a
            href="https://www.amazon.com.br/s?k=kit+frascos+silicone+viagem+100ml+necessaire&tag=achadospro09-20"
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="shrink-0 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs px-5 py-3 rounded-xl shadow-md transition-all flex items-center gap-1.5"
          >
            Ver Kits de Frascos na Amazon Brasil
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
