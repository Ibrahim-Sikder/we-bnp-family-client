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

const NewsSlider = () => {
  const newsData = [


    {
      id: 1,
      title: "বন্যার্তদের পাশে ‘আমরা বিএনপি পরিবার",
      img: flood,
      icon: icon,
      description:
        "গত কয়েকদিনের আকস্মিক বন্যায় ক্ষতিগ্রস্ত মানুষের পাশে দাঁড়ালো ‘আমরা বিএনপি পরিবার’। বিএনপির ভারপ্রাপ্ত চেয়ারম্যান ও ‘আমরা বিএনপি পরিবার’-এর প্রধান পৃষ্ঠপোষক তারেক রহমানের নির্দেশনায় ফেনী সদর উপজেলার শর্শদি বাজার এলাকায় বন্যার্তদের মাঝে ত্রাণ সামগ্রী বিতরণ করেন সংগঠনটির সদস্যরা।",
    },
    {
      id: 2,
      title: "আন্দোলনে আহতদের চিকিৎসা সহায়তা প্রদান",
      img: treatement,
      icon: icon,
      description:
        " বিএনপির ভারপ্রাপ্ত চেয়ারম্যান ও ‘আমরা বিএনপি পরিবার’এর প্রধান পৃষ্ঠপোষক তারেক রহমানের নির্দেশনায় ছাত্র-জনতার বৈষম্যবিরোধী আন্দোলনে আহতদের চিকিৎসা সহায়তা প্রদান করা হয়েছে। রবিবার (২৫ আগস্ট) দুপুর ১২টায় রাজধানীর আগারগাঁওয়ে পঙ্গু হাসপাতালে ‘আমরা বিএনপি পরিবার’এর আহ্বায়ক সাংবাদিক আতিকুর রহমান রুমনের নেতৃত্বে একটি প্রতিনিধি দল আহতদের মাঝে চিকিৎসা সহায়তা প্রদান করেন।",
    },
    {
      id: 3,
      title: "ফেনীতে বন্যার্তদের পাশে ‘আমরা বিএনপি পরিবার’",
      img: flood2,
      icon: icon,
      description:
        "মঙ্গলবার (২৭আগস্ট) ‘আমরা বিএনপি পরিবার’ সেলের উপদেষ্টা, আহ্বায়ক, সদস্য ও স্বেচ্ছাসেবকরা এসব ত্রাণ বিতরণ করেন। ত্রাণসামগ্রীর মধ্যে রয়েছে চিড়া, গুড়, চাল, আলু, স্যালাইন, নাপা/প্যারাসিটামল, শিশু পোশাক, বড়দের জন্য শাড়ি, লুঙ্গি, গামছা, মোমবাতি, লাইটার, টর্চলাইট প্রভৃতি।",
    },
    {
      id: 4,
      title: "বাংলাদেশের গণতন্ত্র পুন:রুদ্ধারের আন্দোলনে গুম, খুন ও পঙ্গুত্বের শিকার",
      img: treatement2,
      icon: icon,
      description:
        "বাংলাদেশের গণতন্ত্র পুন:রুদ্ধারের আন্দোলনে গুম, খুন ও পঙ্গুত্বের শিকার বিএনপি’র নেতাকর্মীদের পাশে থাকার প্রত্যয়ে আমরা বিএনপি পরিবার নামে সেল গঠন করা হয়, যার প্রধান পৃষ্ঠপোষক বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি)’র ভারপ্রাপ্ত চেয়ারম্যান জনাব তারেক রহমান।এই সেলে নতুন ০২ (দুই) জন উপদেষ্টা অন্তর্ভুক্ত করা হয়েছে।",
    },
    {
      id: 1,
      title: "বন্যার্তদের পাশে ‘আমরা বিএনপি পরিবার",
      img: flood,
      icon: icon,
      description:
        "গত কয়েকদিনের আকস্মিক বন্যায় ক্ষতিগ্রস্ত মানুষের পাশে দাঁড়ালো ‘আমরা বিএনপি পরিবার’। বিএনপির ভারপ্রাপ্ত চেয়ারম্যান ও ‘আমরা বিএনপি পরিবার’-এর প্রধান পৃষ্ঠপোষক তারেক রহমানের নির্দেশনায় ফেনী সদর উপজেলার শর্শদি বাজার এলাকায় বন্যার্তদের মাঝে ত্রাণ সামগ্রী বিতরণ করেন সংগঠনটির সদস্যরা।",
    },
    {
      id: 2,
      title: "আন্দোলনে আহতদের চিকিৎসা সহায়তা প্রদান",
      img: treatement,
      icon: icon,
      description:
        " বিএনপির ভারপ্রাপ্ত চেয়ারম্যান ও ‘আমরা বিএনপি পরিবার’এর প্রধান পৃষ্ঠপোষক তারেক রহমানের নির্দেশনায় ছাত্র-জনতার বৈষম্যবিরোধী আন্দোলনে আহতদের চিকিৎসা সহায়তা প্রদান করা হয়েছে। রবিবার (২৫ আগস্ট) দুপুর ১২টায় রাজধানীর আগারগাঁওয়ে পঙ্গু হাসপাতালে ‘আমরা বিএনপি পরিবার’এর আহ্বায়ক সাংবাদিক আতিকুর রহমান রুমনের নেতৃত্বে একটি প্রতিনিধি দল আহতদের মাঝে চিকিৎসা সহায়তা প্রদান করেন।",
    },
    {
      id: 3,
      title: "ফেনীতে বন্যার্তদের পাশে ‘আমরা বিএনপি পরিবার’",
      img: flood2,
      icon: icon,
      description:
        "মঙ্গলবার (২৭আগস্ট) ‘আমরা বিএনপি পরিবার’ সেলের উপদেষ্টা, আহ্বায়ক, সদস্য ও স্বেচ্ছাসেবকরা এসব ত্রাণ বিতরণ করেন। ত্রাণসামগ্রীর মধ্যে রয়েছে চিড়া, গুড়, চাল, আলু, স্যালাইন, নাপা/প্যারাসিটামল, শিশু পোশাক, বড়দের জন্য শাড়ি, লুঙ্গি, গামছা, মোমবাতি, লাইটার, টর্চলাইট প্রভৃতি।",
    },
    {
      id: 4,
      title: "বাংলাদেশের গণতন্ত্র পুন:রুদ্ধারের আন্দোলনে গুম, খুন ও পঙ্গুত্বের শিকার",
      img: treatement2,
      icon: icon,
      description:
        "বাংলাদেশের গণতন্ত্র পুন:রুদ্ধারের আন্দোলনে গুম, খুন ও পঙ্গুত্বের শিকার বিএনপি’র নেতাকর্মীদের পাশে থাকার প্রত্যয়ে আমরা বিএনপি পরিবার নামে সেল গঠন করা হয়, যার প্রধান পৃষ্ঠপোষক বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি)’র ভারপ্রাপ্ত চেয়ারম্যান জনাব তারেক রহমান।এই সেলে নতুন ০২ (দুই) জন উপদেষ্টা অন্তর্ভুক্ত করা হয়েছে।",
    },

  ];



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
          {newsData.map((news) => (
            <SwiperSlide key={news.id} className="">
              <div className="upcommingNewsCardWrap ">
                <div className="upcomingNewsCard relative ">
                  <div className="newsImgcardWrap">
                    <Image className="rounded-md" src={news.img} alt="news" />
                  </div>
                  <div className="flex items-center justify-center w-full gap-3 px-2 mt-5">
                    <Image className="w-10" src={news.icon} alt="news" />
                    <h2 className="text-xl md:text-xl ">{news.title.slice(0, 30)}...</h2>
                  </div>

                </div>
                <div className="hoverCard">
                  <div className="hoverContent">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Image
                          className=" rounded-full w-10"
                          src={news.icon}
                          alt="news"
                        />
                        <h2 className="text-xl md:text-2xl ">{news.title.slice(0, 30)}...</h2>
                      </div>
                      <p className="text-justify text-sm md:text-balance">{news.description.slice(0, 200)}...</p>
                      <Button
                        component={Link}
                        href={`/press/${news.id}`}
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
