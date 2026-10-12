import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Camera, CheckCircle2, ShieldCheck, Heart, FileCheck, ArrowLeft, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Transparência Editorial e Ética | Malas Prontas",
  description:
    "Diretrizes editoriais do blog Malas Prontas: compromisso com informações verificadas, fotografias 100% autênticas e independência editorial.",
  alternates: {
    canonical: "https://malasprontas737.com.br/transparencia-editorial",
  },
};

export default function TransparenciaEditorialPage() {
  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Nossos Princípios
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Transparência Editorial & Ética
          </h1>
          <p className="mt-3 text-stone-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Como pesquisamos, produzimos e validamos cada roteiro e fotografia publicada no <strong>Malas Prontas</strong>.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-12 shadow-xs leading-relaxed text-stone-700 space-y-8">
          
          {/* Missão */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Heart className="w-6 h-6 text-rose-500" />
              1. Nosso Compromisso com o Leitor
            </h2>
            <p>
              O <strong>Malas Prontas</strong> tem como missão primordial ajudar pessoas reais a viajarem melhor, com mais segurança, economia inteligente e imersão cultural autêntica. Cada artigo publicado passa por uma rigorosa curadoria técnica para garantir que o leitor encontre valor prático imediato e livre de armadilhas.
            </p>
          </div>

          {/* Política de Imagens Reais */}
          <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-4">
            <h2 className="text-xl font-bold text-emerald-950 flex items-center gap-2">
              <Camera className="w-6 h-6 text-emerald-700" />
              2. Política Inegociável de Imagens Autênticas e Reais
            </h2>
            <p className="text-sm text-emerald-900">
              A confiança do leitor é o bem mais valioso do nosso blog. Por isso, adotamos uma regra sagrada de integridade geográfica:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-emerald-900">
              <li>
                <strong>Fidelidade Visual 100%:</strong> Todas as fotos utilizadas em nossos artigos representam exatamente os locais, atrativos, templos, praias ou montanhas descritos no texto.
              </li>
              <li>
                <strong>Tolerância Zero a Fotos Genéricas Enganosas:</strong> Jamais usamos fotos de um local fingindo ser de outro (por exemplo, exibir montanhas da Europa em posts sobre o Brasil). O leitor sempre verá o cenário autêntico do destino pesquisado.
              </li>
              <li>
                <strong>Créditos e Direitos:</strong> Nossas fotos são autorais ou licenciadas por fotógrafos profissionais através de acervos verificados com identificação geográfica confirmada.
              </li>
            </ul>
          </div>

          {/* Checagem de Fatos e Custos Reais */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
              <FileCheck className="w-6 h-6 text-orange-600" />
              3. Checagem de Fatos, Custos e Logística
            </h2>
            <p>
              Para evitar frustrações durante o planejamento da sua viagem, nossa equipe verifica minuciosamente:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <h4 className="font-bold text-sm text-stone-900">Documentação e Saúde</h4>
                <p className="text-xs text-stone-600 mt-1">Exigências reais de visto, passaporte, taxas ambientais e certificados internacionais de vacinação (CIVP).</p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <h4 className="font-bold text-sm text-stone-900">Climatologia e Marés</h4>
                <p className="text-xs text-stone-600 mt-1">Indicação da estação ideal para viajar, evitando épocas de monções, chuvas torrenciais ou mar revolto.</p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <h4 className="font-bold text-sm text-stone-900">Estimativas de Orçamento</h4>
                <p className="text-xs text-stone-600 mt-1">Cálculos baseados no poder de compra real, alimentação típica, diárias de pousadas e taxas de entrada em parques.</p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <h4 className="font-bold text-sm text-stone-900">Atualizações Recorrentes</h4>
                <p className="text-xs text-stone-600 mt-1">Revisamos periodicamente nossos guias para atualizar preços, links oficiais e condições de estradas.</p>
              </div>
            </div>
          </div>

          {/* Independência Editorial */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-orange-600" />
              4. Independência Editorial e Relação com Afiliados
            </h2>
            <p>
              Nossa opinião não está à venda. Embora tenhamos parcerias com plataformas confiáveis de passagens, seguros, aluguel de carros e hotéis, <strong>a seleção de destinos e as recomendações de roteiros são 100% independentes</strong>. Só indicamos aquilo que nós mesmos utilizamos e recomendamos para amigos e familiares.
            </p>
          </div>

          {/* Contato Editorial */}
          <div className="pt-6 border-t border-stone-200 text-center">
            <p className="text-sm text-stone-600 mb-4">
              Encontrou alguma informação que precisa de atualização? Envie sua sugestão para nossa equipe!
            </p>
            <a
              href="mailto:malasprontas737@gmail.com"
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-orange-600 text-white font-bold text-xs px-6 py-3.5 rounded-xl transition-colors"
            >
              <Mail className="w-4 h-4" />
              Fale com a Redação: malasprontas737@gmail.com
            </a>
          </div>

          {/* Voltar */}
          <div className="pt-4 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-stone-600 hover:text-orange-600 text-sm font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para a Página Inicial
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
