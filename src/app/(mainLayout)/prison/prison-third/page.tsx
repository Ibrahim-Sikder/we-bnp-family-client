/* eslint-disable react/no-unescaped-entities */

import Container from "@/components/shared/Container";
import "../../murdered/Murder.css";
import banner from "../../../../assets/images/prison/karagar.webp";
import prison2 from "../../../../assets/images/prison/prison3.jpg";
import Image from "next/image";
import {
    Typography,
} from "@mui/material";
import {
    KeyboardArrowRight
} from "@mui/icons-material";
import Link from "next/link";
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
                                <Image className="w-full" src={prison2} alt="banner" />
                            </div>
                            <div className="my-10">
                                <h2>
                                    কাশিমপুর কারাগারে বিএনপি নেতার মৃত্যু
                                </h2>
                                <div className="space-y-5">


                                    <p className="text-xl mt-3">

                                        ২৮ অক্টোবর ঢাকায় বিএনপির মহাসমাবেশে যাওয়ার পর হিরা খান গ্রেপ্তার হন বলে জানিয়েছেন দলের নেতারা।


                                    </p>
                                    <p>
                                        নাশকতা ও ভাঙচুর মামলার আসামি এক বিএনপি নেতা কাশিমপুর কেন্দ্রীয় কারাগারে মারা গেছেন।</p>
                                    <p>শুক্রবার সকালে তিনি মারা যান বলে জানিয়েছেন কাশিমপুর কেন্দ্রীয় কারাগার-২-এর সুপার মো. আমিরুল ইসলাম।  </p>
                                    <p>মৃত আসাদুজ্জামান হিরা খান (৪৫) গাজীপুরের শ্রীপুর উপজেলার কাওরাইদ ইউনিয়নের ধামলই গ্রামের গিয়াস উদ্দিন খানের ছেলে।</p>
                                    <p>সুপার আমিরুল জানান, শ্রীপুর থানার নাশকতা ও ভাঙচুর মামলার আসামি হিসেবে কারাবন্দি ছিলেন হিরা খান। শুক্রবার সকাল ১১টার দিকে তিনি কারাগারে বুকে ব্যথা অনুভব করেন।</p>


                                    <p>পরে তাকে দ্রুত শহীদ তাজউদ্দীন আহমদ মেডিকেল কলেজ হাসপাতালে পাঠানো হলে চিকিৎসক মৃত ঘোষণা করেন।</p>

                                    <p>কাওরাইদ ইউনিয়ন বিএনপির সাধারণ সম্পাদক সামসুল হক জানান, হিরা ইউনিয়ন বিএনপির ৬ নম্বর ওয়ার্ডের সাধারণ সম্পাদক ছিলেন।</p>
                                    <p>দলীয় ও পারিবারিক সূত্রের বরাতে তিনি জানান, ২৮ অক্টোবর ঢাকায় বিএনপির মহাসমাবেশে গিয়েছিলেন হিরা খান। সমাবেশে যাওয়ার পর তারা জানতে পারেন তিনি গ্রেপ্তার হয়েছেন। তারপর থেকে আদালতে একাধিকবার জামিন চেয়েও পাননি তিনি।</p>


                                </div>
                                <div className="flex gap-10">
                                    <div className="flex flex-col mt-5 ">
                                        <b> প্রকাশিত পত্রিকার নাম  </b>
                                        <b>সংবাদ প্রকাশের তারিখ </b>
                                        <b> পত্রিকার প্রকাশিত লিংক</b>
                                    </div>
                                    <div className="flex flex-col mt-5 ">
                                        <span>: Banlga News 24</span>
                                        <span>: ০১ ডিসেম্বর ২০২৩</span>
                                        <span>: <Link target="_blank" href="">
                                            <button className=" bg-gradient-to-r from-red-600 to-green-600 text-white py-1 text-[10px] px-3  rounded inline-block font-semibold uppercase">
                                                লিংক দেখুন
                                            </button>
                                        </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>




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
