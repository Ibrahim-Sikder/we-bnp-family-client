import Container from "@/components/shared/Container";
import React from "react";
import image1 from "../../../../../src/assets/images/news/treate.webp";
import flood from "../../../../../src/assets/images/flood/flood10.jpeg";
import flood2 from "../../../../../src/assets/images/flood/flood13.jpeg";
import flood3 from "../../../../../src/assets/images/flood/flood15.jpeg";
import flood5 from "../../../../../src/assets/images/flood/flood4.jpeg";
import flood6 from "../../../../../src/assets/images/flood/flood2.jpeg";

import Image from "next/image";
import "../../human-rights/Blog.css";
import { TextField } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShareLink from "@/components/ShareLink/ShareLink";
import Banner from "../_components/Banner";

const page = () => {
  const humanRights = [
    {
      id: 1,
      img: image1,
      title: "আহতদের চিকিৎসা সহায়তা দিলেন তারেক রহমান",
      description:
        "বাংলাদেশের গণতন্ত্র পুন:রুদ্ধারের আন্দোলনে গুম, খুন ও পঙ্গুত্বের শিকার বিএনপি’র নেতাকর্মীদের পাশে থাকার প্রত্যয়ে আমরা বিএনপি পরিবার নামে সেল গঠন করা হয়, যার প্রধান পৃষ্ঠপোষক বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি)’র ভারপ্রাপ্ত চেয়ারম্যান জনাব তারেক রহমান।এই সেলে নতুন ০২ (দুই) জন উপদেষ্টা অন্তর্ভুক্ত করা হয়েছে।",
    },
  ];

  const newsData = [
    {
      id: 1,
      description:
        "ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল",
      img: flood2
    },
    {
      id: 1,
      description:
        "ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল",
      img: flood3
    },
    {
      id: 1,
      description:
        "ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল",
      img: flood5
    },
    {
      id: 1,
      description:
        "ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল",
      img: flood6
    },
  ];


  return (
    <div>
      <Banner title='প্রোগ্রাম ও  নোটিশ' text='নোটিশ' />
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 my-20">
          <div className="xl:col-span-9">
            {humanRights.map((data) => (
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
                  <div className="mt-5 space-y-5">
                    <p>বিএনপির ভারপ্রাপ্ত চেয়ারম্যান ও ‘আমরা বিএনপি পরিবার’-এর প্রধান পৃষ্ঠপোষক তারেক রহমানের নির্দেশনায় ছাত্র-জনতার বৈষম্যবিরোধী গণআন্দোলন চলাকালে আহতদের চিকিৎসা সহায়তা প্রদান করা হয়েছে।

                      রোববার (২৫ আগস্ট) দুপুরে রাজধানীর আগারগাঁওয়ে পঙ্গু হাসপাতালে তারেক রহমানের পক্ষ থেকে ‘আমরা বিএনপি পরিবার’-এর আহ্বায়ক সাংবাদিক আতিকুর রহমান রুমনের নেতৃত্বে একটি প্রতিনিধি দল আহতদের মাঝে এই চিকিৎসা সহায়তা প্রদান করেন।

                    </p>
                    <p>এ সময় আতিকুর রহমান রুমন বলেন, বৈষম্যবিরোধী ছাত্র-জনতার আন্দোলনে হতাহতদের পাশে দাঁড়াবার জন্য বিএনপির ভারপ্রাপ্ত চেয়ারম্যান তারেক রহমান আমাদের নির্দেশ দিয়েছেন। সেভাবেই আমাদের কাজ চলছে। আমরা সবসময় নির্যাতিতদের পাশে আছি এবং আগামীতেও পাশে থাকব।

                    </p>
                    <p>এ সময় ‘আমরা বিএনপি পরিবার’-এর উপদেষ্টা ইঞ্জিনিয়ার আশরাফ উদ্দিন বকুল, সেলের সদস্য সচিব কৃষিবিদ মো. মোকছেদুল মোমিন (মিথুন)সহ সেলটির সদস্যরা উপস্থিত ছিলেন।

                    </p>
                  </div>
                </div>
                {/* share section */}
                <ShareLink />
                {/* user comment */}
                <div className="p-5 bg-gray-100 mx-5 rounded mt-5 ">
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
          <div className="xl:col-span-3">
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
                <button className="font-medium">গুমের তালিকা </button>{" "}
                <span className="block font-medium">(1000)</span>
              </div>

              <hr />
              <div className="flex justify-between my-3">
                <button className="font-medium">শহীদদের তালিকা</button>{" "}
                <span className="block font-medium">(200)</span>
              </div>
              <hr />
            
              <hr />
              <div className="flex justify-between my-3">
                <button className="font-medium">আওয়ামী নির্যাতন</button>{" "}
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
                    <div className="">
                      <div className="">
                        <Image
                          src={data.img}
                          width={50}
                          height={30}
                          alt="victime"
                          className="w-44 h-16 object-fill rounded-sm"
                        />
                      </div>
                    </div>
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
