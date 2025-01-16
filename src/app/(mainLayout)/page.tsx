import { Metadata } from 'next';
import ContributionSection from "@/components/ui/HomePage/Contributor/ContributionSection";
import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import ImageGallery from "@/components/ui/HomePage/ImageGallery/ImageGallery";
import NewsCard from "@/components/ui/HomePage/NewsSection/NewsCard";
import OverviewSection from "@/components/ui/HomePage/OverviewSection/OverviewSection";
import PhotoGallery from "@/components/ui/HomePage/PhotoGallery/PhotoGallery";
import ReportSection from "@/components/ui/HomePage/ReportSection/ReportSection";
import HistorySection from "@/components/ui/HomePage/ServiceSection/HistorySection";
import VictimizedSection from "@/components/ui/HomePage/ActiveSection/ActiveSection";
import VideoGallery from "@/components/ui/HomePage/VideoGallery/VideoGallery";
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Amra BNP Poribar | Home',
  description: 'Amra BNP Poribar is a platform dedicated to the Bangladesh Nationalist Party (BNP) and its supporters.',
  keywords: ['BNP', 'Bangladesh Nationalist Party', 'Politics', 'Bangladesh'],
  openGraph: {
    title: 'Amra BNP Poribar | Home',
    description: 'Amra BNP Poribar is a platform dedicated to the Bangladesh Nationalist Party (BNP) and its supporters.',
    url: 'https://amrabnpporibar.org',
    siteName: 'Amra BNP Poribar',
    images: [
      {
        url: 'https://amrabnpporibar.org/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amra BNP Poribar | Home',
    description: 'Amra BNP Poribar is a platform dedicated to the Bangladesh Nationalist Party (BNP) and its supporters.',
    images: ['https://amrabnpporibar.org/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};

const HomePage = () => {
  return (
    <div>
      <JsonLd/>
      <HeroSection />
      <HistorySection />
      <VictimizedSection />
      <NewsCard />
      <PhotoGallery />
      <VideoGallery />
      <ImageGallery />
      <OverviewSection />
      <ReportSection />
      <ContributionSection />
    </div>
  );
};

export default HomePage;

