"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { POSTS } from "@/data/posts";
import {
  Video,
  Sparkles,
  Play,
  Square,
  Copy,
  Check,
  Film,
  Music,
  Share2,
  Clock,
  ArrowLeft,
  Volume2,
  Loader2,
  Tv,
  HelpCircle,
  BookOpen,
  Image as ImageIcon,
  FileText,
  VolumeX,
  Layers,
  Type
} from "lucide-react";

interface Chapter {
  time: string;
  title: string;
  visuals: string;
  motionText?: string;
  sfx?: string;
  imagePrompt?: string;
  narration: string;
}

interface Scene {
  time: string;
  visual: string;
  motionText?: string;
  sfx?: string;
  imagePrompt?: string;
  narration: string;
}

interface VideoScriptResult {
  title?: string;
  duration?: string;
  thumbnailIdea?: string;
  thumbnailPrompt?: string;
  // Shorts
  hook?: string;
  hookVisual?: string;
  motionText?: string;
  sfx?: string;
  imagePrompt?: string;
  scenes?: Scene[];
  cta?: string;
  caption?: string;
  suggestedMusic?: string;
  // Long Video
  chapters?: Chapter[];
  youtubeDescription?: string;
  // Common
  fullNarrationText?: string;
}

export default function AdminVideosPage() {
  const [selectedPostSlug, setSelectedPostSlug] = useState<string>("custom");
  const [destination, setDestination] = useState("Jalapão");
  const [format, setFormat] = useState<"short" | "long">("long");
  const [videoType, setVideoType] = useState("Guia Completo e Custos");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VideoScriptResult | null>(null);
  const [error, setError] = useState("");
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Áudio TTS pelo navegador
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const loadVoices = () => {
        const available = window.speechSynthesis.getVoices();
        const ptVoices = available.filter((v) => v.lang.includes("pt") || v.lang.includes("BR"));
        setVoices(ptVoices.length > 0 ? ptVoices : available);
      };
      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const handleSelectPost = (slug: string) => {
    setSelectedPostSlug(slug);
    if (slug === "custom") {
      setDestination("");
      return;
    }
    const found = POSTS.find((p) => p.slug === slug);
    if (found) {
      setDestination(found.destination);
    }
  };

  const handleSpeak = (text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-BR";
    utterance.rate = format === "short" ? 1.08 : 1.0;
    utterance.pitch = 1.0;

    const ptVoice = voices.find((v) => v.lang === "pt-BR" || v.name.includes("Brazil") || v.name.includes("Portuguese"));
    if (ptVoice) {
      utterance.voice = ptVoice;
    }

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination.trim()) return;

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }

    setLoading(true);
    setError("");
    setResult(null);

    let postContext = "";
    if (selectedPostSlug !== "custom") {
      const p = POSTS.find((item) => item.slug === selectedPostSlug);
      if (p) {
        postContext = `Título do Post: ${p.title}
Orçamento: ${p.budgetDescription}
Melhor Época: ${p.bestSeason}
Destaques: ${p.highlights.join(", ")}
Roteiro do Artigo:
${p.itinerary.map((d) => `Dia ${d.day} (${d.title}): ${d.activities.join(" | ")}`).join("\n")}
Dicas: ${p.essentialTips.map((t) => `${t.title}: ${t.description}`).join("\n")}`;
      }
    }

    try {
      const res = await fetch("/api/generate-video-script", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destination,
          videoType,
          format,
          postContext,
        }),
      });

      if (!res.ok) {
        throw new Error("Erro ao gerar roteiro na IA.");
      }

      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || "Falha na conexão com a IA.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 pb-24">
      {/* Top Header */}
      <header className="border-b border-stone-800 bg-stone-900/60 backdrop-blur-md sticky top-0 z-40 px-4 sm:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
              title="Voltar ao Blog"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold shadow-md">
                <Video className="w-4 h-4" />
              </div>
              <h1 className="font-extrabold text-base sm:text-lg tracking-tight">
                Estúdio de Vídeos com IA <span className="text-red-500">Malas Prontas</span>
              </h1>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@canalmalasprontas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-red-600/20 text-red-400 border border-red-500/30 px-3 py-1.5 rounded-full hover:bg-red-600 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Tv className="w-3.5 h-3.5" />
            @canalmalasprontas
          </a>
        </div>
      </header>

      {/* Main Studio */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Painel de Controle (Esquerda) */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-stone-900/90 border border-stone-800 rounded-3xl p-6 shadow-xl">
              <h2 className="text-sm font-bold uppercase tracking-wider text-orange-400 flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4" /> Gerador de Roteiro & Prompts
              </h2>

              <form onSubmit={handleGenerate} className="space-y-4">
                {/* Selecionar de Post Criado */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-orange-500" />
                    Gerar a partir de Post do Blog:
                  </label>
                  <select
                    value={selectedPostSlug}
                    onChange={(e) => handleSelectPost(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-hidden focus:border-red-500"
                  >
                    <option value="custom">-- Digitar Outro Destino --</option>
                    {POSTS.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.destination} ({p.title.slice(0, 35)}...)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Destino */}
                <div>
                  <label className="block text-xs font-semibold text-stone-400 mb-1.5">
                    Nome do Destino
                  </label>
                  <input
                    type="text"
                    required
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Ex: Jalapão, Gramado, Maceió..."
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:border-red-500 transition-colors"
                  />
                </div>

                {/* Formato: Curto vs Longo */}
                <div>
                  <label className="block text-xs font-semibold text-stone-400 mb-1.5">
                    Formato do Vídeo
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormat("long")}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        format === "long"
                          ? "border-red-500 bg-red-950/40 text-red-200 font-bold"
                          : "border-stone-800 bg-stone-950 text-stone-400 hover:text-white"
                      }`}
                    >
                      <Tv className="w-4 h-4 mx-auto mb-1 text-red-500" />
                      <span className="block text-xs">YouTube Longo</span>
                      <span className="text-[10px] opacity-75">+8 Minutos</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormat("short")}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        format === "short"
                          ? "border-red-500 bg-red-950/40 text-red-200 font-bold"
                          : "border-stone-800 bg-stone-950 text-stone-400 hover:text-white"
                      }`}
                    >
                      <Film className="w-4 h-4 mx-auto mb-1 text-orange-400" />
                      <span className="block text-xs">Shorts / TikTok</span>
                      <span className="text-[10px] opacity-75">45 a 60 Segundos</span>
                    </button>
                  </div>
                </div>

                {/* Ângulo */}
                <div>
                  <label className="block text-xs font-semibold text-stone-400 mb-1.5">
                    Estilo da Narrativa
                  </label>
                  <select
                    value={videoType}
                    onChange={(e) => setVideoType(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-hidden focus:border-red-500"
                  >
                    <option value="Guia Completo e Custos">Guia Definitivo Passo a Passo + Gastos</option>
                    <option value="Curiosidades e Segredos Secretos">Segredos e Lugares Escondidos</option>
                    <option value="3 Erros Graves que Todo Turista Comete">3 Erros que você NUNCA deve cometer</option>
                    <option value="Roteiro Dia a Dia Econômico">Roteiro Econômico na Ponta do Lápis</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading || !destination.trim()}
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold text-sm py-3.5 rounded-2xl shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {format === "long" ? "Gerando Roteiro de 8+ min..." : "Roteirizando Shorts..."}
                    </>
                  ) : (
                    <>
                      <Film className="w-4 h-4" />
                      {format === "long" ? "Gerar Roteiro Longo + Prompts IA" : "Gerar Vídeo Curto + Prompts"}
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Estilo Visual do Canal */}
            <div className="bg-stone-900/60 border border-stone-800 rounded-3xl p-5 text-xs space-y-2.5 text-stone-400">
              <h3 className="font-bold text-stone-200 text-sm flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-orange-400" /> Padrão Visual B-Roll 2.5D
              </h3>
              <p>
                Cada capítulo já traz o <strong>Prompt de Imagem IA</strong> em inglês pronto para você colar no <strong>Midjourney</strong>, <strong>Leonardo.ai</strong>, <strong>Flux</strong> ou <strong>Canva</strong>.
              </p>
              <p>
                Acompanha também as sugestões de <strong>Efeitos Sonoros (SFX)</strong> e <strong>Textos Dinâmicos (Motion Graphics)</strong> para a edição!
              </p>
            </div>
          </div>

          {/* Área de Visualização do Roteiro (Direita) */}
          <div className="lg:col-span-2">
            {error && (
              <div className="p-4 rounded-2xl bg-red-950 border border-red-800 text-red-200 text-sm mb-6">
                {error}
              </div>
            )}

            {!result && !loading && (
              <div className="border border-dashed border-stone-800 rounded-3xl p-12 text-center text-stone-500 space-y-3">
                <Tv className="w-12 h-12 text-stone-700 mx-auto" />
                <h3 className="font-bold text-base text-stone-400">Nenhum roteiro em exibição</h3>
                <p className="text-xs max-w-sm mx-auto">
                  Selecione um dos posts do blog ao lado ou digite um destino e clique em gerar. A IA montará todo o roteiro com prompts de imagem, motion graphics e narração!
                </p>
              </div>
            )}

            {result && (
              <div className="space-y-6 animate-in fade-in duration-300">
                {/* Header do Roteiro */}
                <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-800">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                        <Tv className="w-3.5 h-3.5" />
                        {result.duration ? `Vídeo de ${result.duration}` : "Roteiro Completo"}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                        {result.title || `Vídeo: ${destination}`}
                      </h2>
                    </div>

                    {/* Botão de Ouvir Narração */}
                    {result.fullNarrationText && (
                      <button
                        type="button"
                        onClick={() => handleSpeak(result.fullNarrationText || "")}
                        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer ${
                          isSpeaking
                            ? "bg-red-600 text-white animate-pulse"
                            : "bg-stone-800 hover:bg-stone-700 text-white border border-stone-700"
                        }`}
                      >
                        {isSpeaking ? (
                          <>
                            <Square className="w-3.5 h-3.5 fill-current" />
                            Parar Voz
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-4 h-4 text-red-400" />
                            Ouvir Leitura Neural (PT-BR)
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* THUMBNAIL COM PROMPT DE IMAGEM IA */}
                  {result.thumbnailIdea && (
                    <div className="mt-5 p-4 rounded-2xl bg-amber-950/30 border border-amber-800/40 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                          <ImageIcon className="w-4 h-4" /> Capa do Vídeo (Thumbnail):
                        </span>
                        {result.thumbnailPrompt && (
                          <button
                            type="button"
                            onClick={() => copyToClipboard(result.thumbnailPrompt || "", "thumb-prompt")}
                            className="text-[11px] text-amber-300 hover:text-white flex items-center gap-1 bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-700/50"
                          >
                            {copiedType === "thumb-prompt" ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                            Copiar Prompt da Thumb
                          </button>
                        )}
                      </div>
                      <p className="text-xs text-stone-200 font-medium">
                        {result.thumbnailIdea}
                      </p>
                      {result.thumbnailPrompt && (
                        <div className="text-[11px] font-mono text-stone-400 bg-stone-950 p-2.5 rounded-xl border border-stone-800 break-all select-all">
                          {result.thumbnailPrompt}
                        </div>
                      )}
                    </div>
                  )}

                  {/* HOOK (Vídeo Curto) */}
                  {result.hook && (
                    <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-red-950/80 to-amber-950/80 border border-red-800/80 space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-amber-300">
                          🎯 Hook dos Primeiros 3 Segundos
                        </span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(result.hook || "", "hook")}
                          className="text-[11px] text-stone-400 hover:text-white flex items-center gap-1"
                        >
                          {copiedType === "hook" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          Copiar
                        </button>
                      </div>
                      <p className="text-base font-extrabold text-white">
                        &quot;{result.hook}&quot;
                      </p>
                      {result.imagePrompt && (
                        <div className="pt-2 border-t border-red-900/50">
                          <div className="flex items-center justify-between text-[11px] text-stone-300 mb-1">
                            <span>🎨 Prompt de Imagem 2.5D (Midjourney / Flux):</span>
                            <button
                              type="button"
                              onClick={() => copyToClipboard(result.imagePrompt || "", "hook-img")}
                              className="text-amber-300 hover:text-white flex items-center gap-1"
                            >
                              {copiedType === "hook-img" ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                              Copiar Prompt
                            </button>
                          </div>
                          <p className="text-[11px] font-mono text-stone-400 bg-stone-950 p-2 rounded-lg border border-stone-800 select-all">
                            {result.imagePrompt}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* CAPÍTULOS DE VÍDEO LONGO (+8 MIN) */}
                  {result.chapters && result.chapters.length > 0 && (
                    <div className="mt-6 space-y-5">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                        Capítulos do Vídeo (+8 Minutos) com Prompts de Animação 2.5D:
                      </h3>

                      {result.chapters.map((chapter, idx) => (
                        <div
                          key={idx}
                          className="bg-stone-950 border border-stone-800 rounded-2xl p-5 space-y-3 hover:border-stone-700 transition-colors"
                        >
                          {/* Topo do Capítulo */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <h4 className="text-sm font-bold text-orange-400 flex items-center gap-2">
                              <span className="font-mono bg-stone-900 px-2 py-0.5 rounded-md border border-stone-800 text-orange-300 text-xs">
                                ⏱️ {chapter.time || `Capítulo ${idx + 1}`}
                              </span>
                              {chapter.title}
                            </h4>
                            <button
                              type="button"
                              onClick={() => copyToClipboard(chapter.narration, `ch-${idx}`)}
                              className="text-[11px] text-stone-400 hover:text-white flex items-center gap-1 shrink-0"
                            >
                              {copiedType === `ch-${idx}` ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                              Copiar Fala
                            </button>
                          </div>

                          {/* Badges de Motion Graphics & SFX */}
                          <div className="flex flex-wrap gap-2 text-[11px]">
                            {chapter.motionText && (
                              <span className="bg-amber-950/60 border border-amber-800/60 text-amber-300 px-2.5 py-1 rounded-lg flex items-center gap-1 font-bold">
                                <Type className="w-3 h-3" /> Texto na Tela: &quot;{chapter.motionText}&quot;
                              </span>
                            )}
                            {chapter.sfx && (
                              <span className="bg-sky-950/60 border border-sky-800/60 text-sky-300 px-2.5 py-1 rounded-lg flex items-center gap-1">
                                <Music className="w-3 h-3" /> SFX: {chapter.sfx}
                              </span>
                            )}
                          </div>

                          {/* Prompt de Imagem IA 2.5D */}
                          {chapter.imagePrompt && (
                            <div className="bg-stone-900/90 p-3 rounded-xl border border-stone-800 space-y-1.5">
                              <div className="flex items-center justify-between text-[11px] text-orange-400 font-bold">
                                <span className="flex items-center gap-1">
                                  <ImageIcon className="w-3.5 h-3.5" /> Prompt de Imagem B-Roll 2.5D (Midjourney / Flux / Leonardo):
                                </span>
                                <button
                                  type="button"
                                  onClick={() => copyToClipboard(chapter.imagePrompt || "", `img-${idx}`)}
                                  className="text-orange-300 hover:text-white flex items-center gap-1 bg-stone-800 px-2 py-0.5 rounded-md"
                                >
                                  {copiedType === `img-${idx}` ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                                  Copiar Prompt
                                </button>
                              </div>
                              <p className="text-[11px] font-mono text-stone-300 bg-stone-950 p-2.5 rounded-lg border border-stone-800/80 break-all select-all">
                                {chapter.imagePrompt}
                              </p>
                            </div>
                          )}

                          {/* Conceito Visual */}
                          <div className="text-xs text-stone-300 bg-stone-900/40 p-2.5 rounded-xl border border-stone-800/60">
                            🎥 <strong>Direção Visual:</strong> {chapter.visuals}
                          </div>

                          {/* Fala da Narração */}
                          <div className="text-xs sm:text-sm text-stone-200 leading-relaxed pl-3 border-l-2 border-orange-500/70">
                            🗣️ <strong>Locução (Apresentador):</strong> &quot;{chapter.narration}&quot;
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CENAS DE VÍDEO CURTO */}
                  {result.scenes && result.scenes.length > 0 && (
                    <div className="mt-6 space-y-4">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                        Cortes de Cena com Prompts 2.5D:
                      </h3>

                      {result.scenes.map((scene, idx) => (
                        <div
                          key={idx}
                          className="bg-stone-950 border border-stone-800/90 rounded-2xl p-4.5 space-y-2.5 hover:border-stone-700 transition-colors"
                        >
                          <div className="flex items-center justify-between text-xs text-stone-400">
                            <span className="font-mono bg-stone-900 px-2 py-0.5 rounded-md border border-stone-800 text-orange-400">
                              ⏱️ {scene.time}
                            </span>
                            <span className="text-[11px] text-stone-500">Corte {idx + 1}</span>
                          </div>

                          {scene.imagePrompt && (
                            <div className="bg-stone-900 p-2.5 rounded-xl border border-stone-800 space-y-1">
                              <div className="flex items-center justify-between text-[11px] text-orange-400 font-bold">
                                <span>🎨 Prompt Imagem 2.5D:</span>
                                <button
                                  type="button"
                                  onClick={() => copyToClipboard(scene.imagePrompt || "", `short-img-${idx}`)}
                                  className="text-orange-300 hover:text-white flex items-center gap-1"
                                >
                                  {copiedType === `short-img-${idx}` ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                                  Copiar
                                </button>
                              </div>
                              <p className="text-[11px] font-mono text-stone-300 bg-stone-950 p-2 rounded-lg border border-stone-800 select-all">
                                {scene.imagePrompt}
                              </p>
                            </div>
                          )}

                          <div className="space-y-1.5">
                            <p className="text-xs text-amber-200/90 bg-amber-950/30 p-2 rounded-lg border border-amber-900/30">
                              🎬 <strong>Cena:</strong> {scene.visual}
                            </p>
                            <p className="text-sm font-medium text-stone-200">
                              🗣️ <strong>Fala:</strong> &quot;{scene.narration}&quot;
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA SHORTS */}
                  {result.cta && (
                    <div className="mt-6 p-4 rounded-2xl bg-orange-950/40 border border-orange-800/50">
                      <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block mb-1">
                        🚀 Chamada para Ação (Final do Vídeo):
                      </span>
                      <p className="text-sm font-bold text-white leading-relaxed">
                        &quot;{result.cta}&quot;
                      </p>
                    </div>
                  )}

                  {/* AÇÕES E CÓPIAS GERAIS */}
                  <div className="mt-6 pt-6 border-t border-stone-800 flex flex-wrap gap-3">
                    {result.fullNarrationText && (
                      <button
                        type="button"
                        onClick={() => copyToClipboard(result.fullNarrationText || "", "full")}
                        className="bg-stone-800 hover:bg-stone-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl border border-stone-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        {copiedType === "full" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                        Copiar Roteiro Inteiro (Teleprompter)
                      </button>
                    )}

                    {result.youtubeDescription && (
                      <button
                        type="button"
                        onClick={() => copyToClipboard(result.youtubeDescription || "", "desc")}
                        className="bg-red-950 hover:bg-red-900 text-red-200 text-xs font-bold px-4 py-2.5 rounded-xl border border-red-800 flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        {copiedType === "desc" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                        Copiar Descrição Completa do YouTube
                      </button>
                    )}

                    {result.caption && (
                      <button
                        type="button"
                        onClick={() => copyToClipboard(result.caption || "", "caption")}
                        className="bg-stone-800 hover:bg-stone-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl border border-stone-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        {copiedType === "caption" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                        Copiar Legenda + Hashtags
                      </button>
                    )}
                  </div>
                </div>

                {/* DESCRIÇÃO DO YOUTUBE */}
                {result.youtubeDescription && (
                  <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2 flex items-center gap-1.5">
                      <Tv className="w-4 h-4" /> Descrição do Vídeo no YouTube (com Capítulos & Links):
                    </h3>
                    <p className="text-xs text-stone-300 whitespace-pre-line leading-relaxed font-mono bg-stone-950 p-4 rounded-xl border border-stone-800">
                      {result.youtubeDescription}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
