"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Copy,
  Check,
  QrCode,
  ArrowLeft,
  Coffee,
  Sparkles,
  ShieldCheck,
  Tv,
  Luggage
} from "lucide-react";

export default function PixPage() {
  const [copied, setCopied] = useState(false);
  const pixKey = "malasprontas737@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8">
      {/* Top Bar */}
      <div className="max-w-md mx-auto w-full mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-stone-400 hover:text-white transition-colors bg-stone-900/80 border border-stone-800 px-3.5 py-2 rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao Blog Malas Prontas
        </Link>
      </div>

      {/* Main Card */}
      <main className="max-w-md mx-auto w-full bg-stone-900/90 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-6">
        {/* Logo / Badge */}
        <div className="relative inline-block">
          <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl mx-auto border-2 border-orange-500/40">
            <img src="/logo.png" alt="Logo Malas Prontas" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-rose-500 flex items-center justify-center text-white shadow-md">
            <Heart className="w-4 h-4 fill-current" />
          </div>
        </div>

        {/* Título & Mensagem */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400 bg-orange-950/60 border border-orange-800/60 px-3 py-1 rounded-full inline-block">
            Apoie o Projeto Malas Prontas
          </span>
          <h1 className="text-2xl font-black text-white tracking-tight">
            Valeu pelo apoio! 🎒✨
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            Se os nossos vídeos e roteiros gratuitos te ajudaram a economizar tempo e planejar sua viagem, você pode apoiar a produção de novos conteúdos com qualquer valor no PIX!
          </p>
        </div>

        {/* BOX COPIAR CHAVE PIX */}
        <div className="bg-stone-950 border border-stone-800 rounded-2xl p-5 space-y-3">
          <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
            Chave PIX Oficial (E-mail):
          </span>
          
          <div className="bg-stone-900 border border-stone-700/80 p-3 rounded-xl font-mono text-sm sm:text-base font-bold text-orange-400 select-all break-all">
            {pixKey}
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer ${
              copied
                ? "bg-emerald-600 text-white shadow-emerald-600/30"
                : "bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white shadow-orange-600/30"
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-white" />
                Chave PIX Copiada com Sucesso!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Clique Aqui para Copiar a Chave PIX
              </>
            )}
          </button>

          {copied && (
            <p className="text-[11px] text-emerald-400 animate-in fade-in">
              ✨ Pronto! Agora basta abrir o app do seu banco e colar na opção PIX.
            </p>
          )}
        </div>

        {/* Sugestões de Apoio */}
        <div className="pt-2 border-t border-stone-800 space-y-2">
          <span className="text-[11px] text-stone-400 block">
            Sugestões simbólicas de contribuição:
          </span>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="p-2.5 rounded-xl bg-stone-950 hover:bg-stone-800 border border-stone-800 text-center transition-colors cursor-pointer"
            >
              <span className="block text-xs font-bold text-white">☕ R$ 5,00</span>
              <span className="text-[10px] text-stone-500">Um cafezinho</span>
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="p-2.5 rounded-xl bg-stone-950 hover:bg-stone-800 border border-stone-800 text-center transition-colors cursor-pointer"
            >
              <span className="block text-xs font-bold text-orange-400">🥥 R$ 15,00</span>
              <span className="text-[10px] text-stone-500">Água de coco</span>
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="p-2.5 rounded-xl bg-stone-950 hover:bg-stone-800 border border-stone-800 text-center transition-colors cursor-pointer"
            >
              <span className="block text-xs font-bold text-emerald-400">⛽ R$ 30,00</span>
              <span className="text-[10px] text-stone-500">Combustível</span>
            </button>
          </div>
        </div>

        {/* Canal do YouTube */}
        <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Pagamento 100% Seguro
          </span>
          <a
            href="https://www.youtube.com/@canalmalasprontas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-300 font-semibold flex items-center gap-1"
          >
            <Tv className="w-3.5 h-3.5" />
            @canalmalasprontas
          </a>
        </div>
      </main>

      {/* Footer minimal */}
      <footer className="text-center text-xs text-stone-600 mt-8">
        © {new Date().getFullYear()} Malas Prontas • malasprontas737.com.br
      </footer>
    </div>
  );
}
