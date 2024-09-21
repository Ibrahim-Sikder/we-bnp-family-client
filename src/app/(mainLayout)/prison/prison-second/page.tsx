/* eslint-disable react/no-unescaped-entities */

import Container from "@/components/shared/Container";
import "../../murdered/Murder.css";

import prison4 from "../../../../assets/images/murtyre/murtyre.jpeg";

import Image from "next/image";
import { Typography } from "@mui/material";
import {
  KeyboardArrowRight
} from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import ShareLink from "@/components/ShareLink/ShareLink";
const page = () => {
  return (
    <>
      <div className="bannerWrap">
        <div className="bannerContent">
          <h3 className="text-xl  md:text-4xl font-semibold ">কারাগারে নির্যাতন</h3>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 my-20">
          <div className="xl:col-span-9">
            <div className="murderRightSide">
              <div className="imgWrap">
                <Image className="w-full" src={prison4} alt="banner" />
              </div>
              <div className="my-10">
                <h2>
                  চট্টগ্রাম কারাগারে বিএনপি নেতার মৃত্যু
                </h2>
                <div className="space-y-5">


                  <p className="text-xl mt-3">

                    চট্টগ্রাম কেন্দ্রীয় কারাগারে মিরসরাই পৌরসভা বিএনপির আহ্বায়ক ফকির আহমদের (৬০) মৃত্যু হয়েছে। মঙ্গলবার (১৬ই নভেম্বর) সকালে তার মৃত্যু হয়।


                  </p>
                  <p>
                    বিষয়টি নিশ্চিত করেছেন চট্টগ্রাম কারাগারের জেলার দেওয়ান মোহাম্মদ তারিকুল ইসলাম।</p>
                  <p>তিনি বলেন, কারাগারে থাকা ফকির আহমদ নামের এক কয়েদির সকাল সোয়া ৮টার দিকে বুকে ব্যথা হলে প্রথমে কারা হাসপাতালে নেওয়া হয়। পরে সেখান থেকে চট্টগ্রাম মেডিক্যাল কলেজ হাসপাতালে নেওয়া হলে চিকিৎসক মৃত ঘোষণা করেন।</p>
                  <p>কারাগার সূত্রে জানা গেছে, ফকির আহম্মদের হাজতি নম্বর-১৭০৯৫/২১। ফকির আহম্মদ হাটহাজারী থানার মামলায় কারাগারে ছিলেন।</p>
                  <p>গত ১৮ই অক্টোবর হাটহাজারীর মন্দির ভাঙচুর ও সহিংসতা মামলায় মিরসরাই পৌরসভা বিএনপির আহ্বায়ক ফকির আহমেদসহ তিন জনকে মিরসরাই থানা পুলিশ গ্রেপ্তার করে। এরপর থেকে ফকির আহমদ কারাগারে ছিলেন।</p>
                  <p>ফকির আহম্মদের মৃত্যুতে গভীর শোক ও দুঃখ প্রকাশ করেছেন কেন্দ্রীয় বিএনপির চট্টগ্রাম বিভাগ সাংগঠনিক সম্পাদক মাহবুবের রহমান শামীম। দুপুরে গণমাধ্যমে পাঠানো এক শোকবার্তায় তিনি বলেন, তার মতো একজন রাজনীতিবিদের মৃত্যুতে বিএনপি একজন দক্ষ সংগঠক ও একনিষ্ঠ কর্মীকে হারাল। তিনি ফারুক আহমেদের আত্মার মাগফেরাত কামনা করেন এবং শোকসন্তপ্ত পরিবারের সদস্যদের প্রতি গভীর সমবেদনা জানান।</p>
                </div>
                <div className="flex gap-10">
                  <div className="flex flex-col mt-5 ">
                    <b> প্রকাশিত পত্রিকার নাম  </b>
                    <b>সংবাদ প্রকাশের তারিখ </b>
                    <b> পত্রিকার প্রকাশিত লিংক</b>
                  </div>
                  <div className="flex flex-col mt-5 ">
                    <span>: ডিবিসি নিউজ</span>
                    <span>: ১৬ই নভেম্বর ২০২১ ০৮:৫৩:৩৯ অপরাহ্ন
                    </span>
                    <span>: <Link target="_blank" href="https://dbcnews.tv/articles/%E0%A6%9A%E0%A6%9F%E0%A7%8D%E0%A6%9F%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE-%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BE%E0%A6%97%E0%A6%BE%E0%A6%B0%E0%A7%87-%E0%A6%AC%E0%A6%BF%E0%A6%8F%E0%A6%A8%E0%A6%AA%E0%A6%BF-%E0%A6%A8%E0%A7%87%E0%A6%A4%E0%A6%BE%E0%A6%B0-%E0%A6%AE%E0%A7%83%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A7%81">
                      <button className=" bg-gradient-to-r from-red-600 to-green-600 text-white py-1 text-[10px] px-3  rounded inline-block font-semibold uppercase">
                        লিংক দেখুন
                      </button>
                    </Link>
                    </span>
                  </div>
                </div>
              </div>
              <ShareLink />



            </div>
          </div>
          <div className="xl:col-span-3">
            <div className="murderLeftSide">
              <div className="space-y-3">
                <div className="leftCard">
                  <Typography variant="body2" className="leftCard-text">
                    গুমের তালিকা
                  </Typography>
                  <KeyboardArrowRight className="leftCard-icon" />
                </div>
                <div className="leftCard">
                  <Typography variant="body2" className="leftCard-text">
                    শহীদদের তালিকা
                  </Typography>
                  <KeyboardArrowRight className="leftCard-icon" />
                </div>

                <div className="leftCard">
                  <Typography variant="body2" className="leftCard-text">
                    কারা নির্যাতন
                  </Typography>
                  <KeyboardArrowRight className="leftCard-icon" />
                </div>


                <div className="leftCard">
                  <Typography variant="inherit" className="leftCard-text">
                    আওয়ামী লীগের নির্যাতন
                  </Typography>
                  <KeyboardArrowRight className="leftCard-icon" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </>
  );
};

export default page;
