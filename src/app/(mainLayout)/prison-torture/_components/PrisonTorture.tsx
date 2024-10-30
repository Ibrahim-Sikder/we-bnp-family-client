import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/shared/Container";
import banner from "../../../../assets/images/banner/banner7.jpg";
import victim1 from "../../../../assets/images/victime/help5.jpeg";
import victim2 from "../../../../assets/images/victime/help2.jpeg";
import victim3 from "../../../../assets/images/victime/help3.jpeg";
import icon1 from "../../../../assets/victimicon/rescue-icon-1.png";
import icon2 from "../../../../assets/victimicon/rescue-icon-2.png";
import icon3 from "../../../../assets/victimicon/rescue-icon-3.png";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";

const cardData = [
  {
    id: 1,
    title: "Card Title 1",
    date: "August 18, 2024",
    description: "নির্যাতিত পরিবারের পাশে দাঁড়িয়েছেন  তারেক রহমান। তার সহানুভূতি ও সহায়তায় পরিবারগুলো নতুন করে বাঁচার আশা পেয়েছে। তারেক রহমানের মানবিক কাজগুলো অনেকের অনুপ্রেরণা হয়ে দাঁড়িয়েছে..",
    imgSrc: victim1,
    icon: icon1,
  },
  {
    id: 2,
    title: "Card Title 2",
    date: "August 19, 2024",
    description: "নির্যাতিত পরিবারের পাশে দাঁড়িয়েছেন তারেক রহমান। তার সহানুভূতি ও সহায়তায় পরিবারগুলো নতুন করে বাঁচার আশা পেয়েছে। তারেক রহমানের মানবিক কাজগুলো অনেকের অনুপ্রেরণা হয়ে দাঁড়িয়েছে..",
    imgSrc: victim2,
    icon: icon2,
  },
  {
    id: 3,
    title: "Card Title 1",
    date: "August 18, 2024",
    description: "নির্যাতিত পরিবারের পাশে দাঁড়িয়েছেন  তারেক রহমান। তার সহানুভূতি ও সহায়তায় পরিবারগুলো নতুন করে বাঁচার আশা পেয়েছে। তারেক রহমানের মানবিক কাজগুলো অনেকের অনুপ্রেরণা হয়ে দাঁড়িয়েছে..",
    imgSrc: victim3,
    icon: icon3,
  },
];

const PrisonTorture = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div>
          <Image
            src={banner}
            className="w-full h-[200px] md:h-[350px] lg:h-[400px] xl:h-[400px]"
            alt="this is cover img"
          />
        </div>
    
        <Container>
          <div className="mt-10">
            <SectionTitle
              title="নির্যাতিত পরিবারের পাশে  তারেক রহমান"
              subtitle=' "নির্যাতিত পরিবারের পাশে দাঁড়িয়েছেন  তারেক রহমান। তার সহানুভূতি ও সহায়তায় পরিবারগুলো নতুন করে বাঁচার আশা পেয়েছে। তারেক রহমানের মানবিক কাজগুলো অনেকের অনুপ্রেরণা হয়ে দাঁড়িয়েছে।"'
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 my-2 py-10 items-center ">
            {cardData.map((card) => (
              <div key={card.id} className="max-w-lg ">
                <Image
                  src={card.imgSrc}
                  className="h-[300px] w-full"
                  alt={card.title}
                />

                <div className="relative group text-black hover:text-white">
                  <div className="relative group w-16 h-16 z-50 ml-[50px] -mt-32 transition-transform duration-600 group-hover:-translate-y-5 ">
                    <div className="bg-red-500 rounded-full p-3 w-[110px] h-[110px] flex items-center justify-center ">
                      <Image
                        src={card.icon}
                        className="h-[100px] w-[90px] rounded-full transition-all duration-300"
                        alt="icon"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center z-50 w-[130px] h-[130px] -ml-[10px] -mt-[10px] ">
                      <div className="rounded-full w-[130px] h-[130px] border-4 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    </div>
                  </div>

                  <div className="flex items-center content-center justify-center -mt-6 ">
                    <div className="max-w-sm h-auto px-6 py-4 shadow-lg border bg-white hover:bg-gradient-to-r hover:from-red-600 hover:to-green-600 custom-clip-path transition-transform duration-300 group-hover:-translate-y-5 ">
                      <div className="font-bold text-xl mb-2 mt-20">
                        {card.title}
                      </div>
                      <p className=" text-sm mb-2 ">{card.date}</p>
                      <p className=" text-base ">
                        {card.description}
                        <Link
                          href={`/victim/${card.id}`}
                          className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent p-1 text-lg "
                        >
                          বিস্তারিত দেখুন
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>             
              </div>
            ))}
          </div>
        </Container>
        
      </div>
    </>
  );
};

export default PrisonTorture;
