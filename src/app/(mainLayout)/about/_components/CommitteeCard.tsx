import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import cardimg1 from "../../../../assets/images/committee/atikurrahman.jpeg";
import cardimg2 from "../../../../assets/images/committee/momin.jpeg";
import cardimg3 from "../../../../assets/images/committee/nazmul.jpeg";
import cardimg4 from "../../../../assets/images/committee/masudrana.jpeg";
import cardimg5 from "../../../../assets/images/committee/mustakimbillah.jpeg";
import cardimg6 from "../../../../assets/images/committee/sajib.jpeg";
import cardimg7 from "../../../../assets/images/committee/shakilahammed.jpeg";
import cardimg8 from "../../../../assets/images/committee/rubelamin.jpeg";
import cardimg9 from "../../../../assets/images/committee/shadat.jpeg";

const cardData = [
  {
    id: 1,
    imgSrc: cardimg1,
    title: "আতিকুর রহমান রুমন",
    description: "আহ্বায়ক",
    profile: "",
  },
  {
    id: 2,
    imgSrc: cardimg2,
    title: "কৃষিবিদ মো: মোকছেদুল মোমিন (মিথুন)",
    description: "সদস্যসচিব",
    profile: "",
  },
  {
    id: 3,
    imgSrc: cardimg3,
    title: "নাজমুল হাসান",
    description: "সদস্য",
    profile: "",
  },
  {
    id: 4,
    imgSrc: cardimg4,
    title: "মাসুদ রানা লিটন",
    description: "সদস্য",
    profile: "",
  },
  {
    id: 5,
    imgSrc: cardimg5,
    title: "মো. মুসতাকিম বিল্লাহ",
    description: "সদস্য",
    profile: "",
  },
  {
    id: 6,
    imgSrc: cardimg6,
    title: "ফরহাদ আলী সজিব",
    description: "সদস্য",
    profile: "",
  },
  {
    id: 7,
    imgSrc: cardimg7,
    title: "শাকিল আহমেদ",
    description: "সদস্য",
    profile: "",
  },
  {
    id: 8,
    imgSrc: cardimg8,
    title: "মো. রুবেল আমিন",
    description: "সদস্য",
    profile: "",
  },
  {
    id: 9,
    imgSrc: cardimg9,
    title: "মো. শাহাদত হোসেন।",
    description: "সদস্য",
    profile: "",
  },
];



const CommitteeCard = () => {
  return (
    <>
      <div className="w-full text-center lg:pt-2 mb-10 lg:mb-16 xl:mb-16">
        <div className="flex flex-row items-center justify-center content-center">
          <h2 className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent text-base mb-4 border rounded-full text-center w-[105px] bg-white">
            কমিটি
          </h2>
        </div>
        <div className="w-full text-center space-y-4 mb-2">
          <h1 className="text-3xl lg:text-5xl xl:text-5xl">
            কার্য নির্বাহী পরিষদ
            {/* <span className="text-xl font-light"> আমরা বিএনপি পরিবার</span> */}
          </h1>

        </div>
        {/* <div className="w-full text-center space-y-4">
          <h1 className="text-3xl lg:text-5xl"> আমরা বিএনপি পরিবার এর কমিটি</h1>
          <h5>যাদের চিন্তা, শ্রম ও উদ্দেগে গড়ে উঠেছে এ সংগঠন</h5>
        </div> */}
        <div className=" mx-auto lg:p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <div key={index} className="group relative">
              <Link href={`about/${card.id}`}>
                <div className="lg:max-w-sm max-h-full bg-[#fdf7f4] shadow-lg rounded-xl overflow-hidden">
                  <div className="relative">
                    <Image
                      src={card.imgSrc}
                      alt={card.title}
                      className="h-[400px] w-full"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                    <p className="text-gray-700">{card.description}</p>
                  </div>
                  {/* Social Icons Section */}
                  {/* <div className="h-[60px] max-w-sm absolute inset-0 flex items-center justify-center bg-red-600  opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mt-[388px]">
                    <div className="flex space-x-4">
                      <FaFacebook className="text-white hover:text-blue-600 text-2xl cursor-pointer " />
                      <FaTwitter className="text-white text-2xl cursor-pointer" />
                      <FaInstagram className="text-white text-2xl cursor-pointer" />
                      <FaLinkedin className="text-white text-2xl cursor-pointer" />
                    </div>
                  </div> */}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CommitteeCard;