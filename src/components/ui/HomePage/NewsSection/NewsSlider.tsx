"use client";

import React, { useEffect, useState } from "react";
import "./NewsSection.css";
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
import { useLanguage } from "@/provider/LanguageProvider";
import Loading from "@/components/Loading/Loading";
import { TProgramm } from "@/types";
import truncateText from "@/utils/truncate";
import { activityFields } from "@/utils/fields";
import { TNews } from "@/types/type";



const NewsSlider = () => {
  const { language } = useLanguage();
  const [programData, setProgramData] = useState<TProgramm[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/programm?limit=10&fields=${activityFields}`, {
          cache: "no-store",
        });
        const data = await response.json();
        setProgramData(data.data?.programms || []);
      } catch (err) {
        setError("Failed to fetch report data!");
      } finally {
        setLoading(false);
      }
    };

    fetchReportData();
  }, []);

  const sortedProgrammData = programData?.sort((a: TProgramm, b: TProgramm) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

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
  if (loading) {
    return <Loading />
  }
  if (loading) {
    return <h1>Oops! press data not found.</h1>
  }
  return (
    <div className=" px-3 md:px-5 ">
      <div className="newsRightSide">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          // navigation
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          speed={4500}

          loop={true}
          breakpoints={{
            300: { slidesPerView: 1, spaceBetween: 10 },
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 2, spaceBetween: 30 },
            1400: { slidesPerView: 2, spaceBetween: 30 },
            1500: { slidesPerView: 2, spaceBetween: 30 },
          }}
        >
          {sortedProgrammData?.map((news: TNews) => (
            <SwiperSlide key={news._id} className="">
              <div className="upcommingNewsCardWrap ">
                <div className="upcomingNewsCard relative ">
                  <div className="newsImgcardWrap">


                    

                    {language === 'ENG'
                      ? news?.eng_iamges?.slice(0, 1)?.map((img: any) => (
                        <Image src={img} alt="hero" width={500}
                        height={500}
                        className="rounded-md" key={img} />
                      ))
                      : news?.bng_Images?.slice(0, 1)?.map((img: any) => (
                        <Image src={img} alt="hero" width={500}
                        height={500}
                        className="rounded-md" key={img} />
                      ))}
                  </div>
                  <div className="flex items-center justify-center w-full gap-3 px-2 mt-5">
                    <Image className="w-10" src={icon} alt="news" />
                    <h2 className="text-sm md:text-xl ">
                      {
                        language === 'ENG' ? truncateText(news?.english_title, 50) : truncateText(news?.bangla_title, 50)
                      }
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
                          {
                            language === 'ENG' ? truncateText(news?.english_title, 50) : truncateText(news?.bangla_title, 50)
                          }
                        </h2>
                      </div>
                      <p className="text-justify text-sm md:text-balance">
                        {
                          language === 'ENG' ? truncateText(news?.english_short_description, 200) : truncateText(news?.bangla_short_description, 200)
                        }...
                      </p>
                      <Button
                        component={Link}
                        href={`/press/${news._id}`}
                        sx={btnStyle}
                      >
                        {
                          language === 'ENG' ? 'Read More' : ' আরও পড়ুন'
                        }

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
            {
              language === 'ENG' ? 'See all' : ' সবগুলো দেখুন'
            }  <KeyboardDoubleArrowRight sx={arrowStyle} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsSlider;
