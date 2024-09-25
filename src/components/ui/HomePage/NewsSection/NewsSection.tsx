/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./NewsSection.css";
import news from "../../../../assets/images/gallery/gallery17.png";
import icon from "../../../../assets/images/icon/news.png";
import { Divider } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NewsSlider from "./NewsSlider";

const NewsSection = () => {
  const newsData = [
    {
      id: 1,
      title: "Economic System",
      img: news,
      icon: icon,
      description: "",
    },
    {
      id: 1,
      title: "Economic System",
      img: news,
      icon: icon,
      description: "",
    },
    {
      id: 1,
      title: "Economic System",
      img: news,
      icon: icon,
      description: "",
    },
  ];
  const btnStyle = {
    background: "#fff",
    padding: "5px",
    color: "black",
    fontSize: "12px",
    borderRadius: "5px",
    width: "100px",
  };
  
  return (
    <div className="sectionMargin">

      <div className="grid grid-cols-12 gap-x-5 ">
        <div className="hidden xl:block col-span-12 xl:col-span-5 ">
          <div className="newsLeftSide bg-gradient-to-r from-red-600 to-green-600 ">
            <div className="leftContent">
              <h2 className="text-5xl">প্রোগ্রাম ও নোটিশ </h2>
              <p className="mt-5">
                দেশনায়ক তারেক রহমান এর নির্দেশনায় "আমরা বিএনপি পরিবার" সর্বদা
                প্রফুল্লচিত্তে নির্যাতিত ও অসহায় পরিবারের জন্য কাজ করে যাচ্ছি।
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-7 ">
          <NewsSlider />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
