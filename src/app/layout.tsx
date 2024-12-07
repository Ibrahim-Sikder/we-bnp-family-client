import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
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

export const metadata: Metadata = {
  title: "We BNP Family | Home",
  description: "Generated by create next app",
  icons: {
    icon: [
      { 
        url: '/logo.jpg', 
        type: 'image/jpeg' 
      },
      { 
        url: 'https://amrabnpporibar.org/logo.jpg', 
        type: 'image/jpeg' 
      }
    ],
    shortcut: [
      { 
        url: '/logo.jpg', 
        type: 'image/jpeg' 
      },
      { 
        url: 'https://amrabnpporibar.org/logo.jpg', 
        type: 'image/jpeg' 
      }
    ],
    apple: [
      { 
        url: '/logo.jpg', 
        type: 'image/jpeg' 
      },
      { 
        url: 'https://amrabnpporibar.org/logo.jpg', 
        type: 'image/jpeg' 
      }
    ]
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll="0">
      <LanguageProvider>
        <Providers>
          <body className={notoSansBengali.className}>
            <Toaster position="bottom-right" richColors />
            <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          </body>
        </Providers>
        <BackTopButton />
      </LanguageProvider>
    </html>
  );
}
