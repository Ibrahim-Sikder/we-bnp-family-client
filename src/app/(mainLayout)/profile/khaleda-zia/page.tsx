import React from "react";
import img from "../../../../../src/assets/images/hero/hero2.jpg";
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
              <Image src={img} alt="Begum Khaleda Zia" className="rounded-full" />
            </div>
            <div className="p-2 md:p-8">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-5 text-center">
                বেগম খালেদা জিয়া
              </h1>
              <ul className="list-disc pl-5 space-y-3 text-white">
                <li>
                  <strong>জন্ম:</strong> ১৫ আগস্ট, ১৯৪৫
                </li>
                <li>
                  <strong>রাজনৈতিক পার্টি:</strong> বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি)
                </li>
                <li>
                  <strong>প্রধানমন্ত্রী:</strong> ১৯৯১-১৯৯৬, ২০০১-২০০৬
                </li>
                <li>
                  <strong>প্রথম নারী প্রধানমন্ত্রী:</strong> বাংলাদেশের প্রথম মহিলা প্রধানমন্ত্রী
                </li>
                <li>
                  <strong>স্বামী:</strong> জিয়াউর রহমান
                </li>
                <li>
                  <strong>ঐতিহ্য:</strong> বাংলাদেশের রাজনীতিতে একটি গুরুত্বপূর্ণ ব্যক্তিত্ব এবং বিএনপি’র নেত্রী
                </li>
              </ul>
            </div>
          </div>
          {/* কনটেন্ট সেকশন */}
          <div className="px-5 py-10">
            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-2">প্রাথমিক জীবন</h2>
              <hr className="w-24 h-2 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
              <p className="text-justify">
                বেগম জিয়া ১৫ আগস্ট ১৯৪৬ তারিখে দিনাজপুর জেলায় ইস্কান্দার মজুমদার এবং তায়েবা মজুমদারের সন্তান হিসেবে জন্মগ্রহণ করেন। তার বাবা পার্টিশনের পর পশ্চিম পাকিস্তানে চলে গিয়েছিলেন যেখানে তিনি চায়ের ব্যবসা করেছিলেন। পরিবারের মূল স্থান ফেনি জেলার দক্ষিণ-পূর্বাঞ্চল। তিনি দিনাজপুর গভর্নমেন্ট গার্লস হাই স্কুল এবং পরে সুরেন্দ্রনাথ কলেজে পড়াশোনা করেন। ১৯৬০ সালে তিনি জিয়াউর রহমানকে বিয়ে করেন।
              </p>
            </div>

            {/* <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-2">প্রথম স্ত্রী</h2>
              <hr className="w-24 h-2 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
              <p className="text-justify">
                যখন জিয়াউর রহমান বীর উত্তম বাংলাদেশে রাষ্ট্রপতি হন, তখন বেগম জিয়া প্রথম স্ত্রী হিসেবে তার সাথে বিশ্ব নেতাদের সাথে সাক্ষাৎ করেন, যার মধ্যে যুক্তরাজ্যের প্রধানমন্ত্রী মার্গারেট থ্যাচার এবং নেদারল্যান্ডসের রাণী জুলিয়ানা অন্তর্ভুক্ত ছিলেন।
              </p>
            </div> */}

            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-2">রাজনৈতিক ক্যারিয়ারের শুরু</h2>
              <hr className="w-24 h-2 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
              <p className="text-justify">
                ১৯৮১ সালে রাষ্ট্রপতি জিয়ার শহীদ হওয়ার পর, তিনি ২ জানুয়ারি ১৯৮২ তারিখে বিএনপিতে সাধারণ সদস্য হিসেবে যোগ দেন। ১৯৮৩ সালের মার্চ মাসে তিনি দলের ভাইস চেয়ারম্যান নির্বাচিত হন এবং আগস্ট ১৯৮৪ সালে তাকে দলের চেয়ারপার্সন নির্বাচিত করা হয়।
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-2">গণতন্ত্রের জন্য আন্দোলন</h2>
              <hr className="w-24 h-2 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
              <p className="text-justify">
                ১৯৮২ সালে বাংলাদেশ সেনাবাহিনীর প্রধান জেনারেল হুসেইন মুহাম্মদ এরশাদের নেতৃত্বে এক সামরিক অভ্যুত্থানের পর, খালেদা জিয়া গণতন্ত্র পুনঃপ্রতিষ্ঠার জন্য একটি ব্যাপক আন্দোলনের সূচনা করেন। তিনি ১৯৮৩ সালে সাতদলীয় জোট গঠনের জন্য প্রধান ভূমিকা পালন করেন এবং এরশাদের স্বৈরশাসন শেষ করার জন্য আন্দোলন চালিয়ে যান। ১৯৮৬ সালের নির্বাচনে তিনি অংশগ্রহণ করেননি এবং তার প্রতিদ্বন্দ্বীরা জাপা নেতৃত্বাধীন সরকারে নির্বাচনে অংশ নেন। তার দৃঢ় প্রতিজ্ঞার কারণে, ১৯৮৩ থেকে ১৯৯০ সালের মধ্যে তাকে সাতবার আটক করা হয়।
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-2">প্রথম মেয়াদে প্রধানমন্ত্রী</h2>
              <hr className="w-24 h-2 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
              <p className="text-justify">
                ১৯৯১ সালে, খালেদা জিয়া একটি মুক্ত ও সুষ্ঠু সাধারণ নির্বাচনের মাধ্যমে বাংলাদেশের প্রথম মহিলা প্রধানমন্ত্রী হন। তার প্রধানমন্ত্রীত্বের সময়, বাংলাদেশ একটি সংসদীয় গণতন্ত্রে পরিণত হয়। তার মেয়াদে অনেক বড় অর্থনৈতিক পরিবর্তন ঘটে এবং রপ্তানি শিল্পে কর্মসংস্থান বৃদ্ধি পায়।
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-2">আন্তর্জাতিক কূটনীতি</h2>
              <hr className="w-24 h-2 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
              <p className="text-justify">
                আন্তর্জাতিক অঙ্গনে, তিনি গঙ্গা পানি ভাগাভাগি সমস্যাটি জাতিসংঘে উত্থাপন করেন এবং প্রতিবেশী দেশগুলির ওপর চাপ সৃষ্টি করেন যাতে বাংলাদেশ গঙ্গার পানি ন্যায়বিচার পায়। ১৯৯২ সালে, তিনি হোয়াইট হাউসে আমন্ত্রণ পান যেখানে তিনি রোহিঙ্গা মুসলমান শরণার্থীদের সমস্যা উত্থাপন করেন এবং আন্তর্জাতিক চাপের কারণে মিয়ানমার সরকার বাংলাদেশে ফিরে আসার জন্য একটি চুক্তি করে।
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-2">দ্বিতীয় মেয়াদে প্রধানমন্ত্রী</h2>
              <hr className="w-24 h-2 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
              <p className="text-justify">
                ১৯৯৬ সালে, বিএনপি বিশাল বিজয় লাভ করে এবং খালেদা জিয়া দ্বিতীয় মেয়াদে প্রধানমন্ত্রী হন। তবে, একটি তত্ত্বাবধায়ক সরকারের কাছে ক্ষমতা হস্তান্তর করার জন্য তার প্রতিশ্রুতি এবং পুনরায় নির্বাচনের জন্য পদত্যাগ করেন। জুন ১৯৯৬ সালের নির্বাচনে বিএনপি পরাজিত হলেও, দলটি পার্লামেন্টে ১১৬টি আসন জিতে সর্ববৃহৎ বিরোধী দল হয়ে ওঠে।
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-2">তৃতীয় মেয়াদে প্রধানমন্ত্রী</h2>
              <hr className="w-24 h-2 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
              <p className="text-justify">
                ক্ষমতায় ফেরার জন্য, বিএনপি ১৯৯৯ সালে চার-পার্টির বিরোধী জোট গঠন করে এবং আওয়ামী লীগ সরকারের বিরুদ্ধে বিভিন্ন আন্দোলন শুরু করে। খালেদা জিয়া ২০০১ সালে পুনরায় নির্বাচিত হন, দুর্নীতি এবং সন্ত্রাসবাদ নির্মূল করার প্রতিশ্রুতি দিয়ে। ২০০৫ সালে ফোর্বস ম্যাগাজিন তাকে বিশ্বের শতাধিক শক্তিশালী নারীর তালিকায় ২৯তম স্থানে স্থান দেয়।
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-2">মেয়াদের শেষ এবং চ্যালেঞ্জ</h2>
              <hr className="w-24 h-2 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
              <p className="text-justify">
                ২০০৬ সালে নির্বাচনোত্তর সংঘাতের কারণে, খালেদা জিয়া রাজনৈতিক অস্থিরতার শিকার হন এবং তার মেয়াদ শেষ হয়। পরবর্তী সময়ে, তাকে দুর্নীতির অভিযোগে গ্রেপ্তার করা হয় এবং পরবর্তীতে মুক্তি পান। ২০১০ সালে খালেদা জিয়া বাংলাদেশের সন্ত্রাসবাদ ও দুর্নীতির বিরুদ্ধে লড়াইয়ের জন্য আন্তর্জাতিক সম্মাননা অর্জন করেন। তার রাজনৈতিক ক্যারিয়ার আজও বাংলাদেশ রাজনীতিতে একটি গুরুত্বপূর্ণ অধ্যায়।
              </p>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default page;
