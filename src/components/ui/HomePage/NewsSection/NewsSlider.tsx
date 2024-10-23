"use client";

import React from "react";
import "./NewsSection.css";
import news from "../../../../assets/images/press/press.jpg";
import news2 from "../../../../assets/images/press/press2.jpeg";
import news3 from "../../../../assets/images/press/press3.jpeg";
import news4 from "../../../../assets/images/press/press4.jpeg";
import news5 from "../../../../assets/images/press/pres5.jpg";
import flood from "../../../../assets/images/flood/flood11.jpeg";
import flood2 from "../../../../assets/images/flood/flood15.jpeg";
import treatement from "../../../../assets/images/news/treatment.jpeg";
import treatement2 from "../../../../assets/images/news/treatment2.jpeg";
import icon from "../../../../assets/images/logo/logo.jpg";
import Image from "next/image";
import { Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { useGetAllProgrammeQuery } from "@/redux/api/programmeApi";

export type TNews = {
  _id: string,
  bangla_short_description: string,
  bangla_title: string,
  bng_Images: string[],

}

const NewsSlider = () => {
  const { data, isLoading } = useGetAllProgrammeQuery({});
  if (isLoading) {
    return <p>Loading..........</p>;
  }



  const btnStyle = {
    background: "#fff",
    padding: "5px",
    color: "black",
    fontSize: "12px",
    borderRadius: "5px",
    width: "100px",
    transition: "background 0.3s ease",

    "&:hover": {
      background: "linear-gradient(45deg, red, green)",
      color: "#fff",
    },
  };
  const buttonStyle = {
    width: "130px",
    height: "40px",
    borderRadius: "2px",
    padding: "3px",
    fontSize: "14px",
    background: "linear-gradient(to right, #2B8444, #CB2D2E)",
    color: "white",
  };
  const arrowStyle = { fontSize: "13px", marginLeft: "3px" };

  return (
    <div className="">
      <div className="newsRightSide">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          // // navigation
          // autoplay={{
          //   delay: 3500,
          //   disableOnInteraction: false,
          // }}
          // speed={4500}

          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {data.programms.map((news: TNews) => (
            <SwiperSlide key={news._id} className="">
              <div className="upcommingNewsCardWrap ">
                <div className="upcomingNewsCard relative ">
                  <div className="newsImgcardWrap">


                    {news?.bng_Images?.slice(0, 1)?.map((img: any) => {

                      return <Image src={img} alt="hero" width={500}
                        height={500}
                        className="rounded-md" key={img} />
                    })}
                  </div>
                  <div className="flex items-center justify-center w-full gap-3 px-2 mt-5">
                    <Image className="w-10" src={icon} alt="news" />
                    <h2 className="text-xl md:text-xl ">
                      {news?.bangla_title?.slice(0, 30)}...
                    </h2>
                  </div>
                </div>
                <div className="hoverCard">
                  <div className="hoverContent">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Image
                          className=" rounded-full w-10"
                          src={icon}
                          alt="news"
                        />
                        <h2 className="text-xl md:text-2xl ">
                          {news?.bangla_title?.slice(0, 30)}...
                        </h2>
                      </div>
                      <p className="text-justify text-sm md:text-balance">
                        {news?.bangla_short_description?.slice(0, 200)}...
                      </p>
                      <Button
                        component={Link}
                        href={`/press/${news._id}`}
                        sx={btnStyle}
                      >
                        আরও পড়ুন
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-end mt-3 mr-3  ">
          <Button component={Link} href="/press" sx={buttonStyle}>
            সবগুলো দেখুন <KeyboardDoubleArrowRight sx={arrowStyle} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsSlider;
