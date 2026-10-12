"use client";

import { useState } from "react";
import { AFFILIATES } from "@/data/affiliates";
import { trackConversionEvent } from "@/lib/analytics";
import {
  Bed,
  Home,
  Users,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  Sparkles,
  Coffee,
  Luggage,
  Utensils
} from "lucide-react";

type TravelerProfile = "solo" | "casal" | "familia" | "amigos";
type RegionLevel = "brasil" | "mercosul" | "internacional";

export default function AccommodationComparator() {
  const [profile, setProfile] = useState<TravelerProfile>("casal");
  const [nights, setNights] = useState<number>(4);
  const [region, setRegion] = useState<RegionLevel>("brasil");
  const [cookAtApartment, setCookAtApartment] = useState<boolean>(true);
  const [needLuggageStorage, setNeedLuggageStorage] = useState<boolean>(true);

  const safeNights = Math.max(1, Math.min(30, Number(nights) || 1));

  const peopleCount =
    profile === "solo" ? 1 : profile === "casal" ? 2 : profile === "familia" ? 4 : 4;

  const regMult = region === "brasil" ? 1 : region === "mercosul" ? 1.25 : 2.2;

  // 1. Cálculo Hotel 3★ (Com Café da Manhã e Recepção 24h)
  const roomsNeeded = Math.ceil(peopleCount / 2);
  const hotelBaseNightly = Math.round(270 * regMult * roomsNeeded);
  const hotelCityTax = region === "internacional" ? Math.round(28 * peopleCount * safeNights) : 0;
  const hotelTotal = hotelBaseNightly * safeNights + hotelCityTax;

  // 2. Cálculo Hostel (Cama em dormitório para solo ou Quarto Privativo/Camas para grupo)
  const hostelNightlyPerPerson = Math.round(95 * regMult);
  const hostelBaseNightly =
    profile === "solo"
      ? hostelNightlyPerPerson
      : Math.round(hostelNightlyPerPerson * peopleCount * 0.9);
  const hostelBreakfastExtra = Math.round(28 * regMult * peopleCount * safeNights);
  const hostelTotal = hostelBaseNightly * safeNights + hostelBreakfastExtra;

  // 3. Cálculo Apartamento de Temporada (Airbnb / Booking Flats)
  const aptBaseNightly = Math.round((profile === "solo" || profile === "casal" ? 215 : 340) * regMult);
  const aptCleaningFee = Math.round(170 * regMult);
  const aptServiceFee = Math.round(aptBaseNightly * safeNights * 0.14);
  const aptBreakfastMarketCost = Math.round(18 * regMult * peopleCount * safeNights);
  const aptLockerCost = needLuggageStorage ? Math.round(45 * regMult * Math.ceil(peopleCount / 2)) : 0;
  const aptCookingSavings = cookAtApartment
    ? Math.round(42 * regMult * peopleCount * safeNights)
    : 0;
  const aptTotal = Math.max(
    100,
    aptBaseNightly * safeNights +
      aptCleaningFee +
      aptServiceFee +
      aptBreakfastMarketCost +
      aptLockerCost -
      aptCookingSavings
  );

  const options = [
    {
      id: "hotel",
      name: "Hotel / Pousada 3★",
      total: hotelTotal,
      perNightReal: Math.round(hotelTotal / safeNights),
      hiddenCosts:
        hotelCityTax > 0
          ? `Inclui R$ ${hotelCityTax} de City Tax municipal. Café da manhã e limpeza diária inclusos (R$ 0 extra).`
          : "Taxa de limpeza R$ 0 • Café da manhã incluso • Guarda-malas gratuito 24h.",
      pros: ["Recepção e segurança 24h", "Café da manhã pronto incluso", "Arrumação diária de quarto"],
      cons: ["Sem cozinha para preparar refeições", "Em 4 pessoas exige quarto família ou 2 quartos"],
    },
    {
      id: "hostel",
      name: profile === "solo" ? "Hostel (Cama Box c/ Cortina)" : "Hostel Boutique (Privativo/Grupo)",
      total: hostelTotal,
      perNightReal: Math.round(hostelTotal / safeNights),
      hiddenCosts: `Somado R$ ${hostelBreakfastExtra} estimado de café da manhã (${safeNights} dias). Sem taxa de limpeza.`,
      pros: ["Menor custo absoluto para viajante solo", "Cozinha compartilhada disponível", "Clima social e passeios em grupo"],
      cons: ["Menor privacidade em quartos compartilhados", "Toalha e cadeado às vezes cobrados à parte"],
    },
    {
      id: "apartamento",
      name: "Apartamento de Temporada",
      total: aptTotal,
      perNightReal: Math.round(aptTotal / safeNights),
      hiddenCosts: `Inclui R$ ${aptCleaningFee} de taxa de limpeza + R$ ${aptServiceFee} taxa de serviço${
        aptLockerCost > 0 ? ` + R$ ${aptLockerCost} guarda-volumes` : ""
      }${aptCookingSavings > 0 ? ` (Descontado R$ ${aptCookingSavings} de economia cozinhando)` : ""}.`,
      pros: ["Espaço amplo e máquina de lavar roupas", "Cozinha reduz gasto com restaurantes", "Excelente para famílias e estadias de 5+ noites"],
      cons: ["Taxa de limpeza pesa muito em viagens curtas (1-3 noites)", "Sem recepção para guardar malas após check-out"],
    },
  ];

  const sorted = [...options].sort((a, b) => a.total - b.total);
  const winner = sorted[0];

  const handleBookClick = (optionName: string) => {
    trackConversionEvent("click_accommodation", {
      partner: "Stay22 / Booking",
      category: "Hospedagem",
      label: `comparator_${optionName}_${profile}_${safeNights}d`,
    });
  };

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-100">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-orange-600 mb-1">
            <Sparkles className="w-4 h-4" />
            Ferramenta Exclusiva Contra Custos Ocultos
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900">
            Comparador Real: Hotel vs. Hostel vs. Apartamento
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Descubra qual modalidade sai realmente mais barata somando taxa de limpeza, café da manhã, guarda-malas e economia de cozinha (Referência: Outubro/2026).
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-6">
        {/* Perfil */}
        <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80">
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2 flex items-center gap-1.5">
            <Users className="w-4 h-4 text-orange-600" />
            1. Perfil de Viajante
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: "solo", label: "Viajante Solo (1p)" },
              { id: "casal", label: "Casal (2p)" },
              { id: "familia", label: "Família (4p)" },
              { id: "amigos", label: "Amigos (4p)" },
            ].map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setProfile(p.id as TravelerProfile)}
                className={`text-xs font-bold py-2 px-2.5 rounded-xl border transition-all cursor-pointer ${
                  profile === p.id
                    ? "bg-stone-900 text-white border-stone-900"
                    : "bg-white text-stone-700 border-stone-200 hover:border-orange-300"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Noites & Destino */}
        <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80 space-y-3">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-stone-700 mb-1">
              <span>2. Quantidade de Noites:</span>
              <span className="text-orange-600 font-extrabold">{safeNights} {safeNights === 1 ? "noite" : "noites"}</span>
            </div>
            <input
              type="range"
              min={1}
              max={15}
              value={safeNights}
              onChange={(e) => setNights(Number(e.target.value) || 1)}
              className="w-full accent-orange-600 cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">
              Região da Viagem:
            </label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value as RegionLevel)}
              className="w-full text-xs font-semibold bg-white border border-stone-200 rounded-xl px-3 py-2 text-stone-800 focus:outline-hidden focus:border-orange-500"
            >
              <option value="brasil">Brasil (Média Nacional)</option>
              <option value="mercosul">América do Sul (Argentina, Chile, Peru)</option>
              <option value="internacional">Europa / Estados Unidos</option>
            </select>
          </div>
        </div>

        {/* Hábitos Ocultos */}
        <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80 space-y-2.5 flex flex-col justify-center">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
            3. Fatores de Custo Oculto
          </span>
          <label className="flex items-center gap-2.5 text-xs text-stone-700 cursor-pointer">
            <input
              type="checkbox"
              checked={cookAtApartment}
              onChange={(e) => setCookAtApartment(e.target.checked)}
              className="rounded accent-orange-600 w-4 h-4"
            />
            <span className="flex items-center gap-1">
              <Utensils className="w-3.5 h-3.5 text-emerald-600" />
              Pretendo cozinhar jantares rápidos se ficar em Apartamento
            </span>
          </label>
          <label className="flex items-center gap-2.5 text-xs text-stone-700 cursor-pointer">
            <input
              type="checkbox"
              checked={needLuggageStorage}
              onChange={(e) => setNeedLuggageStorage(e.target.checked)}
              className="rounded accent-orange-600 w-4 h-4"
            />
            <span className="flex items-center gap-1">
              <Luggage className="w-3.5 h-3.5 text-amber-600" />
              Preciso guardar malas antes do check-in ou após o check-out
            </span>
          </label>
        </div>
      </div>

      {/* Resultado Vencedor */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Melhor Custo-Benefício Real para o Seu Perfil ({peopleCount} {peopleCount === 1 ? "pessoa" : "pessoas"} • {safeNights} {safeNights === 1 ? "noite" : "noites"})
          </span>
          <p className="text-sm sm:text-base font-extrabold text-stone-900">
            Vencedor: <span className="text-emerald-700">{winner.name}</span> — Custo Efetivo Total Estimado de R$ {winner.total.toLocaleString("pt-BR")} (R$ {winner.perNightReal}/noite)
          </p>
        </div>
        <a
          href={AFFILIATES.BOOKING_STAY22}
          target="_blank"
          rel="sponsored nofollow noopener"
          onClick={() => handleBookClick(winner.name)}
          className="bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-extrabold px-4 py-2.5 rounded-xl shrink-0 inline-flex items-center gap-1.5 transition-colors"
        >
          <span>Ver Tarifas Reais no Mapa</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Cards de Comparação */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {options.map((opt) => {
          const isWinner = opt.id === winner.id;
          return (
            <div
              key={opt.id}
              className={`rounded-2xl p-5 border flex flex-col justify-between transition-all ${
                isWinner
                  ? "border-2 border-emerald-500 bg-emerald-50/20 shadow-md"
                  : "border-stone-200 bg-stone-50/50"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-extrabold text-stone-900 text-base flex items-center gap-1.5">
                    {opt.id === "hotel" ? (
                      <Bed className="w-4 h-4 text-orange-600" />
                    ) : opt.id === "apartamento" ? (
                      <Home className="w-4 h-4 text-sky-600" />
                    ) : (
                      <Coffee className="w-4 h-4 text-amber-600" />
                    )}
                    {opt.name}
                  </span>
                  {isWinner && (
                    <span className="bg-emerald-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                      Mais Vantajoso
                    </span>
                  )}
                </div>

                <div className="my-3 pt-2 border-t border-stone-200/70">
                  <p className="text-2xl font-black text-stone-900">
                    R$ {opt.total.toLocaleString("pt-BR")}
                  </p>
                  <p className="text-xs text-stone-600 font-semibold">
                    Custo real: R$ {opt.perNightReal.toLocaleString("pt-BR")} / noite
                  </p>
                </div>

                <div className="bg-white rounded-xl p-3 border border-stone-200/70 text-[11px] text-stone-700 mb-3">
                  <strong className="text-stone-900 block mb-0.5">Raio-X de Taxas e Economia:</strong>
                  {opt.hiddenCosts}
                </div>

                <ul className="space-y-1.5 text-xs text-stone-700 mb-3">
                  {opt.pros.map((pro, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                  {opt.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-stone-500">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={AFFILIATES.BOOKING_STAY22}
                target="_blank"
                rel="sponsored nofollow noopener"
                onClick={() => handleBookClick(opt.name)}
                className="mt-3 w-full bg-stone-900 hover:bg-orange-600 text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Comparar {opt.name}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
