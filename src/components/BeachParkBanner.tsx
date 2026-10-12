import React from "react";
import { Waves, ExternalLink, Sparkles, Bed, Ticket } from "lucide-react";
import { AFFILIATES } from "@/data/affiliates";

export default function BeachParkBanner() {
  return (
    <div className="bg-gradient-to-br from-cyan-950 via-sky-950 to-stone-900 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 text-white mb-10 shadow-xl relative overflow-hidden">
      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="bg-cyan-500/20 text-cyan-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <Waves className="w-3.5 h-3.5" />
            Maior Parque Aquático da América Latina
          </span>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            Ingressos Oficiais & Resorts no Beach Park (Ceará)
          </h3>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            Planejando visitar Fortaleza e Aquiraz? Garanta seus passaportes de 1 a 7 dias com desconto e parcele sua estadia nos Resorts oficiais do Beach Park em até 10x sem juros.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 self-stretch lg:self-auto">
          <a
            href={AFFILIATES.BEACH_PARK_INGRESSOS}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-lg shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Ticket className="w-4 h-4" />
            Comprar Ingressos
            <ExternalLink className="w-3.5 h-3.5 opacity-75" />
          </a>

          <a
            href={AFFILIATES.BEACH_PARK_TURISMO}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-stone-800/90 hover:bg-stone-800 text-cyan-300 border border-cyan-500/40 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Bed className="w-4 h-4" />
            Ver Resorts do Parque
          </a>
        </div>
      </div>
    </div>
  );
}
