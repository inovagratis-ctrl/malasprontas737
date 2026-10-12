"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  AFFILIATE_PARTNERS,
  getAffiliateOverrides,
  saveAffiliateOverrides,
} from "@/data/affiliates";
import {
  getGovernanceRules,
  saveGovernanceRules,
  isAdSenseGloballyEnabled,
  setAdSenseGloballyEnabled,
  PageGovernanceRule,
} from "@/data/siteConfig";
import {
  getConversionEventsLog,
  clearConversionEventsLog,
  ConversionEventRecord,
} from "@/lib/analytics";
import {
  Settings,
  Link2,
  ShieldCheck,
  BarChart3,
  Video,
  Check,
  RefreshCw,
  ExternalLink,
  Save,
  EyeOff,
  Megaphone,
  Trash2
} from "lucide-react";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"afiliados" | "governanca" | "conversoes">("afiliados");
  const [overrides, setOverrides] = useState<Record<string, string>>({});
  const [rules, setRules] = useState<PageGovernanceRule[]>([]);
  const [adsenseGlobal, setAdsenseGlobal] = useState<boolean>(false);
  const [eventsLog, setEventsLog] = useState<ConversionEventRecord[]>([]);
  const [savedFeedback, setSavedFeedback] = useState<string>("");

  useEffect(() => {
    setOverrides(getAffiliateOverrides());
    setRules(getGovernanceRules());
    setAdsenseGlobal(isAdSenseGloballyEnabled());
    setEventsLog(getConversionEventsLog());
  }, []);

  const handleSaveAffiliates = () => {
    saveAffiliateOverrides(overrides);
    setSavedFeedback("Links de afiliados atualizados centralmente em todos os 37+ artigos e ferramentas!");
    setTimeout(() => setSavedFeedback(""), 3500);
  };

  const handleResetAffiliates = () => {
    saveAffiliateOverrides({});
    setOverrides({});
    setSavedFeedback("Links restaurados para o padrão oficial de fábrica.");
    setTimeout(() => setSavedFeedback(""), 3000);
  };

  const handleToggleGlobalAdSense = (enabled: boolean) => {
    setAdsenseGlobal(enabled);
    setAdSenseGloballyEnabled(enabled);
    setSavedFeedback(
      enabled
        ? "AdSense ativado globalmente apenas para guias informativos permitidos."
        : "AdSense desativado globalmente em todo o site."
    );
    setTimeout(() => setSavedFeedback(""), 3500);
  };

  const handleToggleRule = (path: string, field: "adsenseAllowed" | "noindex") => {
    const updated = rules.map((r) =>
      r.path === path ? { ...r, [field]: !r[field] } : r
    );
    setRules(updated);
    saveGovernanceRules(updated);
    setSavedFeedback(`Regra de ${field} atualizada para ${path}`);
    setTimeout(() => setSavedFeedback(""), 2500);
  };

  const handleClearEvents = () => {
    clearConversionEventsLog();
    setEventsLog([]);
  };

  return (
    <div className="min-h-screen bg-stone-100 pb-20">
      {/* Header Admin */}
      <header className="bg-stone-950 text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Settings className="w-3.5 h-3.5" />
              Painel Central de Governança • noindex ativo
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Admin Malas Prontas: Afiliados, AdSense & SEO
            </h1>
            <p className="text-xs sm:text-sm text-stone-400 mt-1">
              Gerencie os links centralizados de parceiros sem precisar editar dezenas de artigos e controle onde anúncios e indexação são permitidos.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/admin/videos"
              className="bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-2xl shadow-lg inline-flex items-center gap-2 transition-colors"
            >
              <Video className="w-4 h-4" />
              Estúdio de Roteiros YouTube (/admin/videos)
            </Link>
            <Link
              href="/"
              className="bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs sm:text-sm font-semibold px-4 py-3 rounded-2xl border border-stone-700 transition-colors"
            >
              Ver Site Público
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {savedFeedback && (
          <div className="bg-emerald-600 text-white px-5 py-3.5 rounded-2xl shadow-lg flex items-center gap-2 text-xs sm:text-sm font-bold">
            <Check className="w-5 h-5 shrink-0" />
            <span>{savedFeedback}</span>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 bg-white p-2 rounded-2xl border border-stone-200 shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveTab("afiliados")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "afiliados"
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:bg-stone-100"
            }`}
          >
            <Link2 className="w-4 h-4 text-orange-500" />
            1. Central de Links de Afiliados ({AFFILIATE_PARTNERS.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("governanca")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "governanca"
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:bg-stone-100"
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            2. Controle de AdSense & Noindex ({rules.length} Rotas)
          </button>

          <button
            type="button"
            onClick={() => {
              setEventsLog(getConversionEventsLog());
              setActiveTab("conversoes");
            }}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "conversoes"
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:bg-stone-100"
            }`}
          >
            <BarChart3 className="w-4 h-4 text-amber-500" />
            3. Auditoria de Eventos de Conversão ({eventsLog.length})
          </button>
        </div>

        {/* TAB 1: TABELA DE PARCEIROS AFILIADOS */}
        {activeTab === "afiliados" && (
          <section className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-5">
              <div>
                <h2 className="text-xl font-extrabold text-stone-900">
                  Tabela Centralizada de Parceiros Afiliados
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Substitua qualquer link abaixo para atualizar instantaneamente todos os componentes <code>AffiliateBox</code>, <code>/ofertas</code> e artigos sem editar código.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleResetAffiliates}
                  className="px-3.5 py-2.5 rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-50 text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Restaurar Padrão
                </button>
                <button
                  type="button"
                  onClick={handleSaveAffiliates}
                  className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-extrabold inline-flex items-center gap-1.5 shadow-md cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  Salvar Alterações
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="p-3.5 font-bold">ID / Parceiro</th>
                    <th className="p-3.5 font-bold">Categoria</th>
                    <th className="p-3.5 font-bold">Evento GA4</th>
                    <th className="p-3.5 font-bold">Data Verificação</th>
                    <th className="p-3.5 font-bold">URL Centralizada (Editável)</th>
                    <th className="p-3.5 font-bold">Testar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {AFFILIATE_PARTNERS.map((partner) => {
                    const currentUrl = overrides[partner.id] ?? partner.url;
                    return (
                      <tr key={partner.id} className="hover:bg-stone-50">
                        <td className="p-3.5">
                          <strong className="text-stone-900 block">{partner.name}</strong>
                          <code className="text-[10px] text-stone-500">{partner.id}</code>
                        </td>
                        <td className="p-3.5 font-semibold text-stone-700">{partner.category}</td>
                        <td className="p-3.5">
                          <code className="bg-stone-100 border border-stone-200 px-2 py-0.5 rounded text-[11px] text-emerald-800">
                            {partner.conversionEvent}
                          </code>
                        </td>
                        <td className="p-3.5 text-stone-600">{partner.lastVerifiedDate}</td>
                        <td className="p-3.5 min-w-[280px]">
                          <input
                            type="url"
                            value={currentUrl}
                            onChange={(e) =>
                              setOverrides((prev) => ({
                                ...prev,
                                [partner.id]: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 rounded-lg border border-stone-300 text-stone-900 font-mono text-[11px] focus:outline-hidden focus:border-orange-500"
                          />
                        </td>
                        <td className="p-3.5">
                          <a
                            href={currentUrl}
                            target="_blank"
                            rel="sponsored nofollow noopener"
                            className="inline-flex items-center gap-1 text-orange-600 font-bold hover:underline"
                          >
                            Abrir <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* TAB 2: CONTROLE DE ADSENSE E NOINDEX */}
        {activeTab === "governanca" && (
          <section className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-stone-900 text-white">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
                  <Megaphone className="w-4 h-4" />
                  Chave Geral do Google AdSense
                </span>
                <h3 className="text-lg font-extrabold">
                  Status Global de Anúncios Contextuais:{" "}
                  <span className={adsenseGlobal ? "text-emerald-400" : "text-amber-400"}>
                    {adsenseGlobal ? "ATIVADO (Apenas Guias Permitidos)" : "DESATIVADO (Modo Foco 100% Utilidade/Afiliados)"}
                  </span>
                </h3>
                <p className="text-xs text-stone-300">
                  Mesmo quando ativado globalmente, o componente <code>AdSlot.tsx</code> bloqueia automaticamente anúncios em páginas de ferramentas, vitrine, seguro viagem, PIX e admin.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleToggleGlobalAdSense(!adsenseGlobal)}
                className={`px-5 py-3 rounded-xl text-xs font-extrabold shrink-0 transition-colors cursor-pointer ${
                  adsenseGlobal
                    ? "bg-rose-600 hover:bg-rose-500 text-white"
                    : "bg-emerald-600 hover:bg-emerald-500 text-white"
                }`}
              >
                {adsenseGlobal ? "Desativar AdSense Global" : "Ativar AdSense nos Guias"}
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-stone-100 text-stone-800 border-b border-stone-200">
                    <th className="p-3.5 font-bold">Rota / Página</th>
                    <th className="p-3.5 font-bold">Categoria</th>
                    <th className="p-3.5 font-bold">AdSense Permitido?</th>
                    <th className="p-3.5 font-bold">Diretiva Robots (Noindex)</th>
                    <th className="p-3.5 font-bold">Justificativa de Governança</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {rules.map((rule) => (
                    <tr key={rule.path} className="hover:bg-stone-50">
                      <td className="p-3.5">
                        <Link href={rule.path} className="font-bold text-stone-900 hover:text-orange-600 block">
                          {rule.label}
                        </Link>
                        <code className="text-[11px] text-stone-500">{rule.path}</code>
                      </td>
                      <td className="p-3.5 font-medium text-stone-700">{rule.category}</td>
                      <td className="p-3.5">
                        <button
                          type="button"
                          onClick={() => handleToggleRule(rule.path, "adsenseAllowed")}
                          className={`px-3 py-1 rounded-full font-bold text-[11px] cursor-pointer ${
                            rule.adsenseAllowed
                              ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                              : "bg-stone-200 text-stone-700"
                          }`}
                        >
                          {rule.adsenseAllowed ? "Permitido" : "Bloqueado"}
                        </button>
                      </td>
                      <td className="p-3.5">
                        <button
                          type="button"
                          onClick={() => handleToggleRule(rule.path, "noindex")}
                          className={`px-3 py-1 rounded-full font-bold text-[11px] inline-flex items-center gap-1 cursor-pointer ${
                            rule.noindex
                              ? "bg-amber-100 text-amber-900 border border-amber-300"
                              : "bg-blue-50 text-blue-800 border border-blue-200"
                          }`}
                        >
                          {rule.noindex ? (
                            <>
                              <EyeOff className="w-3 h-3" /> noindex
                            </>
                          ) : (
                            "index, follow"
                          )}
                        </button>
                      </td>
                      <td className="p-3.5 text-stone-600 max-w-xs">{rule.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* TAB 3: EVENTOS DE CONVERSÃO */}
        {activeTab === "conversoes" && (
          <section className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-5">
              <div>
                <h2 className="text-xl font-extrabold text-stone-900">
                  Log em Tempo Real de Eventos de Conversão (GA4 + Local)
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Eventos monitorados: <code>click_accommodation</code>, <code>click_insurance</code>, <code>click_esim</code>, <code>download_checklist</code>, <code>subscribe_newsletter</code>, <code>use_calculator</code>.
                </p>
              </div>
              <button
                type="button"
                onClick={handleClearEvents}
                className="px-4 py-2 rounded-xl border border-stone-200 text-stone-600 hover:text-rose-600 hover:border-rose-200 text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Limpar Histórico Local
              </button>
            </div>

            {eventsLog.length === 0 ? (
              <div className="p-10 text-center bg-stone-50 rounded-2xl border border-stone-200 text-xs sm:text-sm text-stone-500">
                Nenhum evento disparado nesta sessão ainda. Experimente usar a calculadora, baixar um checklist, assinar a newsletter ou clicar em um parceiro!
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-stone-900 text-white">
                      <th className="p-3">Horário</th>
                      <th className="p-3">Evento</th>
                      <th className="p-3">Parceiro / Origem</th>
                      <th className="p-3">Rótulo</th>
                      <th className="p-3">Página</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {eventsLog.map((ev) => (
                      <tr key={ev.id} className="hover:bg-stone-50">
                        <td className="p-3 font-mono text-stone-500">
                          {new Date(ev.timestamp).toLocaleTimeString("pt-BR")}
                        </td>
                        <td className="p-3">
                          <code className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                            {ev.event}
                          </code>
                        </td>
                        <td className="p-3 font-semibold text-stone-900">{ev.partner || "Interno"}</td>
                        <td className="p-3 text-stone-600">{ev.label || "-"}</td>
                        <td className="p-3 font-mono text-stone-600">{ev.page}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}
