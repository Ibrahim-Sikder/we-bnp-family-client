/* eslint-disable react/no-unescaped-entities */
import React from "react";
import img from "../../../../../src/assets/images/hero/hero.jpg";
import Image from "next/image";
import Container from "@/components/shared/Container";
import Banner from "./_components/Banner";

const page = () => {
  return (
    <div>
      <Banner />


      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 my-16">

          <div className="bg-gradient-to-r from-red-600 to-green-600 md:sticky top-32 self-start">
            <div className="flex justify-center mt-5">
              <Image src={img} alt="Ziaur Rahman" className="rounded-full" />
            </div>
            <div className=" p-2 md:p-8">
              <h1 className="text-xl md:text-4xl font-bold text-white mb-5 text-center">
                শহীদ প্রেসিডেন্ট জিয়াউর রহমান
              </h1>
              <ul className="list-disc pl-5 space-y-3 text-white">
                <li>
                  <strong>জন্ম:</strong> ১৯ জানুয়ারি, ১৯৩৬
                </li>
                <li>
                  <strong>সামরিক ভূমিকা:</strong> ১৯৭১ সালের মুক্তিযুদ্ধে কমান্ডার
                </li>
                <li>
                  <strong>স্বাধীনতা ঘোষণা:</strong> ২৬ মার্চ, ১৯৭১, চট্টগ্রামে
                </li>
                <li>
                  <strong>রাষ্ট্রপতি:</strong> বাংলাদেশের রাষ্ট্রপতি (১৯৭৭ - ১৯৮১)
                </li>
                <li>
                  <strong>প্রতিষ্ঠাতা:</strong> বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি)
                </li>
                <li>
                  <strong>হত্যাকাণ্ড:</strong> ৩০ মে, ১৯৮১, চট্টগ্রামে
                </li>
              </ul>
            </div>
          </div>


          <div>
            <div>
              <h2 className="font-bold">শৈশব</h2>
              <hr className="w-24 h-2 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
              <p className="text-justify">
                জিয়াউর রহমান, যাকে প্রিয় নাম জিয়া হিসেবে পরিচিত, ১৯৩৬ সালের ১৯ জানুয়ারি বগুড়ার বাগবাড়ীতে জন্মগ্রহণ করেন। তাঁর বাবা মঞ্জুর রহমান ছিলেন একজন রসায়নবিদ, যিনি কলকাতার একটি সরকারী দপ্তরে কাজ করতেন। তিনি শৈশবের একটি অংশ বগুড়ার গ্রামীণ এলাকায় এবং আরেকটি অংশ কলকাতায় কাটান। ভারত বিভাগের পর (১৯৪৭), যখন তাঁর বাবা করাচিতে বদলি হন, জিয়া কলকাতার হেয়ার স্কুল ত্যাগ করে করাচির একাডেমি স্কুলে ভর্তি হন। তিনি ১৯৫২ সালে ওই স্কুল থেকে মাধ্যমিক শিক্ষা সম্পন্ন করেন। ১৯৫৩ সালে, তিনি করাচির ডি.জে. কলেজে ভর্তি হন। একই বছর, তিনি পাকিস্তান মিলিটারি অ্যাকাডেমিতে কাকুলে অফিসার ক্যাডেট হিসেবে যোগদান করেন।
              </p>
            </div>
            <div className="mt-10">
              <h2 className="font-bold">সেনাবাহিনীতে জীবন</h2>
              <hr className="w-24 h-2 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
              <p className="text-justify">
                জিয়াউর রহমান ১৯৫৫ সালে দ্বিতীয় লেফটেন্যান্ট হিসেবে কমিশন পান। তিনি পাকিস্তানে দুই বছর কাজ করেন। এরপর ১৯৫৭ সালে, তিনি পূর্ব বাঙলা রেজিমেন্টে বদলি হন। তিনি ১৯৫৯ থেকে ১৯৬৪ পর্যন্ত সামরিক গোয়েন্দা বিভাগেও কাজ করেছেন। ১৯৬৫ সালের ভারত-পাকিস্তান যুদ্ধের সময়, জিয়াউর রহমান কোম্পানির কমান্ডার হিসেবে খেমকারান সেক্টরে লড়াই করেন। আশ্চর্যের বিষয়, তাঁর কোম্পানি যুদ্ধের জন্য সর্বাধিক গ্যালান্ট্রি পুরস্কার পেয়েছিল। ১৯৬৬ সালে, তিনি পাকিস্তান মিলিটারি অ্যাকাডেমিতে ইনস্ট্রাক্টর হিসেবে নিযুক্ত হন। একই বছর, তিনি কোয়েটায় স্টাফ কলেজে একটি কমান্ড কোর্সে অংশগ্রহণ করতে পাঠানো হন। ১৯৬৯ সালে, তিনি দ্বিতীয় পূর্ববঙ্গ রেজিমেন্টে দ্বিতীয়-কমান্ড হিসেবে যোগ দেন। তিনি পশ্চিম জার্মানি থেকে উচ্চতর প্রশিক্ষণ লাভ করেন। ১৯৭০ সালে দেশে ফিরে, জিয়া রহমান, তখন মেজর, চট্টগ্রামের অষ্টম পূর্ববঙ্গ রেজিমেন্টে দ্বিতীয় কমান্ড হিসেবে বদলি হন।
              </p>
            </div>
            <div className="mt-10">
              <h2 className="font-bold">মুক্তিযুদ্ধে বীরত্ব</h2>
              <hr className="w-24 h-2 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
              <p className="text-justify">
                ২৫ মার্চ ১৯৭১ তারিখে মধ্যরাতে, পাকিস্তানি সামরিক বাহিনী পূর্ব পাকিস্তানের নিরস্ত্র মানুষের ওপর নির্বিচারে গুলি চালায় এবং ইতিহাসের সবচেয়ে ভয়াবহ গণহত্যা চালায়। এই গণহত্যাকে অপারেশন সার্চলাইট বলা হয়।
              </p>
              <p className="text-justify mt-5">
                মেজর জিয়া রহমান ২৫ মার্চ ১৯৭১ তারিখে পাকিস্তানের বিরুদ্ধে বিদ্রোহ করেন। এরপর ২৬ মার্চ, তিনি চট্টগ্রামের কালুরঘাট রেডিও স্টেশন থেকে বাংলাদেশের স্বাধীনতার ঘোষণা করেন। তিনি বলেন, "আমি মেজর জিয়া, বাংলাদেশ মুক্তিযুদ্ধ বাহিনীর অস্থায়ী কমান্ডার ইন চিফ, hereby বাংলাদেশ স্বাধীনতার ঘোষণা দিচ্ছি।" মুক্তিযুদ্ধের উন্মাদনার সাথে বাংলাদেশের জনগণের মনস্তাত্ত্বিক অবস্থার কারণে, এই ঘোষণা একটি অদ্ভুত প্রভাব ফেলে।
              </p>
              <p className="text-justify mt-5">
                জিয়া রহমান এবং তাঁর সৈন্যরা মুক্তিযুদ্ধের মুখ্য কেন্দ্রে চলে আসেন। মেজর জিয়া এবং তাঁর অধীনে থাকা সশস্ত্র বাহিনী চট্টগ্রাম এবং নোয়াখালী এলাকা কিছুদিন ধরে নিয়ন্ত্রণে রেখেছিল এবং পাকিস্তানি সেনাবাহিনীর চাপের মুখে সীমান্ত পার হয়ে কৌশলগত পিছু হটেন।
              </p>
              <p className="text-justify mt-5">
                জিয়া রহমান মুক্তিযুদ্ধের সময় বাংলাদেশের বাহিনীর কমান্ডার হিসেবে প্রথমে বিএডিএফ সেক্টর ১-এর প্রধান ছিলেন এবং জুন মাস থেকে বিএডিএফ সেক্টর ১১-এর কমান্ডার এবং জুলাই মাসের মধ্যভাগে জেড ফোর্সের ব্রিগেড কমান্ডার হন। মুক্তিযুদ্ধের সময়, ২৮ আগস্ট ১৯৭১ তারিখে, জিয়া রহমান মুক্তিবাহিনীর প্রথম বেসামরিক প্রশাসন রুমারিতে প্রতিষ্ঠা করেন, যা পাকিস্তানি আক্রমণকারী বাহিনীর কাছ থেকে পুনরুদ্ধার করা একটি মুক্ত এলাকা। মুক্তিযুদ্ধে তাঁর সাহসিকতার জন্য, জিয়া রহমানকে বাংলাদেশে দ্বিতীয় সর্বোচ্চ গ্যালান্ট্রি পুরস্কার ‘বীর উত্তম’ প্রদান করা হয়।
              </p>
            </div>
            <div className="mt-10">
              <h2 className="font-bold">বাংলাদেশ রাজনীতিতে অমোঘ উত্থান</h2>
              <hr className="w-24 h-2 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
              <p className="text-justify">
                নয় মাসের যুদ্ধের সময় অতি প্রশংসনীয় পারফরম্যান্সের পর, জিয়া কুমিলায় ব্রিগেড কমান্ডার হিসেবে নিয়োগিত হন। জুন ১৯৭২ সালে, তাকে বাংলাদেশ সশস্ত্র বাহিনীর ডেপুটি চিফ অফ স্টাফ করা হয়। ১৯৭৩ সালের মাঝামাঝি সময়ে, তিনি ব্রিগেডিয়ার পদে উন্নীত হন এবং বছরের শেষের দিকে মেজর জেনারেল হন। জিয়া রহমান ২৫ আগস্ট ১৯৭৫ তারিখে সেনাবাহিনীর প্রধান হন। ৩ নভেম্বর ১৯৭৫ তারিখে খালেদ মোশাররফের নেতৃত্বে ঢাকার ব্রিগেড সমর্থিত একটি অভ্যুত্থান ঘটে, যার ফলে জিয়া রহমানকে তার কমান্ড থেকে পদত্যাগ করতে বাধ্য করা হয় এবং গৃহবন্দী করা হয়। ৭ নভেম্বরের সিপাহী-জনতা বিপ্লব তাকে রাজনৈতিক ক্ষমতার কেন্দ্রে নিয়ে আসে।
              </p>
              <p className="text-justify mt-5">
                ৭ নভেম্বর ১৯৭৫ তারিখে, জিয়া রহমান সেনাবাহিনীর প্রধান হিসেবে পুনরায় নিয়োগিত হন। পরে, একই দিন সেনাবাহিনী সদর দফতরে একটি নতুন প্রশাসনিক কাঠামো তৈরি করা হয়, যেখানে বিচারপতি এএসএম সায়েম প্রধান সামরিক আইন প্রশাসক হিসেবে এবং তিনটি সেবা প্রধান, মেজর জেনারেল জিয়া, এয়ার ভাইস মার্শাল এমজি টাওয়াব এবং রিয়ার অ্যাডমিরাল এমএইচ খান, উপ-মুখ্য সামরিক আইন প্রশাসক হিসেবে নিযুক্ত হন। বিচারপতি সায়েম তার পদ ত্যাগ করার পর ১৯ নভেম্বর ১৯৭৬ তারিখে জিয়া রহমান প্রধান সামরিক আইন প্রশাসক হন এবং ২১ এপ্রিল ১৯৭৭ তারিখে প্রেসিডেন্ট সায়েমের পদত্যাগের পর বাংলাদেশে রাষ্ট্রপতি হন।
              </p>
              <p className="text-justify mt-5">
                স্বাধীনতার পরবর্তী সরকারের সময় দেশের আইন-শৃঙ্খলা পরিস্থিতি ব্যাপকভাবে খারাপ হয়ে পড়েছিল। ক্ষমতায় আসার পর, জিয়া অবিলম্বে দেশের আইন-শৃঙ্খলা পুনঃস্থাপন এবং পুলিশ বাহিনী শক্তিশালী করার জন্য পদক্ষেপ নেন, এর আকার প্রায় দ্বিগুণ করে ৪০,০০০ থেকে ৭০,০০০ করে এবং যথাযথ প্রশিক্ষণ প্রদান করেন। তিনি সশস্ত্র বাহিনীতেও আইন-শৃঙ্খলা পুনঃস্থাপন করেন। এর জন্য, তিনি কিছু পদক্ষেপ গ্রহণ করেন, প্রশিক্ষণের মাধ্যমে পেশাদারিত্বের উন্নয়ন এবং শৃঙ্খলা পুনঃস্থাপন করতে। ১৯৭৪-৭৫ সালে ৫০,০০০ এরও কম শক্তি থেকে ১৯৭৬-৭৭ সালে প্রায় ৯০,০০০ জনে বৃদ্ধি পায়। যদিও জিয়া সশস্ত্র বাহিনীতে শৃঙ্খলা পুনঃস্থাপনে সফল ছিলেন, তবে তিনি বিভিন্ন স্বার্থের অস্তিত্ব এবং অপারেশন, অভ্যুত্থান ও বিদ্রোহের কারণে কঠিন সময়ের মুখোমুখি হন, যা তাকে শৃঙ্খলা লঙ্ঘনকারী এবং বিদ্রোহে অংশগ্রহণকারীদের বিরুদ্ধে কঠোর ব্যবস্থা নিতে বাধ্য করে।
              </p>
            </div>
            <div className="mt-10">
              <h2 className="font-bold">অর্থনৈতিক সংস্কার</h2>
              <hr className="w-24 h-2 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
              <p className="text-justify">
                রাষ্ট্রপতি হিসেবে, জিয়া রহমান জাতীয় অর্থনীতিতে গুরুত্বপূর্ণ অবদান রাখেন। তিনি দেশের অর্থনৈতিক প্রবৃদ্ধির জন্য একটি প্রগতিশীল অর্থনৈতিক নীতি গ্রহণ করেন। তাঁর প্রশাসন বেসরকারি খাতের উন্নয়নে গুরুত্ব দেয় এবং একটি নতুন অর্থনৈতিক নীতি প্রবর্তন করেন যা বেসরকারি উদ্যোগকে উৎসাহিত করে এবং বিদেশী বিনিয়োগ আকর্ষণ করে। জিয়া রহমানের নেতৃত্বে, বাংলাদেশের অর্থনীতি একটি স্থিতিশীল পথে প্রবাহিত হয় এবং সুশাসন প্রতিষ্ঠার লক্ষ্যে পদক্ষেপ নেওয়া হয়।
              </p>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default page;
