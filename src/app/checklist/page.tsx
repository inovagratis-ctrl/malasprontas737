"use client";

import ChecklistWidget from "@/components/ChecklistWidget";
import TravelGearShowcase from "@/components/TravelGearShowcase";
import { Luggage, ShieldAlert, Sparkles, Scale, Droplet, Zap, Printer, Plane, ExternalLink } from "lucide-react";

export default function ChecklistPage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-4">
            <Luggage className="w-4 h-4" />
            Ferramenta 100% Gratuita
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Checklist Completo da Mala
          </h1>
          <p className="mt-3 text-stone-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Nunca mais esqueça documentos importantes, remédios ou carregadores. Selecione o estilo da sua viagem e marque os itens conforme guarda na mala.
          </p>

          <div className="mt-6 flex justify-center">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors border border-white/20"
            >
              <Printer className="w-4 h-4" />
              Imprimir ou Salvar em PDF
            </button>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <ChecklistWidget />

        {/* VITRINE DE MALAS DE BORDO MERCADO LIVRE */}
        <TravelGearShowcase />

        {/* BANNER SEGURO VIAGEM (EKTA) */}
        <div className="mt-12 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-500/30 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5" />
              Segurança & Tranquilidade
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Já contratou seu Seguro Viagem com cobertura médica?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              Evite gastos imprevistos com emergências de saúde, extravio de bagagem e cancelamento de voos a partir de R$ 9 por dia com assistência 24h em português.
            </p>
          </div>
          <a
            href="https://ektatraveling.tpo.lu/QynkhjN8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-7 py-3.5 rounded-2xl shadow-lg shadow-blue-600/30 transition-all shrink-0 flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <ShieldAlert className="w-4 h-4" />
            Cotar Seguro com 25% OFF
          </a>
        </div>

        {/* REGRAS DE BAGAGEM & DICAS DE OURO */}
        <section className="mt-16 bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-10 shadow-xs">
          <h2 className="text-2xl font-bold text-stone-900 mb-2 flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-orange-600" />
            Regras de Ouro Para Mala de Bordo (10kg)
          </h2>
          <p className="text-stone-700 text-sm mb-6">
            Dicas práticas para não pagar taxas extras no portão de embarque da companhia aérea.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-sm mb-1">
                Limite de Peso e Dimensões
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                A mala de mão deve ter no máximo 10kg e dimensões aproximadas de 55 x 35 x 25 cm (incluindo rodinhas e alças).
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mb-3">
                <Droplet className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-sm mb-1">
                Líquidos e Aerossóis
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Em voos internacionais, frascos de até 100ml acondicionados em saco plástico transparente vedado. Em voos nacionais, até 300ml por recipiente (máximo 1,2kg no total).
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-sm mb-1">
                Powerbanks e Baterias
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Baterias de lítio e powerbanks NUNCA podem ser despachados no porão do avião por risco de fogo. Leve-os sempre consigo na mochila ou mala de mão!
              </p>
            </div>
          </div>
        </section>

        {/* BANNER AIRHELP: INDENIZAÇÃO DE VOO */}
        <div className="mt-8 bg-gradient-to-r from-amber-950 via-stone-900 to-stone-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <Plane className="w-3.5 h-3.5" />
              Direito do Passageiro
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Seu voo atrasou mais de 3 horas ou foi cancelado?
            </h3>
            <p className="text-sm text-stone-300 max-w-xl leading-relaxed">
              Você pode ter direito a receber até R$ 5.000 de indenização das companhias aéreas. Verifique sua compensação gratuitamente sem pagar nada adiantado!
            </p>
          </div>
          <a
            href="https://airhelp.tpo.lu/8hNOeALJ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm px-7 py-3.5 rounded-2xl shadow-lg shadow-amber-600/30 transition-all shrink-0 flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <Plane className="w-4 h-4" />
            Verificar Indenização Grátis
            <ExternalLink className="w-3.5 h-3.5 opacity-75" />
          </a>
        </div>
      </main>
    </div>
  );
}
