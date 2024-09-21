import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import cardimg1 from "../../../../assets/images/upodesta/rijbi.jpeg";
import cardimg2 from "../../../../assets/images/upodesta/millat.jpeg";
import cardimg3 from "../../../../assets/images/upodesta/ani.jpeg";
import cardimg4 from "../../../../assets/images/upodesta/asrafh.jpeg";
import cardimg5 from "../../../../assets/images/upodesta/alomgir.jpeg";


const cardData = [
  {
    id: 1,
    imgSrc: cardimg1,
    title: "অ্যাডভোকেট রুহুল কবির রিজভী",
    description: "প্রধান উপদেষ্টা",
    profile: "/about/",
  },
  {
    id: 2,
    imgSrc: cardimg2,
    title: "এম রশিদুজ্জামান মিল্লাত",
    description: "উপদেষ্টা",
    profile: "/profile/khaleda-zia",
  },
  {
    id: 3,
    imgSrc: cardimg3,
    title: "শহীদ উদ্দিন চৌধুরী এ্যানি",
    description: "উপদেষ্টা",
    profile: "/profile/tarek-rahman",
  },
  {
    id: 4,
    imgSrc: cardimg4,
    title: " ইঞ্জিনিয়ার মো. আশরাফ উদ্দিন",
    description: "উপদেষ্টা",
    profile: "/profile/khaleda-zia",
  },
  {
    id: 5,
    imgSrc: cardimg5,
    title: "আলমগীর কবীর",
    description: "উপদেষ্টা",
    profile: "/profile/tarek-rahman",
  },

];

const Upodesta = () => {
  return (
    <>
      <div className="w-full text-center lg:pt-2 mb-10 lg:mb-20 xl:mb-20">
        <div className="flex flex-row items-center justify-center content-center">
          <h2 className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent text-base mb-4 border rounded-full text-center w-[105px] bg-white">
            উপদেষ্টাগন
          </h2>
        </div>
        <div className="w-full text-center space-y-4 mb-2">
          <h1 className="text-3xl lg:text-5xl xl:text-5xl">
            উপদেষ্টা পরিষদ
            {/* <span className="text-xl font-light"> আমরা বিএনপি পরিবার</span> */}
          </h1>

        </div>

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
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Upodesta;
