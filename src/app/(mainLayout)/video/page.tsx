"use client";
import Container from "@/components/shared/Container";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ReactPlayer from "react-player";
import { TVideo } from "@/types/videio";
import { useEffect, useState } from "react";
import { useLanguage } from "@/provider/LanguageProvider";
import CommonBanner from "../report/_component/Banner";
import '../../../components/ui/HomePage/VideoGallery/VideoGallery.css'
import { Button } from "@mui/material";
const VideoGallery = () => {
  const { language } = useLanguage()
  const [videoData, setVideoData] = useState<TVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6)
  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/video`, {
          cache: "no-store",
        });
        const data = await res.json();
        setVideoData(data.data?.videos || []);
      } catch (err) {
        setError("Failed to load video data.");
      } finally {
        setLoading(false);
      }
    };

    fetchVideoData();
  }, []);

  const title = language === 'ENG' ? 'Video Gallery' : 'ভিডিও গ্যালারি'
  const loadMore = () => {
    setVisibleCount((preveCount) => preveCount + 6)
  }


  return (
    <>
      <CommonBanner title={title} />
      <Container className="sectionMargin">
        <div className="grid grid-cols-1 gap-y-5 xl:grid-cols-2 gap-5 mt-10 ">
          {videoData.length > 0 ? (
            videoData?.slice(0, visibleCount)?.map((video: TVideo) => (
              <div key={video._id} className="videoCard">
                <div className="videoWraper">
                  <ReactPlayer
                    url={video.video_url}
                    width="100%"
                    height="100%"
                    controls
                  />
                </div>
                <h4 className="p-3 md:text-xl ">{language === 'ENG' ? video.video_title_english : video.video_title_bangla}</h4>
              </div>
            ))
          ) : (
            <div>No videos available</div>
          )}
        </div>
        {visibleCount < videoData.length && (

          <div className="flex items-center justify-center mt-5 ">
            <Button onClick={loadMore} className="bg-gradient-to-r from-red-600 to-green-600">
              {language === "ENG" ? "Load More" : "আরো লোড"}<ArrowRightAltIcon />
            </Button>
          </div>

        )}
      </Container>
    </>
  );
};

export default VideoGallery;
