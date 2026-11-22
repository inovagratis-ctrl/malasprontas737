"use client";

import { useState } from "react";
import { AIRLINES_DATA, AirlineBaggageRule, AirlineFareOption } from "@/data/airlinesData";
import {
  Luggage,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Plane,
  Scale,
  Ruler,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  Info
} from "lucide-react";

export default function BaggageCheckerTool() {
  const [selectedAirlineId, setSelectedAirlineId] = useState<string>("gol");
  const selectedAirline = AIRLINES_DATA.find((a) => a.id === selectedAirlineId) || AIRLINES_DATA[0];

  // Tarifa selecionada da cia aérea
  const [selectedFareId, setSelectedFareId] = useState<string>(selectedAirline.fares[0]?.id || "");
  const currentFare = selectedAirline.fares.find((f) => f.id === selectedFareId) || selectedAirline.fares[0];

  const [bagType, setBagType] = useState<"cabin" | "personal">("cabin");
  
  // Dimensões do usuário
  const [height, setHeight] = useState<number>(55);
  const [width, setWidth] = useState<number>(35);
  const [depth, setDepth] = useState<number>(25);
  const [weight, setWeight] = useState<number>(9.5);

  // Mudar companhia altera a tarifa padrão
  const handleAirlineChange = (airlineId: string) => {
    setSelectedAirlineId(airlineId);
    const targetAir = AIRLINES_DATA.find((a) => a.id === airlineId) || AIRLINES_DATA[0];
    setSelectedFareId(targetAir.fares[0]?.id || "");
  };

  // Limite alvo dinâmico baseado na Cia aérea e na TARIFA escolhida
  const targetLimit = bagType === "cabin" ? {
    height: currentFare.cabinMaxDimensions.height,
    width: currentFare.cabinMaxDimensions.width,
    depth: currentFare.cabinMaxDimensions.depth,
    maxWeight: currentFare.cabinMaxWeight,
    included: currentFare.includesCabinBag,
    description: currentFare.notes
  } : {
    height: currentFare.personalItemMaxDimensions.height,
    width: currentFare.personalItemMaxDimensions.width,
    depth: currentFare.personalItemMaxDimensions.depth,
    maxWeight: selectedAirline.id === "tap" ? 2 : 10,
    included: currentFare.includesPersonalItem,
    description: "Item pessoal que deve caber 100% debaixo da poltrona à sua frente."
  };

  // Avaliação matemática
  const heightDiff = height - targetLimit.height;
  const widthDiff = width - targetLimit.width;
  const depthDiff = depth - targetLimit.depth;
  const weightDiff = weight - targetLimit.maxWeight;

  const hasSevereDimensionExceed = heightDiff > 2 || widthDiff > 2 || depthDiff > 2;
  const hasModerateDimensionExceed = (heightDiff > 0 && heightDiff <= 2) || (widthDiff > 0 && widthDiff <= 2) || (depthDiff > 0 && depthDiff <= 2);
  const hasWeightExceed = weightDiff > 0;
  const isExcludedByFare = bagType === "cabin" && !currentFare.includesCabinBag;

  let verdict: "approved" | "warning" | "barred" = "approved";
  let verdictTitle = "🟢 Compatível com a Franquia da Tarifa";
  let verdictDesc = `Suas medidas e peso estão dentro das regras informadas pela ${selectedAirline.name} para a tarifa "${currentFare.name}".`;

  if (isExcludedByFare) {
    verdict = "barred";
    verdictTitle = "🔴 Franquia Não Inclusa na Tarifa Selecionada!";
    verdictDesc = `A tarifa selecionada ("${currentFare.name}") NÃO dá direito a levar mala no bagageiro superior, apenas a mochila sob o assento. Se você levar mala de rodinhas ao portão, o despacho será cobrado na hora (estimativa: ${selectedAirline.gateFeeEstimate}).`;
  } else if (hasSevereDimensionExceed || weightDiff > 1.5) {
    verdict = "barred";
    verdictTitle = "🔴 Risco Alto de Retenção no Portão";
    verdictDesc = `Sua bagagem excede os limites de tamanho ou peso estabelecidos pela companhia. Pode haver cobrança de despacho no balcão de embarque (estimativa média: ${selectedAirline.gateFeeEstimate}).`;
  } else if (hasModerateDimensionExceed || hasWeightExceed) {
    verdict = "warning";
    verdictTitle = "🟡 No Limite de Risco do Gabarito";
    verdictDesc = "Ultrapassa por poucos centímetros ou está no peso limítrofe. Em malas rígidas, rodinhas ou bolsos estufados podem enroscar no gabarito de metal da fiscalização.";
  }

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
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Info className="w-3.5 h-3.5" />
            Simulador de Franquias por Companhia & Tarifa
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Verificador de Medidas & Peso por Cia Aérea
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            Consulte a franquia contratada da sua passagem. As regras de dimensões, quantidade de peças e peso de cabine variam conforme o contrato de transporte de cada companhia aérea.
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {/* Passo 1: Seleção da Companhia Aérea */}
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            1. Selecione a Companhia Aérea:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {AIRLINES_DATA.map((airline) => {
              const isSelected = airline.id === selectedAirlineId;
              return (
                <button
                  key={airline.id}
                  onClick={() => handleAirlineChange(airline.id)}
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

        {/* Passo 2: Seleção da Família Tarifária da Passagem */}
        <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              2. Qual a Tarifa do seu Bilhete na {selectedAirline.name}?
            </label>
            <span className="text-[11px] text-slate-400 font-medium">
              Consulta: {selectedAirline.lastConsultationDate}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {selectedAirline.fares.map((fare) => {
              const isFareSelected = fare.id === currentFare.id;
              return (
                <button
                  key={fare.id}
                  type="button"
                  onClick={() => setSelectedFareId(fare.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isFareSelected
                      ? "bg-white border-blue-600 shadow-xs ring-2 ring-blue-600/20"
                      : "bg-white/60 border-slate-200 hover:bg-white text-slate-700"
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
                    <span>{fare.name}</span>
                    {fare.includesCabinBag ? (
                      <span className="text-[10px] font-black bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                        Mala de Bordo ({fare.cabinMaxWeight}kg)
                      </span>
                    ) : (
                      <span className="text-[10px] font-black bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                        Sem Mala de Cabine
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-tight">
                    {fare.notes}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Passo 3: Tipo de Peça a testar */}
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            3. Qual peça você deseja simular agora?
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
                <div className="font-bold text-sm">Mala de Cabine / Bordo</div>
                <div className={`text-xs ${bagType === "cabin" ? "text-blue-100" : "text-slate-500"}`}>
                  Bagageiro superior (overhead bin)
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
                <div className="font-bold text-sm">Item Pessoal (Mochila / Bolsa)</div>
                <div className={`text-xs ${bagType === "personal" ? "text-blue-100" : "text-slate-500"}`}>
                  Sob o assento à sua frente
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Modelos rápidos */}
        <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-600">Modelos Prontos:</span>
          <button
            onClick={() => applyPreset(55, 35, 25, 9.5, "cabin")}
            className="text-xs px-2.5 py-1 rounded-lg bg-white border border-slate-300 hover:border-blue-500 font-medium text-slate-700"
          >
            Mala Típica Nacional (55×35×25cm, 9.5kg)
          </button>
          <button
            onClick={() => applyPreset(40, 30, 20, 4.5, "personal")}
            className="text-xs px-2.5 py-1 rounded-lg bg-white border border-slate-300 hover:border-blue-500 font-medium text-slate-700"
          >
            Mochila Pessoal (40×30×20cm, 4.5kg)
          </button>
          <button
            onClick={() => applyPreset(55, 40, 20, 9.5, "cabin")}
            className="text-xs px-2.5 py-1 rounded-lg bg-white border border-slate-300 hover:border-emerald-500 font-medium text-emerald-800"
          >
            Mala Estilo Europeu TAP (55×40×20cm, 9.5kg)
          </button>
        </div>

        {/* Entradas numéricas */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-600">Altura (cm)</span>
              <span className="text-[11px] font-semibold text-blue-600">
                {targetLimit.height > 0 ? `Max: ${targetLimit.height}cm` : "N/D"}
              </span>
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
              <span className="text-[11px] font-semibold text-blue-600">
                {targetLimit.width > 0 ? `Max: ${targetLimit.width}cm` : "N/D"}
              </span>
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
              <span className="text-[11px] font-semibold text-blue-600">
                {targetLimit.depth > 0 ? `Max: ${targetLimit.depth}cm` : "N/D"}
              </span>
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
              <span className="text-[11px] font-semibold text-blue-600">
                {targetLimit.maxWeight > 0 ? `Max: ${targetLimit.maxWeight}kg` : "0kg"}
              </span>
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

        {/* VEREDITO VISUAL CONTEXTUAL */}
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
              {targetLimit.height > 0 && (
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
              )}
            </div>
          </div>
        </div>

        {/* Ficha da Companhia & Link da Fonte Oficial */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Contrato de Transporte: {selectedAirline.name} ({selectedAirline.country})
            </div>
            <a
              href={selectedAirline.officialSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800"
            >
              Consultar Página Oficial da Companhia
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {selectedAirline.contractRuleSummary}
          </p>
          <div className="bg-amber-50 rounded-xl p-3 border border-amber-200 text-xs text-amber-900">
            <strong>Dica Prática:</strong> {selectedAirline.proTip}
          </div>
        </div>

        {/* Callout de Acessório Oficial Amazon Brasil */}
        <div className="bg-gradient-to-r from-blue-900 to-[#0B1E36] rounded-2xl p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">Acessório Recomendado • Link de Afiliado</span>
            <h4 className="font-extrabold text-base sm:text-lg">Balança Digital Portátil de Precisão (Até 50kg)</h4>
            <p className="text-xs text-slate-300 max-w-xl">
              Pese sua bagagem em casa e evite o desconforto de abrir a mala no aeroporto para remanejar peso.
            </p>
          </div>
          <a
            href="https://www.amazon.com.br/s?k=balanca+digital+portatil+mala+viagem&tag=achadospro09-20"
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
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
