import React from "react";
import { ShieldAlert, ArrowRight, ExternalLink, CheckCircle2, DollarSign } from "lucide-react";
import { AFFILIATES } from "@/data/affiliates";

export default function AirHelpBanner() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-stone-900 to-sky-950 border border-sky-500/30 rounded-3xl p-6 sm:p-8 text-white mb-10 shadow-xl relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <span className="bg-sky-500/20 text-sky-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-sky-400" />
            Direitos do Passageiro Aéreo
          </span>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
            Teve voo atrasado, cancelado ou overbooking nos últimos 3 anos?
          </h3>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            Você pode ter direito a uma indenização de <strong>até R$ 10.000 (ou € 600 na Europa)</strong> por passageiro. A <strong>AirHelp</strong> cuida de todo o processo burocrático com as companhias aéreas sem nenhum custo inicial — você só paga uma porcentagem se ganhar!
          </p>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-1 text-xs text-sky-200">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Consulta 100% gratuita
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Sem taxa de adesão
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              +16 milhões de passageiros atendidos
            </span>
          </div>
        </div>

        <a
          href={AFFILIATES.AIRHELP}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm px-7 py-4 rounded-2xl shadow-lg shadow-sky-500/30 transition-all shrink-0 flex items-center gap-2 cursor-pointer whitespace-nowrap self-stretch lg:self-auto justify-center"
        >
          <DollarSign className="w-4 h-4" />
          Verificar Meu Voo Grátis
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
