import * as React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";
import Container from "@/components/shared/Container";
import "./Press.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import flood from "../../../assets/images/flood/flood11.jpeg";
import flood2 from "../../../assets/images/flood/flood15.jpeg";
import treatement from "../../../assets/images/news/treatment.jpeg";
import treatement2 from "../../../assets/images/news/treatment2.jpeg";
import icon from "../../../assets/images/logo/logo.jpg";
import { TProgramm } from "@/types";


export default async function PressPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/programm?limit=10000`, {
    cache: 'no-cache'
  });
  const data = await res.json();

  if (!data) {
    return {
      title: "Data not found",
      description: "The requested programm was not found.",
    };
  }

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
      title:
        "বাংলাদেশের গণতন্ত্র পুন:রুদ্ধারের আন্দোলনে গুম, খুন ও পঙ্গুত্বের শিকার",
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

  console.log(data)


  return (
    <>
      <div className="bannerWrap">
        <div className="bannerContent">
          <h3 className="text-xl md:text-4xl font-semibold text-center ">
            প্রোগ্রাম ও নোটিশ বিজ্ঞপ্তি
          </h3>
        </div>
      </div>
      <Container className="my-10 ">
        <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-5  lg:gap-x-5">
          {data?.data?.programms?.map((programm: TProgramm) => (
            <div key={programm._id} className="upcommingNewsCardWrap ">
              <div className="upcomingNewsCard relative ">
                <div className="imgWrap">


                  {programm?.bng_Images.slice(0, 1)?.map((img: any) => {

                    return <Image src={img} alt="hero" width={500}
                      height={500}
                      className="rounded-md" key={img} />
                  })}

                </div>
                <div className="flex items-center w-full gap-3 mt-5">
                  <Image className="w-10" src={icon} alt="news" />
                  <h4>{programm.bangla_title}</h4>
                </div>
                <div className="hoverCard">
                  <div className="hoverContent">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Image
                          className="w-10 rounded-full"
                          src={icon}
                          alt="news"
                        />
                        <h4>{programm.bangla_title.slice(0, 30)}...</h4>
                      </div>
                      <span className="block text-justify">
                        {programm.bangla_short_description.slice(0, 100)}...
                      </span>
                      <Button component={Link} href={`/press/${programm._id}`} sx={btnStyle}>
                        আরও পড়ুন
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-5 ">
          <Button className="bg-gradient-to-r from-red-600 to-green-600">
            Load More <ArrowRightAltIcon />
          </Button>
        </div>
      </Container>
    </>
  );
}
