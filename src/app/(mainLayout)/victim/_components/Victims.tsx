import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/shared/Container";
import banner from "../../../../assets/images/banner/banner7.jpg";
import victim1 from "../../../../assets/images/victime/help5.jpeg";
import victim2 from "../../../../assets/images/victime/help2.jpeg";
import victim3 from "../../../../assets/images/victime/help3.jpeg";
import flood from "../../../../assets/images/flood/flood10.jpeg";
import flood2 from "../../../../assets/images/flood/flood12.jpeg";
import flood3 from "../../../../assets/images/flood/flood13.jpeg";

import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import logo from "../../../../assets/images/logo/logo.jpg";

const cardData = [
  {
    id: 1,
    title: "ফেনীতে বন্যার্তদের পাশে ",
    date: "August 18, 2024",
    description: "ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল। মঙ্গলবার (২৭ আগস্ট) দিনব্যাপী ফেনী সদর উপজেলায় ‘আমরা বিএনপি পরিবার’ ব্যানারে ত্রাণ বিতরণ করেন। ‘আমরা বিএনপি পরিবার’র প্রধান পৃষ্ঠপোষক বিএনপির ভারপ্রাপ্ত চেয়ারম্যান তারেক রহমানের নির্দেশনায় শর্শদি বাজার এলাকায় শরিষাদী উচ্চ বিদ্যালয় প্রাঙ্গণে স্থানীয় বন্যার্তদের মাঝে ত্রাণ-সামগ্রী বিতরণ করেন সেলের সদস্য ও স্বেচ্ছাসেবকরা।",
    imgSrc: flood,
    icon: logo,
  },
  {
    id: 2,
    title: "ফেনীতে বন্যার্তদের পাশে",
    date: "August 19, 2024",
    description:
      "ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল। মঙ্গলবার (২৭ আগস্ট) দিনব্যাপী ফেনী সদর উপজেলায় ‘আমরা বিএনপি পরিবার’ ব্যানারে ত্রাণ বিতরণ করেন।‘আমরা বিএনপি পরিবার’র প্রধান পৃষ্ঠপোষক বিএনপির ভারপ্রাপ্ত চেয়ারম্যান তারেক রহমানের নির্দেশনায় শর্শদি বাজার এলাকায় শরিষাদী উচ্চ বিদ্যালয় প্রাঙ্গণে স্থানীয় বন্যার্তদের মাঝে ত্রাণ-সামগ্রী বিতরণ করেন সেলের সদস্য ও স্বেচ্ছাসেবকরা।",
    imgSrc: flood2,
    icon: logo,
  },
  {
    id: 3,
    title: "ফেনীতে বন্যার্তদের পাশে",
    date: "August 18, 2024",
    description:
      "ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল।মঙ্গলবার (২৭ আগস্ট) দিনব্যাপী ফেনী সদর উপজেলায় ‘আমরা বিএনপি পরিবার’ ব্যানারে ত্রাণ বিতরণ করেন।‘আমরা বিএনপি পরিবার’র প্রধান পৃষ্ঠপোষক বিএনপির ভারপ্রাপ্ত চেয়ারম্যান তারেক রহমানের নির্দেশনায় শর্শদি বাজার এলাকায় শরিষাদী উচ্চ বিদ্যালয় প্রাঙ্গণে স্থানীয় বন্যার্তদের মাঝে ত্রাণ-সামগ্রী বিতরণ করেন সেলের সদস্য ও স্বেচ্ছাসেবকরা।",
    imgSrc: flood3,
    icon: logo,
  },
];

const Victims = () => {
  return (
    <>
      <div className="bg-gray-100">
      <div className='bannerWrap'>
        <div className="bannerContent">
          {/* <h3 className='text-xl w-full  md:text-4xl font-semibold '>শহীদদের তালিকা </h3> */}
        </div>
      </div>

        <Container>
          <div className="mt-10">
            <SectionTitle
              title="নির্যাতিত ও ক্ষতিগ্রস্ত পরিবারের পাশে আমরা বিএনপি পরিবার"
              subtitle=' "নির্যাতিত পরিবারের পাশে দাঁড়িয়েছেন দেশনায়ক  তারেক রহমান। তার সহানুভূতি ও সহায়তায় পরিবারগুলো নতুন করে বাঁচার আশা পেয়েছে। তারেক রহমানের মানবিক কাজগুলো অনেকের অনুপ্রেরণা হয়ে দাঁড়িয়েছে।"'
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 my-2 py-10 items-center ">
            {cardData.map((card) => (
              <div key={card.id}>
                <Link href={`/victim/${card.id}`}>
                  <div key={card.id} className="max-w-lg ">
                    <Image
                      src={card.imgSrc}
                      className="h-[300px] w-full"
                      alt={card.title}
                    />

                    <div className="relative group text-black hover:text-white">
                      <div className="relative group w-16 h-16 z-10 ml-[50px] -mt-32 transition-transform duration-600 group-hover:-translate-y-5 ">
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
                          <p className=" text-base text-justify">
                            {card.description.slice(0, 200)}
                            <span

                              className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent p-1 text-lg "
                            >
                              বিস্তারিত দেখুন
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Victims;
