"use client";

import Container from "@/components/shared/Container";
import React, { useState, useEffect } from "react";
import "./VideoGallery.css";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { Button } from "@mui/material";
import Link from "next/link";
import ReactPlayer from "react-player";
import { TVideo } from "@/types/videio";
import { useLanguage } from "@/provider/LanguageProvider";
import Loading from "@/components/Loading/Loading";

const VideoGallery = () => {
  const { language } = useLanguage()
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

  if (loading) return <Loading/>;
  if (error) return <div>{error}</div>;
  const title = language === 'ENG' ? 'Video Gallery' : 'ভিডিও গ্যালারি'


  
  return (
    <Container className="sectionMargin">
      <SectionTitle title={title} subtitle="" />
      <div className="grid grid-cols-1 gap-y-5 xl:grid-cols-2 gap-5 mt-10 ">
        {videoData.length > 0 ? (
          videoData.slice(0, 2).map((video: TVideo) => (
            <div key={video._id} className="videoCard">
              <div className="videoWraper">
                <ReactPlayer
                  url={video.video_url}
                  width="100%"
                  height="100%"
                  controls
                />
              </div>
              <h3 className="p-3 text-sm md:text-xl ">{language === 'ENG' ? video.video_title_english : video.video_title_bangla}</h3>
            </div>
          ))
        ) : (
          <div>No videos available</div>
        )}
      </div>
      <div className="flex items-center gap-3 mt-5 mr-8 bnpBtnStyle justify-end">
        <Button component={Link} href="/video" sx={buttonStyle}>
          <span>{language === 'ENG' ? 'See All' : 'সবগুলো দেখুন'}</span>
        </Button>
      </div>
    </Container>
  );
};

export default VideoGallery;
