import Image from "next/image";
import React from "react";
import banner2 from "../../../../assets/images/flood/new.jpg";
import banner1 from "../../../../assets/images/banner/banner7.jpg";
import flood from "../../../../assets/images/flood/flood7.jpeg";
import flood2 from "../../../../assets/images/flood/flood8.jpeg";
import flood3 from "../../../../assets/images/flood/flood9.jpeg";

import Container from "@/components/shared/Container";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Sidebar from "@/components/ui/HomePage/Sidebar/Sidebar";
import ShareLink from "@/components/ShareLink/ShareLink";
import Link from "next/link";
import PublishInfo from "@/components/PublishInfo/PublishInfo";

const DetailsPage = () => {
  return (
    <>
      <div>
        <div className='bannerWrap'>
          <div className="bannerContent">
            <h3 className='text-xl w-full  md:text-4xl font-semibold '>নির্যাতিত ও অসহায় পরিবারের পাশে দেশনায়ক তারেক রহমান</h3>
          </div>
        </div>
        <Container>
          <div className=" grid grid-cols-12 gap-10 my-20">
            <div className="xl:col-span-9">
              <div className=" h-full  text-lg ">
                <div className="space-y-4 md:space-y-4 lg:space-y-8 xl:space-y-8">
                  <Image
                    src={banner2}
                    className="h-auto w-full rounded-lg"
                    alt="Cover Image"
                  />
                  <h3>ফেনীতে বন্যার্তদের পাশে ‘আমরা বিএনপি পরিবার</h3>
                  <p className="text-justify">
                    ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল।

                    মঙ্গলবার (২৭ আগস্ট) দিনব্যাপী ফেনী সদর উপজেলায় ‘আমরা বিএনপি পরিবার’ ব্যানারে ত্রাণ বিতরণ করেন।

                    ‘আমরা বিএনপি পরিবার’র প্রধান পৃষ্ঠপোষক বিএনপির ভারপ্রাপ্ত চেয়ারম্যান তারেক রহমানের নির্দেশনায় শর্শদি বাজার এলাকায় শরিষাদী উচ্চ বিদ্যালয় প্রাঙ্গণে স্থানীয় বন্যার্তদের মাঝে ত্রাণ-সামগ্রী বিতরণ করেন সেলের সদস্য ও স্বেচ্ছাসেবকরা।
                  </p>

                  <div className="bg-gray-100 rounded-lg p-4 md:p-6 lg:p-8 xl:p-8 space-y-2 lg:px-20 xl:px-20">
                    <p className="text-justify italic text-xl">
                      <FormatQuoteIcon className="rotate-180" />
                      ত্রাণসামগ্রীর মধ্যে ছিল- চিড়া, গুড়, চাল, আলু, স্যালাইন, নাপা/প্যারাসিটামল, শিশু পোশাক, বড়দের জন্য শাড়ি, লুঙ্গি, গামছা, মোমবাতি, লাইটার, টর্চলাইট প্রভৃতি।
                      <FormatQuoteIcon />
                    </p>
                  </div>

                  <div className="lg:flex xl:flex lg:gap-5 xl:gap-5 my-2 space-y-4 md:space-y-0 lg:space-y-0 xl:space-y-0 ">
                    <Image
                      src={flood}
                      className="lg:w-[260px] h-[300px] object-cover rounded-lg"
                      alt="this is cover img"
                    />
                    <Image
                      src={flood2}
                      className="lg:w-[260px] object-cover h-[300px] rounded-lg"
                      alt="this is cover img"
                    />
                    <Image
                      src={flood3}
                      className="lg:w-[260px] object-cover h-[300px] rounded-lg"
                      alt="this is cover img"
                    />
                  </div>
                  <p className="text-justify">
                    ত্রাণ বিতরণ কর্মসূচিতে উপস্থিত ছিলেন- ‘আমরা বিএনপি পরিবার’-এর উপদেষ্টা ইঞ্জিনিয়ার আশরাফ উদ্দিন বকুল, সেলটির আহ্বায়ক সাংবাদিক আতিকুর রহমান রুমন, সদস্য সচিব কৃষিবিদ মোকছেদুল মোমিন (মিথুন), সদস্য মাসুদ রানা লিটন, মুসতাকিম বিল্লাহ, শাকিল আহমেদ, শাহাদত হোসেন, জাতীয়তাবাদী ছাত্রদলের কেন্দ্রীয় সহ-সভাপতি হাবিবুল বাশার, সাবেক সহসভাপতি জামিল হোসেন, বেসরকারি বিশ্ববিদ্যালয় ছাত্রদলের সহসভাপতি শারিফুল ইসলাম, সহসাংগঠনিক মশিউর রহমান মহান প্রমুখ।
                  </p>

                 <PublishInfo name="The Daily Star Bangla" time="" link=""/>

                </div>

                  <ShareLink />
              </div>
            </div>


            <div className="xl:col-span-3">
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
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default DetailsPage;
