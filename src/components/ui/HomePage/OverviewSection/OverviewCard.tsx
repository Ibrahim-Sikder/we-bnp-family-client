import React from "react";
import "./OverviewSection.css";
import Container from "@/components/shared/Container";
import { Button } from "@mui/material";
import icon from '../../../../assets/images/icons/icon.jpeg'
import Image from "next/image";
import Link from "next/link";
import { LanguageProps } from "@/types";

const OverviewCard = ({ language }: LanguageProps) => {

    const buttonStyle = {
        width: { xs: "100px", md: "180px", sm: "140px", },
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
                                <h1 className="text-xl md:text-4xl">{language === 'ENG' ? 'Our means of sending information' : 'আমাদের তথ্য পাঠানোর মাধ্যম'}</h1>
                                <p className="leading-6  md:leading-8 text-sm md:text-xl my-3">

                                    {language === 'ENG' ? 'Send us pictures, video documents of you and your partner. So that we can easily stand by our brothers.' : 'আপনার ও আপনার পাশের নির্যাতিত তথ্য চিত্র, ভিডিও ডকুমেন্টস পাঠান আমাদেরকে। যেন আমরা সহজেই আমাদের ভাইদের পাশে দাঁড়াতে পারি।'}
                                </p>
                                <div className=" bnpBtnStyle">
                                    <Button component={Link} href='/information' sx={buttonStyle}> <span>
                                        {language === 'ENG' ? 'Send Information' : 'তথ্য পাঠান'}

                                    </span> </Button>
                                </div>
                            </div>

                            <div>
                                <div className=" grid grid-cols-2 gap-10">

                                    <div className="iconWraps ">

                                        <h1 className="text-xl md:text-3xl font-bold text-red-500">
                                        {language === 'ENG' ? '700+' : '৭০০+'}
                                        
                                        </h1>
                                        <p className="md:text-3xl font-fold text-red-500"> {language === 'ENG' ? 'Missing' : 'গুম'}

                                        </p>
                                    </div>
                                    <div className="iconWraps ">

                                        <h1 className="text-xl md:text-3xl font-bold  text-red-500">
                                        {language === 'ENG' ? '300+' : '৩০০০+'}  
                                        </h1>
                                        <p className="md:text-3xl font-fold  text-red-500"> {language === 'ENG' ? 'Murder' : 'খুন'}   </p>
                                    </div>


                                    <div className="iconWraps ">


                                        <h1 className="text-xl md:text-3xl font-bold  text-red-500">
                                             {language === 'ENG' ? '150,000+' : '১৫০,০০০+'}
                                        </h1>
                                        <p className="md:text-3xl font-fold text-red-500">
                                            {language === 'ENG' ? 'Case' : 'মামলা'}

                                        </p>
                                    </div>
                                    <div className="iconWraps ">

                                        <h1 className="text-xl md:text-3xl  font-bold  text-red-500">
                                        {language === 'ENG' ? '50,00,000+' : '৫০,০০,০০০+'}
                                        </h1>
                                        <p className="md:text-3xl font-fold text-red-500"> {language === 'ENG' ? 'Accused' : 'আসামি'}  </p>
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
                        <p> {language === 'ENG' ? 'Deshanayak Tariq Rahman, one of the political figures of Bangladesh, has long stood by the victimized family.' : 'দেশনায়ক তারেক রহমান, বাংলাদেশের অন্যতম রাজনৈতিক ব্যক্তিত্ব, দীর্ঘদিন ধরে নির্যাতিত পরিবারের পাশে দাঁড়িয়ে আসছেন।'}  </p>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default OverviewCard;
