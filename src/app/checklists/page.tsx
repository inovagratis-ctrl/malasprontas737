"use client";

import Link from "next/link";
import ChecklistWidget from "@/components/ChecklistWidget";
import { trackConversionEvent } from "@/lib/analytics";
import {
  CheckSquare,
  Printer,
  Luggage,
  Baby,
  Globe,
  Sun,
  Snowflake,
  Trees,
  ArrowRight,
  FileCheck
} from "lucide-react";

const PRINTABLE_PACKS = [
  {
    id: "pack-bordo-10kg",
    title: "Checklist Mala de Mão 10kg (Padrão ANAC Sem Despacho)",
    subtitle: "Focado em viagens de 4 a 8 dias usando apenas mala 55x35x25 cm + mochila pessoal",
    icon: Luggage,
    color: "text-orange-600 bg-orange-50 border-orange-200",
    items: [
      "1 Mala rígida ou semirrígida até 55 x 35 x 25 cm (pesando até 2,8 kg vazia)",
      "1 Mochila pessoal até 40 x 30 x 15 cm (para levar sob o assento da frente)",
      "5 Camisetas/blusas neutras + 3 calças/bermudas + 1 casaco corta-vento (vestido no voo)",
      "7 Pares de roupas íntimas e meias em cubo organizador de compressão",
      "Nécessaire transparente ziplock 1L com frascos de até 100ml (shampoo, pasta, desodorante roll-on)",
      "Powerbank (sempre na mochila de mão, proibido despachar), cabos e adaptador universal",
      "Balança digital portátil para pesar antes do check-in",
    ],
  },
  {
    id: "pack-internacional",
    title: "Checklist Pastinha da Imigração Internacional",
    subtitle: "Documentos impressos e digitais obrigatórios para passar sem estresse pela fronteira",
    icon: Globe,
    color: "text-blue-600 bg-blue-50 border-blue-200",
    items: [
      "Passaporte válido por 6+ meses (ou RG físico original < 10 anos para países do Mercosul)",
      "Passagem aérea de IDA e VOLTA impressa com código localizador (PNR) visível",
      "Comprovantes de reserva de hospedagem cobrindo 100% das noites da viagem",
      "Apólice de Seguro Viagem impressa (mínimo € 30.000 para Europa / US$ 60.000 EUA)",
      "Certificado Internacional de Vacinação contra Febre Amarela (CIVP Anvisa) se exigido",
      "2 Cartões internacionais desbloqueados (Conta Global + Crédito) e reserva em espécie (US$/€)",
      "Chip virtual eSIM instalado antes do embarque",
    ],
  },
  {
    id: "pack-familia-criancas",
    title: "Checklist Viagem com Crianças e Bebês",
    subtitle: "Documentação Polícia Federal/CNJ, farmacinha pediátrica de bordo e conforto no voo",
    icon: Baby,
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    items: [
      "Certidão/RG original (Nacional) ou Passaporte + Autorização de Viagem PF/CNJ (se com apenas 1 genitor)",
      "Farmacinha de bordo com receita do pediatra: antitérmico, soro fisiológico, termômetro, antialérgico e curativos",
      "3 Mudas completas de roupa infantil na mochila de mão + 1 camiseta extra para os pais",
      "Garrafinha com canudo / mamadeira / chupeta para aliviar pressão no ouvido na decolagem e pouso",
      "Fraldas (1 para cada 2 horas de jornada total) + lenços umedecidos + trocador portátil",
      "Lanches secos favoritos, papinhas e livro de adesivos/colorir para o avião",
      "Carrinho de bebê dobrável etiquetado para entrega na porta da aeronave",
    ],
  },
  {
    id: "pack-inverno-neve",
    title: "Checklist Serras, Frio Intenso e Neve (Sistema de 3 Camadas)",
    subtitle: "Ideal para Gramado, Bariloche, Santiago, Ushuaia e Inverno Europeu",
    icon: Snowflake,
    color: "text-indigo-600 bg-indigo-50 border-indigo-200",
    items: [
      "1ª Camada (Térmica): 2 a 3 conjuntos de segunda pele térmica (blusa + calça) que retêm o calor corporal",
      "2ª Camada (Aquecimento): 2 blusas de Fleece ou suéteres de lã merino",
      "3ª Camada (Proteção): 1 jaqueta corta-vento impermeável ou casaco de pluma/pena de ganso",
      "Acessórios térmicos: gorro forrado que cubra as orelhas, luvas touch-screen, cachecol/neck warmer e meias térmicas",
      "Calçado com solado tratorado antiderrapante e impermeável",
      "Hidratante labial (manteiga de cacau), hidratante facial intenso e soro nasal para o ar seco da calefação",
    ],
  },
];

export default function ChecklistsHubPage() {
  const handlePrint = (packTitle: string) => {
    trackConversionEvent("download_checklist", {
      category: "Checklist",
      label: packTitle,
    });
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 pb-24">
      <section className="bg-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            <CheckSquare className="w-4 h-4" />
            Central de Checklists Imprimíveis & Interativos
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Checklists de Viagem Prontos para Marcar ou Imprimir em PDF
          </h1>
          <p className="mt-3 text-stone-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Escolha entre o nosso checklist interativo dinâmico ou os pacotes prontos para mala de 10kg, viagem internacional, família com crianças e destinos de frio.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => handlePrint("all_checklists_pdf")}
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow-lg transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              Imprimir ou Salvar Página em PDF
            </button>
            <Link
              href="/bagagem"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl border border-white/20 transition-colors"
            >
              Ver Tabelas de Medidas da ANAC
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-14">
        {/* Widget Interativo Principal */}
        <section>
          <ChecklistWidget />
        </section>

        {/* Pacotes de Checklists Específicos */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600">
              Listas Especializadas Prontas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              Pacotes de Checklists por Tipo de Viagem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRINTABLE_PACKS.map((pack) => {
              const IconComponent = pack.icon;
              return (
                <div
                  key={pack.id}
                  className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-7 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center shrink-0 ${pack.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <button
                        type="button"
                        onClick={() => handlePrint(pack.id)}
                        className="text-xs font-bold text-stone-600 hover:text-orange-600 bg-stone-100 hover:bg-orange-50 px-3 py-1.5 rounded-xl inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        Imprimir PDF
                      </button>
                    </div>

                    <h3 className="text-lg font-extrabold text-stone-900">
                      {pack.title}
                    </h3>
                    <p className="text-xs text-stone-600 mt-1 mb-4">
                      {pack.subtitle}
                    </p>

                    <ul className="space-y-2.5 border-t border-stone-100 pt-4">
                      {pack.items.map((it, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 leading-relaxed">
                          <span className="w-4 h-4 rounded border border-stone-300 bg-stone-50 shrink-0 mt-0.5 inline-block" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
