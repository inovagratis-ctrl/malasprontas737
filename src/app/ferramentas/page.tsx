"use client";

import { useState } from "react";
import Link from "next/link";
import AccommodationComparator from "@/components/AccommodationComparator";
import DocumentCheckerWidget from "@/components/DocumentCheckerWidget";
import ChecklistWidget from "@/components/ChecklistWidget";
import { trackConversionEvent } from "@/lib/analytics";
import {
  Wrench,
  Calculator,
  CheckSquare,
  Bed,
  Sparkles,
  FileCheck,
  ArrowRight,
  DollarSign,
  Calendar,
  Printer
} from "lucide-react";

export default function FerramentasPage() {
  // Mini Calculadora de Orçamento Diário com proteção anti-NaN
  const [totalBudget, setTotalBudget] = useState<number>(4500);
  const [tripDays, setTripDays] = useState<number>(6);
  const [fixedFlightHotel, setFixedFlightHotel] = useState<number>(2100);
  const [currencyRate, setCurrencyRate] = useState<number>(5.5);

  const safeTotal = Math.max(0, Number(totalBudget) || 0);
  const safeDays = Math.max(1, Math.min(90, Number(tripDays) || 1));
  const safeFixed = Math.max(0, Number(fixedFlightHotel) || 0);
  const safeRate = Math.max(0.1, Number(currencyRate) || 5.5);

  const availableForDays = Math.max(0, safeTotal - safeFixed);
  const safetyReserve15 = Math.round(availableForDays * 0.15);
  const netAvailable = Math.max(0, availableForDays - safetyReserve15);
  const dailyBrl = Math.round(netAvailable / safeDays);
  const dailyUsd = (dailyBrl / safeRate).toFixed(0);

  return (
    <div className="min-h-screen bg-stone-50 pb-24">
      {/* HERO */}
      <section className="bg-stone-900 text-white py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Wrench className="w-4 h-4 text-orange-400" />
            Central de Utilidades 100% Gratuitas
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Ferramentas Interativas de Planejamento de Viagem
          </h1>
          <p className="mt-4 text-stone-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Reunimos em um só lugar nossas 5 ferramentas gratuitas para você calcular gastos, comparar hospedagem sem taxas surpresa, checar documentos e organizar a mala.
          </p>

          {/* Atalhos Rápidos */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            <a href="#tool-orcamento" className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-xl border border-white/15">
              1. Calculadora Total & Diária
            </a>
            <a href="#tool-hospedagem" className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-xl border border-white/15">
              2. Comparador Hotel vs. Hostel vs. Flat
            </a>
            <a href="#tool-documentos" className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-xl border border-white/15">
              3. Verificador de Documentos & Vistos
            </a>
            <a href="#tool-checklist" className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-xl border border-white/15">
              4. Checklist da Mala Imprimível
            </a>
            <a href="#tool-roteiro" className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-xl border border-white/15">
              5. Planejador de Roteiro por Dias
            </a>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* FERRAMENTA 1: CALCULADORA DE ORÇAMENTO DIÁRIO + LINK PARA SIMULADOR COMPLETO */}
        <section id="tool-orcamento" className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-100">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5 mb-1">
                <Calculator className="w-4 h-4" />
                Ferramenta #1 • Controle Financeiro Anti-Endividamento
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                Calculadora de Orçamento Diário Livre + Simulador de Custo Total
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Descubra exatamente quanto você pode gastar por dia na viagem (em R$ e em Dólar/Euro) descontando passagens, hotel e a reserva de segurança de 15%.
              </p>
            </div>
            <Link
              href="/calculadora-viagem"
              onClick={() => trackConversionEvent("use_calculator", { label: "open_full_calculator" })}
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-extrabold px-5 py-3 rounded-xl inline-flex items-center gap-2 shrink-0 shadow-md shadow-emerald-600/20"
            >
              <Calculator className="w-4 h-4" />
              Abrir Simulador Completo por CEP
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80">
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Orçamento Total Disponível (R$):
                </label>
                <input
                  type="number"
                  min={0}
                  value={totalBudget}
                  onChange={(e) => {
                    setTotalBudget(Math.max(0, Number(e.target.value) || 0));
                    trackConversionEvent("use_calculator", { label: "daily_budget_input" });
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-200 font-bold text-stone-900 text-sm"
                />
              </div>

              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80">
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Já Gasto em Voo + Hotel (R$):
                </label>
                <input
                  type="number"
                  min={0}
                  value={fixedFlightHotel}
                  onChange={(e) => setFixedFlightHotel(Math.max(0, Number(e.target.value) || 0))}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-200 font-bold text-stone-900 text-sm"
                />
              </div>

              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80">
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Número de Dias de Viagem:
                </label>
                <input
                  type="number"
                  min={1}
                  max={90}
                  value={tripDays}
                  onChange={(e) => setTripDays(Math.max(1, Number(e.target.value) || 1))}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-200 font-bold text-stone-900 text-sm"
                />
              </div>

              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80">
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Cotação Moeda (Dólar/Euro em R$):
                </label>
                <input
                  type="number"
                  step="0.1"
                  min={0.5}
                  value={currencyRate}
                  onChange={(e) => setCurrencyRate(Math.max(0.5, Number(e.target.value) || 5.5))}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-200 font-bold text-stone-900 text-sm"
                />
              </div>
            </div>

            <div className="md:col-span-5 bg-stone-900 text-white rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">
                  Seu Teto Seguro de Gasto Diário (Líquido)
                </span>
                <p className="text-3xl font-black text-white mt-1">
                  R$ {dailyBrl.toLocaleString("pt-BR")} <span className="text-sm font-normal text-stone-400">/ dia</span>
                </p>
                <p className="text-xs text-amber-300 font-semibold mt-1">
                  Equivalente a ~ US$/€ {dailyUsd} por dia no câmbio informado
                </p>
                <div className="mt-4 pt-3 border-t border-stone-800 space-y-1 text-xs text-stone-300">
                  <p className="flex justify-between">
                    <span>Verba livre para os dias:</span>
                    <strong>R$ {availableForDays.toLocaleString("pt-BR")}</strong>
                  </p>
                  <p className="flex justify-between text-emerald-400">
                    <span>Reserva de segurança separada (15%):</span>
                    <strong>R$ {safetyReserve15.toLocaleString("pt-BR")}</strong>
                  </p>
                </div>
              </div>
              <p className="text-[11px] text-stone-400 mt-4">
                Dica: Divida os R$ {dailyBrl}/dia em 45% Alimentação, 35% Passeios e 20% Transporte Urbano/Extras.
              </p>
            </div>
          </div>
        </section>

        {/* FERRAMENTA 2: COMPARADOR DE HOSPEDAGEM */}
        <section id="tool-hospedagem">
          <AccommodationComparator />
        </section>

        {/* FERRAMENTA 3: VERIFICADOR DE DOCUMENTOS E REQUISITOS */}
        <section id="tool-documentos">
          <DocumentCheckerWidget />
        </section>

        {/* FERRAMENTA 4: CHECKLIST INTERATIVO DA MALA */}
        <section id="tool-checklist" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600">
                Ferramenta #4 • Bagagem Organizada
              </span>
              <h2 className="text-2xl font-extrabold text-stone-900">
                Checklist Interativo da Mala por Estilo de Viagem
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/checklists"
                onClick={() => trackConversionEvent("download_checklist", { label: "open_checklists_hub" })}
                className="bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl inline-flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                Ver Todos os Checklists Imprimíveis
              </Link>
            </div>
          </div>
          <ChecklistWidget />
        </section>

        {/* FERRAMENTA 5: PLANEJADOR DE ROTEIRO POR NÚMERO DE DIAS */}
        <section
          id="tool-roteiro"
          className="bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 text-white rounded-3xl p-8 sm:p-10 border border-stone-800 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 bg-orange-500/20 text-orange-300 border border-orange-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Ferramenta #5 • Planejador Inteligente Dia a Dia
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                Gerador de Roteiro Personalizado por Número de Dias e Estilo
              </h2>
              <p className="text-sm text-stone-300 leading-relaxed">
                Informe o destino, quantos dias você vai ficar (de 2 a 15 dias), seu perfil de orçamento e companhia de viagem para gerar um cronograma manhã, tarde e noite pronto para imprimir.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/roteiro-personalizado"
                  className="bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-lg shadow-orange-600/30 inline-flex items-center gap-2 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  Abrir Planejador de Roteiro por Dias
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/post/como-montar-roteiro-de-cinco-dias-passo-a-passo"
                  className="bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-2xl inline-flex items-center gap-2 transition-all"
                >
                  Ler Guia: Como Montar Roteiro de 5 Dias
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full lg:w-80 shrink-0 text-xs">
              <div className="bg-stone-800/80 border border-stone-700 rounded-2xl p-4">
                <Calendar className="w-5 h-5 text-orange-400 mb-1.5" />
                <strong className="block text-white">3 a 15 Dias</strong>
                <span className="text-stone-400">Divisão automática por turnos e proximidade</span>
              </div>
              <div className="bg-stone-800/80 border border-stone-700 rounded-2xl p-4">
                <DollarSign className="w-5 h-5 text-emerald-400 mb-1.5" />
                <strong className="block text-white">Custos Reais</strong>
                <span className="text-stone-400">Estimativa diária por perfil de bolso</span>
              </div>
              <div className="bg-stone-800/80 border border-stone-700 rounded-2xl p-4">
                <Bed className="w-5 h-5 text-sky-400 mb-1.5" />
                <strong className="block text-white">Onde Ficar</strong>
                <span className="text-stone-400">Melhores bairros base do destino</span>
              </div>
              <div className="bg-stone-800/80 border border-stone-700 rounded-2xl p-4">
                <CheckSquare className="w-5 h-5 text-amber-400 mb-1.5" />
                <strong className="block text-white">Exportável</strong>
                <span className="text-stone-400">Salve em PDF ou copie para o WhatsApp</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
