"use client";

import { Bed, MapPin, Sparkles, ExternalLink, ShieldCheck } from "lucide-react";

interface Stay22WidgetProps {
  destination: string;
  stateCountry: string;
  aid?: string; // Stay22 Affiliate ID
}

export default function Stay22Widget({
  destination,
  stateCountry,
  aid = process.env.NEXT_PUBLIC_STAY22_AID || "6a99930410f03364e343f876"
}: Stay22WidgetProps) {
  // Limpa o nome do destino para garantir geolocalização exata no mapa Stay22
  const cleanCity = destination.split(" e ")[0].split(" & ")[0].split("(")[0].trim();
  const searchQuery = encodeURIComponent(`${cleanCity}, ${stateCountry}`);
  const stay22Url = `https://www.stay22.com/embed/gm?aid=${aid}&address=${searchQuery}&hidefaves=true`;

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-md my-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            Parceiro Oficial de Hospedagens
          </div>
          <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-white">
            <Bed className="w-6 h-6 text-orange-500" />
            Onde Ficar em {destination}
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 mt-1">
            Compare preços de hotéis, pousadas e resorts em tempo real com garantia de menor tarifa.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[11px] bg-stone-800 border border-stone-700 text-stone-300 px-3 py-1.5 rounded-full flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Booking • Expedia • Airbnb
          </span>
        </div>
      </div>

      {/* Stay22 Interactive Map Container */}
      <div className="relative w-full h-[450px] bg-stone-100">
        <iframe
          id="stay22-widget"
          src={stay22Url}
          width="100%"
          height="100%"
          className="border-0 w-full h-full"
          title={`Hospedagens em ${destination} - Stay22`}
          loading="lazy"
          allow="geolocation"
        />
      </div>

      {/* Footer Info */}
      <div className="bg-stone-50 px-6 py-3.5 border-t border-stone-100 text-xs text-stone-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-orange-600" />
          Navegue pelo mapa para ver fotos, avaliações e tarifas atualizadas por noite.
        </p>
        <span className="text-[10px] text-stone-400">
          Reservas seguras via parceiros certificados Stay22
        </span>
      </div>
    </div>
  );
}
