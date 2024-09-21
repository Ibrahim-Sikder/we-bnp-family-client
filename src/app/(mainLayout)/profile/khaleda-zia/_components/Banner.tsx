import React from "react";
import Image from "next/image";
import img from "../../../../../../src/assets/images/banner/hero3.jpeg";

const Banner = () => {
  return (
    <div className="relative h-80 md:h-96 lg:h-[500px]">
      <Image
        src={img}

        alt="Banner Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4 md:px-8">
        <h1 className="text-xl  md:text-5xl lg:text-6xl font-bold text-white">
          বেগম খালেদা জিয়া
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white max-w-3xl">
          বাংলাদেশের প্রথম নারী প্রধানমন্ত্রী | বাংলাদেশ জাতীয়তাবাদী দলের নেতা
        </p>
      </div>

    </div>
  );
};

export default Banner;
