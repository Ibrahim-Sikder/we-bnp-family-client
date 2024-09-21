import Container from "@/components/shared/Container";
import React from "react";
import image1 from "../../../../../src/assets/images/human-rights/human2.jpg";
import Image from "next/image";
import "../../human-rights/Blog.css";
import Banner from "../_components/Banner";
import { TextField } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import blog from "../../../../../src/assets/images/victime/victime.png";
import ShareLink from "@/components/ShareLink/ShareLink";

const page = () => {
  const humanRights = [
    {
      id: 1,
      img: image1,
      title: "Human Rights",
      description:
        "কারাগারে নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন। বন্দিদের উপর অত্যাচার চালানো হয় তাদের দমন করার জন্য, এবং অনেক ক্ষেত্রেই তাদের অধিকার লঙ্ঘন করা হয়। এসব অত্যাচারের ফলে তারা শারীরিকভাবে দুর্বল হয়ে পড়ে এবং মানসিকভাবে ভেঙে পড়ে। নির্যাতনের ফলে অনেকেই বিভিন্ন ধরনের মানসিক রোগে আক্রান্ত হন এবং সমাজে পুনর্বাসিত হতে অসুবিধা হয়। কারাগারে নির্যাতনের এই ভয়াবহ অভিজ্ঞতা থেকে মুক্তি পেতে এবং তাদের পুনর্বাসনে সহায়তা করার জন্য সামাজিক ও আইনি উদ্যোগের প্রয়োজনীয়তা অত্যন্ত জরুরি।",
    },
  ];

  const newsData = [
    {
      id: 1,
      description:
        "তারেক রহমান, বাংলাদেশের অন্যতম রাজনৈতিক ব্যক্তিত্ব, দীর্ঘদিন ধরে নির্যাতিত পরিবারের",
    },
    {
      id: 1,
      description:
        "তারেক রহমান, বাংলাদেশের অন্যতম রাজনৈতিক ব্যক্তিত্ব, দীর্ঘদিন ধরে নির্যাতিত পরিবারের",
    },
    {
      id: 1,
      description:
        "তারেক রহমান, বাংলাদেশের অন্যতম রাজনৈতিক ব্যক্তিত্ব, দীর্ঘদিন ধরে নির্যাতিত পরিবারের",
    },
    {
      id: 1,
      description:
        "তারেক রহমান, বাংলাদেশের অন্যতম রাজনৈতিক ব্যক্তিত্ব, দীর্ঘদিন ধরে নির্যাতিত পরিবারের",
    },
  ];

  return (
    <div>
      <Banner />
      <Container>
        <div className="lg:flex md:flex gap-10 my-16">
          <div className="w-full grid grid-cols-1">
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
                  <p className="text-justify mt-3">{data.description}</p>
                </div>
              
               
                <ShareLink />

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
                <button className="font-medium">গুম</button>{" "}
                <span className="block font-medium">(3)</span>
              </div>

              <hr />
              <div className="flex justify-between my-3">
                <button className="font-medium">খুন</button>{" "}
                <span className="block font-medium">(3)</span>
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
                    <div className="recentBlogImgwrap">
                      <div className="recentBlogImgwrap">
                        <Image
                          src={blog}
                          width={50}
                          height={30}
                          alt="victime"
                        />
                      </div>
                    </div>
                    <p>
                      তারেক রহমান, বাংলাদেশের অন্যতম রাজনৈতিক ব্যক্তিত্ব,
                      দীর্ঘদিন ধরে নির্যাতিত পরিবারের{" "}
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
