"use client";

import Link from "next/link";
import { useState } from "react";
import { Luggage, Compass, CheckSquare, Info, Menu, X, Heart, Sparkles, Calculator, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-md shadow-orange-600/20 group-hover:scale-105 transition-transform shrink-0 border border-stone-100">
              <img
                src="/logo.png"
                alt="Logo Malas Prontas"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-2xl tracking-tight text-stone-900">
                  Malas<span className="text-orange-600">Prontas</span>
                </span>
              </div>
              <p className="text-xs text-stone-700 tracking-wide font-medium">
                Dicas & Roteiros de Viagem
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3">
            <Link
              href="/"
              className="text-stone-900 hover:text-orange-600 font-bold text-sm transition-all px-3 py-1.5 rounded-xl hover:bg-stone-100/80 flex items-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-orange-600" />
              Início
            </Link>
            <Link
              href="/destinos"
              className="text-stone-900 hover:text-orange-600 font-bold text-sm transition-all px-3 py-1.5 rounded-xl hover:bg-stone-100/80 flex items-center gap-1.5"
            >
              <Luggage className="w-4 h-4 text-orange-600" />
              Destinos
            </Link>
            <Link
              href="/roteiro-personalizado"
              className="font-bold text-sm transition-all flex items-center gap-1.5 bg-orange-50 text-orange-800 hover:text-orange-900 px-3.5 py-1.5 rounded-full border border-orange-200/80 shadow-2xs hover:bg-orange-100"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              Roteiro IA
              <span className="bg-orange-600 text-white text-[9px] font-extrabold px-1.5 py-0.2 rounded-full uppercase">Novo</span>
            </Link>
            <Link
              href="/calculadora-viagem"
              className="font-bold text-sm transition-all flex items-center gap-1.5 bg-emerald-50 text-emerald-800 hover:text-emerald-900 px-3.5 py-1.5 rounded-full border border-emerald-200/80 shadow-2xs hover:bg-emerald-100"
            >
              <Calculator className="w-3.5 h-3.5 text-emerald-600" />
              Simulador de Custos
              <span className="bg-emerald-600 text-white text-[9px] font-extrabold px-1.5 py-0.2 rounded-full uppercase">Grátis</span>
            </Link>
            <Link
              href="/vitrine"
              className="font-bold text-sm transition-all flex items-center gap-1.5 bg-amber-50 text-amber-900 hover:text-amber-950 px-3.5 py-1.5 rounded-full border border-amber-300 shadow-2xs hover:bg-amber-100"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-amber-600" />
              Vitrine
              <span className="bg-amber-500 text-white text-[9px] font-extrabold px-1.5 py-0.2 rounded-full uppercase">Ofertas</span>
            </Link>
            <Link
              href="/checklist"
              className="text-stone-900 hover:text-emerald-700 font-bold text-sm transition-all px-3 py-1.5 rounded-xl hover:bg-stone-100/80 flex items-center gap-1.5"
            >
              <CheckSquare className="w-4 h-4 text-emerald-600" />
              Checklist
            </Link>
            <Link
              href="/sobre"
              className="text-stone-900 hover:text-orange-600 font-bold text-sm transition-all px-3 py-1.5 rounded-xl hover:bg-stone-100/80 flex items-center gap-1.5"
            >
              <Info className="w-4 h-4 text-stone-500" />
              Sobre
            </Link>
          </nav>

          {/* CTA Action */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/checklist"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm shadow-orange-600/30 transition-all hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <Luggage className="w-4 h-4" />
              Arrumar a Mala
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-xl text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors focus:outline-hidden"
              aria-label="Menu principal"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-base font-bold text-stone-900 hover:bg-orange-50 hover:text-orange-600 transition-colors"
          >
            <Compass className="w-5 h-5 text-orange-600" />
            Início
          </Link>
          <Link
            href="/destinos"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-base font-bold text-stone-900 hover:bg-orange-50 hover:text-orange-600 transition-colors"
          >
            <Luggage className="w-5 h-5 text-orange-600" />
            Destinos & Roteiros
          </Link>
          <Link
            href="/roteiro-personalizado"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-bold text-orange-800 bg-orange-50 transition-colors"
          >
            <span className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-orange-600" />
              Roteiro Sob Medida com IA
            </span>
            <span className="bg-orange-600 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase">Novo</span>
          </Link>
          <Link
            href="/calculadora-viagem"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-bold text-emerald-900 bg-emerald-50 transition-colors"
          >
            <span className="flex items-center gap-3">
              <Calculator className="w-5 h-5 text-emerald-600" />
              Simulador de Custos da Viagem
            </span>
            <span className="bg-emerald-600 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase">Grátis</span>
          </Link>
          <Link
            href="/vitrine"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-bold text-amber-950 bg-amber-50 border border-amber-200 transition-colors"
          >
            <span className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-amber-600" />
              Vitrine de Equipamentos & Ofertas
            </span>
            <span className="bg-amber-500 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase">Ofertas</span>
          </Link>
          <Link
            href="/checklist"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-base font-bold text-stone-900 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
          >
            <CheckSquare className="w-5 h-5 text-emerald-600" />
            Checklist Interativo da Mala
          </Link>
          <Link
            href="/sobre"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-base font-bold text-stone-900 hover:bg-orange-50 hover:text-orange-600 transition-colors"
          >
            <Info className="w-5 h-5 text-stone-500" />
            Sobre o Blog
          </Link>
          <div className="pt-2">
            <Link
              href="/checklist"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-orange-600 text-white font-semibold py-3 rounded-xl shadow-xs"
            >
              <Luggage className="w-5 h-5" />
              Abrir Checklist Grátis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
