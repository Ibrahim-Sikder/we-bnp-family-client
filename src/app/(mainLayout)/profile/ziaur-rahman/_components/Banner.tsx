import React from "react";
import Image from "next/image";
import img from "../../../../../../src/assets/images/banner/hero.jpg";

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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
        শহীদ প্রেসিডেন্ট জিয়াউর রহমান
        </h1>
        {/* <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white max-w-3xl">
          মুক্তিযুদ্ধের বীর এবং একজন দৃষ্টিসম্পন্ন রাষ্ট্রনায়ক
        </p> */}
      </div>

    </div>
  );
};

export default Banner;
