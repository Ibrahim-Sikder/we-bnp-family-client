import React from "react";
import Image from "next/image";
import bannerImage from "../../../../../src/assets/images/human-rights/human.jpg";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

type TProps = {
  title:string,
  text:string,
}
const Banner = ({ title, text }: TProps) => {
  return (
    <div className="relative h-80 md:h-96 lg:h-[350px] bg-gray-800 overflow-hidden">
      <Image
        src={bannerImage}
        alt="Blog Banner"
        layout="fill"
        objectFit="cover"
        className="opacity-75"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-30"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-5">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
         {title}
        </h1>
        <p className="text-lg mt-3 text-center bg-gradient-to-r from-red-600 to-green-600 px-7 py-2 rounded">
          BNP <KeyboardDoubleArrowRightIcon /> {text}
        </p>
      </div>
    </div>
  );
};

export default Banner;