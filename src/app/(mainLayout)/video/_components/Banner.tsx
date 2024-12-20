import React from "react";
import Image from "next/image";
import bannerImage from "../../../../../src/assets/images/banner/top-banner.jpeg";

const Banner = () => {
  return (
    <div className="relative h-80 md:h-96 lg:h-[300px] bg-gray-800 overflow-hidden">
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
          ভিডিও গ্যালারি
        </h1>
        {/* <p className="text-lg md:text-2xl mt-3 text-center">
          Insights, stories, and updates from our team.
        </p> */}
      </div>
    </div>
  );
};

export default Banner;
