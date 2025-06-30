import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Afrin English Challenge - Transform Your English in 365 Days",
    template: "%s | Afrin English Challenge",
  },
  description: "Transform your English fluency in just 365 days with our proven system. Join thousands of learners worldwide with daily 15-minute exercises and community support!",
  keywords: [
    "English learning",
    "English speaking practice",
    "English fluency",
    "365 day challenge",
    "English community",
    "Telegram English group",
    "English workbook",
    "English speaking exercises",
    "English learning app",
    "English conversation practice",
    "English speaking confidence",
    "English learning program",
    "English speaking challenge",
    "English practice daily",
    "English learning community"
  ],
  authors: [{ name: "Afrin English Challenge Team" }],
  creator: "Afrin English Challenge",
  publisher: "Afrin English Challenge",
  metadataBase: new URL("https://afrinenglish.com"),
  alternates: {
    canonical: "https://afrinenglish.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://afrinenglish.com/",
    siteName: "Afrin English Challenge",
    title: "Afrin English Challenge - Transform Your English in 365 Days",
    description: "Transform your English fluency in just 365 days with our proven system. Join thousands of learners worldwide with daily 15-minute exercises and community support!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Afrin English Challenge - Transform Your English in 365 Days",
      },
    ],
    emails: ["vennila.paramanantham@gmail.com"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@VennilaParam",
    creator: "@VennilaParam",
    title: "Afrin English Challenge - Transform Your English in 365 Days",
    description: "Transform your English fluency in just 365 days with our proven system. Join thousands of learners worldwide!",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "education",
  other: {
    "theme-color": "#3b82f6",
    "msapplication-TileColor": "#3b82f6",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Afrin English Challenge",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Afrin English Challenge",
              "description": "Transform your English fluency in just 365 days with our proven system. Join thousands of learners worldwide with daily 15-minute exercises and community support.",
              "url": "https://afrinenglish.com",
              "logo": "https://afrinenglish.com/favicon.svg",
              "sameAs": [
                "https://t.me/afrinEnglish"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": ["English"],
                "url": "https://t.me/afrinEnglish"
              },
              "offers": {
                "@type": "Offer",
                "name": "365-Day English Speaking Challenge",
                "description": "A comprehensive English learning program with daily exercises, community support, and structured progress tracking.",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "validFrom": "2025-07-12"
              },
              "educationalProgramMode": "online",
              "educationalLevel": "beginner to advanced",
              "teaches": "English language",
              "learningResourceType": "workbook, community, exercises"
            })
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
        {/* Google Analytics (only on production) */}
        {typeof window !== 'undefined' && window.location.hostname === "afrinenglish.com" && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-C1HPXBD026"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-C1HPXBD026');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
