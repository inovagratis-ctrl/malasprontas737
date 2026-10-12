// Sistema Central de Rastreamento de Eventos de Conversão - Malas Prontas

export type ConversionEventName =
  | "click_accommodation"
  | "click_insurance"
  | "click_esim"
  | "download_checklist"
  | "subscribe_newsletter"
  | "use_calculator"
  | "click_affiliate";

export interface ConversionEventRecord {
  id: string;
  event: ConversionEventName;
  partner?: string;
  category?: string;
  page?: string;
  label?: string;
  timestamp: string;
}

const STORAGE_KEY = "mp_conversion_events_log";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackConversionEvent(
  event: ConversionEventName,
  params?: {
    partner?: string;
    category?: string;
    page?: string;
    label?: string;
    value?: number;
  }
) {
  if (typeof window === "undefined") return;

  const pagePath = params?.page || window.location.pathname;

  // 1. Dispara para o Google Analytics 4 (gtag)
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", event, {
        event_category: params?.category || "conversion",
        event_label: params?.label || params?.partner || pagePath,
        partner_name: params?.partner || "internal",
        page_path: pagePath,
        value: params?.value || 1,
      });
    }
  } catch {
    // Ignora falhas de bloqueadores de anúncio
  }

  // 2. Registra no histórico local para auditoria no painel /admin
  try {
    const existingRaw = window.localStorage.getItem(STORAGE_KEY);
    const existing: ConversionEventRecord[] = existingRaw ? JSON.parse(existingRaw) : [];
    const newRecord: ConversionEventRecord = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      event,
      partner: params?.partner,
      category: params?.category,
      page: pagePath,
      label: params?.label,
      timestamp: new Date().toISOString(),
    };
    const updated = [newRecord, ...existing].slice(0, 100);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // Ignora erros de armazenamento
  }
}

export function getConversionEventsLog(): ConversionEventRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function clearConversionEventsLog(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore
  }
}
