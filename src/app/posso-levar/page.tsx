import type { Metadata } from "next";
import CanIBringTool from "@/components/tools/CanIBringTool";
import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Posso Levar Isso no Avião? Scanner de Itens ANAC & TSA | Malas Prontas 737",
  description: "Descubra se powerbank, chapinha, secador, perfumes, desodorante aerossol, remédios, vinhos e queijos vão na mala de mão ou despachada segundo a ANAC.",
  alternates: {
    canonical: "/posso-levar",
  },
};

export default function PossoLevarPage() {
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
            Scanner de Segurança Aeronáutica
          </span>
        </div>

        <CanIBringTool />

        {/* Informações Regulatórias da ANAC e RBAC 175 */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6 mt-8">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Regulamentação Oficial sobre Artigos Perigosos na Aviação
          </h2>
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
            <p>
              As regras de transporte aéreo de passageiros no Brasil são estabelecidas pela <strong>ANAC (Regulamento Brasileiro da Aviação Civil — RBAC nº 175)</strong> e harmonizadas com o manual de artigos perigosos (Dangerous Goods Regulations - DGR) da <strong>IATA</strong> e as diretrizes da <strong>OACI (ICAO)</strong>.
            </p>
            <p>
              A distinção entre o que pode ir na cabine e o que pode ir no porão é orientada pela segurança operacional do voo:
            </p>
            <ul className="list-disc pl-5 font-semibold text-slate-800 space-y-1">
              <li><strong>Baterias de lítio e powerbanks:</strong> Devem viajar obrigatoriamente na cabine para que a tripulação possa intervir imediatamente com mantas e extintores específicos em caso de superaquecimento.</li>
              <li><strong>Objetos cortantes e perfurantes:</strong> Devem ser transportados no porão de carga para mitigar riscos de segurança na cabine de passageiros.</li>
              <li><strong>Substâncias inflamáveis ou corrosivas:</strong> Proibidas em qualquer parte da aeronave comercial.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
