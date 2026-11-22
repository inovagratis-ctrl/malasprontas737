import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { POSTS } from "@/data/posts";
import PostGalleryLightbox from "@/components/PostGalleryLightbox";
import AffiliateBox, { AffiliateDisclosureBanner } from "@/components/AffiliateBox";
import AdSlot from "@/components/AdSlot";
import {
  Calendar,
  Clock,
  MapPin,
  DollarSign,
  ArrowLeft,
  CheckCircle,
  Sun,
  Sparkles,
  Luggage,
  ExternalLink,
  ListChecks,
  HelpCircle,
  BookOpen,
  ShieldCheck,
  Calculator
} from "lucide-react";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Guia não encontrado | Malas Prontas 737",
    };
  }

  const url = `https://malasprontas737.com.br/post/${post.slug}`;
  const toAbsoluteUrl = (imgUrl: string) =>
    imgUrl.startsWith("http") ? imgUrl : `https://malasprontas737.com.br${imgUrl.startsWith("/") ? "" : "/"}${imgUrl}`;

  const coverAbsolute = toAbsoluteUrl(post.coverImage);
  const galleryAbsolutes = (post.gallery || []).map((g) => toAbsoluteUrl(g.url));
  const allImages = [coverAbsolute, ...galleryAbsolutes];

  return {
    title: `${post.title} | Malas Prontas 737`,
    description: post.subtitle,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${post.title} | Malas Prontas 737`,
      description: post.subtitle,
      url: url,
      siteName: "Malas Prontas 737",
      locale: "pt_BR",
      type: "article",
      publishedTime: "2026-10-01T00:00:00.000Z",
      authors: [post.author.name],
      images: allImages.map((img) => ({
        url: img,
        width: 1200,
        height: 630,
        alt: post.title,
      })),
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const toAbsoluteUrl = (imgUrl: string) =>
    imgUrl.startsWith("http") ? imgUrl : `https://malasprontas737.com.br${imgUrl.startsWith("/") ? "" : "/"}${imgUrl}`;

  const coverAbsolute = toAbsoluteUrl(post.coverImage);
  const galleryAbsolutes = (post.gallery || []).map((g) => toAbsoluteUrl(g.url));
  const allImages = [coverAbsolute, ...galleryAbsolutes];

  const faqItems =
    post.faq && post.faq.length > 0
      ? post.faq
      : [
          {
            question: `Qual é a melhor época para planejar ${post.destination}?`,
            answer: `${post.bestSeason}. Recomendamos reservar passagens e hospedagem com antecedência e conferir as variações sazonais.`
          },
          {
            question: `Qual é o orçamento médio e quantos dias ficar em ${post.destination}?`,
            answer: `O tempo ideal sugerido é de ${post.recommendedDays}, com perfil de custo ${post.budgetLevel} (${post.budgetDescription}). Valores verificados em Outubro/2026 e sujeitos a variação.`
          }
        ];

  const tocItems =
    post.toc && post.toc.length > 0
      ? post.toc
      : [
          { id: "ficha-rapida", title: "1. Ficha Rápida, Custos e Melhor Época" },
          { id: "destaques-principais", title: "2. O Que Não Pode Ficar de Fora" },
          { id: "guia-completo", title: "3. Guia Prático e Análise Detalhada" },
          { id: "roteiro-dia-a-dia", title: "4. Passo a Passo / Roteiro Dia a Dia" },
          { id: "dicas-essenciais", title: "5. Dicas Essenciais e Perguntas Frequentes (FAQ)" }
        ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.subtitle,
    "image": allImages,
    "datePublished": "2026-09-03T00:00:00+00:00",
    "dateModified": "2026-10-12T00:00:00+00:00",
    "inLanguage": "pt-BR",
    "articleSection": post.category,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "description": post.author.bio
    },
    "publisher": {
      "@type": "Organization",
      "name": "Malas Prontas 737",
      "url": "https://malasprontas737.com.br"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://malasprontas737.com.br/post/${post.slug}`
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://malasprontas737.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": post.hubSlug ? `Guia: ${post.hubSlug}` : "Destinos",
        "item": post.hubSlug
          ? `https://malasprontas737.com.br/${post.hubSlug}`
          : "https://malasprontas737.com.br/destinos"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.destination,
        "item": `https://malasprontas737.com.br/post/${post.slug}`
      }
    ]
  };

  const relatedPosts = POSTS.filter(
    (p) => p.slug !== post.slug && (p.category === post.category || p.region === post.region)
  ).slice(0, 2);

  return (
    <article className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      {/* POST HERO (100% LIGHT MODE EDITORIAL) */}
      <header className="bg-white border-b border-slate-200 py-10 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-blue-600 flex items-center gap-1 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              Início
            </Link>
            <span>/</span>
            <Link
              href={post.hubSlug ? `/${post.hubSlug}` : "/destinos"}
              className="hover:text-blue-600 transition-colors"
            >
              {post.isPracticalGuide ? "Guias de Planejamento" : "Destinos"}
            </Link>
            <span>/</span>
            <span className="text-blue-600 font-semibold truncate max-w-[220px]">
              {post.destination}
            </span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-blue-50 text-blue-800 border border-blue-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.isPracticalGuide ? "Guia Prático Oficial" : post.category}
            </span>
            <span className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              {post.destination}, {post.stateCountry}
            </span>
            <span className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
              Atualizado: Outubro/2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-base sm:text-xl text-slate-600 leading-relaxed">
            {post.subtitle}
          </p>

          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border border-slate-200"
              />
              <div>
                <p className="font-bold text-slate-900">{post.author.name}</p>
                <p className="text-xs text-slate-500">{post.author.bio}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-slate-400" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-slate-400" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT BODY */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* FICHA TÉCNICA */}
        <div
          id="ficha-rapida"
          className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs mb-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              Ficha Rápida & Referência de Custos
            </h2>
            <span className="text-[11px] text-slate-500 font-medium">
              Consultado em Outubro de 2026 • Tarifas sujeitas a variação
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
              <span className="text-xs font-semibold text-slate-600 flex items-center gap-1 mb-1">
                <DollarSign className="w-4 h-4 text-emerald-600" />
                Orçamento Médio:
              </span>
              <p className="text-sm font-bold text-slate-900">{post.budgetLevel} — {post.budgetDescription}</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
              <span className="text-xs font-semibold text-slate-600 flex items-center gap-1 mb-1">
                <Sun className="w-4 h-4 text-amber-500" />
                Melhor Época / Janela:
              </span>
              <p className="text-sm font-bold text-slate-900">{post.bestSeason}</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
              <span className="text-xs font-semibold text-slate-600 flex items-center gap-1 mb-1">
                <Clock className="w-4 h-4 text-blue-600" />
                Tempo Sugerido:
              </span>
              <p className="text-sm font-bold text-slate-900">{post.recommendedDays}</p>
            </div>
          </div>
        </div>

        <AffiliateDisclosureBanner variant="compact" />

        {/* RESUMO EXECUTIVO DIRETO & TOC */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-8">
          <div className="md:col-span-7 bg-blue-50/60 border border-blue-200 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-blue-800 mb-2">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                Resumo Direto (O Que Você Precisa Saber)
              </span>
              <p className="text-sm text-slate-800 leading-relaxed font-medium">
                {post.executiveSummary ||
                  `Planejar sua viagem para ${post.destination} (${post.stateCountry}) exige atenção à melhor época (${post.bestSeason}), reserva antecipada de hospedagem bem localizada e controle do orçamento diário estimado em ${post.budgetDescription}.`}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-blue-200/60 flex flex-wrap items-center gap-3 text-xs font-bold">
              <Link
                href="/calculadora-viagem"
                className="text-blue-700 hover:text-blue-900 inline-flex items-center gap-1 underline"
              >
                <Calculator className="w-3.5 h-3.5" />
                Simular custo desta viagem
              </Link>
              <span>•</span>
              <Link
                href="/checklists"
                className="text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1 underline"
              >
                <Luggage className="w-3.5 h-3.5" />
                Abrir checklist da mala
              </Link>
            </div>
          </div>

          <nav
            aria-label="Índice do artigo"
            className="md:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs"
          >
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-1.5">
              <ListChecks className="w-4 h-4 text-blue-600" />
              Índice Rápido deste Guia (TOC)
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-slate-700 hover:text-blue-600 font-medium flex items-start gap-2 transition-colors"
                  >
                    <span className="text-blue-600 font-bold">→</span>
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* HIGHLIGHTS */}
        <section
          id="destaques-principais"
          className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-10"
        >
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            Pontos Principais deste Guia:
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {post.highlights.map((h, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>

        <PostGalleryLightbox
          coverImage={post.coverImage}
          destination={post.destination}
          stateCountry={post.stateCountry}
          postTitle={post.title}
          gallery={post.gallery}
        />

        {/* TEXT CONTENT */}
        <div
          id="guia-completo"
          className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-2xs space-y-6 text-slate-800 text-base sm:text-lg leading-relaxed mb-10 prose prose-slate max-w-none prose-headings:font-extrabold prose-a:text-blue-600 prose-a:font-bold prose-table:w-full prose-table:text-sm prose-th:bg-slate-100 prose-th:p-3 prose-td:p-3 prose-td:border-b prose-td:border-slate-100"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b border-slate-100 pb-4">
            {post.isPracticalGuide
              ? "Guia Prático, Custos e Regras Oficiais"
              : "Planejamento Completo e Análise Prática"}
          </h2>
          {post.content.map((paragraph, index) => (
            <div
              key={index}
              className="text-slate-700 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>

        <AdSlot slotId="post-informational-mid" pageCategory="guide" />

        {/* ROTEIRO DIA A DIA */}
        <section id="roteiro-dia-a-dia" className="mb-12">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Passo a Passo Prático
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {post.isPracticalGuide ? "Cronograma de Execução Passo a Passo" : "Roteiro Detalhado Dia a Dia"}
            </h2>
          </div>

          <div className="space-y-5">
            {post.itinerary.map((item) => (
              <div
                key={item.day}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-2xs hover:border-blue-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                    {post.isPracticalGuide ? `E${item.day}` : `D${item.day}`}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {post.isPracticalGuide ? item.title : `Dia ${item.day}: ${item.title}`}
                  </h3>
                </div>

                <ul className="space-y-2.5 pl-3 border-l-2 border-blue-100 ml-4">
                  {item.activities.map((act, aIdx) => (
                    <li key={aIdx} className="text-sm text-slate-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* BLOCO ÚNICO E ÉTICO DE RECOMENDAÇÃO COM ALTERNATIVA GRATUITA */}
        <AffiliateBox
          partnerId={
            post.affiliatePartnerId ||
            (post.region === "Internacional" ? "ekta-seguro" : "booking-stay22")
          }
          campaign={post.slug}
        />

        {/* DICAS ESSENCIAIS */}
        <section
          id="dicas-essenciais"
          className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 sm:p-8 mb-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Dicas Essenciais para {post.destination}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Informações práticas para evitar imprevistos e economizar
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {post.essentialTips.map((tip, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 border border-amber-200/80">
                <h3 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  {tip.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FONTES OFICIAIS CONSULTADAS */}
        {post.officialSources && post.officialSources.length > 0 && (
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-10">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              Fontes Oficiais e Órgãos Reguladores Consultados
            </h2>
            <p className="text-xs text-slate-600 mb-4">
              Para garantir precisão técnica, este guia baseia-se nas normas oficiais vigentes dos seguintes órgãos:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {post.officialSources.map((src, idx) => (
                <a
                  key={idx}
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-200 hover:border-emerald-300 transition-all group block"
                >
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 flex items-center justify-between gap-2">
                    <span>{src.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 text-slate-400 group-hover:text-emerald-600" />
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {src.description}
                  </p>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* PERGUNTAS FREQUENTES */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 mb-10">
          <div className="flex items-center gap-2.5 mb-6">
            <HelpCircle className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Perguntas Frequentes sobre {post.destination}
            </h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200/80"
              >
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                  {item.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <AffiliateDisclosureBanner variant="bottom" />

        {/* RELATED POSTS */}
        {relatedPosts.length > 0 && (
          <section className="pt-8 border-t border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Continue Planejando
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Outros Guias e Destinos Recomendados
                </h2>
              </div>
              <Link
                href="/destinos"
                className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
              >
                Ver todos
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((relPost) => (
                <Link
                  key={relPost.id}
                  href={`/post/${relPost.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img
                      src={relPost.coverImage}
                      alt={relPost.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-xs text-slate-500 font-medium mb-1.5">
                        <MapPin className="w-3.5 h-3.5 text-blue-600" />
                        {relPost.destination}, {relPost.stateCountry}
                      </div>
                      <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                        {relPost.title}
                      </h3>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                      <span>{relPost.readTime}</span>
                      <span className="text-blue-600 font-bold">
                        Ler guia →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
