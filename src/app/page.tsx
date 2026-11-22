"use client";

import { useState } from "react";
import Link from "next/link";
import BaggageCheckerTool from "@/components/tools/BaggageCheckerTool";
import CanIBringTool from "@/components/tools/CanIBringTool";
import LiquidsSimulatorTool from "@/components/tools/LiquidsSimulatorTool";
import SmartPackingTool from "@/components/tools/SmartPackingTool";
import {
  Luggage,
  Search,
  Droplets,
  CheckSquare,
  Plane,
  AlertTriangle,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CreditCard,
  Wifi,
  HeartPulse,
  Scale,
  PackageCheck,
  HelpCircle
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"bagagem" | "possolevar" | "liquidos" | "checklist">("bagagem");

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* HERO SECTION CINEMATOGRÁFICO DE AVIAÇÃO */}
      <section className="bg-gradient-to-b from-[#0B1E36] via-[#0F2847] to-[#0B1E36] text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Elementos Gráficos de Fundo */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-amber-400 text-xs sm:text-sm font-bold tracking-wide">
            <Sparkles className="w-4 h-4" />
            A Suíte Definitiva do Passageiro Moderno • Normas 2026
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Sua Viagem <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">Sem Taxa Surpresa</span> no Aeroporto
          </h1>

          <p className="max-w-3xl mx-auto text-slate-300 text-sm sm:text-lg leading-relaxed font-normal">
            Verifique o gabarito de mala da sua companhia aérea, consulte o scanner oficial da ANAC antes do raio-X, simule seus cosméticos de 100ml e gere seu checklist de viagem imprimível em segundos.
          </p>

          {/* Mini Estatísticas de Confiança */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-blue-200/90 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Gabarito Oficial ANAC 55×35×25cm</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-emerald-400" />
              <span>120+ Itens no Scanner de Raio-X</span>
            </div>
            <div className="flex items-center gap-2">
              <Plane className="w-4 h-4 text-amber-400" />
              <span>Regras Gol, LATAM, Azul & Internacionais</span>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREA CENTRAL DAS 4 FERRAMENTAS UNIFICADAS */}
      <section id="ferramentas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 pb-20">
        {/* BARRAS DE SELEÇÃO DAS 4 ABAS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 p-2 bg-[#0B1E36]/90 backdrop-blur-md rounded-3xl border border-blue-900/60 shadow-2xl mb-8">
          <button
            onClick={() => setActiveTab("bagagem")}
            type="button"
            className={`flex items-center justify-center sm:justify-start gap-2.5 p-3.5 sm:p-4 rounded-2xl font-black text-xs sm:text-sm transition-all text-left ${
              activeTab === "bagagem"
                ? "bg-amber-400 text-slate-950 shadow-lg scale-[1.02]"
                : "text-slate-300 hover:text-white hover:bg-blue-800/40"
            }`}
          >
            <Luggage className={`w-5 h-5 shrink-0 ${activeTab === "bagagem" ? "text-slate-950" : "text-amber-400"}`} />
            <div className="truncate">
              <div className="truncate">1. Medidor de Mala</div>
              <div className={`text-[10px] font-semibold hidden sm:block ${activeTab === "bagagem" ? "text-slate-800" : "text-slate-400"}`}>
                Gabarito por Cia Aérea
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("possolevar")}
            type="button"
            className={`flex items-center justify-center sm:justify-start gap-2.5 p-3.5 sm:p-4 rounded-2xl font-black text-xs sm:text-sm transition-all text-left ${
              activeTab === "possolevar"
                ? "bg-amber-400 text-slate-950 shadow-lg scale-[1.02]"
                : "text-slate-300 hover:text-white hover:bg-blue-800/40"
            }`}
          >
            <Search className={`w-5 h-5 shrink-0 ${activeTab === "possolevar" ? "text-slate-950" : "text-amber-400"}`} />
            <div className="truncate">
              <div className="truncate">2. Posso Levar Isso?</div>
              <div className={`text-[10px] font-semibold hidden sm:block ${activeTab === "possolevar" ? "text-slate-800" : "text-slate-400"}`}>
                Scanner ANAC / TSA
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("liquidos")}
            type="button"
            className={`flex items-center justify-center sm:justify-start gap-2.5 p-3.5 sm:p-4 rounded-2xl font-black text-xs sm:text-sm transition-all text-left ${
              activeTab === "liquidos"
                ? "bg-amber-400 text-slate-950 shadow-lg scale-[1.02]"
                : "text-slate-300 hover:text-white hover:bg-blue-800/40"
            }`}
          >
            <Droplets className={`w-5 h-5 shrink-0 ${activeTab === "liquidos" ? "text-slate-950" : "text-amber-400"}`} />
            <div className="truncate">
              <div className="truncate">3. Regra dos 100ml</div>
              <div className={`text-[10px] font-semibold hidden sm:block ${activeTab === "liquidos" ? "text-slate-800" : "text-slate-400"}`}>
                Matriz de Líquidos 1L
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("checklist")}
            type="button"
            className={`flex items-center justify-center sm:justify-start gap-2.5 p-3.5 sm:p-4 rounded-2xl font-black text-xs sm:text-sm transition-all text-left ${
              activeTab === "checklist"
                ? "bg-amber-400 text-slate-950 shadow-lg scale-[1.02]"
                : "text-slate-300 hover:text-white hover:bg-blue-800/40"
            }`}
          >
            <CheckSquare className={`w-5 h-5 shrink-0 ${activeTab === "checklist" ? "text-slate-950" : "text-amber-400"}`} />
            <div className="truncate">
              <div className="truncate">4. Mala Inteligente</div>
              <div className={`text-[10px] font-semibold hidden sm:block ${activeTab === "checklist" ? "text-slate-800" : "text-slate-400"}`}>
                PackPoint com PDF A4
              </div>
            </div>
          </button>
        </div>

        {/* RENDERIZAÇÃO DA FERRAMENTA SELECIONADA */}
        <div className="transition-all duration-300">
          {activeTab === "bagagem" && <BaggageCheckerTool />}
          {activeTab === "possolevar" && <CanIBringTool />}
          {activeTab === "liquidos" && <LiquidsSimulatorTool />}
          {activeTab === "checklist" && <SmartPackingTool />}
        </div>
      </section>

      {/* SEÇÃO INFORMATIVA: POR QUE CONFERIR ANTES DE SAIR DE CASA? */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Economia Real no Aeroporto
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Os 4 Maiores Erros Que Custam Caro no Portão de Embarque
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Companhias aéreas aumentaram drasticamente o rigor de fiscalização no momento da chamada dos grupos de embarque.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900">
                1. A Taxa Surpresa no Portão
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Despachar mala antecipadamente pelo site custa de R$ 90 a R$ 130. Se sua mala enroscar no gabarito do portão de embarque, a taxa compulsória sobe para <strong>R$ 160 a R$ 380 na hora</strong>.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900">
                2. Perfumes e Cremes no Lixo
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A segurança de voos internacionais confere a capacidade impressa no frasco, não o que restou dentro. Frascos de 150ml ou 200ml são <strong>jogados no lixo sumariamente</strong> pelo agente de raio-X.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900">
                3. Baterias e Fogo no Porão
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Powerbanks e baterias de lítio soltas são <strong>estritamente proibidos na mala despachada</strong> em todo o mundo. O raio-X do aeroporto abre sua mala e apreende o item sem devolução.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <PackageCheck className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900">
                4. O Peso Inútil de Roupas
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Viajar leve permite embarcar direto sem pegar fila de despacho, economiza até 40 minutos na esteira de desembarque e elimina o risco de extravio de bagagem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE EQUIPAMENTOS HOMOLOGADOS & RECOMENDAÇÕES ESTRATÉGICAS */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-blue-700">
                Kit do Viajante Inteligente
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                Acessórios Essenciais Homologados para Aviação
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Itens selecionados pela equipe editorial para garantir que sua mala passe 100% lisa em qualquer aeroporto do mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Balança Digital */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-slate-900">
                  Balança Digital Portátil (Até 50kg)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pesa 90g e garante que sua mala não ultrapasse os 10kg da cabine ou os 23kg do porão antes de você sair de casa.
                </p>
              </div>
              <a
                href="https://mercadolivre.com/sec/24v3yB2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                Ver Ofertas no Mercado Livre
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 2: Mala de Bordo 55x35x25 */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Luggage className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-slate-900">
                  Mala de Bordo no Gabarito ANAC 55×35×25cm
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Feita em policarbonato leve com rodinhas 360° duplas que entram sem enroscar nas caixas de medição da Gol, LATAM e Azul.
                </p>
              </div>
              <a
                href="https://mercadolivre.com/sec/24v3yB2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                Ver Malas Homologadas
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 3: Kit Frascos Silicone */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Droplets className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-slate-900">
                  Kit de Frascos de Silicone TSA 80ml
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  À prova de vazamentos provocados pela despressurização do avião. Acompanha saquinho plástico transparente de 1L oficial.
                </p>
              </div>
              <a
                href="https://mercadolivre.com/sec/24v3yB2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                Ver Kits de Silicone
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE PERGUNTAS FREQUENTES (FAQ ESTRUTURADO PARA SEO) */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Tira-Dúvidas Aeroportuário</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Perguntas Frequentes sobre Bagagem e Regras ANAC
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-sm sm:text-base text-slate-900">
                As rodinhas da mala contam nas medidas oficiais da ANAC (55×35×25cm)?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                <strong>Sim, obrigatoriamente.</strong> A regulamentação da ANAC estabelece que as medidas máximas de 55cm de altura, 35cm de largura e 25cm de profundidade incluem rodinhas, alças superiores, bolsos frontais e qualquer suporte externo. Os gabaritos de metal nos aeroportos são caixas fechadas: se a rodinha sobrar para fora, a mala não entra e é barrada.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-sm sm:text-base text-slate-900">
                Posso levar mala de mão de 10kg E TAMBÉM uma mochila?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                <strong>Sim!</strong> Em quase todas as tarifas regulares da Gol, LATAM e Azul no Brasil, todo passageiro tem direito a <strong>1 mala de mão de até 10kg</strong> (que vai no bagageiro superior) <strong>MAIS 1 item pessoal</strong> (como uma mochila, pasta de notebook ou bolsa) que deve caber completamente debaixo do assento à frente. Cuidado apenas com companhias ultra-low-cost internacionais (como Flybondi e JetSMART), cuja tarifa mais barata inclui somente a mochila.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-sm sm:text-base text-slate-900">
                Por que o Powerbank é estritamente proibido na mala despachada?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Baterias portáteis de íons de lítio sofrem risco de um fenômeno químico chamado <em>fuga térmica (thermal runaway)</em> quando sofrem pressão ou curto-circuito. No porão de carga da aeronave, um fogo desse tipo é muito difícil de combater. Já na cabine de passageiros, a tripulação possui extintores e bolsas de contenção antichamas para isolar o dispositivo instantaneamente.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-sm sm:text-base text-slate-900">
                A regra dos líquidos de 100ml vale para voos domésticos dentro do Brasil?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Em voos 100% domésticos no Brasil, a ANAC permite frascos de aerossol de cuidados pessoais de até 300ml ou 300g (máximo de 4 frascos / 1,2kg no total). No entanto, se o seu voo tiver conexão internacional ou for direto para o exterior, <strong>a regra rígida da IATA/TSA de 100ml por frasco em saquinho plástico de 1L aplica-se imediatamente</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
