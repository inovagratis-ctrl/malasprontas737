"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getGovernanceRules, isAdSenseGloballyEnabled, SITE_CONFIG } from "@/data/siteConfig";

interface AdSlotProps {
  slotId?: string;
  format?: "horizontal" | "rectangle" | "in-article";
  pageCategory?: "guide" | "destination" | "hub" | "conversion" | "tool" | "system";
  className?: string;
}

const BLOCKED_PATH_PREFIXES = [
  "/admin",
  "/pix",
  "/vitrine",
  "/ofertas",
  "/seguro-viagem",
  "/calculadora-viagem",
  "/checklist",
  "/checklists",
  "/ferramentas",
  "/roteiro-personalizado",
  "/contato",
  "/sobre",
  "/politica-de-privacidade",
  "/politica-de-cookies",
  "/termos-de-uso",
  "/transparencia-editorial",
  "/metodologia-editorial",
];

export default function AdSlot({
  slotId = "informational-guide-slot",
  format = "in-article",
  pageCategory = "guide",
  className = "",
}: AdSlotProps) {
  const pathname = usePathname() || "/";
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    // Regra de Ouro: NUNCA ativar em páginas de conversão, ferramentas, checkout ou admin
    if (
      pageCategory === "conversion" ||
      pageCategory === "tool" ||
      pageCategory === "system"
    ) {
      setAllowed(false);
      return;
    }

    if (BLOCKED_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
      setAllowed(false);
      return;
    }

    const globalEnabled = isAdSenseGloballyEnabled();
    if (!globalEnabled) {
      setAllowed(false);
      return;
    }

    const rules = getGovernanceRules();
    const matchedRule = rules.find((r) => r.path === pathname);
    if (matchedRule && !matchedRule.adsenseAllowed) {
      setAllowed(false);
      return;
    }

    setAllowed(true);
  }, [pathname, pageCategory]);

  if (!allowed) {
    return null;
  }

  return (
    <aside
      aria-label="Publicidade contextual"
      data-ad-slot={slotId}
      data-ad-format={format}
      data-ad-client={SITE_CONFIG.adsenseClientId}
      className={`my-8 mx-auto max-w-3xl rounded-2xl border border-stone-200/80 bg-stone-100/70 p-4 text-center ${className}`}
    >
      <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 block mb-2">
        Publicidade • Espaço Informativo (Não compete com reservas)
      </span>
      <div className="min-h-[90px] flex items-center justify-center rounded-xl border border-dashed border-stone-300 bg-white/60 px-4 py-6 text-xs text-stone-500">
        Espaço reservado Google AdSense ({slotId}) — Ativo apenas em guias informativos.
      </div>
    </aside>
  );
}
