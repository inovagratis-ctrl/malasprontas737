"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Send, CheckCircle2, Clock, MapPin, Copy, Check, ArrowLeft, Loader2, Sparkles } from "lucide-react";

export default function ContatoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

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
          Assunto: formData.subject || "Contato pelo Site",
          Mensagem: formData.message,
          _subject: `💬 Mensagem do Leitor: ${formData.name} - ${formData.subject || "Contato"} (Malas Prontas)`,
          _template: "table"
        })
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setError("Não foi possível enviar pelo formulário agora. Envie diretamente para nosso e-mail oficial abaixo.");
      }
    } catch {
      setError("Não foi possível enviar pelo formulário agora. Envie diretamente para nosso e-mail oficial abaixo.");
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
            <Mail className="w-4 h-4 text-orange-400" />
            Canal de Atendimento
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Fale Conosco
          </h1>
          <p className="mt-3 text-stone-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Dúvidas sobre roteiros, parcerias, sugestões de destinos ou atendimento ao leitor.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Info Side Card */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white rounded-3xl border border-stone-200/90 p-6 shadow-xs space-y-5">
              <h3 className="font-bold text-stone-900 text-base">Canais Oficiais</h3>
              
              <div className="space-y-4 text-xs text-stone-600">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block">E-mail Editorial & Parcerias</strong>
                    <span className="font-mono text-[11px] text-stone-700">malasprontas737@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block">Tempo Médio de Resposta</strong>
                    <span>De 24 a 48 horas úteis</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block">Canal no YouTube</strong>
                    <a href="https://www.youtube.com/@canalmalasprontas" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
                      @canalmalasprontas
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold py-2.5 rounded-xl transition-all cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">E-mail Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-500" />
                      <span>Copiar E-mail</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="md:col-span-2 bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-10 shadow-xs">
            <h2 className="text-2xl font-bold text-stone-900">Envie uma Mensagem</h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1 mb-6">
              Preencha os campos abaixo e entraremos em contato diretamente no seu e-mail.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <p className="font-bold text-sm">Mensagem enviada com sucesso!</p>
                  <p className="text-xs mt-0.5 text-emerald-700">Agradecemos pelo contato. Responderemos o mais breve possível.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-hidden focus:border-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    E-mail para Retorno *
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
                    Assunto
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Dúvida de roteiro, parceria ou sugestão..."
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-hidden focus:border-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Mensagem *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escreva sua dúvida, proposta ou comentário..."
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

        {/* Voltar */}
        <div className="pt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-stone-600 hover:text-orange-600 text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a Página Inicial
          </Link>
        </div>
      </main>
    </div>
  );
}
