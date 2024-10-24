"use client";


import Container from "@/components/shared/Container";
import Banner from "./_components/Banner";
import ReactPlayer from "react-player";
import { TVideo } from "@/types/videio";
import { useEffect, useState } from "react";

const VideoGallery = () => {
  const [videoData, setVideoData] = useState<TVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
  const buttonStyle = {
    width: { xs: "100px", md: "170px", sm: "140px" },
    height: { md: "40px", xs: "30px" },
    fontSize: { md: "14px", xs: "9px", xl: "16px" },
    borderRadius: "30px",
    background: "#2B8444",
  };

  return (
    <>
      <Banner />
      <Container className="sectionMargin">
        <div className="grid grid-cols-1 gap-y-5 xl:grid-cols-2 gap-5 mt-10 ">
          {videoData.length > 0 ? (
            videoData.map((video: TVideo) => (
              <div key={video._id} className="videoCard">
                <div className="videoWraper">
                  <ReactPlayer
                    url={video.video_url}
                    width="100%"
                    height="100%"
                    controls
                  />
                </div>
                <h3 className="p-3">{video.video_title_bangla}</h3>
              </div>
            ))
          ) : (
            <div>No videos available</div>
          )}
        </div>

      </Container>
    </>
  );
};

export default VideoGallery;
