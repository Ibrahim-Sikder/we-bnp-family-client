import React from "react";
import "./ExperienceSection.css";
import Container from "@/components/shared/Container";
import { Button } from "@mui/material";
import icon from '../../../../assets/images/icons/icon.jpeg'
import Image from "next/image";
import Link from "next/link";
const Experience = () => {

    const buttonStyle = {
        width: { xs: "100px", md: "140px", sm: "140px", },
        height: { md: "40px", xs: "30px", },
        fontSize: { md: "14px", xs: "9px", xl: "16px" },
        borderRadius: "30px",
        background: "#2B8444",
    };

    return (
        <>
            <div className="experienceWraps sectionMargin ">
                <Container>
                    <div className="experienceContent">

                        <div className="flex lg:flex-row flex-col justify-between items-center w-full xl:w-[1200px] lg:w-[1000px] gap-10  ">
                            <div className="w-full md:w-[500px]">
                                <h1 className="text-xl md:text-4xl">আমাদের তথ্য পাঠানোর মাধ্যম</h1>
                                <p className="leading-6  md:leading-8 text-sm md:text-xl my-3"> আপনার ও আপনার পাশের নির্যাতিত তথ্য চিত্র, ভিডিও ডকুমেন্টস পাঠান আমাদেরকে। যেন আমরা সহজেই আমাদের ভাইদের পাশে দাঁড়াতে পারি। </p>
                                <div className=" bnpBtnStyle">
                                    <Button component={Link} href='/information' sx={buttonStyle}> <span>তথ্য পাঠান</span> </Button>
                                </div>
                            </div>

                            <div>
                                <div className=" grid grid-cols-2 gap-10">

                                    <div className="iconWraps ">

                                        <h1 className="text-xl md:text-3xl font-bold text-red-500">
                                            ৭০০+
                                        </h1>
                                        <p className="md:text-3xl font-fold text-red-500"> গুম

                                        </p>
                                    </div>
                                    <div className="iconWraps ">

                                        <h1 className="text-xl md:text-3xl font-bold  text-red-500">
                                            ৩০০০+
                                        </h1>
                                        <p className="md:text-3xl font-fold  text-red-500">খুন  </p>
                                    </div>


                                    <div className="iconWraps ">


                                        <h1 className="text-xl md:text-3xl font-bold  text-red-500">
                                            ১৫০,০০০+
                                        </h1>
                                        <p className="md:text-3xl font-fold text-red-500">মামলা </p>
                                    </div>
                                    <div className="iconWraps ">

                                        <h1 className="text-xl md:text-3xl  font-bold  text-red-500">
                                            ৫০,০০০০০+
                                        </h1>
                                        <p className="md:text-3xl font-fold text-red-500"> আসামি </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="victime">
                        <div className="victimIconWrap">
                            <div className="victimImgWraps">
                                <Image className="rounded-full object-cover" src={icon} width={30} height={30} alt='victime' />
                            </div>
                        </div>
                        <p>দেশনায়ক তারেক রহমান, বাংলাদেশের অন্যতম রাজনৈতিক ব্যক্তিত্ব, দীর্ঘদিন ধরে নির্যাতিত পরিবারের পাশে দাঁড়িয়ে আসছেন। </p>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Experience;
