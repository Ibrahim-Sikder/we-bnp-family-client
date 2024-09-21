import React from "react";
import Image from "next/image";
import img from "../../../../../../src/assets/images/hero/hero4.jpg";

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
        দেশনায়ক তারেক রহমান
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white max-w-3xl">
          বাংলাদেশের জাতীয়তাবাদী পার্টি (বিএনপি) এর সিনিয়র ভাইস চেয়ারম্যান এবং লন্ডনে নির্বাসনে থেকে বাংলাদেশের রাজনৈতিক পরিপ্রেক্ষিতকে প্রভাবিতকারী একটি শক্তিশালী নেতা।
        </p>
      </div>

    </div>
  );
};

export default Banner;
