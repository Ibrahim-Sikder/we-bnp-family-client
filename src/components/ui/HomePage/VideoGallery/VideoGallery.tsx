

import Container from "@/components/shared/Container";
import React from "react";
import "./VideoGallery.css";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { Button } from "@mui/material";
import Link from "next/link";
import { TVideo } from "@/types/videio";

const VideoGallery = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/video`, {
    cache: 'no-store'
  });
  const videoData = await res.json();


  const buttonStyle = {
    width: { xs: "100px", md: "170px", sm: "140px" },
    height: { md: "40px", xs: "30px" },
    fontSize: { md: "14px", xs: "9px", xl: "16px" },
    borderRadius: "30px",
    background: "#2B8444",
  };



  return (
    <Container className="sectionMargin">
      <SectionTitle title="ভিডিও গ্যালারি " subtitle="" />
      <div className="grid grid-cols-1 gap-y-5 xl:grid-cols-2 gap-5 mt-10 ">
        {videoData?.data?.videos?.map((video:TVideo) => (
          <div key={video._id} className="videoCard">
            <div className="videoWraper">
              <video
                className="react-player"
                src={video.video_url}
                width="100%"
                height="100%"
                controls
              />
            </div>
            <h3 className=" p-3">{video.video_title_bangla}</h3>
          </div>

        ))}
      </div>
      <div className="flex items-center gap-3 mt-5 mr-8  bnpBtnStyle justify-end">
        <Button component={Link} href="/video" sx={buttonStyle}>
          <span>সবগুলো দেখুন</span>
        </Button>
      </div>
    </Container>
  );
};

export default VideoGallery;
