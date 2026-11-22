"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  MapPin,
  Calendar,
  Users,
  Compass,
  DollarSign,
  Printer,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Luggage,
  Loader2,
  Calculator
} from "lucide-react";

interface ItineraryResult {
  title?: string;
  summary?: string;
  estimatedBudget?: string;
  bestTime?: string;
  packingEssentials?: string[];
  days?: {
    dayNumber: number;
    theme: string;
    morning: string;
    afternoon: string;
    evening: string;
  }[];
  localTips?: string[];
  rawText?: string;
}

export default function RoteiroPersonalizadoPage() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("3");
  const [travelWith, setTravelWith] = useState("Casal");
  const [style, setStyle] = useState("Praia e Descanso");
  const [budget, setBudget] = useState("Moderado (R$ 200 - R$ 350/dia)");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ItineraryResult | null>(null);
  const [error, setError] = useState("");

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination.trim()) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/generate-itinerary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destination,
          days,
          travelWith,
          style,
          budget,
        }),
      });

      if (!res.ok) {
        throw new Error("Não foi possível gerar o roteiro no momento. Tente novamente.");
      }

      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || "Ocorreu um erro ao gerar o roteiro.");
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-24">
      {/* HEADER HERO LIGHT MODE */}
      <section className="bg-white border-b border-stone-200/80 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold mb-4">
            <Sparkles className="w-4 h-4 text-orange-600" />
            Ferramenta de Planejamento Malas Prontas
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
            Planejador de Roteiro por Número de Dias
          </h1>
          <p className="mt-3 text-stone-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Diga para onde você quer ir e gere um roteiro dia a dia organizado por regiões com estimativa de custos e itens essenciais de bagagem.
          </p>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-10 shadow-sm">
          <form onSubmit={handleGenerate} className="space-y-6">
            {/* Destino */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-orange-600" />
                Para onde você vai viajar? *
              </label>
              <input
                type="text"
                required
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Ex: Florianópolis, Salvador, Campos do Jordão, Buenos Aires..."
                className="w-full px-4 py-3.5 rounded-2xl border border-stone-200 text-sm sm:text-base text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-orange-500 transition-colors shadow-xs"
              />
              {/* Sugestões rápidas */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                <span className="text-[11px] text-stone-400 self-center mr-1">Sugestões:</span>
                {["Praia do Francês", "Maragogi", "Gramado", "Fernando de Noronha", "Rio de Janeiro"].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setDestination(s)}
                    className="text-[11px] bg-stone-100 hover:bg-orange-50 hover:text-orange-600 text-stone-600 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Configurações em Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Dias */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-orange-600" />
                  Duração
                </label>
                <select
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm bg-white text-stone-800 focus:outline-hidden focus:border-orange-500"
                >
                  <option value="2">2 Dias (Final de Semana)</option>
                  <option value="3">3 Dias (Feriado)</option>
                  <option value="4">4 Dias</option>
                  <option value="5">5 Dias</option>
                  <option value="7">7 Dias (1 Semana)</option>
                  <option value="10">10 Dias</option>
                </select>
              </div>

              {/* Companhia */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-orange-600" />
                  Com quem vai?
                </label>
                <select
                  value={travelWith}
                  onChange={(e) => setTravelWith(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm bg-white text-stone-800 focus:outline-hidden focus:border-orange-500"
                >
                  <option value="Casal">Casal (Romântico)</option>
                  <option value="Solo/Mochileiro">Sozinho(a) / Mochilão</option>
                  <option value="Família com Crianças">Família com Crianças</option>
                  <option value="Grupo de Amigos">Grupo de Amigos</option>
                </select>
              </div>

              {/* Estilo */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-orange-600" />
                  Estilo
                </label>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm bg-white text-stone-800 focus:outline-hidden focus:border-orange-500"
                >
                  <option value="Praia e Descanso">Praia e Descanso</option>
                  <option value="Ecoturismo & Trilhas">Ecoturismo & Trilhas</option>
                  <option value="Cultural e Gastronômico">Cultural e Gastronomia</option>
                  <option value="Mochilão Econômico">Mochilão Super Econômico</option>
                  <option value="Agito e Noite">Festas e Agito</option>
                </select>
              </div>

              {/* Orçamento */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4 text-emerald-600" />
                  Orçamento
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm bg-white text-stone-800 focus:outline-hidden focus:border-orange-500"
                >
                  <option value="Econômico (R$ 120 - R$ 200/dia)">Econômico</option>
                  <option value="Moderado (R$ 200 - R$ 380/dia)">Moderado</option>
                  <option value="Conforto/Luxo (R$ 400+/dia)">Conforto / Alto Padrão</option>
                </select>
              </div>
            </div>

            {/* Botão de Geração */}
            <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-stone-500">
                Planejamento estruturado por proximidade geográfica para evitar gastos extras com deslocamento.
              </span>
              <button
                type="submit"
                disabled={loading || !destination.trim()}
                className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-8 py-3.5 rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Montando Roteiro...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Gerar Roteiro Personalizado
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* MENSAGEM DE ERRO SE HOUVER */}
        {error && (
          <div className="mt-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* RESULTADO GERADO */}
        {result && (
          <div id="itinerary-pdf-view" className="mt-12 space-y-8 animate-in fade-in duration-500">
            {/* Header do Resultado */}
            <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-10 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Roteiro Gerado com Sucesso
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
                    {result.title || `Viagem Para ${destination}`}
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500 mt-1">
                    {days} dias • {travelWith} • Estilo: {style}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handlePrint}
                    type="button"
                    className="inline-flex items-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200 text-xs font-bold px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    Imprimir ou Salvar em PDF
                  </button>
                </div>
              </div>

              {result.summary && (
                <p className="mt-6 text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
                  {result.summary}
                </p>
              )}

              {/* Ficha Rápida Gerada */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {result.estimatedBudget && (
                  <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-stone-200/80">
                    <span className="text-xs font-bold text-stone-500 flex items-center gap-1 mb-1">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                      Estimativa de Gasto Médio:
                    </span>
                    <p className="text-sm font-bold text-stone-900">{result.estimatedBudget}</p>
                  </div>
                )}
                {result.bestTime && (
                  <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-stone-200/80">
                    <span className="text-xs font-bold text-stone-500 flex items-center gap-1 mb-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      Melhor Época do Ano:
                    </span>
                    <p className="text-sm font-bold text-stone-900">{result.bestTime}</p>
                  </div>
                )}
              </div>

              {/* Itens Essenciais na Mala */}
              {result.packingEssentials && result.packingEssentials.length > 0 && (
                <div className="mt-6 pt-6 border-t border-stone-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-3 flex items-center gap-1.5">
                    <Luggage className="w-4 h-4" />
                    O Que Não Pode Faltar na Mala Para {destination}:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {result.packingEssentials.map((item, idx) => (
                      <li key={idx} className="text-xs text-stone-700 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* ROTEIRO DIA A DIA */}
            {result.days && result.days.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  Programação Dia a Dia
                </h3>

                {result.days.map((d) => (
                  <div
                    key={d.dayNumber}
                    className="bg-white rounded-2xl border border-stone-200/90 p-6 shadow-xs hover:border-orange-200 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-xl bg-orange-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        D{d.dayNumber}
                      </div>
                      <h4 className="text-base font-bold text-stone-900">
                        Dia {d.dayNumber}: {d.theme}
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-2 border-l-2 border-orange-100 ml-4">
                      {d.morning && (
                        <div className="bg-[#FAF8F5] p-3 rounded-xl border border-stone-200/70">
                          <span className="text-[11px] font-bold text-amber-600 uppercase block mb-1">
                            Manhã
                          </span>
                          <p className="text-xs text-stone-700 leading-relaxed">{d.morning}</p>
                        </div>
                      )}
                      {d.afternoon && (
                        <div className="bg-[#FAF8F5] p-3 rounded-xl border border-stone-200/70">
                          <span className="text-[11px] font-bold text-orange-600 uppercase block mb-1">
                            Tarde & Almoço
                          </span>
                          <p className="text-xs text-stone-700 leading-relaxed">{d.afternoon}</p>
                        </div>
                      )}
                      {d.evening && (
                        <div className="bg-[#FAF8F5] p-3 rounded-xl border border-stone-200/70">
                          <span className="text-[11px] font-bold text-indigo-600 uppercase block mb-1">
                            Noite & Jantar
                          </span>
                          <p className="text-xs text-stone-700 leading-relaxed">{d.evening}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* DICAS SECRETAS LOCAIS */}
            {result.localTips && result.localTips.length > 0 && (
              <div className="bg-orange-50/70 border border-orange-200/70 rounded-3xl p-6 sm:p-8">
                <h3 className="text-lg font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-orange-600" />
                  Dicas Práticas para {destination}:
                </h3>
                <ul className="space-y-2.5">
                  {result.localTips.map((tip, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-stone-800 flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* PRÓXIMOS PASSOS DE PLANEJAMENTO (LIGHT MODE) */}
            <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-extrabold text-lg text-stone-900">
                  Quer calcular o orçamento completo para {destination}?
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Simule gastos com hospedagem, alimentação, transporte e bagagem na nossa calculadora gratuita.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link
                  href="/calculadora-viagem"
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs px-5 py-3 rounded-xl transition-colors"
                >
                  <Calculator className="w-4 h-4" />
                  Abrir Calculadora
                </Link>
                <Link
                  href="/checklist"
                  className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs px-5 py-3 rounded-xl transition-colors"
                >
                  <Luggage className="w-4 h-4" />
                  Checklist de Bagagem
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
