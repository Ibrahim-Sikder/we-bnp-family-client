'use client'

import Container from "@/components/shared/Container";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import bannerImage from "../../../../../src/assets/images/banner/newSlider.jpeg";
import { Button } from "@mui/material";
import { East } from "@mui/icons-material";
import './Media.css'
import { TReport } from "@/types/report";
import { useReportData } from "@/hooks/useReportData";
import { useLanguage } from "@/provider/LanguageProvider";
const MediaPage = () => {
    const { reportData } = useReportData()
    const { language } = useLanguage()

    
    const mediaReportData = reportData.filter((item: any) => item.category === 'মিডিয়ায় প্রকাশিত তথ্য')

    const smallBtnStyle = {
        background: "#2B8444",
        color: "#fff",
        borderRadius: "10px",
        marginTop: "5px",
        width: "25px",
        height: "25px",
        padding: '0px'
    }

    return (
        <div>
            <div className="relative h-80 md:h-96 lg:h-[350px] bg-gray-800 overflow-hidden">
                <Image
                    src={bannerImage}
                    alt="Blog Banner"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-75"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-5">
                    <h1 className="text-4xl md:text-6xl font-bold text-center">
                        মিডিয়ায় প্রকাশিত তথ্য
                    </h1>
                    <p className="text-lg md:text-2xl mt-3 text-center">

                    </p>
                </div>
            </div>
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-5 mt-10">
                    {mediaReportData?.slice(0, 3)?.map((report: TReport) => (
                        <div key={report._id} className="blogCard mt-5">
                            <div className="blogImgWrap">
                                {report?.bng_Images?.slice(0, 1)?.map((img) => {

                                    return <Image src={img} alt="hero" width={1000}
                                        height={500} key={img} />
                                })}
                            </div>
                            <div className="blogCardContent">

                                <h5 className="font-semibold ">
                                    {language === 'ENG' ? report?.english_title?.slice(0, 50) : report?.bangla_title?.slice(0, 50)}...

                                </h5>
                                <p>
                                    {language === 'ENG' ? report?.english_short_description?.slice(0, 100) : report?.bangla_short_description?.slice(0, 100)}...
                                </p>
                                <Link href={`/report/${report._id}`}>
                                    <Button sx={smallBtnStyle}>
                                        <span>
                                            <East sx={{ fontSize: "15px" }} />
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>






            </Container>
        </div>
    );
};

export default MediaPage;
