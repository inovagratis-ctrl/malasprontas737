"use client";

import { useState } from "react";
import { AIRLINES_DATA, AirlineBaggageRule } from "@/data/airlinesData";
import {
  Luggage,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Plane,
  Scale,
  Ruler,
  DollarSign,
  ArrowRight,
  ShieldAlert,
  Sparkles
} from "lucide-react";

export default function BaggageCheckerTool() {
  const [selectedAirlineId, setSelectedAirlineId] = useState<string>("gol");
  const [bagType, setBagType] = useState<"cabin" | "personal">("cabin");
  
  // Dimensões do usuário
  const [height, setHeight] = useState<number>(55);
  const [width, setWidth] = useState<number>(35);
  const [depth, setDepth] = useState<number>(25);
  const [weight, setWeight] = useState<number>(9.5);

  const selectedAirline = AIRLINES_DATA.find((a) => a.id === selectedAirlineId) || AIRLINES_DATA[0];

  const targetLimit = bagType === "cabin" ? selectedAirline.cabinBag : {
    height: selectedAirline.personalItem.height,
    width: selectedAirline.personalItem.width,
    depth: selectedAirline.personalItem.depth,
    maxWeight: bagType === "personal" && selectedAirline.id === "tap" ? 2 : 5, // peso médio estimado
    includedInStandardFare: selectedAirline.personalItem.included,
    description: selectedAirline.personalItem.description
  };

  // Avaliação matemática
  const heightDiff = height - targetLimit.height;
  const widthDiff = width - targetLimit.width;
  const depthDiff = depth - targetLimit.depth;
  const weightDiff = weight - targetLimit.maxWeight;

  const hasSevereDimensionExceed = heightDiff > 2 || widthDiff > 2 || depthDiff > 2;
  const hasModerateDimensionExceed = (heightDiff > 0 && heightDiff <= 2) || (widthDiff > 0 && widthDiff <= 2) || (depthDiff > 0 && depthDiff <= 2);
  const hasWeightExceed = weightDiff > 0;
  const hasFareExclusion = bagType === "cabin" && !selectedAirline.cabinBag.includedInStandardFare;

  let verdict: "approved" | "warning" | "barred" = "approved";
  let verdictTitle = "🟢 Bagagem 100% Aprovada para Voar";
  let verdictDesc = "Suas medidas e peso estão dentro da franquia oficial sem cobrança de taxas no portão de embarque.";

  if (hasFareExclusion) {
    verdict = "barred";
    verdictTitle = "🔴 Atenção: Não Inclusa na Tarifa Básica!";
    verdictDesc = `A ${selectedAirline.name} cobra à parte pela mala de mão na tarifa mais barata. Se você tentar embarcar sem contratar antes pelo site, pagará a taxa máxima no balcão.`;
  } else if (hasSevereDimensionExceed || weightDiff > 1.5) {
    verdict = "barred";
    verdictTitle = "🔴 Será Barrada no Gabarito do Portão";
    verdictDesc = `Sua bagagem excede os limites máximos permitidos. O despacho forçado no portão de embarque custará em média ${selectedAirline.gateFeeEstimate}.`;
  } else if (hasModerateDimensionExceed || hasWeightExceed) {
    verdict = "warning";
    verdictTitle = "🟡 No Limite Crítico do Risco";
    verdictDesc = "Ultrapassa por poucos centímetros ou está no peso limítrofe. Em malas rígidas, as rodinhas podem travar no gabarito de metal da fiscalização.";
  }

  // Predefinições rápidas
  const applyPreset = (h: number, w: number, d: number, wt: number, type: "cabin" | "personal") => {
    setHeight(h);
    setWidth(w);
    setDepth(d);
    setWeight(wt);
    setBagType(type);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
      {/* Top Banner de Identidade Aeronáutica */}
      <div className="bg-[#0B1E36] text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
          <Plane className="w-56 h-56 text-white" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Simulador de Gabarito Aeroportuário 2026
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Verificador de Medidas & Bagagem por Cia Aérea
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            Evite a taxa surpresa de R$ 160 a R$ 380 no portão de embarque. Teste as medidas da sua mala contra o gabarito oficial da Gol, LATAM, Azul e internacionais.
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {/* Passo 1: Seleção da Companhia Aérea */}
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            1. Selecione a Companhia Aérea do seu voo:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {AIRLINES_DATA.map((airline) => {
              const isSelected = airline.id === selectedAirlineId;
              return (
                <button
                  key={airline.id}
                  onClick={() => setSelectedAirlineId(airline.id)}
                  type="button"
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
                    isSelected
                      ? "bg-blue-50 border-blue-600 shadow-xs ring-2 ring-blue-600/20"
                      : "bg-slate-50/70 border-slate-200 hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  <span className={`text-[11px] font-black tracking-wider px-2 py-0.5 rounded text-white ${airline.badgeColor} mb-1`}>
                    {airline.logoText}
                  </span>
                  <span className="text-xs font-bold text-slate-900 truncate w-full">
                    {airline.name.split(" ")[0]}
                  </span>
                  <span className="text-[10px] text-slate-500">{airline.country}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Passo 2: Tipo de Bagagem (Mala de Bordo vs Mochila/Item Pessoal) */}
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            2. Qual tipo de bagagem você quer testar?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => setBagType("cabin")}
              type="button"
              className={`flex items-center gap-3.5 p-4 rounded-2xl border text-left transition-all ${
                bagType === "cabin"
                  ? "bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-600/30"
                  : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800"
              }`}
            >
              <div className={`p-2.5 rounded-xl ${bagType === "cabin" ? "bg-white/15" : "bg-blue-100 text-blue-700"}`}>
                <Luggage className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-sm">Mala de Bordo / Cabine</div>
                <div className={`text-xs ${bagType === "cabin" ? "text-blue-100" : "text-slate-500"}`}>
                  Vai no bagageiro superior (overhead bin)
                </div>
              </div>
            </button>

            <button
              onClick={() => setBagType("personal")}
              type="button"
              className={`flex items-center gap-3.5 p-4 rounded-2xl border text-left transition-all ${
                bagType === "personal"
                  ? "bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-600/30"
                  : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800"
              }`}
            >
              <div className={`p-2.5 rounded-xl ${bagType === "personal" ? "bg-white/15" : "bg-blue-100 text-blue-700"}`}>
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-sm">Item Pessoal / Mochila de Assento</div>
                <div className={`text-xs ${bagType === "personal" ? "text-blue-100" : "text-slate-500"}`}>
                  Deve caber 100% debaixo do assento dianteiro
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Predefinições Rápidas */}
        <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-600">Modelos Prontos:</span>
          <button
            onClick={() => applyPreset(55, 35, 25, 9.5, "cabin")}
            className="text-xs px-2.5 py-1 rounded-lg bg-white border border-slate-300 hover:border-blue-500 font-medium text-slate-700"
          >
            Mala ANAC Padrão (55×35×25)
          </button>
          <button
            onClick={() => applyPreset(40, 30, 20, 4.5, "personal")}
            className="text-xs px-2.5 py-1 rounded-lg bg-white border border-slate-300 hover:border-blue-500 font-medium text-slate-700"
          >
            Mochila Pessoal (40×30×20)
          </button>
          <button
            onClick={() => applyPreset(58, 38, 28, 11.5, "cabin")}
            className="text-xs px-2.5 py-1 rounded-lg bg-white border border-slate-300 hover:border-rose-500 font-medium text-rose-700"
          >
            Mala Estufada / Risco (58×38×28)
          </button>
        </div>

        {/* Passo 3: Entradas de Medidas e Peso */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-600">Altura (cm)</span>
              <span className="text-[11px] font-semibold text-blue-600">Max: {targetLimit.height}cm</span>
            </div>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value) || 0)}
              className="w-full text-2xl font-black text-slate-900 bg-white border border-slate-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
            />
            <span className="text-[10px] text-slate-400 block mt-1">Inclui rodinhas e alça</span>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-600">Largura (cm)</span>
              <span className="text-[11px] font-semibold text-blue-600">Max: {targetLimit.width}cm</span>
            </div>
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value) || 0)}
              className="w-full text-2xl font-black text-slate-900 bg-white border border-slate-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
            />
            <span className="text-[10px] text-slate-400 block mt-1">De ponta a ponta</span>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-600">Profundidade (cm)</span>
              <span className="text-[11px] font-semibold text-blue-600">Max: {targetLimit.depth}cm</span>
            </div>
            <input
              type="number"
              value={depth}
              onChange={(e) => setDepth(Number(e.target.value) || 0)}
              className="w-full text-2xl font-black text-slate-900 bg-white border border-slate-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
            />
            <span className="text-[10px] text-slate-400 block mt-1">Com bolsos cheios</span>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-600">Peso (kg)</span>
              <span className="text-[11px] font-semibold text-blue-600">Max: {targetLimit.maxWeight}kg</span>
            </div>
            <input
              type="number"
              step="0.5"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value) || 0)}
              className="w-full text-2xl font-black text-slate-900 bg-white border border-slate-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
            />
            <span className="text-[10px] text-slate-400 block mt-1">Peso total carregado</span>
          </div>
        </div>

        {/* VEREDITO VISUAL INSTANTÂNEO */}
        <div
          className={`p-6 sm:p-7 rounded-3xl border-2 transition-all ${
            verdict === "approved"
              ? "bg-emerald-50/80 border-emerald-500/80 text-emerald-950"
              : verdict === "warning"
              ? "bg-amber-50/80 border-amber-500/80 text-amber-950"
              : "bg-rose-50/80 border-rose-500/80 text-rose-950"
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="mt-1">
              {verdict === "approved" && <CheckCircle2 className="w-9 h-9 text-emerald-600" />}
              {verdict === "warning" && <AlertTriangle className="w-9 h-9 text-amber-600" />}
              {verdict === "barred" && <XCircle className="w-9 h-9 text-rose-600" />}
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-1">{verdictTitle}</h3>
              <p className="text-sm sm:text-base leading-relaxed opacity-90">{verdictDesc}</p>

              {/* Comparador de Métricas com Barras */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-black/5">
                  <div className="text-[11px] font-bold text-slate-500">Altura</div>
                  <div className="text-base font-black">
                    {height} cm / <span className="text-slate-500 font-semibold">{targetLimit.height} cm</span>
                  </div>
                  <div className={`text-xs font-bold mt-0.5 ${heightDiff > 0 ? "text-rose-600" : "text-emerald-600"}`}>
                    {heightDiff > 0 ? `+${heightDiff} cm (passou)` : `OK (${Math.abs(heightDiff)}cm folga)`}
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-black/5">
                  <div className="text-[11px] font-bold text-slate-500">Largura</div>
                  <div className="text-base font-black">
                    {width} cm / <span className="text-slate-500 font-semibold">{targetLimit.width} cm</span>
                  </div>
                  <div className={`text-xs font-bold mt-0.5 ${widthDiff > 0 ? "text-rose-600" : "text-emerald-600"}`}>
                    {widthDiff > 0 ? `+${widthDiff} cm (passou)` : `OK (${Math.abs(widthDiff)}cm folga)`}
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-black/5">
                  <div className="text-[11px] font-bold text-slate-500">Profundidade</div>
                  <div className="text-base font-black">
                    {depth} cm / <span className="text-slate-500 font-semibold">{targetLimit.depth} cm</span>
                  </div>
                  <div className={`text-xs font-bold mt-0.5 ${depthDiff > 0 ? "text-rose-600" : "text-emerald-600"}`}>
                    {depthDiff > 0 ? `+${depthDiff} cm (passou)` : `OK (${Math.abs(depthDiff)}cm folga)`}
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-black/5">
                  <div className="text-[11px] font-bold text-slate-500">Peso Carregado</div>
                  <div className="text-base font-black">
                    {weight} kg / <span className="text-slate-500 font-semibold">{targetLimit.maxWeight} kg</span>
                  </div>
                  <div className={`text-xs font-bold mt-0.5 ${weightDiff > 0 ? "text-rose-600" : "text-emerald-600"}`}>
                    {weightDiff > 0 ? `+${weightDiff.toFixed(1)} kg (excesso)` : `OK (${Math.abs(weightDiff).toFixed(1)}kg livre)`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ficha Oficial da Cia Aérea Selecionada */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-2">
            <ShieldAlert className="w-4 h-4 text-blue-600" />
            Regra Oficial da {selectedAirline.name} ({selectedAirline.country})
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
            {selectedAirline.officialRuleSummary}
          </p>
          <div className="bg-amber-50 rounded-xl p-3 border border-amber-200 text-xs text-amber-900">
            <strong>Dica de Ouro dos Viajantes:</strong> {selectedAirline.proTip}
          </div>
        </div>

        {/* Callout de Acessório Essencial: Balança Digital e Mala Homologada */}
        <div className="bg-gradient-to-r from-blue-900 to-[#0B1E36] rounded-2xl p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">Acessório Recomendado</span>
            <h4 className="font-extrabold text-base sm:text-lg">Balança Digital Portátil de Precisão (Até 50kg)</h4>
            <p className="text-xs text-slate-300 max-w-xl">
              Pesa menos de 90 gramas e evita o constrangimento de ter que abrir a mala no meio do aeroporto para tirar roupas antes da esteira.
            </p>
          </div>
          <a
            href="https://www.amazon.com.br/s?k=balanca+digital+portatil+mala+viagem&tag=achadospro09-20"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs px-5 py-3 rounded-xl shadow-md transition-all flex items-center gap-1.5"
          >
            Ver Balanças na Amazon Brasil
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
