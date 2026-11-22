"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Luggage,
  Search,
  Droplets,
  CheckSquare,
  Menu,
  X,
  Plane,
  Sparkles,
  ShieldAlert
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const TOOLS_NAV = [
    { href: "/bagagem", label: "Medidor de Mala", icon: Luggage, desc: "Simulador por Cia & Tarifa" },
    { href: "/posso-levar", label: "Posso Levar?", icon: Search, desc: "Guia de Itens & Raio-X" },
    { href: "/liquidos", label: "Líquidos 100ml", icon: Droplets, desc: "Matriz Internacional 1L" },
    { href: "/checklist", label: "Mala Inteligente", icon: CheckSquare, desc: "Checklist com Peso & PDF" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0B1E36]/95 backdrop-blur-md border-b border-blue-900/60 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Principal Boeing 737 */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <img
              src="/logo-malasprontas-737.png"
              alt="Malas Prontas 737 - Embarque Sem Taxa Surpresa"
              className="h-9 sm:h-11 w-auto object-contain block group-hover:scale-[1.02] transition-transform duration-200"
            />
          </Link>

          {/* Links Desktop dos 4 Sistemas */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Ferramentas Principais">
            {TOOLS_NAV.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-slate-200 hover:text-white hover:bg-blue-800/40 transition-colors"
                >
                  <Icon className="w-4 h-4 text-amber-400" />
                  <span>{tool.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Botão de Ação Rápida */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/#ferramentas"
              className="inline-flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-extrabold px-4 py-2.5 rounded-xl shadow-md transition-all hover:shadow-amber-400/20"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-900" />
              Abrir 4 Ferramentas
            </Link>
          </div>

          {/* Botão Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-blue-900/50"
            aria-label="Abrir menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="lg:hidden bg-[#0A192F] border-b border-blue-900/80 px-4 pt-3 pb-6 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-300 px-2">
            As 4 Micro-Ferramentas de Voo:
          </div>
          <div className="grid grid-cols-1 gap-2">
            {TOOLS_NAV.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-blue-950/60 border border-blue-900/50 hover:bg-blue-900/50 text-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-800/40 text-amber-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs">{tool.label}</div>
                      <div className="text-[11px] text-blue-200/70">{tool.desc}</div>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-amber-400">Abrir →</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-blue-900/50 flex flex-wrap gap-2 text-xs text-blue-200/70 px-2">
            <Link href="/sobre" onClick={() => setIsOpen(false)} className="hover:text-white">Sobre Nós</Link>
            <span>•</span>
            <Link href="/politica-de-privacidade" onClick={() => setIsOpen(false)} className="hover:text-white">Privacidade</Link>
            <span>•</span>
            <Link href="/contato" onClick={() => setIsOpen(false)} className="hover:text-white">Contato</Link>
          </div>
        </div>
      )}
    </header>
  );
}
