/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client'

import Container from "@/components/shared/Container";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReactHtmlParser from "react-html-parser";
import CommonBanner from "../_component/Banner";
import { TReport } from "@/types/report";
import Category from "@/components/shared/Category/Category";
import ShareLink from "@/components/ShareLink/ShareLink";
import RecentReportList from "./RecentReportList";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
import Loading from "@/app/loading";
import { TProgramm } from "@/types";
import { useParams } from "next/navigation";
import { useLanguage } from "@/provider/LanguageProvider";
import { boxStyle } from "@/utils/style";


const renderContent = (content: string) => {
    const parsedContent = ReactHtmlParser(content);

    return parsedContent.map((element, index) => {
        if (element.type === "h1") {
            return (
                <h1 key={index} className="text-2xl font-bold mb-2">
                    {element.props.children}
                </h1>
            );
        } else if (element.type === "h2") {
            return (
                <h2 key={index} className="text-xl font-bold mb-2">
                    {element.props.children}
                </h2>
            );
        } else if (element.type === "h3") {
            return (
                <h3 key={index} className="text-lg font-bold mb-2">
                    {element.props.children}
                </h3>
            );
        } else if (element.type === "img") {
            return (
                <div key={index} className="w-[700px] h-[400px]">
                    <img

                        src={element.props.src}
                        alt="this is image"
                        className="mb-2"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
            );
        }
        else if (element.type === "p") {
            return (
                <p key={index} className="mb-2">
                    {element.props.children}
                </p>
            );
        } else if (element.type === "video") {
            return (
                <video
                    key={index}
                    className="w-full h-auto mb-4"
                    controls
                    src={element.props.src}
                >
                    Your browser does not support the video tag.
                </video>
            );
        } else if (element.type === "iframe") {
            return (
                <iframe
                    key={index}
                    className="w-full h-[500px] mb-4"
                    src={element.props.src}
                    title={`iframe-${index}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            );
        } else if (
            element.type === "div" &&
            element.props.className === "ql-align-center"
        ) {
            return (
                <div key={index} className="text-center mb-2">
                    {element.props.children}
                </div>
            );
        } else if (
            element.type === "div" &&
            element.props.className === "ql-align-right"
        ) {
            return (
                <div key={index} className="text-right mb-2">
                    {element.props.children}
                </div>
            );
        } else if (
            element.type === "div" &&
            element.props.className === "ql-align-left"
        ) {
            return (
                <div key={index} className="text-left mb-2">
                    {element.props.children}
                </div>
            );
        } else {
            return null;
        }
    });
};


const SingleReportPage = () => {


    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const { language } = useLanguage();
    const bannerTitle = language === "ENG" ? "Program and Notices" : "প্রোগ্রাম ও নোটিশ";
    const bannerText = language === "ENG" ? "Notice" : "নোটিশ";
    const title = language === 'ENG' ? 'Information published in the media' : 'মিডিয়ায় প্রকাশিত তথ্য'
    const { id } = useParams();
    const [singleReportData, setSingleReportData] = useState<TProgramm>();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/report/${id}`);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const result = await res.json();
                console.log("Fetched report data:", result);
                if (result?.data) {
                    setSingleReportData(result.data);
                } else {
                    setError("Data not found");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("An error occurred while fetching data.");
            } finally {
                setLoading(false)
            }
        };

        fetchData();
    }, [id]);


    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <h1>Oops! data not found.</h1>;
    }
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";

    const typegraphyStyle = { fontWeight: 'bold', fontSize: isMobile ? '0.7rem' : '1rem', }
    const typegraphyStyle2 = { fontSize: isMobile ? '0.6rem' : '1rem', }
    return (
        <div>
            <CommonBanner title={title} />
            <Container>
                <div className="lg:flex md:flex gap-10 my-16">
                    <div className="w-full grid grid-cols-1">

                        <div className="h-full w-full">

                            <h3 className="text-xl md:text-3xl font-semibold mb-5 ">{language === 'ENG' ? singleReportData?.english_title : singleReportData?.bangla_title}</h3>
                            <div className="relative rounded-md border border-gray-200 shadow-sm w-full  mb-6 overflow-hidden">

                                {
                                    language === 'ENG' ? singleReportData?.bng_Images?.slice(0, 1).map((img) => (
                                        <Image width={500}
                                            height={500}
                                            key={img}
                                            src={img}
                                            alt="Top Image"
                                            className="w-full h-full object-cover rounded-t-lg" />
                                    )) : singleReportData?.eng_iamges?.slice(0, 1).map((img) => (
                                        <Image width={500}
                                            height={500}
                                            key={img}
                                            src={img}
                                            alt="Top Image"
                                            className="w-full h-full object-cover rounded-t-lg" />
                                    ))
                                }

                                <span className="mt-1 block px-4  py-2 text-center">
                                    {language === 'ENG'
                                        ? singleReportData?.img_tagline_english
                                        : singleReportData?.img_tagline_bangla}
                                </span>
                            </div>

                            <div className="md:p-5 mt-5 ">

                                <div className="space-y-5">
                                    <div>


                                        {language === 'ENG' ? renderContent(singleReportData?.english_description ?? '') : renderContent(singleReportData?.bangla_description ?? '')}
                                    </div>
                                </div>
                            </div>


                            {singleReportData?.name_published_newspaper && singleReportData?.news_release_date && singleReportData?.Link_published_newspaper ? (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: {
                                            md: 1.5,
                                            xs: 1
                                        },
                                        p: {
                                            md: 1,
                                            xs: 0
                                        },
                                        fontFamily: 'Noto Sans Bengali, sans-serif',
                                    }}
                                >
                                    <Box sx={boxStyle}>
                                        <Typography
                                            component="b"
                                            sx={typegraphyStyle}
                                        >
                                            {language === 'ENG' ? 'Name of the published newspaper' : 'প্রকাশিত পত্রিকার নাম'}
                                        </Typography>
                                        <Typography
                                            component="b"
                                            sx={typegraphyStyle}
                                        >
                                            {language === 'ENG' ? 'News release date' : 'সংবাদ প্রকাশের তারিখ'}
                                        </Typography>
                                        <Typography
                                            component="b"
                                            sx={typegraphyStyle}
                                        >
                                            {language === 'ENG' ? 'Newspaper published link' : 'পত্রিকার প্রকাশিত লিংক'}
                                        </Typography>
                                    </Box>

                                    <Box sx={boxStyle}>
                                        <Typography
                                            component="span"
                                            sx={typegraphyStyle2}
                                        >
                                            <span className="mr-2">:</span> {singleReportData?.name_published_newspaper}
                                        </Typography>
                                        <Typography
                                            component="span"
                                            sx={typegraphyStyle2}
                                        >
                                            <span className="mr-2">:</span> {singleReportData?.news_release_date}
                                        </Typography>
                                        {singleReportData?.Link_published_newspaper ? (
                                            <Link target="_blank" href={singleReportData?.Link_published_newspaper}>
                                                <span className="mr-2">:</span>
                                                <button className="bg-gradient-to-r from-red-600 to-green-600 p-1 text-[9px] md:text-sm md:px-3 rounded text-white">
                                                    লিংক দেখুন
                                                </button>
                                            </Link>
                                        ) : (
                                            <Typography component="span" sx={typegraphyStyle2}>
                                                <span className="mr-2">:</span> {language === 'ENG' ? 'Link not available' : 'লিংক পাওয়া যায়নি'}
                                            </Typography>
                                        )}
                                    </Box>
                                </Box>
                            ) : null}

                            {/* share section */}
                            <div className="my-5">
                                <ShareLink
                                    shareUrl={shareUrl}
                                    title={title}
                                    hashtag={`#${singleReportData?.bangla_title}`}
                                />
                            </div>





                        </div>

                    </div>
                    <div>
                        <div className="sticky top-32">
                            <Category />
                            <RecentReportList />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SingleReportPage;
