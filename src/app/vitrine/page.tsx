import { Metadata } from "next";
import TravelGearShowcase from "@/components/TravelGearShowcase";
import { ShoppingBag, ShieldCheck, Sparkles, Truck, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vitrine Oficial de Equipamentos & Acessórios de Viagem | Malas Prontas",
  description: "Descubra os melhores acessórios e equipamentos de viagem testados e aprovados pelo Canal Malas Prontas: Malas de bordo 10kg ANAC, sacos a vácuo, mochilas antifurto, balanças digitais, adaptadores e smart tags no Mercado Livre.",
  alternates: {
    canonical: "https://malasprontas737.com.br/vitrine",
  },
  openGraph: {
    title: "Vitrine Oficial de Equipamentos & Acessórios de Viagem | Malas Prontas",
    description: "Equipamentos essenciais para viajar leve nos 10kg sem pagar taxas extras no aeroporto. Confira as ofertas oficiais no Mercado Livre.",
    url: "https://malasprontas737.com.br/vitrine",
    siteName: "Malas Prontas",
    locale: "pt_BR",
    type: "website",
  },
};

export default function VitrinePage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* HERO SECTION */}
      <section className="relative bg-stone-900 text-white py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=2000&q=80"
            alt="Equipamentos e malas de viagem"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-stone-900/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 backdrop-blur-md">
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            Shopping Oficial Malas Prontas
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
            Os Melhores Equipamentos para <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-yellow-400">Viajar Leve e Sem Perrengue</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Selecionamos a dedo os 32 itens mais bem avaliados do Mercado Livre para você arrumar a mala perfeita, economizar com bagagem despachada e viajar com total segurança.
          </p>

          {/* Vantagens Bar */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-3">
              <Award className="w-8 h-8 text-amber-400 shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase">Testados & Aprovados</h4>
                <p className="text-[11px] text-stone-300">Seleção rigorosa de qualidade e avaliações 4.8+</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-3">
              <Truck className="w-8 h-8 text-emerald-400 shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase">Entrega Rápida Full</h4>
                <p className="text-[11px] text-stone-300">Direto pelo Mercado Livre com garantia de entrega</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-sky-400 shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase">Compra 100% Segura</h4>
                <p className="text-[11px] text-stone-300">Programa Compra Garantida do Mercado Livre</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTAINER PRINCIPAL COM A VITRINE */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <TravelGearShowcase />

        {/* FAQ & DICAS DE COMPRA */}
        <section className="mt-16 bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Dúvidas Frequentes</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
              Como montar a bagagem perfeita sem pagar excesso de peso?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/70">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-orange-600 shrink-0" />
                Qual o tamanho oficial da Mala de Bordo no Brasil?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Pelo padrão da ANAC (aceito por Gol, Latam e Azul), a mala de mão deve ter no máximo <strong>55 x 35 x 25 cm</strong> (incluindo rodinhas e alças) e pesar até <strong>10 kg</strong>. Todas as opções da nossa vitrine atendem a essa medida.
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/70">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-orange-600 shrink-0" />
                Os sacos a vácuo realmente funcionam na mala de mão?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Sim! Eles reduzem em até 70% o volume de casacos, toalhas e roupas de inverno. Lembre-se apenas de que eles reduzem volume, não peso — por isso a <strong>Balança Digital</strong> é a parceira ideal.
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/70">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-orange-600 shrink-0" />
                Por que usar Smart Tags / Rastreador de bagagem?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Mesmo em voos com conexão rápida ou malas despachadas de última hora no portão de embarque, a Smart Tag permite saber exatamente em qual terminal ou cidade sua bagagem está direto na tela do seu celular.
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/70">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-orange-600 shrink-0" />
                Como funciona o link de afiliados do Mercado Livre?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Ao clicar e comprar pelos nossos links, você é redirecionado para a loja oficial do vendedor no Mercado Livre com o mesmo preço original (e eventuais promoções), e o <strong>Canal Malas Prontas</strong> recebe uma pequena comissão que mantém nosso projeto no ar!
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/checklist"
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm px-6 py-3.5 rounded-2xl shadow-md transition-all"
            >
              <span>Abrir Checklist Interativo da Mala</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
