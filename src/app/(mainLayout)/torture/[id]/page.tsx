/* eslint-disable react/no-unescaped-entities */

import Container from "@/components/shared/Container";
import "../../murdered/Murder.css";
import toture from "../../../../assets/images/torture/torture3.jpg";
import flood2 from "../../../../assets/images/flood/flood13.jpeg";
import flood3 from "../../../../assets/images/flood/flood15.jpeg";
import flood5 from "../../../../assets/images/flood/flood4.jpeg";
import flood6 from "../../../../assets/images/flood/flood2.jpeg";

import Image from "next/image";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import ShareLink from "@/components/ShareLink/ShareLink";


const page = () => {
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
    <>
      <div className="bannerWrap">
        <div className="bannerContent">
          <h3 className="text-xl md:text-4xl font-semibold ">আওয়ামী লীগের নির্যাতন</h3>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 my-20">
          <div className="xl:col-span-9">
            <div className="murderRightSide">
              <div className="imgWrap">
                <Image className="w-full" src={toture} alt="banner" />
              </div>
              <div className="space-y-5 mt-10">
                <p>ফরিদপুরে যুবলীগ-ছাত্রলীগের বিরুদ্ধে বিএনপির বিক্ষোভ সমাবেশে হামলা, ককটেল বিস্ফোরণ ও চেয়ার ভাঙচুরের অভিযোগ পাওয়া গেছে।</p>
                <p>আজ বুধবার বিকেল ৪টার দিকে এ হামলার পর শহরের মুজিব সড়ক সংলগ্ন প্রেসক্লাব চত্বরে বিএনপির সমাবেশ পণ্ড হয়ে যায়। </p>
                <p>বিএনপি নেতাদের দাবি, পুলিশের সামনে আওয়ামী লীগের সহযোগী সংগঠন ছাত্রলীগ ও যুবলীগের নেতাকর্মীরা এ হামলা চালিয়েছে। এতে তাদের বেশ কয়েকজন নেতাকর্মী আহত হন। </p>
                <p>এদিকে পুলিশের দাবি, তাদের সামনে এ হামলা হলেও, হামলার কারণ বিএনপির দুই পক্ষের বিরোধ। একপক্ষের হামলায় সমাবেশ পণ্ড হয়েছে। হামলা ঠেকাতে পুলিশ ১১টি শটগানের গুলি ছোড়ে। এতে ৫ পুলিশ সদস্য আহত হন বলেও দাবি তাদের।

                </p>
                <p>প্রত্যক্ষদর্শীরা জানান, সমাবেশ উপলক্ষে ফরিদপুর প্রেসক্লাব চত্বরে মঞ্চ করা হয়। বিকেল সাড়ে ৩টার দিকে সমাবেশের আনুষ্ঠানিকতা শুরু হয়। সে সময় মঞ্চে ছিলেন জেলা বিএনপির আহ্বায়ক সৈয়দ মোদাররেছ আলী ও সদস্য সচিব এ কে কিবরিয়া। </p>
                <p>জেলা যুবদলের সাংগঠনিক সম্পাদক শহীদুর রহমান বক্তব্য শুরু করলে বিকেল ৩টা ৫৪ মিনিটের দিকে হেলমেট ও  মুখে মাস্ক পড়া ৩০-৩৫ জন যুবক লাঠি ও ইট নিয়ে সভাস্থলে হামলা করে।
                  হামলাকারীরা ব্যানার ছিনিয়ে নেয়, চেয়ার ভাঙচুর করে এবং  ৩টি ককটেল বিস্ফোরণ ঘটায়। </p>
                <p>পরে পুলিশ শটগানের গুলি ছুড়লে হামলাকারীরা ঘটনাস্থল ত্যাগ করে বলে জানান প্রত্যক্ষদর্শীরা।

                  'মিথ্যা মামলা, গায়েবি মামলা, পুলিশি নির্যাতন ও গ্রেপ্তারের প্রতিবাদে' বিএনপি ফরিদপুর মহানগর শাখা এ সমাবেশের আয়োজন করে। এতে সভাপতিত্ব করেন ফরিদপুর মহানগর বিএনপির আহ্বায়ক এ এফ এম আব্দুল কাইউম। </p>
                <p>সমাবেশে প্রধান অতিথি হিসেবে থাকার কথা ছিল বিএনপির স্থায়ী কমিটি সদস্য ড. আব্দুল মঈন খানের ও বিশেষ অতিথি ছিলেন বিএনপির ফরিদপুর বিভাগীয় সাংগঠনিক সম্পাদক শামা ওবায়েদ।</p>
                <p>হামলাকারীরা চলে যাওয়ার পর ফরিদপুর জেলা বিএনপির আহ্বায়ক সৈয়দ মোদাররেছ আলী ও মহানগর বিএনপির ফরিদপুর মহানগর বিএনপির আহ্বায়ক এ এফ এম আব্দুল কাইউম বক্তব্য দেন।</p>
                <p>এরপর বিএনপির নেতৃবৃন্দ ঘটনাস্থল ত্যাগ করেন। পরে বিকেল সোয়া ৪টার দিকে জেলা বিএনপির যুগ্ম-আহ্বায়ক জুলফিকার হোসেন, মহানগর যুবদলের সভাপতি বেনজির আহমেদ কয়েকজন সমর্থক নিয়ে ঘটনাস্থলে যান।

                  সে সময় পুলিশ এক ছাত্রদলকর্মীকে আটক করে। এ আটককে কেন্দ্র করে পুলিশের সঙ্গে বিএনপি নেতাদের ধ্বস্তাধস্তি হয়।</p>
                <p>বিকেল ৪টা ৩৯ মিনিটের দিকে ড. আব্দুল মঈন খান ও শামা ওবায়েদ ঘটনাস্থলে যান।

                  শামা ওবায়েদ সাংবাদিকদের বলেন, 'আমাদের বিক্ষোভ কর্মসূচিতে পুলিশের তত্ত্বাবধানে ছাত্রলীগ-যুবলীগ হামলা করেছে। তারা পুলিশের সামনে গুলি করেছে, ককটেল ফাটিয়েছে। এতে আমাদের অনেক নেতাকর্মী আহত হয়েছে। তারা ককটেল রাজনীতি শুরু করেছে।'</p>
                <p>'গত এক সপ্তাহ ধরে আমরা দেখেছি তারা বিভিন্ন জায়গায় ককটেল রেখে গায়েবি মামলা দিচ্ছে। সেই ধারাবাহিকতায় আজ তারা ফরিদপুরে প্রেসক্লাবে ককটেল ফাটিয়ে আমাদের লোকদের ধরপাকড় করেছে,' বলেন তিনি।

                  'গত ১২ নভেম্বর ফরিদপুরে সফল সমাবেশ হয়েছে' উল্লেখ করে তিনি বলেন, 'এই সমাবেশ দেখার পর আমরা মনে করি ফরিদপুরে যারা সরকারি লোকজন আছে, প্রশাসন আছে তারা ভয় পেয়ে গেছে। তাই উনারা আগামী ১০ ডিসেম্বর ঢাকায় যে গণসমাবেশ হবে তা নস্যাৎ করতে এ ধরনের ন্যাক্কারজনক ঘটনা ঘটিয়েছে।'</p>
                <p>ড. মঈন খান সাংবাদিকদের বলেন, 'এখানে আজ আমাদের সমাবেশ ছিল সাধারণ মানুষের ওপরে, বিএনপি নেতাকর্মীদের ওপরে সরকারের নির্যাতনের বিরুদ্ধে। ১১ জন নেতা মারা গেছে তার বিরুদ্ধে। এমন শান্তিপূর্ণ ছোট সমাবেশ করতে এসে আমরা হামলার শিকার হলাম।'

                  ফরিদপুর জেলা বিএনপির আহ্বায়ক সৈয়দ মোদাররেছ আলি দ্য ডেইলি স্টারকে জানান, হামলায় তিনিসহ তাদের অন্তত ৮ নেতাকর্মী আহত হয়েছেন।

                  পুলিশ তাদের বেশ কয়েকজন কর্মীকে গ্রেপ্তার করেছে বলে জানান তিনি।</p>
                <p>হামলা প্রসঙ্গে ফরিদপুর কোতয়ালী থানার ভারপ্রাপ্ত কর্মকর্তা (ওসি) এম এ জলিল সাংবাদিকদের বলেন, 'ফরিদপুর বিএনপি শামা ওবায়েদ ও নায়াব ইউসুফ এই দুই ভাগে বিভক্ত। তাদের নিজেদের মধ্যে বিরোধ থেকে সভাস্থলে হামলা ও ভাঙচুর হয়েছে।'

                  'হামলা ঠেকাতে গিয়ে পুলিশের ৫ সদস্য আহত হয়েছে। পুলিশ শটগানের গুলি ছুড়ে পরিস্থিতি নিয়ন্ত্রণে আনে,' বলেন তিনি।

                  হামলা কারা করেছে জানতে চাইলে ফরিদপুরের অতিরিক্ত পুলিশ সুপার (সদর সার্কেল) সুমন রঞ্জন সরকার ডেইলি স্টারকে বলেন, 'পুলিশের সামনেই হামলা হয়েছে এটা ঠিক। কিন্তু এখনো আমরা নিশ্চিত না যে বিএনপির এক পক্ষ আরেক পক্ষের ওপর হামলা করেছে, নাকি ছাত্রলীগ-যুবলীগ হামলা করেছে।'</p>

              </div>
            </div>
            <div className="flex gap-5 mt-10 ">
              <div className="flex flex-col gap-2">
                <b> প্রকাশিত পত্রিকার নাম </b>
                <b>সংবাদ প্রকাশের তারিখ</b>
                <b>পত্রিকার প্রকাশিত লিংক</b>

              </div>
              <div className="flex flex-col gap-2">
                <small> : The Daily Star Bangla</small>
                <small> : বুধবার নভেম্বর ৩০, ২০২২ ০৭:০৯ অপরাহ্ন</small>
                <small>: <Link target="_blank" href="https://bangla.thedailystar.net/news/bangladesh/politics/news-423256">
                  <button className="mt-3 bg-gradient-to-r from-red-600 to-green-600 text-white py-0 text-[10px] px-2  rounded inline-block font-semibold uppercase">
                    লিংক দেখুন
                  </button>
                </Link></small>
              </div>
            </div>
            <ShareLink />
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
    </>
  );
};

export default page;
