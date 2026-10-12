import { Metadata } from "next";
import Link from "next/link";
import { Cookie, ShieldCheck, ArrowLeft, CheckCircle2, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Cookies e Privacidade Digital (LGPD) | Malas Prontas",
  description:
    "Saiba como o Malas Prontas utiliza cookies essenciais, analíticos (Google Analytics) e de atribuição de afiliados em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  alternates: {
    canonical: "https://malasprontas737.com.br/politica-de-cookies",
  },
};

export default function PoliticaDeCookiesPage() {
  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <section className="bg-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold mb-4">
            <Cookie className="w-4 h-4 text-orange-400" />
            Conformidade LGPD (Lei nº 13.709/2018)
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Política de Cookies
          </h1>
          <p className="mt-3 text-stone-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Transparência total sobre quais dados técnicos são armazenados no seu navegador e como gerenciar suas preferências.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-12 shadow-xs leading-relaxed text-stone-700 space-y-8">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4 text-xs text-stone-500">
            <span>Última atualização: 12 de Outubro de 2026</span>
            <span>Domínio: malasprontas737.com.br</span>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Info className="w-5 h-5 text-orange-600" />
              1. O Que São Cookies e Armazenamento Local?
            </h2>
            <p className="text-sm sm:text-base">
              Cookies e chaves de armazenamento local (<code>localStorage</code>) são pequenos arquivos de texto salvos no navegador do seu computador ou celular quando você visita um site. Eles permitem que o portal lembre das suas preferências — como os itens que você já marcou no nosso <strong>Checklist da Mala</strong> ou se você já fechou o aviso de privacidade.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              2. Categorias de Cookies que Utilizamos
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-stone-200 rounded-xl overflow-hidden text-xs sm:text-sm">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="p-3">Categoria</th>
                    <th className="p-3">Finalidade</th>
                    <th className="p-3">Exemplos no Site</th>
                    <th className="p-3">Duração</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  <tr>
                    <td className="p-3 font-bold">1. Estritamente Essenciais</td>
                    <td className="p-3">Salvar estado do checklist, preferências de consentimento LGPD e funcionamento das calculadoras.</td>
                    <td className="p-3"><code>mp_cookie_consent_v1</code></td>
                    <td className="p-3">Persistente local</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">2. Analíticos e Desempenho</td>
                    <td className="p-3">Medir de forma anônima e agregada quais roteiros e ferramentas são mais visitados para melhorar o conteúdo.</td>
                    <td className="p-3">Google Analytics 4 (<code>_ga</code>)</td>
                    <td className="p-3">Até 14 meses</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">3. Atribuição de Afiliados</td>
                    <td className="p-3">Identificar que você chegou ao site parceiro (ex: Booking/Stay22, Ekta, Airalo, Mercado Livre) através de uma indicação do Malas Prontas, sem custo extra para você.</td>
                    <td className="p-3">Stay22, Travelpayouts, Lomadee, Meli</td>
                    <td className="p-3">24h a 30 dias (no domínio do parceiro)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">4. Publicidade Contextual (Quando Ativo)</td>
                    <td className="p-3">Exibir anúncios informativos não intrusivos via Google AdSense apenas em guias informativos selecionados.</td>
                    <td className="p-3">Google AdSense</td>
                    <td className="p-3">Conforme política do Google</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-orange-600" />
              3. Como Gerenciar ou Desativar Cookies
            </h2>
            <p className="text-sm sm:text-base">
              Você pode optar por <strong>&quot;Apenas Essenciais&quot;</strong> diretamente no nosso banner de consentimento no rodapé da tela ou apagar os cookies a qualquer momento nas configurações do seu navegador (Chrome, Safari, Edge ou Firefox). Caso tenha dúvidas sobre seus direitos previstos no Art. 18 da LGPD, entre em contato pelo e-mail{" "}
              <a href="mailto:malasprontas737@gmail.com" className="text-orange-600 font-bold underline">
                malasprontas737@gmail.com
              </a>
              .
            </p>
          </section>

          <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/politica-de-privacidade"
              className="text-xs sm:text-sm font-bold text-orange-600 hover:underline"
            >
              Ver Política de Privacidade Completa →
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-stone-600 hover:text-orange-600 text-xs sm:text-sm font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Início
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
