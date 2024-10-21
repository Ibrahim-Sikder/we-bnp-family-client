import Container from "@/components/shared/Container";
import React from "react";
import Banner from "./_components/Banner";
import Image from "next/image";
import "./Blog.css";
import Link from "next/link";
import bannerImage from "../../../assets/images/banner/top-banner.jpeg";

// import media from "../../../assets/images/media/media.jpeg";
// import media2 from "../../../assets/images/media/media2.jpeg";
import media from "../../../assets/images/media/media6.jpeg";
import media2 from "../../../assets/images/media/media8.jpeg";
import media3 from "../../../assets/images/media/media7.jpg";
import media4 from "../../../assets/images/media/media9.webp";
import { Button } from "@mui/material";
import { East } from "@mui/icons-material";
import '../../../components/ui/HomePage/BlogSection/BlogSection.css'
const page = () => {
  const mediaData = [
    {
      id: 1,
      title: "১০ বছরে গুম ১ হাজার ২০৯ জন: বিএনপি",
      description:
        "আওয়ামী লীগের শাসনামলে গত ১০ বছরে ১ হাজার ২০৯ জন গুম হয়েছেন দাবি করে বিএনপি বলছে, কোনো একদিন যথাযথ তদন্তের মাধ্যমে এ ধরনের মানবতাবিরোধী অপরাধের বিচার করা হবে।",
      img: media,
    },
    {
      id: 1,
      title: "গুম হওয়া সাবেক এমপি হিরু, বিএনপি নেতা পারভেজকে ফেরত চায় পরিবার",
      description:
        "২০১৩ সালে গুম হয়েছিলেন কুমিল্লার লাকসামের সাবেক সংসদ সদস্য ও উপজেলা বিএনপির সভাপতি সাইফুল হিরু। দীর্ঘ ১১ বছর অতিবাহিত হলেও তার কোনো খবর পায়নি পরিবার। তিনি বেঁচে আছেন নাকি মারা গেছেন এই তথ্যটুকুও জানেন না তারা।",
      img: media3,
    },
    {
      id: 1,
      title: "‘গুম’ হওয়া ২৫ জনের তালিকা দিলো বিএনপি",
      description:
        "বিএনপির সিনিয়র যুগ্ম মহাসচিব রুহুল কবির রিজভী ‘গুম’ হওয়া দলের ২৫ জন নেতা-কর্মীর নাম প্রকাশ করেছেন।",
      img: media2,
    },
    {
      id: 1,
      title: "নিখোঁজ’ বিএনপি নেতা ইলিয়াস আলীকে ফেরতের দাবি",
      description:
        "প্রায় ১১ বছর ধরে ‘নিখোঁজ’ বিএনপির কেন্দ্রীয় কমিটির সাবেক সাংগঠনিক সম্পাদক, সিলেট-২ আসনের সাবেক সংসদ সদস্য ও সিলেট জেলা বিএনপির সাবেক সভাপতি এম ইলিয়াস আলীকে সুস্থ অবস্থায় ফেরত পাওয়ার দাবি জোরালো হয়ে উঠেছে।",
      img: media2,
    },

  ];
  const smallBtnStyle = {
    background: "#2B8444",
    color: "#fff",
    borderRadius: "10px",
    marginTop: "5px",
    width: "25px",
    height: "25px",
    padding: '0px'
  }

  return (
    <div>
      <div className="relative h-80 md:h-96 lg:h-[350px] bg-gray-800 overflow-hidden">
        <Image
          src={bannerImage}
          alt="Blog Banner"
          layout="fill"
          objectFit="cover"
          className="opacity-75"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-5">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            মিডিয়ায় প্রকাশিত তথ্য
          </h1>
          <p className="text-lg md:text-2xl mt-3 text-center">

          </p>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-5 mt-10">
          {
            mediaData.map((blog) => (
              <div key={blog.id} className="blogCard">
                <div className="blogImgWrap">
                  <Image src={blog.img} width={1000} height={500} alt="report" />
                </div>
                <div className="blogCardContent">
                 
                  <h5 className="font-semibold ">
                    {blog.title}
                  </h5>
                  <p>
                    {blog?.description?.slice(0, 80)}
                  </p>
                  <Link href="/media-info/sub-blog2">
                    <Button
                      sx={smallBtnStyle}
                    >

                      <span>
                        <East sx={{ fontSize: '15px' }} />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            ))
          }


        </div>






      </Container>
    </div>
  );
};

export default page;
