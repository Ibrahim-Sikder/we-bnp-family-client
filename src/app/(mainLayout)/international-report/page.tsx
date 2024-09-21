import Container from "@/components/shared/Container";
import React from "react";

import Image from "next/image";
// import "./Blog.css";
import Link from "next/link";
import international from "../../../assets/images/international/prison6.png";
import international2 from "../../../assets/images/international/international.webp";
import international3 from "../../../assets/images/international/internationl2.webp";
import international4 from "../../../assets/images/international/international3.png";
import { Button } from "@mui/material";
import { East } from "@mui/icons-material";
import '../../../components/ui/HomePage/BlogSection/BlogSection.css'
import Banner from "./_components/Banner";
const page = () => {
  const interNaionalData = [
    {
      id: 1,
      title: "মানবাধিকার রক্ষাকর্মীদের ওপর হামলা",
      description: "২০২১ সালের ডিসেম্বরে বাংলাদেশের র‌্যাপিড অ্যাকশন ব্যাটালিয়ন (র‌্যাব) এবং এর কিছু শীর্ষ কমান্ডারের বিরুদ্ধে মার্কিন গ্লোবাল ম্যাগনিটস্কি মানবাধিকার নিষেধাজ্ঞার পরে, বিচারবহির্ভূত হত্যাকাণ্ড এবং বলপূর্বক গুম নাটকীয়ভাবে হ্রাস পেয়েছে,",
      img: international,
    },
    {
      id: 1,
      title: "বাংলাদেশঃ কর্মকর্তারা শত শত “গুম”-এর সাথে সম্পর্কযুক্ত",
      description: "জোরপূর্বক গুমের শিকার মানুষের জন্য দিবসে অধিকার সংশ্লিষ্ট দলগুলো পদক্ষেপ নেওয়ার আহ্বান জানায়",
      img: international2,
    },
    {
      id: 1,
      title: "বাংলাদেশঃ “গুম” বিষয়ক অনুসন্ধানে জাতিসংঘকে সহযোগিতা করার অনুমতি দিন।",
      description: "২০শে আগস্ট, ২০২২ তারিখে বাংলাদেশের ঢাকায় জাতীয় প্রেসক্লাবের সামনে নিরাপত্তা বাহিনীর দ্বারা জোরপূর্বক গুমের শিকার ব্যক্তিদের পক্ষে প্রতিবাদ সমাবেশ চলাকালীন আত্মীয়রা তাদের নিখোঁজ পরিবারের সদস্যদের প্রতিকৃতি ধারণ করেন। © ২০২২ মামুনুর রশীদ/নুর ফটো ভায়া এপি",
      img: international3,
    },
    {
      id: 1,
      title: "২০২৩ সালে মানবাধিকার চর্চার দেশভিত্তিক প্রতিবেদন: বাংলাদেশ",
      description: "মানবাধিকারের গুরুত্বপূর্ণ বিষয়গুলোর নির্ভরযোগ্য প্রতিবেদনের মধ্যে অন্তর্ভুক্ত রয়েছে: বিচারবহির্ভূত হত্যাকাণ্ডসহ নির্বিচারে বা বেআইনী হত্যা; জোরপূর্বক গুম; সরকার কর্তৃক নির্যাতন বা নিষ্ঠুর, অমানবিক বা অবমাননাকর আচরণ বা শাস্তি; কঠোর/রূঢ় ও জীবনের জন্য হুমকিস্বরূপ কারাগারের অবস্থা; নির্বিচারে গ্রেফতার বা আটক; বিচার বিভাগের",
      img: international4,
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
      <Banner/>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-5 mt-10">
          {
            interNaionalData.map((blog) => (
              <div key={blog.id} className="blogCard">
                <div className="blogImgWrap">
                  <Image src={blog.img} width={1000} height={500} alt="report" />
                </div>
                <div className="blogCardContent">
                  <h6 className="text-[#2B8444]">বিচারবহির্ভূত হত্যা ও গুম</h6>
                  <h5 className="font-semibold ">
                    মানবাধিকার লঙ্ঘনের বিভিন্ন দিক:
                  </h5>
                  <p>
                    প্রথমত, বিচারবহির্ভূত হত্যা ও গুম মানবাধিকার লঙ্ঘনের একটি
                    প্রধান দিক।
                  </p>
                  <Link href="/international-report/1">
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
