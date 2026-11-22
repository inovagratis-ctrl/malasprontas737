import type { Metadata } from "next";
import BaggageCheckerTool from "@/components/tools/BaggageCheckerTool";
import Link from "next/link";
import { Plane, ArrowLeft, ShieldCheck, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Verificador de Mala de Bordo e Gabarito por Cia Aérea | Malas Prontas 737",
  description: "Verifique se sua mala de mão está dentro dos limites da GOL, LATAM, Azul, TAP e internacionais (55x35x25cm e 10kg). Evite taxas de R$ 160 a R$ 380 no portão.",
  alternates: {
    canonical: "/bagagem",
  },
};

export default function BagagemPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Início
          </Link>
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
            Gabarito Oficial ANAC 2026
          </span>
        </div>

        <BaggageCheckerTool />

        {/* Guia Informativo Complementar */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6 mt-8">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Como Funciona o Gabarito de Metal nos Aeroportos Brasileiros?
          </h2>
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
            <p>
              A Agência Nacional de Aviação Civil (ANAC), por meio da Resolução nº 400/2016, assegura a todo passageiro o direito de transportar gratuitamente na cabine uma <strong>bagagem de mão de até 10 kg</strong>, observados os limites de dimensões e a capacidade do bagageiro superior da aeronave.
            </p>
            <p>
              Para padronizar o embarque, a Associação Brasileira das Empresas Aéreas (ABEAR) — que reúne Gol e LATAM — definiu o gabarito oficial máximo de:
            </p>
            <ul className="list-disc pl-5 font-semibold text-slate-800 space-y-1">
              <li>55 cm de altura (incluindo rodinhas e alça superior retraída)</li>
              <li>35 cm de largura</li>
              <li>25 cm de profundidade (com bolsos externos cheios)</li>
            </ul>
            <p>
              Além da mala de mão, você tem direito a 1 item pessoal (mochila ou bolsa) com limite de até 45 × 35 × 20 cm, que deve caber 100% sob a poltrona à sua frente.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
