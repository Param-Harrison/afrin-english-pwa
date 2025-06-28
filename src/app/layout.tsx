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
  description: "Transform your English fluency in just 365 days with our proven system. Join thousands of learners worldwide with daily 15-minute exercises and community support. Start your journey to English mastery today!",
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
    description: "Transform your English fluency in just 365 days with our proven system. Join thousands of learners worldwide!",
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
  },
  category: "education",
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
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
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
