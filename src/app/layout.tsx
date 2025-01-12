import type { Metadata } from "next";
import { Noto_Sans_Bengali, Baloo_Da_2 } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Toaster } from "sonner";
import BackTopButton from "@/components/BackTopButton/BackTopButton";
import { LanguageProvider } from "@/provider/LanguageProvider";

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "700"],
  display: "swap",
});
const balooDa2 = Baloo_Da_2({
  subsets: ["latin", "bengali"], // Include "bengali" if the font supports it
  weight: ["400", "500", "700"], // Add required font weights
  display: "swap",
});
export const metadata: Metadata = {
  title: "We BNP Family | Home",
  description: "WE BNP FAMILY",

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll="0">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

        <meta name="author" content="WE BNP FAMILY" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="WE BNP FAMILY" />
        <meta property="og:url" content="https://amrabnpporibar.org" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WE BNP FAMILY" />
        <meta name="twitter:description" content="Empowering communities through social services and non-profit initiatives." />
        <meta name="twitter:image" content="/twitter-logo.jpg" />
        <link rel="icon" href="/logo.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/public/logo.jpg" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://amrabnpporibar.org" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "WE BNP FAMILY",
              url: "https://amrabnpporibar.org",
              logo: "https://amrabnpporibar.org/logo.jpg",
              description: "Empowering communities through social services and non-profit initiatives.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "২৮/১ ভিআইপি রোড, নয়াপল্টন, ঢাকা, বাংলাদেশ",
                addressRegion: "Dhaka",
                postalCode: "1212",
                addressCountry: "Bangladesh",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "৯৩৬১০৬৪",
                contactType: "Customer Service",
              },
            }),
          }}
        />
      </head>
      <LanguageProvider>
        <Providers>
          <body className={balooDa2.className}>
            <Toaster position="bottom-right" richColors />
            <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          </body>
        </Providers>
        <BackTopButton />
      </LanguageProvider>
    </html>
  );
}
