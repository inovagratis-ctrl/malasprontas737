"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, Cookie, X } from "lucide-react";

const COOKIE_CONSENT_KEY = "mp_cookie_consent_v1";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!saved) {
        setVisible(true);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleConsent = (level: "all" | "essential") => {
    try {
      window.localStorage.setItem(
        COOKIE_CONSENT_KEY,
        JSON.stringify({
          level,
          date: new Date().toISOString(),
        })
      );
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Preferências de Privacidade e Cookies"
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-4xl rounded-3xl bg-stone-900/95 backdrop-blur-md border border-stone-700/90 p-5 sm:p-6 text-white shadow-2xl"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-orange-500/20 border border-orange-500/30 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="space-y-1 text-xs sm:text-sm text-stone-300 leading-relaxed">
            <p className="font-bold text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Sua Privacidade e Transparência de Cookies (LGPD)
            </p>
            <p className="text-xs text-stone-300">
              Utilizamos cookies essenciais para o funcionamento das calculadoras e checklists, além de cookies analíticos (Google Analytics) e de atribuição de parceiros afiliados. Consulte nossa{" "}
              <Link href="/politica-de-cookies" className="text-orange-400 underline font-semibold hover:text-orange-300">
                Política de Cookies
              </Link>{" "}
              e{" "}
              <Link href="/politica-de-privacidade" className="text-orange-400 underline font-semibold hover:text-orange-300">
                Política de Privacidade
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto shrink-0 justify-end">
          <button
            type="button"
            onClick={() => handleConsent("essential")}
            className="px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold border border-stone-700 transition-colors cursor-pointer"
          >
            Apenas Essenciais
          </button>
          <button
            type="button"
            onClick={() => handleConsent("all")}
            className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-extrabold shadow-lg shadow-orange-600/30 transition-colors cursor-pointer"
          >
            Aceitar e Continuar
          </button>
          <button
            type="button"
            onClick={() => handleConsent("essential")}
            aria-label="Fechar aviso de cookies"
            className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
