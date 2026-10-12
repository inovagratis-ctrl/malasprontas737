"use client";

import Link from "next/link";
import { Luggage, Compass, Heart, MapPin, Mail, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl overflow-hidden shadow-md shrink-0 border border-stone-800">
                <img src="/logo.png" alt="Logo Malas Prontas" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">
                Malas<span className="text-orange-500">Prontas</span>
              </span>
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed">
              Inspirando viajantes a explorarem destinos incríveis pelo Brasil e pelo mundo, com roteiros detalhados, dicas sinceras e economia real.
            </p>
            <div className="flex items-center gap-3 pt-2 text-stone-400">
              <span className="w-9 h-9 rounded-lg bg-stone-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors cursor-pointer" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </span>
              <a
                href="https://www.youtube.com/@canalmalasprontas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="mailto:malasprontas737@gmail.com"
                className="w-9 h-9 rounded-lg bg-stone-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors"
                aria-label="Email"
                title="malasprontas737@gmail.com"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Ferramentas & Serviços
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/calculadora-viagem" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  Simulador de Custos
                  <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-bold px-1.5 py-0.5 rounded-full">Grátis</span>
                </Link>
              </li>
              <li>
                <Link href="/roteiro-personalizado" className="hover:text-orange-400 transition-colors">
                  Gerador de Roteiro IA
                </Link>
              </li>
              <li>
                <Link href="/checklist" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  Checklist da Mala
                  <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-bold px-1.5 py-0.5 rounded-full">Grátis</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://economybookings.tpo.lu/rXOQqeTJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  🚗 Aluguel de Carros
                </a>
              </li>
              <li>
                <a
                  href="https://ektatraveling.tpo.lu/QynkhjN8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  🛡️ Seguro Viagem (25% OFF)
                </a>
              </li>
              <li>
                <a
                  href="https://airhelp.tpo.lu/8hNOeALJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  ⚖️ Indenização de Voo Atrasado
                </a>
              </li>
              <li>
                <a
                  href="https://airalo.tpo.lu/5hX1qKLi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors flex items-center gap-1"
                >
                  📱 Chip eSIM Internacional (Airalo)
                </a>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Categorias Populares
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/destinos?categoria=Praia" className="hover:text-orange-400 transition-colors">
                  🏖️ Praias Paradisíacas
                </Link>
              </li>
              <li>
                <Link href="/destinos?categoria=Serra%20%26%20Frio" className="hover:text-orange-400 transition-colors">
                  ⛰️ Serras & Frio
                </Link>
              </li>
              <li>
                <Link href="/destinos?categoria=Ecoturismo" className="hover:text-orange-400 transition-colors">
                  🌿 Ecoturismo & Cachoeiras
                </Link>
              </li>
              <li>
                <Link href="/destinos?categoria=Mochilão" className="hover:text-orange-400 transition-colors">
                  🎒 Mochilão Econômico
                </Link>
              </li>
            </ul>
          </div>

          {/* Institucional & Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Institucional & Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/sobre" className="hover:text-orange-400 transition-colors">
                  📖 Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-orange-400 transition-colors">
                  ✉️ Fale Conosco
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="hover:text-orange-400 transition-colors">
                  🛡️ Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso" className="hover:text-orange-400 transition-colors">
                  ⚖️ Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/transparencia-editorial" className="hover:text-orange-400 transition-colors">
                  ✨ Transparência Editorial
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Diário de Viagem
            </h3>
            <p className="text-xs text-stone-400 mb-3">
              Receba novos roteiros e promoções de passagens no seu e-mail toda semana.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Seu melhor e-mail..."
                className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-stone-800 border border-stone-700 text-stone-100 placeholder-stone-400 focus:outline-hidden focus:border-orange-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors shadow-sm cursor-pointer"
              >
                Quero Receber Roteiros
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Legal Sub-bar */}
        <div className="mt-12 pt-8 border-t border-stone-800 text-xs text-stone-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <p>© {new Date().getFullYear()} Malas Prontas. Todos os direitos reservados.</p>
            <span className="hidden sm:inline text-stone-700">|</span>
            <Link href="/politica-de-privacidade" className="hover:text-stone-200 transition-colors underline">
              Privacidade
            </Link>
            <Link href="/termos-de-uso" className="hover:text-stone-200 transition-colors underline">
              Termos de Uso
            </Link>
            <Link href="/transparencia-editorial" className="hover:text-stone-200 transition-colors underline">
              Transparência
            </Link>
            <Link href="/contato" className="hover:text-stone-200 transition-colors underline">
              Contato
            </Link>
          </div>
          <p className="flex items-center gap-1">
            Feito com <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> para quem ama viajar pelo mundo.
          </p>
        </div>
      </div>
    </footer>
  );
}
