import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://malasprontas737.com.br"),
  title: "Malas Prontas | Dicas, Roteiros e Inspiração para sua Próxima Viagem",
  description:
    "Blog de viagem completo com roteiros dia a dia, custos reais, checklist de mala interativo e dicas sinceras para viajar mais gastando menos pelo Brasil e pelo mundo.",
  keywords: [
    "viagem",
    "blog de viagem",
    "roteiro de viagem",
    "dicas de viagem",
    "turismo",
    "checklist de mala",
    "Maragogi",
    "Gramado",
    "Chapada dos Veadeiros",
    "Fernando de Noronha",
    "Buenos Aires",
    "Jalapão"
  ],
  authors: [{ name: "Malas Prontas" }],
  openGraph: {
    title: "Malas Prontas | Dicas e Roteiros de Viagem",
    description: "Roteiros dia a dia, custos reais e checklist inteligente para a sua próxima aventura.",
    url: "https://malasprontas737.com.br",
    siteName: "Malas Prontas",
    type: "website",
    locale: "pt_BR",
  },
  alternates: {
    canonical: "./",
  },
  verification: {
    google: "JEKsKX4v9JuqJOkkIeUOFQg-X9sm98ZH13iQFru-ZrE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="google-site-verification" content="JEKsKX4v9JuqJOkkIeUOFQg-X9sm98ZH13iQFru-ZrE" />
        <meta name="lomadee" content="2324685" />

        {/* Google tag (gtag.js) - Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KB3NV0104N"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KB3NV0104N');
            `,
          }}
        />

        {/* Stay22 Spark / LetMeAllez Monetization Script */}
        <Script
          id="stay22-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function (s, t, a, y, twenty, two) { s.Stay22 = s.Stay22 || {}; s.Stay22.params = { lmaID: '6a99930410f03364e343f876' }; twenty = t.createElement(a); two = t.getElementsByTagName(a)[0]; twenty.async = 1; twenty.src = y; two.parentNode.insertBefore(twenty, two); })(window, document, 'script', 'https://scripts.stay22.com/letmeallez.js');`,
          }}
        />

        {/* Travelpayouts Drive Script */}
        <Script
          id="travelpayouts-drive"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function () { var script = document.createElement("script"); script.async = 1; script.setAttribute("data-cmp-ab","2"); script.src = 'https://emrldtp.cc/NTcwMDI1.js?t=570025'; document.head.appendChild(script); })();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-orange-200 selection:text-orange-900">
        <GoogleAnalytics gaId="G-KB3NV0104N" />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
