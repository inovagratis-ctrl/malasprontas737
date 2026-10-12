import { Metadata } from "next";
import Link from "next/link";
import { FileText, ShieldAlert, CheckCircle, Scale, AlertCircle, ArrowLeft, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso | Malas Prontas",
  description:
    "Termos e Condições de Uso do blog Malas Prontas. Regras de utilização de conteúdos, direitos autorais e isenções de responsabilidade.",
  alternates: {
    canonical: "https://malasprontas737.com.br/termos-de-uso",
  },
};

export default function TermosDeUsoPage() {
  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold mb-4">
            <Scale className="w-4 h-4 text-orange-400" />
            Condições Gerais
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Termos de Uso
          </h1>
          <p className="mt-3 text-stone-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Conheça as regras e diretrizes que regem o acesso e a utilização dos conteúdos e serviços do <strong>Malas Prontas</strong>.
          </p>
          <p className="mt-2 text-xs text-stone-400 font-mono">
            Última atualização: Setembro de 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-12 shadow-xs leading-relaxed text-stone-700 space-y-8">
          
          {/* Aceitação dos Termos */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
              <FileText className="w-6 h-6 text-orange-600" />
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar, navegar ou utilizar qualquer página, roteiro, guia ou ferramenta interativa disponível no site <strong>Malas Prontas</strong> (<code>https://malasprontas737.com.br</code>), você declara ter lido, compreendido e concordado expressamente com todos os termos e condições aqui estabelecidos.
            </p>
            <p>
              Caso não concorde com qualquer disposição destes Termos de Uso, solicitamos que não continue navegando no site.
            </p>
          </div>

          {/* Propriedade Intelectual */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
              2. Direitos Autorais e Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo publicado no blog — incluindo artigos, roteiros, análises, checklists, textos, logotipos, marcas, layout, códigos-fonte e materiais gráficos — é de propriedade exclusiva do <strong>Malas Prontas</strong> ou de seus respectivos autores e colaboradores licenciados, sendo protegido pela legislação brasileira de direitos autorais (Lei nº 9.610/1998) e tratados internacionais.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong>Uso Pessoal Permitido:</strong> É concedida a você uma licença limitada para visualizar, imprimir ou salvar páginas exclusivamente para uso pessoal, não comercial e planejamento de suas próprias viagens.
              </li>
              <li>
                <strong>Proibição de Cópia / Plágio:</strong> É estritamente proibida a reprodução, cópia integral ou parcial, republicação, distribuição, venda ou modificação de qualquer conteúdo sem a prévia e expressa autorização por escrito dos editores do Malas Prontas.
              </li>
              <li>
                <strong>Citações com Crédito:</strong> Pequenos trechos podem ser citados em outros blogs ou veículos jornalísticos desde que acompanhados de link direto e clicável apontando para a fonte original no <code>malasprontas737.com.br</code>.
              </li>
            </ul>
          </div>

          {/* Isenção de Responsabilidade sobre Viagens */}
          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
            <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-orange-600" />
              3. Natureza Informativa e Isenção de Responsabilidade
            </h2>
            <p className="text-sm">
              O <strong>Malas Prontas</strong> é um portal editorial de turismo independente. Nossos artigos, estimativas de custos, itinerários e dicas práticas têm caráter estritamente consultivo e informativo, baseados em experiências reais e pesquisas aprofundadas no momento da publicação.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-stone-600">
              <li>
                <strong>Flutuação de Preços e Horários:</strong> Tarifas aéreas, preços de ingressos, tábuas de marés, exigências de vacinas ou vistos, condições climáticas e funcionamento de atrativos turísticos podem sofrer alterações a qualquer momento pelas companhias aéreas, operadoras locais e autoridades governamentais.
              </li>
              <li>
                <strong>Dever de Checagem do Viajante:</strong> Recomendamos sempre confirmar horários e valores oficiais antes de viajar. O blog não se responsabiliza por decisões tomadas com base em informações que tenham sofrido mudanças posteriores à data de publicação.
              </li>
              <li>
                <strong>Serviços de Terceiros:</strong> O blog não é agência de turismo, companhia aérea ou hotelaria. Quaisquer contratos de compra de passagens, seguros, hospedagens ou passeios são celebrados diretamente entre o usuário e as respectivas empresas parceiras contratadas.
              </li>
            </ul>
          </div>

          {/* Uso das Ferramentas Interativas */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Scale className="w-6 h-6 text-orange-600" />
              4. Ferramentas Interativas e Gratuidade
            </h2>
            <p>
              Disponibilizamos gratuitamente recursos como o <strong>Simulador de Custos de Viagem</strong>, o <strong>Checklist Interativo de Mala</strong> e o <strong>Gerador de Roteiros</strong>. Essas ferramentas são fornecidas &ldquo;como estão&rdquo;, destinando-se a auxiliar o planejamento do viajante sem garantir orçamentos exatos ou desfechos contratuais.
            </p>
          </div>

          {/* Alterações nos Termos */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
              <ShieldAlert className="w-6 h-6 text-orange-600" />
              5. Modificações Destes Termos
            </h2>
            <p>
              Reservamo-nos o direito de atualizar ou modificar estes Termos de Uso periodicamente para refletir mudanças legislativas, avanços tecnológicos ou atualizações em nossos serviços. Recomendamos a consulta regular desta página.
            </p>
          </div>

          {/* Contato Jurídico / Editorial */}
          <div className="pt-6 border-t border-stone-200">
            <div className="p-6 rounded-2xl bg-stone-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold">Dúvidas sobre os Termos?</h3>
                <p className="text-xs text-stone-400 mt-1">
                  Entre em contato com nossa equipe editorial para dúvidas ou solicitações de direitos.
                </p>
              </div>
              <a
                href="mailto:malasprontas737@gmail.com"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs px-5 py-3 rounded-xl transition-colors shrink-0"
              >
                <Mail className="w-4 h-4" />
                malasprontas737@gmail.com
              </a>
            </div>
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
