"use client";

import { useState } from "react";
import { Luggage, Compass, Heart, Send, CheckCircle2, ShieldCheck, MapPin, Sparkles, Loader2, Mail, Copy, Check } from "lucide-react";

export default function SobrePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("malasprontas737@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://formsubmit.co/ajax/malasprontas737@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          Nome: formData.name,
          Email: formData.email,
          Mensagem: formData.message,
          _subject: `💬 Mensagem do Leitor: ${formData.name} (Malas Prontas Blog)`,
          _template: "table"
        })
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Não foi possível enviar agora. Envie diretamente para nosso e-mail oficial abaixo.");
      }
    } catch {
      setError("Não foi possível enviar agora. Envie diretamente para nosso e-mail oficial abaixo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold mb-4">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            Nossa Trajetória
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Sobre o Malas Prontas
          </h1>
          <p className="mt-3 text-stone-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Acreditamos que viajar transforma a nossa visão de mundo — e que isso pode ser feito de forma inteligente, acessível e autêntica.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-12">
        {/* Story Card */}
        <div className="bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-12 shadow-xs leading-relaxed text-stone-700 space-y-6">
          <div className="flex items-center gap-3 pb-6 border-b border-stone-100">
            <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-md shrink-0 border border-stone-100">
              <img src="/logo.png" alt="Logo Malas Prontas" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-stone-900">Como Tudo Começou</h2>
              <p className="text-xs text-stone-700">De viajantes independentes para outros viajantes</p>
            </div>
          </div>

          <p className="text-base sm:text-lg">
            O <strong>Malas Prontas</strong> nasceu de uma frustração comum: encontrar guias de viagem na internet cheios de jargões patrocinados, preços irreais e pouca sinceridade sobre o que realmente vale a pena visitar.
          </p>

          <p>
            Decidimos colocar a mochila nas costas e documentar a realidade: quanto custa o almoço, qual é a maré certa para ver os corais, quais trilhas exigem guia credenciado e como evitar as famosas pegadinhas de turista.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-100">
              <ShieldCheck className="w-6 h-6 text-orange-600 mb-2" />
              <h3 className="font-bold text-stone-900 text-sm">Dicas Transparentes</h3>
              <p className="text-xs text-stone-600 mt-1">Só indicamos passeios e restaurantes que realmente testamos e aprovamos.</p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
              <Sparkles className="w-6 h-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-stone-900 text-sm">Economia Inteligente</h3>
              <p className="text-xs text-stone-600 mt-1">Viajar com conforto sem pagar preços abusivos.</p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
              <Compass className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-bold text-stone-900 text-sm">Roteiros Prontos</h3>
              <p className="text-xs text-stone-600 mt-1">Planilhas e roteiros dia a dia desenhados para você só seguir.</p>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-12 shadow-xs">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Fale Conosco
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
              Mande Sua Dúvida ou Sugestão de Destino
            </h2>
            <p className="text-stone-700 text-sm mt-2">
              Está com dúvida sobre algum roteiro ou quer que a gente explore um destino novo? Envie uma mensagem e receba a resposta no seu e-mail!
            </p>

            {/* Direct Email Box */}
            <div className="mt-5 p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-stone-700 text-xs">
                <Mail className="w-4 h-4 text-orange-600 shrink-0" />
                <span>E-mail direto: <strong className="text-stone-900 font-mono">malasprontas737@gmail.com</strong></span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 bg-white hover:bg-stone-100 text-stone-800 text-xs font-semibold px-3 py-1.5 rounded-xl border border-stone-200 shadow-2xs transition-all shrink-0 cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-stone-500" />
                    <span>Copiar E-mail</span>
                  </>
                )}
              </button>
            </div>

            {submitted ? (
              <div className="mt-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3 animate-fade-in">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <p className="font-bold text-sm">Mensagem enviada com sucesso!</p>
                  <p className="text-xs mt-0.5 text-emerald-700">Obrigado por nos escrever! Sua mensagem já chegou na nossa caixa de entrada e responderemos em breve.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                {error && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Como prefere ser chamado?"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-hidden focus:border-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Seu E-mail (Para podermos responder)
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu.email@exemplo.com"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-hidden focus:border-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Mensagem ou Pergunta sobre Viagem
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escreva sua dúvida, sugestão de destino ou relato de viagem..."
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-hidden focus:border-orange-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-orange-600 hover:bg-orange-700 disabled:opacity-60 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md shadow-orange-600/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Enviando Mensagem...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
