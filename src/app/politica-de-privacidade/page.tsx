import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, Cookie, FileText, Mail, ArrowLeft, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade | Malas Prontas",
  description:
    "Política de Privacidade e Proteção de Dados do blog Malas Prontas. Informações sobre uso de cookies, LGPD e direitos do usuário.",
  alternates: {
    canonical: "https://malasprontas737.com.br/politica-de-privacidade",
  },
};

export default function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Transparência & Segurança
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-stone-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Seu direito à privacidade e o tratamento transparente de dados são prioridades fundamentais no <strong>Malas Prontas</strong>.
          </p>
          <p className="mt-2 text-xs text-stone-400 font-mono">
            Última atualização: Setembro de 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-12 shadow-xs leading-relaxed text-stone-700 space-y-8">
          
          {/* Introdução */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Lock className="w-6 h-6 text-orange-600" />
              1. Informações Gerais
            </h2>
            <p>
              Esta Política de Privacidade descreve como o site <strong>Malas Prontas</strong> (acessível através do domínio <code>https://malasprontas737.com.br</code>) coleta, armazena, utiliza e protege as informações pessoais de seus visitantes e usuários, em total conformidade com a <strong>Lei Geral de Proteção de Dados Pessoais (LGPD – Lei nº 13.709/2018)</strong> e demais regulamentações internacionais de proteção de dados (como o GDPR).
            </p>
            <p>
              Ao navegar no site e utilizar nossas ferramentas (como o Simulador de Custos, Checklist de Mala e Gerador de Roteiro), você concorda com as práticas descritas nesta política.
            </p>
          </div>

          {/* Cookies e Tecnologias de Navegação */}
          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-4">
            <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
              <Cookie className="w-6 h-6 text-orange-600" />
              2. Cookies e Tecnologias de Navegação
            </h2>
            <p className="text-sm text-stone-700">
              Utilizamos cookies estritamente necessários e analíticos para garantir o correto funcionamento do site, memorizar preferências de navegação e aprimorar a experiência do usuário.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-stone-700">
              <li>
                <strong>Cookies Funcionais:</strong> Permitem salvar o estado de ferramentas como o Checklist de Viagem e o Simulador de Custos diretamente no seu navegador.
              </li>
              <li>
                <strong>Cookies Analíticos:</strong> Auxiliam a compreender como os visitantes interagem com as páginas, identificando conteúdos mais acessados e possíveis melhorias de usabilidade.
              </li>
              <li>
                <strong>Gerenciamento de Cookies:</strong> Você pode, a qualquer momento, configurar seu navegador para bloquear ou alertar sobre o uso de cookies.
              </li>
            </ul>
          </div>

          {/* Coleta de Dados e Analytics */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Eye className="w-6 h-6 text-orange-600" />
              3. Quais Dados Coletamos e Para Qual Finalidade
            </h2>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <h3 className="font-bold text-stone-900 text-sm">A. Dados de Navegação e Métricas (Google Analytics 4)</h3>
                <p className="text-xs text-stone-600 mt-1">
                  Coletamos dados anônimos como endereço IP anonimizado, tipo de navegador, sistema operacional, páginas visitadas, tempo de permanência e origem do tráfego. Esses dados são utilizados exclusivamente para fins estatísticos e melhoria contínua da usabilidade do site.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <h3 className="font-bold text-stone-900 text-sm">B. Dados Fornecidos Voluntariamente (Contato e Newsletter)</h3>
                <p className="text-xs text-stone-600 mt-1">
                  Ao enviar uma mensagem pelo formulário de contato ou assinar nossa newsletter, coletamos seu nome e e-mail. Essas informações são utilizadas estritamente para responder à sua solicitação ou enviar novidades solicitadas. Jamais comercializamos, alugamos ou compartilhamos seus dados com terceiros para fins de spam.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <h3 className="font-bold text-stone-900 text-sm">C. Ferramentas Interativas (Checklist e Simulador de Custos)</h3>
                <p className="text-xs text-stone-600 mt-1">
                  As seleções feitas no Checklist e os valores digitados no Simulador de Custos são processados localmente no seu próprio navegador (LocalStorage / memória de sessão) e não são armazenados em nossos servidores.
                </p>
              </div>
            </div>
          </div>

          {/* Programas de Afiliados */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
              <FileText className="w-6 h-6 text-orange-600" />
              4. Divulgação de Programas de Afiliados
            </h2>
            <p>
              O <strong>Malas Prontas</strong> participa de programas de afiliados confiáveis (como Stay22, Travelpayouts, Vai de Promo, FlipMilhas, Airalo, AirHelp, EconomyBookings e Ekta). 
            </p>
            <p>
              Isso significa que, ao clicar em determinados links e realizar reservas de passagens, hotéis, aluguel de carros, seguro viagem ou chips internacionais, podemos receber uma pequena comissão sem <strong>nenhum custo adicional</strong> para você. Os cookies de afiliados servem unicamente para identificar a origem da recomendação para a plataforma parceira.
            </p>
          </div>

          {/* Direitos do Titular (LGPD) */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              5. Seus Direitos como Titular dos Dados (LGPD)
            </h2>
            <p>
              Em conformidade com a LGPD, você tem total direito de:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>Confirmar a existência de tratamento de dados pessoais;</li>
              <li>Acessar os seus dados pessoais sob nossa custódia;</li>
              <li>Solicitar a correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Solicitar a eliminação dos dados pessoais tratados com o seu consentimento;</li>
              <li>Revogar seu consentimento a qualquer momento de forma gratuita e facilitada.</li>
            </ul>
          </div>

          {/* Contato do Encarregado */}
          <div className="pt-6 border-t border-stone-200">
            <div className="p-6 rounded-2xl bg-stone-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold">Dúvidas sobre sua Privacidade?</h3>
                <p className="text-xs text-stone-400 mt-1">
                  Entre em contato diretamente com nossa equipe editorial e encarregado de dados.
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
