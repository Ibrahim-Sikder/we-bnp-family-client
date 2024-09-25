import BlogSection from "@/components/ui/HomePage/BlogSection/BlogSection";
import Contributor from "@/components/ui/HomePage/Contributor/Contributor";
import DonationSection from "@/components/ui/HomePage/DonationSection/DonationSection";
import Experience from "@/components/ui/HomePage/ExperienceSection/ExperienceSection";
import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import ImageGallery from "@/components/ui/HomePage/ImageGallery/ImageGallery";
import LatestNews from "@/components/ui/HomePage/LatestNews/LatestNews";
import NewsSection from "@/components/ui/HomePage/NewsSection/NewsSection";

import PhotoGallery from "@/components/ui/HomePage/PhotoGallery/PhotoGallery";
import PrisonTortureSection from "@/components/ui/HomePage/PrisonTortureSection/PrisonTortureSection";
import HistorySection from "@/components/ui/HomePage/ServiceSection/HistorySection";

import VictimizedSection from "@/components/ui/HomePage/VictimizedSection/VictimizedSection";
import VideoGallery from "@/components/ui/HomePage/VideoGallery/VideoGallery";

const page = () => {
  return (
    <div>
      <HeroSection />
      <HistorySection />
      <VictimizedSection />
      <NewsSection/>
      {/* <PrisonTortureSection /> */}
      <PhotoGallery />
      <VideoGallery />
      <ImageGallery />
      <Experience />
      {/* <Parallax /> */}
      <BlogSection />
      {/* <DonationSection /> */}
      <Contributor />
    </div>
  );
};


export default page;
