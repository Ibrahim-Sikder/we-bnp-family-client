/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/shared/Container";
import React from "react";
import Image from "next/image";
import { TextField } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import media from "../../../../assets/images/media/media.jpeg";
import media2 from "../../../../assets/images/media/media2.jpeg";
import media3 from "../../../../assets/images/media/media3.jpeg";
import media4 from "../../../../assets/images/media/media4.jpg";
import international3 from "../../../../assets/images/international/internationl2.webp";
import CommonBanner from "@/components/shared/CommonBanner/CommonBanner";

const page = () => {
  const interNaionalData = [
    {
      id: 1,
      title: "বাংলাদেশঃ “গুম” বিষয়ক অনুসন্ধানে জাতিসংঘকে সহযোগিতা করার অনুমতি দিন।",
      description: "২০২১ সালের ডিসেম্বরে বাংলাদেশের র‌্যাপিড অ্যাকশন ব্যাটালিয়ন (র‌্যাব) এবং এর কিছু শীর্ষ কমান্ডারের বিরুদ্ধে মার্কিন গ্লোবাল ম্যাগনিটস্কি মানবাধিকার নিষেধাজ্ঞার পরে, বিচারবহির্ভূত হত্যাকাণ্ড এবং বলপূর্বক গুম নাটকীয়ভাবে হ্রাস পেয়েছে,",
      img: international3,
    },

  ];

  const newsData = [
    {
      id: 1,
      description:
        "ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল",
      img: media
    },
    {
      id: 1,
      description:
        "ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল",
      img: media2
    },
    {
      id: 1,
      description:
        "ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল",
      img: media3
    },
    {
      id: 1,
      description:
        "ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল",
      img: media4
    },
  ];

  return (
    <div>
      <CommonBanner title="International Report" />
      <Container>
        <div className="lg:flex md:flex gap-10 my-16">
          <div className="w-full grid grid-cols-1">
            {interNaionalData.map((data) => (
              <div key={data.id} className="h-full w-full">
                <div className="relative overflow-hidden">
                  <Image
                    src={data.img}
                    alt={data.title}
                    className="object-cover w-full h-full"
                    layout="responsive"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold">{data.title}</h3>
                  <div className="space-y-5">
                    <p className="text-justify mt-3">২০শে আগস্ট, ২০২২ তারিখে বাংলাদেশের ঢাকায় জাতীয় প্রেসক্লাবের সামনে নিরাপত্তা বাহিনীর দ্বারা জোরপূর্বক গুমের শিকার ব্যক্তিদের পক্ষে প্রতিবাদ সমাবেশ চলাকালীন আত্মীয়রা তাদের নিখোঁজ পরিবারের সদস্যদের প্রতিকৃতি ধারণ করেন। © ২০২২ মামুনুর রশীদ/নুর ফটো ভায়া এপি</p>






                    <h3 className="text-justify mt-3">বিশেষজ্ঞরা জানিয়েছেন, তারা উদ্বিগ্ন ছিলেনঃ
                    </h3>
                    <p>দেশে গুম হওয়া ব্যক্তিদের ভাগ্য এবং তাদের অবস্থান সর্ম্পকে স্পষ্টভাবে জানানোর ক্ষেত্রে গুরুত্বপূর্ণ অগ্রগতির অভাব দেখতে পেরে…এর পরিবর্তে, কর্তৃপক্ষ র‌্যাব কর্মকর্তা এবং অন্যান্য নিরাপত্তা সংস্থাগুলিকে যে কোনো তদন্ত এবং অপরাধমূলক দায় থেকে রক্ষা করেছে বলে ধারণা করা হয়। এই বিষয়ে, আমরা দায়মুক্তির বিরাজমান সংস্কৃতির কারণে বিশেষভাবে উদ্বিগ্ন, যা সত্য, ন্যায়বিচার, প্রতিকার এবং ক্ষতিগ্রস্থদের এবং তাদের পরিবারের অধিকারকে ক্ষুন্ন করে।</p>
                    <p>ব্যাচেলেট বাংলাদেশ সরকারকে অনুরোধ করেছেন জাতিসংঘের গুম বিষয়ক কার্যকরী দলকে বাংলাদেশ সফরে আমন্ত্রণ জানিয়ে "এই সমস্যাটির নিষ্পত্তিমূলকভাবে সমাধান করার প্রতিশ্রুতি দেখানোর জন্য"।  তিনি আরো বলেন যে, বাংলাদেশের উচিত হবে জোরপূর্বক গুম হওয়া সকল ব্যক্তির সুরক্ষার জন্য আন্তর্জাতিক কনভেনশনটি  অনুমোদন করা।</p>
                    <p>আগস্ট মাসে, স্বরাষ্ট্রমন্ত্রী আসাদুজ্জামান খান এখানে কোনো জোরপূর্বক গুমের ঘটনা ঘটেছে এমনটা অস্বীকার করে একটি বক্তব্য দেন। তিনি পূর্বের দাবির পুনরাবৃত্তি করে বলেন যে গুম হওয়া ব্যক্তিরা অপরাধমূলক কর্মকাণ্ডের মামলা থেকে বাঁচতে, ঋণ পরিশোধ এড়াতে বা পারিবারিক বিরোধের কারনে লুকিয়ে ছিল। স্বরাষ্ট্রমন্ত্রী বলেন যে জোরপূর্বক গুম সম্পর্কিত কার্যকরী দলের অন্তর্ভুক্ত করা ৭৬ টি মামলার মধ্যে বেশিরভাগই সমাধান করা হয়েছে এবং তাদের মধ্যে ২৮ জন অপরাধমূলক কর্মকান্ডে অভিযুক্ত হওয়ার কারণে পলাতক ছিল। তিনি ঘোষণা করেছিলেন, গুম হওয়া পরিবারদের প্রতিবাদের পেছনে একটি "ষড়যন্ত্র" আছে।</p>
                    <p>হিউম্যান রাইটস ওয়াচ জানিয়েছে, দেশে নির্যাতন, জোরপূর্বক গুম এবং বিচারবহির্ভূত হত্যাকাণ্ডের গুরুতর অভিযোগের বিষয়ে বাংলাদেশ সরকার বারবার জাতিসংঘ, বিদেশি সরকার, এক্টিভিস্ট এবং ক্ষতিগ্রস্থদের উদ্বেগে অর্থপূর্ণভাবে সাড়া দিতে ব্যর্থ হয়েছে। অন্যান্য সরকারগুলির উচিত জবাবদিহিতার সংকট মোকাবেলা এবং ভবিষ্যতে নিপীড়নের ক্ষেত্রে নিরাপত্তা বাহিনীর ইউনিট গুলো এবং ব্যক্তিদের বিরুদ্ধে দেয়া যুক্তরাষ্ট্রের নিষেধাজ্ঞাগুলিতে যোগদানের কথা বিবেচনা করা। জাতিসংঘের ডিপার্টমেন্ট অফ পিস অপারেশনস এর ব্যাচেলেটের সতর্ক বার্তায় মনোযোগ দেওয়া উচিত যে "জাতিসংঘের শান্তিরক্ষা মিশনের ইউনিফর্মধারী বাহিনীর সবচেয়ে বড় অংশদাতা হিসাবে, বাংলাদেশের উচিত নিরাপত্তা কর্মীদের সতর্ক মানবাধিকার মূল্যায়নের জন্য একটি শক্তিশালী ব্যবস্থা নিশ্চিত করা।

                    </p>
                    <p>"জোরপূর্বক গুমের শিকার হওয়া ব্যাক্তিদের পরিবারগুলি তাদের প্রিয়জনদের অবস্থান সম্পর্কে কর্তৃপক্ষের অস্বস্তিকর অস্বীকৃতির কারণে বছরের পর বছর যন্ত্রণা ভোগ করে কাটিয়েছে,” গাঙ্গুলি বলেছেন। "বাংলাদেশ সরকারের জবাবদিহিতার নিশ্চয়তার প্রথম পদক্ষেপ হিসাবে জোরপূর্বক গুমের আন্তর্জাতিক দিবস পালন করা উচিত।"</p>

                  </div>
                </div>
                {/* share section */}
                <div className="flex gap-5 p-5">
                  <span className="text-xl font-medium">Share : </span>
                  <span className="cursor-pointer">
                    <FacebookIcon fontSize="small" />
                  </span>
                  <span className="cursor-pointer">
                    <XIcon fontSize="small" />
                  </span>
                  <span className="cursor-pointer">
                    <InstagramIcon fontSize="small" />
                  </span>
                  <span className="cursor-pointer">
                    <LinkedInIcon fontSize="small" />
                  </span>
                </div>

                {/* user comment */}
                <div className="p-5 bg-gray-100 mx-5 rounded">
                  <div className="flex items-center gap-2">
                    <AccountCircleIcon fontSize="large" />
                    <p className="font-medium">John Doe</p>
                  </div>
                  <p className="mt-3">
                    কারাগারে নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা
                    যায় না।
                  </p>
                </div>

                {/* comment section */}
                <div className="p-5">
                  <TextField
                    label="Add a comment"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                  />
                  <div className="flex justify-end mt-5">
                    <button className="bg-gradient-to-r from-red-600 to-green-600 px-7 py-2 text-white font-medium rounded">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-[600px] lg:mt-0 md:mt-0 mt-5 bg-gray-100 p-5">
            <div className="mb-10">
              <TextField
                id="outlined-basic"
                label="Search Here"
                variant="outlined"
                fullWidth
                size="small"
              />
            </div>
            <h3>ক্যাটাগরি</h3>
            <hr className="w-16 h-1 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
            <div>
              <div className="flex justify-between my-3">
                <button className="font-medium">গুমের তালিকা</button>{" "}
                <span className="block font-medium">(3)</span>
              </div>

              <hr />
              <div className="flex justify-between my-3">
                <button className="font-medium">শহীদদের তালিকা </button>{" "}
                <span className="block font-medium">(3)</span>
              </div>
              <hr />
             
              <hr />
              <div className="flex justify-between my-3">
                <button className="font-medium">আওয়ামী লীগের নির্যাতন</button>{" "}
                <span className="block font-medium">(3)</span>
              </div>
              <hr />
              <div className="flex justify-between my-3">
                <button className="font-medium">কারাগারে নির্যাতন</button>{" "}
                <span className="block font-medium">(3)</span>
              </div>
            </div>
            {/* Recent Posts */}
            <div className="mt-16">
              <h3>সাম্প্রতিক পোস্ট</h3>
              <hr className="w-16 h-1 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
              <div className="flex flex-col gap-8 mt-5">
                {newsData?.map((data) => (
                  <div key={data.id} className="flex gap-5">

                    <Image
                      src={data.img}
                      width={50}
                      height={30}
                      alt="victime"
                      className="w-44 h-16 object-contain rounded-sm"
                    />


                    <p>
                      {data.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;