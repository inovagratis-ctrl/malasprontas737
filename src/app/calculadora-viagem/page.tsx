"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  Bed,
  Utensils,
  Plane,
  Ticket,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  MapPin,
  Loader2,
  X,
  Luggage
} from "lucide-react";

interface CostProfile {
  dailyHotel: number;
  dailyFood: number;
  dailyTours: number;
  dailyTransport: number;
  dailyExtras: number;
}

interface DestinationProfile {
  multiplier: number;
  baseFlight: number;
  region: string;
  highlight: string;
  iata: string;
}

const DESTINATION_PROFILES: Record<string, DestinationProfile> = {
  "Lençóis Maranhenses": { multiplier: 1.25, baseFlight: 760, region: "Nordeste", highlight: "Passeios 4x4 pelas dunas e lancha no Rio Preguiças", iata: "SLZ" },
  "Bariloche": { multiplier: 1.35, baseFlight: 1450, region: "Internacional", highlight: "Esqui no Cerro Catedral, Circuito Chico e chocolaterias", iata: "BRC" },
  "Jalapão": { multiplier: 1.45, baseFlight: 790, region: "Norte", highlight: "Expedições 4x4 e taxas dos fervedouros", iata: "PMW" },
  "Fernando de Noronha": { multiplier: 2.1, baseFlight: 1450, region: "Nordeste", highlight: "Taxa TPA + Parque Marinho e pousadas de alto padrão", iata: "FEN" },
  "Gramado": { multiplier: 1.35, baseFlight: 680, region: "Sul", highlight: "Restaurantes fondues e ingressos de parques temáticos", iata: "POA" },
  "Maragogi": { multiplier: 1.15, baseFlight: 620, region: "Nordeste", highlight: "Passeio de catamarã às piscinas naturais e passeios de buggy", iata: "MCZ" },
  "Praia do Francês": { multiplier: 0.95, baseFlight: 590, region: "Nordeste", highlight: "Destino muito econômico pertinho de Maceió", iata: "MCZ" },
  "Chapada dos Veadeiros": { multiplier: 1.1, baseFlight: 580, region: "Centro-Oeste", highlight: "Guia para trilhas longas e taxas de cachoeiras", iata: "BSB" },
  "Buenos Aires": { multiplier: 1.25, baseFlight: 1290, region: "Internacional", highlight: "Câmbio favorável, vinhos e shows de tango", iata: "BUE" },
  "Rio de Janeiro": { multiplier: 1.2, baseFlight: 550, region: "Sudeste", highlight: "Praias, Cristo Redentor e Pão de Açúcar", iata: "RIO" },
  "Natal": { multiplier: 1.1, baseFlight: 640, region: "Nordeste", highlight: "Passeio de buggy nas dunas de Genipabu e lagoas", iata: "NAT" },
  "Manaus": { multiplier: 1.25, baseFlight: 820, region: "Norte", highlight: "Encontro das Águas, Teatro Amazonas e passeios de barco", iata: "MAO" },
  "Belém": { multiplier: 1.05, baseFlight: 740, region: "Norte", highlight: "Mercado Ver-o-Peso, Estação das Docas e Ilha do Combu", iata: "BEL" },
  "Outro Destino": { multiplier: 1.0, baseFlight: 650, region: "Brasil", highlight: "Média nacional estimada do turismo", iata: "BR" }
};

export default function CalculadoraViagemPage() {
  // Origem
  const [originInput, setOriginInput] = useState("");
  const [originCity, setOriginCity] = useState("São Paulo, SP");
  const [originState, setOriginState] = useState("SP");
  const [loadingOriginCep, setLoadingOriginCep] = useState(false);
  const [originFeedback, setOriginFeedback] = useState("");

  // Destino
  const [destinationInput, setDestinationInput] = useState("Jalapão");
  const [destinationCity, setDestinationCity] = useState("Jalapão");
  const [destinationState, setDestinationState] = useState("TO");
  const [loadingDestCep, setLoadingDestCep] = useState(false);
  const [destFeedback, setDestFeedback] = useState("");

  // Configurações
  const [days, setDays] = useState(5);
  const [travelers, setTravelers] = useState(2);
  const [tier, setTier] = useState<"economico" | "moderado" | "conforto">("moderado");
  const [includeFlight, setIncludeFlight] = useState(true);

  // Manipular Origem (CEP ou Nome)
  const handleOriginChange = async (value: string) => {
    setOriginInput(value);
    const cleanDigits = value.replace(/\D/g, "");

    if (cleanDigits.length === 8) {
      setLoadingOriginCep(true);
      setOriginFeedback("");
      try {
        const res = await fetch(`https://viacep.com.br/ws/${cleanDigits}/json/`);
        const data = await res.json();
        if (data && !data.erro) {
          setOriginCity(`${data.localidade}, ${data.uf}`);
          setOriginState(data.uf);
          setOriginFeedback(`Identificado: ${data.localidade} (${data.uf})`);
        } else {
          setOriginFeedback("CEP não encontrado. Digite o nome da cidade.");
        }
      } catch {
        setOriginFeedback("Erro na consulta do CEP.");
      } finally {
        setLoadingOriginCep(false);
      }
    } else {
      if (value.trim().length > 0) {
        setOriginCity(value.trim());
      } else {
        setOriginCity("São Paulo, SP");
        setOriginState("SP");
      }
      setOriginFeedback("");
    }
  };

  // Manipular Destino (CEP ou Nome)
  const handleDestChange = async (value: string) => {
    setDestinationInput(value);
    setDestinationCity(value);
    const cleanDigits = value.replace(/\D/g, "");

    if (cleanDigits.length === 8) {
      setLoadingDestCep(true);
      setDestFeedback("");
      try {
        const res = await fetch(`https://viacep.com.br/ws/${cleanDigits}/json/`);
        const data = await res.json();
        if (data && !data.erro) {
          const formatted = `${data.localidade}, ${data.uf}`;
          setDestinationCity(formatted);
          setDestinationState(data.uf);
          setDestFeedback(`Identificado: ${data.localidade} (${data.uf})`);
        } else {
          setDestFeedback("CEP não encontrado. Digite o nome do destino.");
        }
      } catch {
        setDestFeedback("Erro na consulta do CEP.");
      } finally {
        setLoadingDestCep(false);
      }
    } else {
      setDestFeedback("");
    }
  };

  // Perfis de custo base por pessoa/dia
  const baseTiers: Record<"economico" | "moderado" | "conforto", CostProfile> = {
    economico: {
      dailyHotel: 110,
      dailyFood: 60,
      dailyTours: 45,
      dailyTransport: 30,
      dailyExtras: 20
    },
    moderado: {
      dailyHotel: 220,
      dailyFood: 110,
      dailyTours: 90,
      dailyTransport: 60,
      dailyExtras: 40
    },
    conforto: {
      dailyHotel: 450,
      dailyFood: 220,
      dailyTours: 190,
      dailyTransport: 120,
      dailyExtras: 80
    }
  };

  // Localização segura do perfil do destino
  const trimmedDest = destinationCity.trim().toLowerCase();
  const normalizedKey = trimmedDest.length > 0
    ? Object.keys(DESTINATION_PROFILES).find((key) => {
        const lowerKey = key.toLowerCase();
        return lowerKey === trimmedDest || trimmedDest.includes(lowerKey) || lowerKey.includes(trimmedDest);
      })
    : null;

  const selectedDest: DestinationProfile =
    (normalizedKey && DESTINATION_PROFILES[normalizedKey]) ||
    DESTINATION_PROFILES["Outro Destino"] || {
      multiplier: 1.0,
      baseFlight: 650,
      region: "Brasil",
      highlight: "Média estimada do turismo nacional",
      iata: "BR"
    };

  const currentTier = baseTiers[tier] || baseTiers.moderado;

  // Cálculo de passagem aérea seguro
  let flightMultiplier = 1.0;
  if (["SP", "RJ", "MG", "ES"].includes(originState)) {
    flightMultiplier = 1.0;
  } else if (["PR", "SC", "RS"].includes(originState)) {
    flightMultiplier = selectedDest.region === "Sul" ? 0.75 : 1.25;
  } else if (["BA", "PE", "CE", "AL", "RN", "PB", "SE", "MA", "PI"].includes(originState)) {
    flightMultiplier = selectedDest.region === "Nordeste" ? 0.7 : 1.35;
  } else if (["DF", "GO", "MT", "MS"].includes(originState)) {
    flightMultiplier = selectedDest.region === "Centro-Oeste" ? 0.7 : 1.15;
  } else {
    flightMultiplier = selectedDest.region === "Norte" ? 0.8 : 1.4;
  }

  // Valores numéricos seguros contra NaN
  const safeDays = Math.max(1, Math.min(60, Number(days) || 1));
  const safeTravelers = Math.max(1, Math.min(30, Number(travelers) || 1));

  // Cálculos financeiros com proteção contra NaN
  const multiplier = Number(selectedDest.multiplier) || 1.0;
  const hotelTotal = Math.round((currentTier.dailyHotel || 220) * multiplier * safeDays * Math.ceil(safeTravelers / 2));
  const foodTotal = Math.round((currentTier.dailyFood || 110) * multiplier * safeDays * safeTravelers);
  const toursTotal = Math.round((currentTier.dailyTours || 90) * multiplier * safeDays * safeTravelers);
  const transportTotal = Math.round((currentTier.dailyTransport || 60) * multiplier * safeDays * safeTravelers);
  const extrasTotal = Math.round((currentTier.dailyExtras || 40) * multiplier * safeDays * safeTravelers);
  const singleFlightEst = Math.round((Number(selectedDest.baseFlight) || 650) * flightMultiplier);
  const flightTotal = includeFlight ? singleFlightEst * safeTravelers : 0;

  const grandTotal = hotelTotal + foodTotal + toursTotal + transportTotal + extrasTotal + flightTotal;
  const perPersonTotal = Math.round(grandTotal / safeTravelers);
  const perDayPerPerson = Math.round(perPersonTotal / safeDays);

  // Nomes de exibição seguros
  const displayDest = destinationCity.trim() || destinationInput.trim() || "seu destino";
  const displayOrigin = originCity.trim() || originInput.trim() || "São Paulo, SP";

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-24">
      {/* Hero Header Light Mode */}
      <section className="bg-white border-b border-stone-200/80 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-4">
            <Calculator className="w-4 h-4 text-emerald-600" />
            Simulador Financeiro com Busca por CEP ou Cidade
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
            Simulador de Custos: Quanto Custa Viajar?
          </h1>
          <p className="mt-3 text-stone-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Digite o CEP ou nome da sua cidade e do seu destino para calcular os gastos estimados com passagens, hospedagem, alimentação e passeios.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controles da Calculadora (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-base font-bold text-stone-900 pb-3 border-b border-stone-100 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-600" />
              1. Sua Origem & Destino
            </h2>

            {/* Origem (CEP ou Cidade) */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>De onde você vai partir? (CEP ou Cidade)</span>
                {loadingOriginCep && <Loader2 className="w-3.5 h-3.5 animate-spin text-orange-600" />}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={originInput}
                  onChange={(e) => handleOriginChange(e.target.value)}
                  placeholder="Ex: 01310-100 ou São Paulo, SP..."
                  className="w-full px-4 py-3 rounded-2xl border border-stone-200 text-sm font-medium text-stone-900 focus:outline-hidden focus:border-orange-500 shadow-xs pr-16"
                />
                {originInput && (
                  <button
                    type="button"
                    onClick={() => {
                      setOriginInput("");
                      setOriginCity("São Paulo, SP");
                      setOriginState("SP");
                    }}
                    className="absolute right-3 top-3 p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100"
                    title="Limpar origem"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Feedback de Origem */}
              <div className="mt-2 flex items-center justify-between text-xs">
                <span className="text-stone-500">
                  Origem: <strong className="text-stone-900 font-bold">{displayOrigin}</strong>
                </span>
                {originFeedback && (
                  <span className="text-emerald-700 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> {originFeedback}
                  </span>
                )}
              </div>
            </div>

            {/* Destino (CEP ou Cidade) */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Para Onde Você Vai Viajar? (CEP ou Destino)</span>
                {loadingDestCep && <Loader2 className="w-3.5 h-3.5 animate-spin text-emerald-600" />}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={destinationInput}
                  onChange={(e) => handleDestChange(e.target.value)}
                  placeholder="Ex: Natal, Jalapão, Gramado, Maceió, Paris..."
                  className="w-full px-4 py-3 rounded-2xl border border-stone-200 text-sm sm:text-base font-medium text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-emerald-500 shadow-xs pr-16"
                />
                {destinationInput && (
                  <button
                    type="button"
                    onClick={() => {
                      setDestinationInput("");
                      setDestinationCity("");
                    }}
                    className="absolute right-3 top-3.5 p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100"
                    title="Limpar destino"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Feedback de Destino */}
              {destFeedback && (
                <div className="mt-1.5 text-xs text-emerald-700 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> {destFeedback}
                </div>
              )}

              {/* Sugestões Rápidas */}
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                <span className="text-[11px] text-stone-400 self-center mr-1">Sugestões:</span>
                {["Natal", "Jalapão", "Maragogi", "Gramado", "Fernando de Noronha", "Manaus", "Belém", "Rio de Janeiro", "Buenos Aires"].map((dest) => (
                  <button
                    key={dest}
                    type="button"
                    onClick={() => handleDestChange(dest)}
                    className="text-[11px] bg-stone-100 hover:bg-emerald-50 hover:text-emerald-700 text-stone-600 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                  >
                    {dest}
                  </button>
                ))}
              </div>

              {selectedDest && destinationCity.trim().length > 0 && (
                <p className="text-xs text-stone-500 mt-2 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Dica para {displayDest}: {selectedDest.highlight}
                </p>
              )}
            </div>

            {/* Dias e Viajantes */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  Duração (Dias)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    max="60"
                    value={days || ""}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10);
                      setDays(isNaN(val) ? 1 : Math.max(1, Math.min(60, val)));
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm font-bold text-stone-900 text-center focus:outline-hidden focus:border-emerald-500"
                  />
                  <span className="text-xs text-stone-400 font-medium">dias</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  Pessoas
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={travelers || ""}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10);
                      setTravelers(isNaN(val) ? 1 : Math.max(1, Math.min(30, val)));
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm font-bold text-stone-900 text-center focus:outline-hidden focus:border-emerald-500"
                  />
                  <span className="text-xs text-stone-400 font-medium">viajantes</span>
                </div>
              </div>
            </div>

            {/* Padrão de Viagem */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                Padrão de Conforto
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setTier("economico")}
                  className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                    tier === "economico"
                      ? "border-emerald-600 bg-emerald-50 text-emerald-800 font-bold"
                      : "border-stone-200 hover:bg-stone-50 text-stone-600 font-medium"
                  }`}
                >
                  <span className="block text-xs">Econômico</span>
                  <span className="text-[10px] opacity-75">Hostel & Pousadas</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTier("moderado")}
                  className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                    tier === "moderado"
                      ? "border-emerald-600 bg-emerald-50 text-emerald-800 font-bold"
                      : "border-stone-200 hover:bg-stone-50 text-stone-600 font-medium"
                  }`}
                >
                  <span className="block text-xs">Moderado</span>
                  <span className="text-[10px] opacity-75">Conforto Médio</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTier("conforto")}
                  className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                    tier === "conforto"
                      ? "border-emerald-600 bg-emerald-50 text-emerald-800 font-bold"
                      : "border-stone-200 hover:bg-stone-50 text-stone-600 font-medium"
                  }`}
                >
                  <span className="block text-xs">Alto Padrão</span>
                  <span className="text-[10px] opacity-75">Resort & Conforto</span>
                </button>
              </div>
            </div>

            {/* Incluir Passagem */}
            <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
              <div>
                <span className="text-xs text-stone-700 font-semibold flex items-center gap-1.5">
                  <Plane className="w-4 h-4 text-sky-600" />
                  Incluir passagens aéreas {displayOrigin} ➔ {displayDest}?
                </span>
                <span className="text-[11px] text-stone-400 block mt-0.5">
                  Estimativa de R$ {singleFlightEst.toLocaleString("pt-BR")} por pessoa (ida e volta)
                </span>
              </div>
              <input
                type="checkbox"
                checked={includeFlight}
                onChange={(e) => setIncludeFlight(e.target.checked)}
                className="w-5 h-5 text-emerald-600 rounded-md cursor-pointer"
              />
            </div>
          </div>

          {/* Resumo dos Gastos Light Mode (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Card Totalizador Light Mode */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/90">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block">
                Custo Total Estimado (Outubro/2026)
              </span>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-stone-900">
                  R$ {grandTotal.toLocaleString("pt-BR")}
                </span>
                <span className="text-xs text-stone-500">para {safeTravelers} pessoa{safeTravelers > 1 ? "s" : ""}</span>
              </div>

              <div className="mt-4 pt-4 border-t border-stone-100 grid grid-cols-2 gap-3 text-xs">
                <div className="bg-[#FAF8F5] p-3 rounded-xl border border-stone-200/70">
                  <span className="text-stone-500 block">Por pessoa:</span>
                  <span className="font-bold text-stone-900 text-sm">R$ {perPersonTotal.toLocaleString("pt-BR")}</span>
                </div>
                <div className="bg-emerald-50/60 p-3 rounded-xl border border-emerald-200/70">
                  <span className="text-emerald-800 block">Média diária/pessoa:</span>
                  <span className="font-bold text-emerald-700 text-sm">R$ {perDayPerPerson.toLocaleString("pt-BR")}/dia</span>
                </div>
              </div>

              {/* Detalhamento */}
              <div className="mt-6 space-y-3 text-xs">
                <div className="flex justify-between text-stone-700 py-1.5 border-b border-stone-100">
                  <span className="flex items-center gap-1.5">
                    <Bed className="w-3.5 h-3.5 text-orange-600" /> Hospedagem ({safeDays} noites):
                  </span>
                  <span className="font-mono font-bold text-stone-900">R$ {hotelTotal.toLocaleString("pt-BR")}</span>
                </div>
                <div className="flex justify-between text-stone-700 py-1.5 border-b border-stone-100">
                  <span className="flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-amber-600" /> Alimentação:
                  </span>
                  <span className="font-mono font-bold text-stone-900">R$ {foodTotal.toLocaleString("pt-BR")}</span>
                </div>
                <div className="flex justify-between text-stone-700 py-1.5 border-b border-stone-100">
                  <span className="flex items-center gap-1.5">
                    <Ticket className="w-3.5 h-3.5 text-emerald-600" /> Passeios & Transporte Local:
                  </span>
                  <span className="font-mono font-bold text-stone-900">R$ {(toursTotal + transportTotal + extrasTotal).toLocaleString("pt-BR")}</span>
                </div>
                <div className="flex justify-between text-stone-700 py-1.5">
                  <span className="flex items-center gap-1.5">
                    <Plane className="w-3.5 h-3.5 text-sky-600" /> Passagens Aéreas ({safeTravelers}x):
                  </span>
                  <span className="font-mono font-bold text-stone-900">R$ {flightTotal.toLocaleString("pt-BR")}</span>
                </div>
              </div>

              <p className="mt-5 text-[11px] text-stone-500 leading-relaxed bg-[#FAF8F5] p-3 rounded-xl border border-stone-200/70">
                Nota: Os valores acima são estimativas médias de planejamento e variam conforme antecedência da compra, temporada e câmbio.
              </p>
            </div>

            {/* Ação: Roteiro e Checklist */}
            <div className="bg-white rounded-3xl border border-stone-200/90 p-6 shadow-xs text-center space-y-3">
              <Sparkles className="w-7 h-7 text-orange-600 mx-auto" />
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                Continue o planejamento da sua viagem
              </h3>
              <p className="text-xs text-stone-600">
                Monte a programação dia a dia para {displayDest} ou confira o checklist completo de bagagem.
              </p>
              <div className="grid grid-cols-1 gap-2 pt-1">
                <Link
                  href="/roteiro-personalizado"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs py-3 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                >
                  Planejar Roteiro por Dias
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/checklist"
                  className="w-full bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs py-3 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Luggage className="w-3.5 h-3.5" />
                  Abrir Checklist de Bagagem
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
