import type { Metadata } from "next";
import LiquidsSimulatorTool from "@/components/tools/LiquidsSimulatorTool";
import Link from "next/link";
import { ArrowLeft, Droplets, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Simulador da Regra dos Líquidos de 100ml em Voos Internacionais | Malas Prontas 737",
  description: "Calcule os cosméticos da sua nécessaire de voo internacional. Teste frascos de até 100ml no saco plástico transparente de 1 Litro e evite apreensão no raio-X.",
  alternates: {
    canonical: "/liquidos",
  },
};

export default function LiquidosPage() {
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
            Padrão TSA & IATA de 100ml
          </span>
        </div>

        <LiquidsSimulatorTool />

        {/* Guia Didático Detalhado */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6 mt-8">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Por Que Existe a Regra dos 100ml em Voos Internacionais?
          </h2>
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
            <p>
              A restrição de líquidos, aerossóis e géis (LAGs) foi introduzida mundialmente pela Organização da Aviação Civil Internacional (OACI) e adotada pela TSA (EUA), pela União Europeia e pela ANAC em 2006, após a interceptação de um plano terrorista que tentava introduzir explosivos líquidos transparentes a bordo.
            </p>
            <p>
              Estudos científicos comprovaram que recipientes de até 100ml não oferecem massa crítica suficiente para a detonação de compostos perigosos. Além disso, a obrigatoriedade do saco plástico transparente de até 1 Litro (20x20cm) permite aos agentes de inspeção inspecionar visualmente todo o conjunto em segundos.
            </p>
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 font-medium">
              <strong>Importante:</strong> Qualquer frasco que exceda a capacidade gravada de 100ml — mesmo que contenha apenas uma pequena quantidade de líquido — não é aceito no posto de inspeção e deverá ser descartado.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
