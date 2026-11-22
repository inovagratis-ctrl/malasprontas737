import Link from "next/link";
import { Plane, ShieldCheck, HeartHandshake, AlertCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071322] text-slate-400 border-t border-blue-950 pt-16 pb-12 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Coluna 1 & 2: Marca & Missão */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <Plane className="w-5 h-5 text-amber-400 -rotate-45" />
              </div>
              <span className="font-black text-xl text-white tracking-tight">
                MALAS PRONTAS <span className="text-amber-400">737</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              O portal de utilidade prática aeronáutica e bagagem para viagens sem perrengue. Reunimos verificadores de gabarito por companhia aérea, buscadores de regras ANAC e geradores inteligentes de malas com foco em economia real e conformidade aeroportuária.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Baseado nas Resoluções ANAC nº 400/2016 e RBAC 175</span>
            </div>
          </div>

          {/* Coluna 3: As 4 Ferramentas */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Micro-Ferramentas de Voo
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/bagagem" className="hover:text-amber-400 transition-colors">
                  Verificador de Medidas por Cia Aérea
                </Link>
              </li>
              <li>
                <Link href="/posso-levar" className="hover:text-amber-400 transition-colors">
                  Scanner "Posso Levar Isso no Avião?"
                </Link>
              </li>
              <li>
                <Link href="/liquidos" className="hover:text-amber-400 transition-colors">
                  Simulador da Regra dos Líquidos (100ml)
                </Link>
              </li>
              <li>
                <Link href="/checklist" className="hover:text-amber-400 transition-colors">
                  Gerador PackPoint & PDF A4 Imprimível
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Guias e Dicas */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Regulamentações Oficiais
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <span className="text-slate-300">Bagagem de Mão ANAC (10kg)</span>
              </li>
              <li>
                <span className="text-slate-300">Regras de Lítio & Powerbank (IATA)</span>
              </li>
              <li>
                <span className="text-slate-300">Líquidos em Voos Internacionais (TSA)</span>
              </li>
              <li>
                <span className="text-slate-300">Alimentos e Queijos (Vigiagro/MAPA)</span>
              </li>
            </ul>
          </div>

          {/* Coluna 5: Institucional e Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Institucional & Legal
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/sobre" className="hover:text-white transition-colors">
                  Sobre Nós & Metodologia
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="hover:text-white transition-colors">
                  Política de Privacidade (LGPD)
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso" className="hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/politica-de-cookies" className="hover:text-white transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/transparencia-editorial" className="hover:text-white transition-colors">
                  Transparência & Afiliação
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-white transition-colors">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Legal Obrigatório */}
        <div className="pt-8 border-t border-blue-950/80 space-y-4">
          <div className="bg-[#0B1E36]/60 p-4 rounded-2xl border border-blue-900/40 flex items-start gap-3 text-[11px] leading-relaxed text-slate-300">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong>Aviso Legal & Regulatório:</strong> O portal <em>Malas Prontas 737</em> é um recurso independente de utilidade pública informativa e planejamento de viagens. Embora nossos dados sejam constantemente atualizados com base nas resoluções da Agência Nacional de Aviação Civil (ANAC Resolução nº 400/2016 e RBAC 175), da Transportation Security Administration (TSA) e da International Air Transport Association (IATA), as companhias aéreas e as autoridades de segurança aeroportuária reservam-se o direito soberano de interpretar dimensões, pesos e artigos perigosos na inspeção de raio-X do portão de embarque.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <div>
              © {new Date().getFullYear()} Malas Prontas 737. Todos os direitos reservados.
            </div>
            <div>
              ID AdSense Autorizado: <span className="font-mono text-slate-300">ca-pub-3922432751903141</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
