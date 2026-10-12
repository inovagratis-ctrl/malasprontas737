"use client";

import { useState } from "react";
import Link from "next/link";
import { AFFILIATES } from "@/data/affiliates";
import AirHelpBanner from "@/components/AirHelpBanner";
import BeachParkBanner from "@/components/BeachParkBanner";
import {
  Sparkles,
  MapPin,
  Calendar,
  Users,
  Compass,
  DollarSign,
  Printer,
  Bed,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ArrowRight,
  Luggage,
  Heart,
  Share2,
  Loader2,
  HelpCircle,
  Copy,
  Check,
  Ticket,
  Plane,
  Music,
  ExternalLink,
  Train,
  Palmtree
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
  const [copied, setCopied] = useState(false);

  const handleCopyPix = () => {
    navigator.clipboard.writeText("malasprontas737@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

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
    <div className="min-h-screen bg-stone-50 pb-24">
      {/* HEADER HERO */}
      <section className="bg-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 text-orange-300 text-xs font-semibold mb-4 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-orange-400" />
            Inteligência Artificial Exclusiva Malas Prontas
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Gerador de Roteiro Sob Medida
          </h1>
          <p className="mt-3 text-stone-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Diga para onde você quer ir e nosso motor de inteligência artificial criará um roteiro dia a dia personalizado com estimativa de custos e dicas locais.
          </p>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-10 shadow-xl shadow-stone-900/5">
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
                    className="text-[11px] bg-stone-100 hover:bg-orange-50 hover:text-orange-600 text-stone-600 px-2.5 py-1 rounded-lg transition-colors"
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
              <span className="text-xs text-stone-400">
                ⚡ Processado com tecnologia Xiaomi MiMo IA em segundos.
              </span>
              <button
                type="submit"
                disabled={loading || !destination.trim()}
                className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-sm px-8 py-3.5 rounded-2xl shadow-md shadow-orange-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Criando Roteiro com IA...
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
            <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-10 shadow-lg">
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
                    className="inline-flex items-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-xs"
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
                  <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
                    <span className="text-xs font-bold text-stone-500 flex items-center gap-1 mb-1">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                      Estimativa de Gasto Médio:
                    </span>
                    <p className="text-sm font-bold text-stone-900">{result.estimatedBudget}</p>
                  </div>
                )}
                {result.bestTime && (
                  <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
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
                        <div className="bg-stone-50/70 p-3 rounded-xl border border-stone-100">
                          <span className="text-[11px] font-bold text-amber-600 uppercase block mb-1">
                            🌅 Manhã
                          </span>
                          <p className="text-xs text-stone-700 leading-relaxed">{d.morning}</p>
                        </div>
                      )}
                      {d.afternoon && (
                        <div className="bg-stone-50/70 p-3 rounded-xl border border-stone-100">
                          <span className="text-[11px] font-bold text-orange-600 uppercase block mb-1">
                            ☀️ Tarde & Almoço
                          </span>
                          <p className="text-xs text-stone-700 leading-relaxed">{d.afternoon}</p>
                        </div>
                      )}
                      {d.evening && (
                        <div className="bg-stone-50/70 p-3 rounded-xl border border-stone-100">
                          <span className="text-[11px] font-bold text-indigo-600 uppercase block mb-1">
                            🌙 Noite & Jantar
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
                  Segredos de Quem Conhece {destination}:
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

            {/* MONETIZAÇÃO & RESERVAS INTEGRADAS */}
            <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="text-center max-w-xl mx-auto mb-6">
                <span className="bg-orange-500/20 text-orange-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Planejamento Completo
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold mt-2">
                  Reserve os Melhores Serviços para {destination}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-1">
                  Compre passagens, passeios oficiais, shows exclusivos e hotéis com os melhores descontos do Malas Prontas.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* 1. PASSAGENS VAI DE PROMO & GOL */}
                <a
                  href={AFFILIATES.VAI_DE_PROMO_VOOS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-stone-800/80 hover:bg-stone-800 border border-stone-700/60 p-4 rounded-2xl flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Plane className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                        Passagens Aéreas
                        <ExternalLink className="w-3 h-3 text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-[11px] text-stone-400">Até 40% OFF no Vai de Promo & Gol</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-indigo-400 group-hover:translate-x-0.5 transition-transform">Buscar &rarr;</span>
                </a>

                {/* 2. PACOTES PARTIU VIAJAR */}
                <a
                  href={AFFILIATES.PARTIU_VIAJAR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-stone-800/80 hover:bg-stone-800 border border-stone-700/60 p-4 rounded-2xl flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Palmtree className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                        Pacotes de Viagem
                        <ExternalLink className="w-3 h-3 text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-[11px] text-stone-400">Roteiros prontos no Partiu Viajar</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 group-hover:translate-x-0.5 transition-transform">Ver &rarr;</span>
                </a>

                {/* 3. PASSEIOS GETYOURGUIDE */}
                <a
                  href={AFFILIATES.GET_YOUR_GUIDE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-stone-800/80 hover:bg-stone-800 border border-stone-700/60 p-4 rounded-2xl flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Ticket className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                        Tours & Ingressos
                        <ExternalLink className="w-3 h-3 text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-[11px] text-stone-400">Passeios oficiais no GetYourGuide</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-red-400 group-hover:translate-x-0.5 transition-transform">Ver &rarr;</span>
                </a>

                {/* 4. SHOWS & CANDLELIGHT FEVER BR */}
                <a
                  href={AFFILIATES.FEVER_BR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-stone-800/80 hover:bg-stone-800 border border-stone-700/60 p-4 rounded-2xl flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Music className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                        Candlelight & Shows
                        <ExternalLink className="w-3 h-3 text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-[11px] text-stone-400">Experiências exclusivas na Fever</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-purple-400 group-hover:translate-x-0.5 transition-transform">Explorar &rarr;</span>
                </a>

                {/* 5. TRENS & ÔNIBUS OMIO */}
                <a
                  href={AFFILIATES.OMIO_TRANSPORTE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-stone-800/80 hover:bg-stone-800 border border-stone-700/60 p-4 rounded-2xl flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Train className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                        Trens & Ônibus
                        <ExternalLink className="w-3 h-3 text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-[11px] text-stone-400">Bilhetes nacionais & internacionais</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-400 group-hover:translate-x-0.5 transition-transform">Buscar &rarr;</span>
                </a>

                {/* 6. HOSPEDAGEM STAY22 */}
                <a
                  href={`https://www.stay22.com/embed/gm?aid=${AFFILIATES.STAY22_AID}&address=${encodeURIComponent(destination)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-stone-800/80 hover:bg-stone-800 border border-stone-700/60 p-4 rounded-2xl flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Bed className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                        Hotéis & Pousadas
                        <ExternalLink className="w-3 h-3 text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-[11px] text-stone-400">Menores tarifas com Stay22</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-teal-400 group-hover:translate-x-0.5 transition-transform">Reservar &rarr;</span>
                </a>
              </div>
            </div>

            {/* DIREITOS DO PASSAGEIRO AÉREO */}
            <AirHelpBanner />

            {/* MONETIZAÇÃO 2: APOIO PIX VOLUNTÁRIO */}
            <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-xs text-center">
              <Heart className="w-8 h-8 text-rose-500 fill-rose-500 mx-auto mb-2" />
              <h3 className="font-bold text-lg text-stone-900">
                Gostou do seu Roteiro Exclusivo?
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto mt-1">
                O gerador com IA do <strong>Malas Prontas</strong> é 100% gratuito. Se este roteiro te ajudou a economizar tempo e planejar sua viagem, você pode apoiar nosso projeto com qualquer contribuição no PIX!
              </p>
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2">
                <div className="inline-flex items-center gap-2 bg-stone-100 border border-stone-200 px-4 py-2.5 rounded-xl text-xs font-mono text-stone-800">
                  <span className="text-stone-500 font-sans font-medium">Chave PIX (E-mail):</span>
                  <span className="font-bold text-orange-600 select-all">malasprontas737@gmail.com</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPix}
                  className="bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      Chave Copiada!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copiar Chave PIX
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
