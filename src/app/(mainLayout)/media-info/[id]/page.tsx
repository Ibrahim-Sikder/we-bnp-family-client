/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/shared/Container";
import React from "react";
import Image from "next/image";
import Banner from "../_components/Banner";
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
import media5 from "../../../../assets/images/media/media6.jpeg";

const page = () => {
  const interNaionalData = [
    {
      id: 1,
      title: "বাংলাদেশঃ “গুম” বিষয়ক অনুসন্ধানে জাতিসংঘকে সহযোগিতা করার অনুমতি দিন।",
      description: "আওয়ামী লীগের শাসনামলে গত ১০ বছরে ১ হাজার ২০৯ জন গুম হয়েছেন দাবি করে বিএনপি বলছে, কোনো একদিন যথাযথ তদন্তের মাধ্যমে এ ধরনের মানবতাবিরোধী অপরাধের বিচার করা হবে।",
      img: media5,
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
      <Banner />
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
                    <p className="text-justify mt-3">আওয়ামী লীগের শাসনামলে গত ১০ বছরে ১ হাজার ২০৯ জন গুম হয়েছেন দাবি করে বিএনপি বলছে, কোনো একদিন যথাযথ তদন্তের মাধ্যমে এ ধরনের মানবতাবিরোধী অপরাধের বিচার করা হবে।</p>

                    <p className="text-justify mt-3">শুক্রবার বিএনপির নয়াপল্টন কেন্দ্রীয় কার্যালয়ে এক সংবাদ সম্মেলনে দলের সিনিয়র যুগ্ম মহাসচিব রুহুল কবির রিজভী এ কথা বলেন।</p>


                    <p className="text-justify mt-3">তিনি বলেন, ২০০৯ সালে আওয়ামী লীগ ক্ষমতায় আসার পর মোট ১ হাজার ২০৯ জন গুম হয়েছেন। তাদের মধ্যে আইনশৃঙ্খলা রক্ষাকারী বাহিনী কর্তৃক গুমের সংখ্যা ৭৮১ জন।
                    </p>



                    <p className="text-justify mt-3">“ইলিয়াস আলী, সাইফুল ইসলাম হিরু, চৌধুরী আলম, হুমায়ুন কবির পারভেজ, সুমন, জাকির, নিজামুদ্দিন মুন্না, তরিকুল ইসলাম ঝন্টু, আদনান চৌধুরী, সোহেল, খালেদ হোসেন, সম্রাট মোল্লা ও মাহবুবসহ এক হাজারেরও বেশি বিএনপি নেতা-কর্মী এতে রয়েছেন,” যোগ করেন তিনি।
                    </p>


                    <p className="text-justify mt-3">বিএনপি নেতা বলেন, ভুক্তভোগীদের পরিবারের সদস্যরা এখনো তাদের ফিরে আসার দিন গুনছেন।

                      “অনেক সন্তান তাদের বাবার নিরাপদে ফিরে আসার আশায় রয়েছেন। অনেক বাবা-মা তাদের নিখোঁজ সন্তানের ভাগ্য নিয়ে উদ্বিগ্ন।”
                    </p>
                    <p className="text-justify mt-3">আইনশৃঙ্খলা রক্ষাকারী বাহিনী কর্তৃক গুম হওয়াকে মারাত্মক মানবতাবিরোধী অপরাধ হিসেবে অভিহিত করে রিজভী বলেন, “এটি একটি রাজনৈতিক উদ্দেশ্য নিয়ে ১৯৭২ সালে দেশে শুরু হয়েছিল। এটি একই উদ্দেশ্য নিয়ে বাংলাদেশে অব্যাহত রয়েছে। গণতন্ত্রকে নির্মূল করতে ক্ষমতাসীন দল জোরপূর্বক নিখোঁজ করার মতো অমানবিক কর্মসূচির অবলম্বন করেছে।”
                    </p>



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
              <div className="flex justify-between my-3">
                <button className="font-medium">মামলা</button>{" "}
                <span className="block font-medium">(3)</span>
              </div>
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
