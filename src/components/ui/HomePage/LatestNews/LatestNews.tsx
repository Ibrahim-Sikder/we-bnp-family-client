import React from "react";
import "./LatestNews.css";
import news from "../../../../assets/images/news/treatment.jpeg";
import news2 from "../../../../assets/images/news/treatment2.jpeg";
import news3 from "../../../../assets/images/flood/flood14.jpeg";
import news4 from "../../../../assets/images/news/treatment4.jpeg";
import news5 from "../../../../assets/images/news/treatment5.jpeg";
import news6 from "../../../../assets/images/news/treatment6.jpeg";
import Image from "next/image";
import { Button } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import Link from "next/link";
import useMediaQuery from '@mui/material/useMediaQuery';

const buttonStyle = {
  width: "90px",
  height: "25px",
  borderRadius: "2px",
  padding: "3px",
  fontSize: "10px",
  backgroundColor: "white",
  color: "black",
  '&:hover': {
    backgroundColor: "#f0f0f0",
  },
};

const LatestNews = () => {

  const newsData = [
    {
      id: 1,
      title: "বাংলাদেশের গণতন্ত্র পুন:রুদ্ধারের আন্দোলনে গুম, খুন ও পঙ্গুত্বের শিকার",
      description:
        "বাংলাদেশ জাতীয়তাবাদী দল-বিএনপি’র ভারপ্রাপ্ত চেয়ারম্যান ও ‘আমরা বিএনপি পরিবার’-এর প্রধান পৃষ্ঠপোষক তারেক রহমানের নির্দেশনায় ছাত্র-জনতার বৈষম্যবিরোধী গণআন্দোলন চলাকালে আহতদের চিকিৎসা সহায়তা প্রদান করা হয়েছে।",
      img: news,
    },
    {
      id: 2,
      title: "আন্দোলনে আহতদের চিকিৎসা সহায়তা প্রদান",
      description:
        "বাংলাদেশ জাতীয়তাবাদী দল-বিএনপি’র ভারপ্রাপ্ত চেয়ারম্যান ও ‘আমরা বিএনপি পরিবার’-এর প্রধান পৃষ্ঠপোষক তারেক রহমানের নির্দেশনায় ছাত্র-জনতার বৈষম্যবিরোধী গণআন্দোলন চলাকালে আহতদের চিকিৎসা সহায়তা প্রদান করা হয়েছে।",
      img: news2,
    },
    {
      id: 3,
      title: "ত্রাণ কার্যক্রম অব্যাহত",
      description:
        "বাংলাদেশ জাতীয়তাবাদী দল-বিএনপি’র ভারপ্রাপ্ত চেয়ারম্যান ও ‘আমরা বিএনপি পরিবার’-এর প্রধান পৃষ্ঠপোষক তারেক রহমানের নির্দেশনায় ছাত্র-জনতার বৈষম্যবিরোধী গণআন্দোলন চলাকালে আহতদের চিকিৎসা সহায়তা প্রদান করা হয়েছে।",
      img: news3,
    },
    {
      id: 4,
      title: "আন্দোলনে আহতদের চিকিৎসা সহায়তা প্রদান",
      description:
        "বাংলাদেশ জাতীয়তাবাদী দল-বিএনপি’র ভারপ্রাপ্ত চেয়ারম্যান ও ‘আমরা বিএনপি পরিবার’-এর প্রধান পৃষ্ঠপোষক তারেক রহমানের নির্দেশনায় ছাত্র-জনতার বৈষম্যবিরোধী গণআন্দোলন চলাকালে আহতদের চিকিৎসা সহায়তা প্রদান করা হয়েছে।",
      img: news4,
    },
    {
      id: 5,
      title: "আন্দোলনে আহতদের চিকিৎসা সহায়তা প্রদান",
      description:
        "বাংলাদেশ জাতীয়তাবাদী দল-বিএনপি’র ভারপ্রাপ্ত চেয়ারম্যান ও ‘আমরা বিএনপি পরিবার’-এর প্রধান পৃষ্ঠপোষক তারেক রহমানের নির্দেশনায় ছাত্র-জনতার বৈষম্যবিরোধী গণআন্দোলন চলাকালে আহতদের চিকিৎসা সহায়তা প্রদান করা হয়েছে।",
      img: news5,
    },
    {
      id: 6,
      title: "আন্দোলনে আহতদের চিকিৎসা সহায়তা প্রদান",
      description:
        "বাংলাদেশ জাতীয়তাবাদী দল-বিএনপি’র ভারপ্রাপ্ত চেয়ারম্যান ও ‘আমরা বিএনপি পরিবার’-এর প্রধান পৃষ্ঠপোষক তারেক রহমানের নির্দেশনায় ছাত্র-জনতার বৈষম্যবিরোধী গণআন্দোলন চলাকালে আহতদের চিকিৎসা সহায়তা প্রদান করা হয়েছে।",
      img: news6,
    },
  ];
  const isSmallScreen = useMediaQuery('(max-width: 640px)');
  const newsToShow = isSmallScreen ? newsData.slice(0, 2) : newsData;

  return (
    <div className="-mt-16">
      <div className="grid grid-cols-1 gap-y-[10px] mt-[105px] ">
        {newsToShow.map((data) => (
          <div key={data.id} className="newsCard">
            <div className="flex md:flex-row items-center justify-between">
              <div className="newsContent text-sm">
                <small className="text-[12px] font-bold ">{data.title} </small>
                <div className="bnpBtnStyle">
                  <Button component={Link} href="/press/1" sx={buttonStyle}>
                    <span>
                      আরও পড়ুন <ArrowRightAlt sx={{ fontSize: "13px" }} />
                    </span>{" "}
                  </Button>
                </div>
              </div>
              <div className="newsImgWrap">
                <Image
                  src={data.img}
                  alt="news"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
