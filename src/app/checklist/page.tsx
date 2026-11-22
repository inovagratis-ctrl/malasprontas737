import type { Metadata } from "next";
import SmartPackingTool from "@/components/tools/SmartPackingTool";
import Link from "next/link";
import { ArrowLeft, CheckSquare, Printer } from "lucide-react";

export const metadata: Metadata = {
  title: "Gerador Dinâmico de Mala Pronta com PDF Imprimível | Malas Prontas 737",
  description: "Crie seu checklist de viagem personalizado para praia, frio, cidade ou trabalho. Calcule peças exatas de roupa, documentos e remédios, com versão para imprimir em folha A4.",
  alternates: {
    canonical: "/checklist",
  },
};

export default function ChecklistPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Início
          </Link>
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
            Algoritmo PackPoint & Voyasee Brasil
          </span>
        </div>

        <SmartPackingTool />

        {/* Dicas de Organização Física da Mala */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6 mt-8 print:hidden">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Dicas dos Comissários para Montar a Mala Perfeita de 10kg
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="font-bold text-slate-900">1. Método do Rolinho</div>
              <p>
                Enrole camisetas, calças leves e roupas de algodão em vez de dobrar. Além de evitar vincos fundos no tecido, economiza até 30% de volume na mala de cabine.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="font-bold text-slate-900">2. Sapatos como Compartimentos</div>
              <p>
                Coloque meias e cabos de carregador dentro dos sapatos. Isso aproveita o espaço oco do calçado e impede que ele amasse sob o peso de outras peças.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="font-bold text-slate-900">3. Roupa Pesada no Corpo</div>
              <p>
                Viaje vestindo seu calçado mais pesado (como bota ou tênis de sola grossa) e o casaco mais volumoso durante o embarque, liberando espaço precioso na balança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
