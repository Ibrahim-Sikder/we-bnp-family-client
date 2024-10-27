import Contributor from "@/components/ui/HomePage/Contributor/Contributor";
import DonationSection from "@/components/ui/HomePage/DonationSection/DonationSection";
import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import ImageGallery from "@/components/ui/HomePage/ImageGallery/ImageGallery";
import NewsCard from "@/components/ui/HomePage/NewsSection/NewsCard";
import NewsSection from "@/components/ui/HomePage/NewsSection/NewsSection";
import OverviewSection from "@/components/ui/HomePage/OverviewSection/OverviewSection";
import PhotoGallery from "@/components/ui/HomePage/PhotoGallery/PhotoGallery";
import ReportSection from "@/components/ui/HomePage/ReportSection/ReportSection";
import HistorySection from "@/components/ui/HomePage/ServiceSection/HistorySection";
import VictimizedSection from "@/components/ui/HomePage/VictimizedSection/VictimizedSection";
import VideoGallery from "@/components/ui/HomePage/VideoGallery/VideoGallery";

const page = () => {

  return (
    <div>
      <HeroSection />
      <HistorySection />
      <VictimizedSection />
      <NewsCard/>
      {/* <PrisonTortureSection /> */}
      <PhotoGallery />
      <VideoGallery />
      <ImageGallery />
      <OverviewSection />
      {/* <Parallax /> */}
      <ReportSection/>
      {/* <DonationSection /> */}
      <Contributor />
    </div>
  );
};



export default page;
