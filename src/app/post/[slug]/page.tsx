import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { POSTS } from "@/data/posts";
import Stay22Widget from "@/components/Stay22Widget";
import TravelGearShowcase from "@/components/TravelGearShowcase";
import AirHelpBanner from "@/components/AirHelpBanner";
import BeachParkBanner from "@/components/BeachParkBanner";
import PostGalleryLightbox from "@/components/PostGalleryLightbox";
import AffiliateBox, { AffiliateDisclosureBanner } from "@/components/AffiliateBox";
import AdSlot from "@/components/AdSlot";
import { AFFILIATES } from "@/data/affiliates";
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
  Ticket,
  Plane,
  Music,
  Train,
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
      title: "Roteiro não encontrado | Malas Prontas",
    };
  }

  const url = `https://malasprontas737.com.br/post/${post.slug}`;
  const toAbsoluteUrl = (imgUrl: string) =>
    imgUrl.startsWith("http") ? imgUrl : `https://malasprontas737.com.br${imgUrl.startsWith("/") ? "" : "/"}${imgUrl}`;

  const coverAbsolute = toAbsoluteUrl(post.coverImage);
  const galleryAbsolutes = (post.gallery || []).map((g) => toAbsoluteUrl(g.url));
  const allImages = [coverAbsolute, ...galleryAbsolutes];

  const keywordsList = [
    post.destination,
    post.stateCountry,
    post.region,
    post.category,
    `roteiro ${post.destination}`,
    `o que fazer em ${post.destination}`,
    `guia ${post.destination}`,
    `turismo ${post.destination}`,
    "dicas de viagem",
    "viagem economica",
    "roteiro completo",
    ...post.highlights.map((h) => h.split(",")[0].trim())
  ];

  return {
    title: `${post.title} | Malas Prontas`,
    description: post.subtitle,
    keywords: keywordsList,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${post.title} | Malas Prontas`,
      description: post.subtitle,
      url: url,
      siteName: "Malas Prontas",
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
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.subtitle,
      images: [coverAbsolute],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
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

  // Schema.org BlogPosting Structured Data
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
    "keywords": [post.destination, post.stateCountry, post.category, "Turismo", "Viagem"].join(", "),
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "description": post.author.bio
    },
    "publisher": {
      "@type": "Organization",
      "name": "Malas Prontas",
      "url": "https://malasprontas737.com.br",
      "logo": {
        "@type": "ImageObject",
        "url": "https://malasprontas737.com.br/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://malasprontas737.com.br/post/${post.slug}`
    }
  };

  // Schema.org Organization
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Malas Prontas",
    "url": "https://malasprontas737.com.br",
    "logo": "https://malasprontas737.com.br/logo.png",
    "sameAs": [
      "https://www.youtube.com/@canalmalasprontas"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "malasprontas737@gmail.com",
      "contactType": "customer support",
      "availableLanguage": "Portuguese"
    }
  };

  // Schema.org FAQPage (Genuine FAQ items, zero fake ratings)
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

  // Schema.org TouristDestination / Place
  const touristDestinationJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": post.destination,
    "description": post.subtitle,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": post.destination,
      "addressRegion": post.stateCountry,
      "addressCountry": post.region === "Internacional" ? "INT" : "BR"
    },
    "includesAttraction": post.highlights.map((h) => ({
      "@type": "TouristAttraction",
      "name": h
    }))
  };

  // Schema.org BreadcrumbList
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

  // Related posts
  const relatedPosts = POSTS.filter(
    (p) => p.slug !== post.slug && (p.category === post.category || p.region === post.region)
  ).slice(0, 2);

  return (
    <article className="min-h-screen bg-stone-50 pb-20">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristDestinationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      {/* POST HERO */}
      <header className="relative bg-stone-950 text-white pt-10 pb-20 lg:pt-16 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src={post.coverImage}
            alt={post.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-900/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-stone-400 mb-6">
            <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              Voltar ao Início
            </Link>
            <span>/</span>
            <Link
              href={post.hubSlug ? `/${post.hubSlug}` : "/destinos"}
              className="hover:text-white transition-colors"
            >
              {post.isPracticalGuide ? "Guias de Planejamento" : "Destinos"}
            </Link>
            <span>/</span>
            <span className="text-orange-400 font-medium truncate max-w-[200px]">
              {post.destination}
            </span>
          </nav>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.isPracticalGuide ? "Guia Prático Oficial" : post.category}
            </span>
            <span className="bg-white/10 backdrop-blur-md text-stone-200 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              {post.destination}, {post.stateCountry}
            </span>
            <span className="bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full">
              Atualizado: Outubro/2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-base sm:text-xl text-stone-300 leading-relaxed font-light">
            {post.subtitle}
          </p>

          {/* Author & Meta */}
          <div className="mt-8 pt-6 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-stone-400">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-orange-500"
              />
              <div>
                <p className="font-semibold text-white">{post.author.name}</p>
                <p className="text-xs text-stone-400">{post.author.bio}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-stone-500" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-stone-500" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT BODY */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        {/* FICHA TÉCNICA (QUICK STATS CARD) */}
        <div
          id="ficha-rapida"
          className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-xl shadow-stone-900/5 mb-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-orange-600 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              Ficha Rápida & Referência de Custos
            </h2>
            <span className="text-[11px] text-stone-500 font-medium">
              Consultado em Outubro de 2026 • Tarifas sujeitas a variação
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-100">
              <span className="text-xs font-semibold text-stone-700 flex items-center gap-1 mb-1">
                <DollarSign className="w-4 h-4 text-emerald-600" />
                Orçamento Médio:
              </span>
              <p className="text-base font-bold text-stone-900">{post.budgetLevel} — {post.budgetDescription}</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-100">
              <span className="text-xs font-semibold text-stone-700 flex items-center gap-1 mb-1">
                <Sun className="w-4 h-4 text-amber-500" />
                Melhor Época / Janela:
              </span>
              <p className="text-base font-bold text-stone-900">{post.bestSeason}</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-100">
              <span className="text-xs font-semibold text-stone-700 flex items-center gap-1 mb-1">
                <Clock className="w-4 h-4 text-orange-500" />
                Tempo Sugerido:
              </span>
              <p className="text-base font-bold text-stone-900">{post.recommendedDays}</p>
            </div>
          </div>
        </div>

        {/* AVISO DE TRANSPARÊNCIA DE AFILIADOS E VARIAÇÃO DE PREÇOS NO INÍCIO */}
        <AffiliateDisclosureBanner variant="compact" />

        {/* RESUMO EXECUTIVO DIRETO & ÍNDICE NAVEGÁVEL (TOC) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-8">
          <div className="md:col-span-7 bg-emerald-50/70 border border-emerald-200/80 rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Resumo Direto (O Que Você Precisa Saber)
              </span>
              <p className="text-sm text-stone-800 leading-relaxed font-medium">
                {post.executiveSummary ||
                  `Planejar sua viagem para ${post.destination} (${post.stateCountry}) exige atenção à melhor época (${post.bestSeason}), reserva antecipada de hospedagem bem localizada e controle do orçamento diário estimado em ${post.budgetDescription}.`}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-200/60 flex flex-wrap items-center gap-3 text-xs font-bold">
              <Link
                href="/calculadora-viagem"
                className="text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1 underline"
              >
                <Calculator className="w-3.5 h-3.5" />
                Simular custo desta viagem
              </Link>
              <span>•</span>
              <Link
                href="/checklist"
                className="text-orange-700 hover:text-orange-900 inline-flex items-center gap-1 underline"
              >
                <Luggage className="w-3.5 h-3.5" />
                Abrir checklist da mala
              </Link>
            </div>
          </div>

          <nav
            aria-label="Índice do artigo"
            className="md:col-span-5 bg-white border border-stone-200/90 rounded-3xl p-6 shadow-2xs"
          >
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-stone-800 mb-3 flex items-center gap-1.5">
              <ListChecks className="w-4 h-4 text-orange-600" />
              Índice Rápido deste Guia (TOC)
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-stone-700 hover:text-orange-600 font-medium flex items-start gap-2 transition-colors"
                  >
                    <span className="text-orange-500 font-bold">→</span>
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* HIGHLIGHTS / DESTAQUES */}
        <section
          id="destaques-principais"
          className="bg-orange-50/70 border border-orange-200/70 rounded-3xl p-6 sm:p-8 mb-12"
        >
          <h2 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-orange-600" />
            O Que Não Pode Ficar de Fora:
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {post.highlights.map((h, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-stone-800">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* FOTO PRINCIPAL & GALERIA INTERATIVA COM ZOOM E LIGHTBOX */}
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
          className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-10 shadow-xs space-y-6 text-stone-800 text-base sm:text-lg leading-relaxed mb-10 prose prose-stone max-w-none prose-headings:font-extrabold prose-a:text-orange-600 prose-a:font-bold prose-table:w-full prose-table:text-sm prose-th:bg-stone-100 prose-th:p-3 prose-td:p-3 prose-td:border-b prose-td:border-stone-100"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 border-b border-stone-100 pb-4">
            {post.isPracticalGuide
              ? "Guia Prático, Custos e Regras Oficiais"
              : post.category === "Mochilão" && post.slug.includes("kits")
              ? "Guia Completo de Kits Essenciais"
              : "Sobre a Experiência"}
          </h2>
          {post.content.map((paragraph, index) => (
            <div
              key={index}
              className="text-stone-700 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>

        {/* SLOT INFORMATIVO DE ADSENSE (SÓ APARECE SE ATIVADO NO /ADMIN E LONGE DE RESERVAS) */}
        <AdSlot slotId="post-informational-mid" pageCategory="guide" />

        {/* ROTEIRO DIA A DIA (TIMELINE) */}
        <section id="roteiro-dia-a-dia" className="mb-12">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Passo a Passo Prático
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              {post.isPracticalGuide ? "Cronograma de Execução Passo a Passo" : "Roteiro Detalhado Dia a Dia"}
            </h2>
          </div>

          <div className="space-y-6">
            {post.itinerary.map((item) => (
              <div
                key={item.day}
                className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-7 shadow-xs hover:border-orange-200 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-orange-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                    {post.isPracticalGuide ? `E${item.day}` : `D${item.day}`}
                  </div>
                  <h3 className="text-lg font-bold text-stone-900">
                    {post.isPracticalGuide ? item.title : `Dia ${item.day}: ${item.title}`}
                  </h3>
                </div>

                <ul className="space-y-2.5 pl-3 border-l-2 border-orange-100 ml-4">
                  {item.activities.map((act, aIdx) => (
                    <li key={aIdx} className="text-sm text-stone-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* BLOCO DE ANÁLISE TÉCNICA E RECOMENDAÇÃO DE AFILIADO COM ALTERNATIVA GRATUITA */}
        <AffiliateBox
          partnerId={
            post.affiliatePartnerId ||
            (post.region === "Internacional" ? "ekta-seguro" : "booking-stay22")
          }
          campaign={post.slug}
        />

        {/* INGRESSOS & PASSEIOS OFICIAIS (GETYOURGUIDE) */}
        <div className="bg-gradient-to-br from-red-950 via-stone-900 to-stone-900 border border-red-500/30 rounded-3xl p-6 sm:p-8 text-white mb-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="bg-red-500/20 text-red-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <Ticket className="w-3.5 h-3.5" />
              Passeios Oficiais & Ingressos • Parceiro Afiliado
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Reserve os Melhores Passeios em {post.destination}
            </h3>
            <p className="text-sm text-stone-300 max-w-xl leading-relaxed">
              Garanta ingressos antecipados, passeios de barco e tours guiados com cancelamento grátis até 24h antes (Consultado em Outubro/2026).
            </p>
          </div>
          <a
            href={AFFILIATES.GET_YOUR_GUIDE}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-sm px-7 py-3.5 rounded-2xl shadow-lg shadow-red-600/30 transition-all shrink-0 flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <Ticket className="w-4 h-4" />
            Ver Ingressos & Tours
            <ExternalLink className="w-3.5 h-3.5 opacity-75" />
          </a>
        </div>

        {/* SHOWS, CANDLELIGHT & EXPERIÊNCIAS (FEVER BR) */}
        <div className="bg-gradient-to-br from-purple-950 via-stone-900 to-stone-900 border border-purple-500/30 rounded-3xl p-6 sm:p-8 text-white mb-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="bg-purple-500/20 text-purple-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <Music className="w-3.5 h-3.5" />
              Concertos Candlelight & Eventos Exclusivos
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Experiências Noturnas, Peças & Shows com a Fever
            </h3>
            <p className="text-sm text-stone-300 max-w-xl leading-relaxed">
              Descubra os famosos concertos à luz de velas Candlelight, exposições imersivas de arte, jantares temáticos e os melhores eventos da cidade.
            </p>
          </div>
          <a
            href={AFFILIATES.FEVER_BR}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-sm px-7 py-3.5 rounded-2xl shadow-lg shadow-purple-600/30 transition-all shrink-0 flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <Music className="w-4 h-4" />
            Ver Eventos na Fever
            <ExternalLink className="w-3.5 h-3.5 opacity-75" />
          </a>
        </div>

        {/* HOSPEDAGEM & MAPA DE OFERTAS (STAY22) */}
        <Stay22Widget destination={post.destination} stateCountry={post.stateCountry} />

        {/* PASSAGENS AÉREAS PROMOCIONAIS (FLIPMILHAS, VAI DE PROMO & GOL) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* FlipMilhas - Emissão com Milhas até 50% OFF */}
          <div className="bg-gradient-to-br from-indigo-950 via-blue-950 to-stone-900 border border-blue-500/40 rounded-3xl p-6 sm:p-7 text-white shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <span className="bg-blue-500/25 text-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 border border-blue-400/30">
                <Plane className="w-3.5 h-3.5" />
                Até 50% OFF com Milhas
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                Voe para {post.destination} com a FlipMilhas
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Compre passagens emitidas com milhas de terceiros com até metade do preço, mesmo sem ter milhas acumuladas.
              </p>
            </div>
            <a
              href={AFFILIATES.FLIP_MILHAS}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="mt-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <Plane className="w-4 h-4 shrink-0" />
              <span>Buscar Voos na FlipMilhas</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-75 shrink-0" />
            </a>
          </div>

          {/* Vai de Promo */}
          <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-stone-900 border border-blue-500/30 rounded-3xl p-6 sm:p-7 text-white shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <span className="bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                <Plane className="w-3.5 h-3.5" />
                Comparador Multicompanhias
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                Compare Tarifas no Vai de Promo
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Compare as melhores companhias aéreas e encontre tarifas promocionais exclusivas em dinheiro ou cartão.
              </p>
            </div>
            <a
              href={AFFILIATES.VAI_DE_PROMO_VOOS}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="mt-6 bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-lg shadow-sky-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <Plane className="w-4 h-4 shrink-0" />
              <span>Comparar no Vai de Promo</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-75 shrink-0" />
            </a>
          </div>

          {/* Gol Linhas Aéreas Oficial */}
          <div className="bg-gradient-to-br from-orange-950 via-stone-900 to-stone-900 border border-orange-500/30 rounded-3xl p-6 sm:p-7 text-white shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <span className="bg-orange-500/20 text-orange-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                <Plane className="w-3.5 h-3.5" />
                Site Oficial Gol
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                Voe Gol com Pontos Smiles
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Compre direto na Gol com parcelamento facilitado, escolha de assento e acúmulo de milhas Smiles.
              </p>
            </div>
            <a
              href={AFFILIATES.GOL_LINHAS_AEREAS}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="mt-6 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-lg shadow-orange-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <Plane className="w-4 h-4 shrink-0" />
              <span>Acessar Ofertas Gol</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-75 shrink-0" />
            </a>
          </div>
        </div>

        {/* PASSAGENS DE ÔNIBUS & TRENS (OMIO) & AGÊNCIA PARTIU VIAJAR */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Omio */}
          <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-stone-900 border border-indigo-500/30 rounded-3xl p-6 sm:p-7 text-white shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <span className="bg-indigo-500/20 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                <Train className="w-3.5 h-3.5" />
                Passagens de Ônibus & Trens
              </span>
              <h3 className="text-xl font-extrabold text-white">
                Rotas Terrestres e Conexões com a Omio
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Viaje pelo Brasil e América do Sul de ônibus com as melhores viações e preços transparentes.
              </p>
            </div>
            <a
              href={AFFILIATES.OMIO_TRANSPORTE}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="mt-6 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-sm px-6 py-3 rounded-2xl shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Train className="w-4 h-4" />
              Pesquisar Passagens na Omio
              <ExternalLink className="w-3.5 h-3.5 opacity-75" />
            </a>
          </div>

          {/* Partiu Viajar Agência */}
          <div className="bg-gradient-to-br from-emerald-950 via-stone-900 to-stone-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-7 text-white shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                <Luggage className="w-3.5 h-3.5" />
                Pacotes & Agência Completa
              </span>
              <h3 className="text-xl font-extrabold text-white">
                Planejamento Completo com a Partiu Viajar
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Pacotes sob medida, transfers, resorts e roteiros exclusivos com suporte de agência de viagens.
              </p>
            </div>
            <a
              href={AFFILIATES.PARTIU_VIAJAR}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="mt-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm px-6 py-3 rounded-2xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Luggage className="w-4 h-4" />
              Conhecer a Partiu Viajar
              <ExternalLink className="w-3.5 h-3.5 opacity-75" />
            </a>
          </div>
        </div>

        {/* BEACH PARK BANNER */}
        <BeachParkBanner />

        {/* AIRHELP BANNER (DIREITOS DO PASSAGEIRO) */}
        <AirHelpBanner />

        {/* VITRINE DE PRODUTOS DE VIAGEM RECOMENDADOS */}
        <TravelGearShowcase />

        {/* DICAS ESSENCIAIS (CHECKLIST & TIPS) */}
        <section
          id="dicas-essenciais"
          className="bg-amber-50/80 border border-amber-200/80 rounded-3xl p-6 sm:p-10 mb-12 shadow-xs"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                Dicas Essenciais para {post.destination}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Informações práticas para evitar perrengues e economizar
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {post.essentialTips.map((tip, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 border border-amber-100 shadow-2xs">
                <h3 className="font-bold text-stone-900 text-base mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  {tip.title}
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FONTES OFICIAIS CONSULTADAS */}
        {post.officialSources && post.officialSources.length > 0 && (
          <section className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 mb-12 shadow-xs">
            <h2 className="text-lg sm:text-xl font-extrabold text-stone-900 mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              Fontes Oficiais e Órgãos Reguladores Consultados
            </h2>
            <p className="text-xs text-stone-600 mb-4">
              Para garantir precisão técnica, este guia baseia-se nas normas oficiais vigentes dos seguintes órgãos:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {post.officialSources.map((src, idx) => (
                <a
                  key={idx}
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-stone-50 hover:bg-emerald-50/50 border border-stone-200 hover:border-emerald-300 transition-all group block"
                >
                  <h3 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-emerald-700 flex items-center justify-between gap-2">
                    <span>{src.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 text-stone-400 group-hover:text-emerald-600" />
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    {src.description}
                  </p>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* PERGUNTAS FREQUENTES (FAQ ESTRUTURADO) */}
        <section className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-10 mb-12 shadow-xs">
          <div className="flex items-center gap-2.5 mb-6">
            <HelpCircle className="w-6 h-6 text-orange-600" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">
              Perguntas Frequentes sobre {post.destination}
            </h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80"
              >
                <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-2">
                  {item.question}
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* AVISO DE TRANSPARÊNCIA E PREÇOS NO FIM DO ARTIGO */}
        <AffiliateDisclosureBanner variant="bottom" />

        {/* RELATED POSTS / CONTINUE VIAJANDO */}
        {relatedPosts.length > 0 && (
          <section className="pt-8 border-t border-stone-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Próxima Parada
                </span>
                <h2 className="text-2xl font-extrabold text-stone-900">
                  Outros Guias e Destinos Recomendados
                </h2>
              </div>
              <Link
                href="/destinos"
                className="text-sm font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 transition-colors"
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
                  className="group bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                    <img
                      src={relPost.coverImage}
                      alt={relPost.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-stone-900/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {relPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-xs text-stone-500 font-medium mb-2">
                        <MapPin className="w-3.5 h-3.5 text-orange-500" />
                        {relPost.destination}, {relPost.stateCountry}
                      </div>
                      <h3 className="font-extrabold text-stone-900 text-lg group-hover:text-orange-600 transition-colors line-clamp-2 leading-snug">
                        {relPost.title}
                      </h3>
                    </div>
                    <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-500">
                      <span>{relPost.readTime}</span>
                      <span className="text-orange-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Ler guia completo →
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
