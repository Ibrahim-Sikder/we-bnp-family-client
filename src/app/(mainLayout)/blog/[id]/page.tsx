import Container from "@/components/shared/Container";
import React from "react";
import Image from "next/image";
import "../../human-rights/Blog.css";
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
import media5 from "../../../../assets/images/media/media5.jpeg";
import Banner from "../_components/Banner";


const page = () => {
  const humanRights = [
    {
      id: 1,
      img: media,
      title: "বন্যার্তদের পাশে ‘আমরা বিএনপি পরিবার’",
      description:
        "গত কয়েকদিনের আকস্মিক বন্যায় ক্ষতিগ্রস্ত মানুষের পাশে দাঁড়ালো ‘আমরা বিএনপি পরিবার’। বিএনপির ভারপ্রাপ্ত চেয়ারম্যান ও ‘আমরা বিএনপি পরিবার’-এর প্রধান পৃষ্ঠপোষক তারেক রহমানের নির্দেশনায় ফেনী সদর উপজেলার শর্শদি বাজার এলাকায় বন্যার্তদের মাঝে ত্রাণ সামগ্রী বিতরণ করেন সংগঠনটির সদস্যরা।মঙ্গলবার (২৭ আগস্ট) স্থানীয় শরিষাদী উচ্চ বিদ্যালয়ে বন্যার্তদের মাঝে খাদ্য সহায়তা দেওয়া হয়। ত্রাণ সামগ্রীর মধ্যে রয়েছে- চিড়া, গুড়, চাল, আলু, স্যালাইন, নাপা/প্যারাসিটামল, শিশু পেশাক, বড়দের জন্য শাড়ি, লুঙ্গি, গামছা, মোমবাতি, লাইটার, টর্চলাইট প্রভৃতি।এ সময় উপস্থিত ছিলেন, ‘আমরা বিএনপি পরিবার’-এর উপদেষ্টা ইঞ্জিনিয়ার আশরাফ উদ্দিন বকুল, সেলের আহ্বায়ক সাংবাদিক আতিকুর রহমান রুমন, সদস্য সচিব কৃষিবিদ মোকছেদুল মোমিন (মিথুন), সদস্য মাসুদ রানা লিটন, মুসতাকিম বিল্লাহ, শাকিল আহমেদ, শাহাদত হোসেন, জাতীয়তাবাদী ছাত্রদলের কেন্দ্রীয় সহ-সভাপতি হাবিবুল বাশার, সাবেক সহ-সভাপতি জামিল হোসেন, বেসরকারি বিশ্ববিদ্যালয় ছাত্রদলের সহ-সভাপতি শারিফুল ইসলাম, সহ-সাংগঠনিক মশিউর রহমান মহান প্রমুখ।",
    },
  ];

  const newsData = [
    {
      id: 1,
      description:
        "তারেক রহমান, বাংলাদেশের অন্যতম রাজনৈতিক ব্যক্তিত্ব, দীর্ঘদিন ধরে নির্যাতিত পরিবারের",
      img: media2
    },
    {
      id: 2,
      description:
        "তারেক রহমান, বাংলাদেশের অন্যতম রাজনৈতিক ব্যক্তিত্ব, দীর্ঘদিন ধরে নির্যাতিত পরিবারের",
      img: media3
    },
    {
      id: 3,
      description:
        "তারেক রহমান, বাংলাদেশের অন্যতম রাজনৈতিক ব্যক্তিত্ব, দীর্ঘদিন ধরে নির্যাতিত পরিবারের",
      img: media4
    },
    {
      id: 4,
      description:
        "তারেক রহমান, বাংলাদেশের অন্যতম রাজনৈতিক ব্যক্তিত্ব, দীর্ঘদিন ধরে নির্যাতিত পরিবারের",
      img: media5
    },
  ];

  return (
    <div>
      <Banner title="" text="" />
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

                    <Image
                      src={data.img}
                      width={50}
                      height={30}
                      alt="victime"
                      className="w-44 h-16 object-contain rounded-sm"
                    />


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
