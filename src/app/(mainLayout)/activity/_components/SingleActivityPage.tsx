/* eslint-disable @next/next/no-img-element */
'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";

import ReactHtmlParser from "react-html-parser";
import Container from "@/components/shared/Container";
import ShareLink from "@/components/ShareLink/ShareLink";
import Category from "@/components/shared/Category/Category";
import CommonBanner from "@/components/shared/CommonBanner/CommonBanner";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
import ActivitySidebar from "./ActivitySidebar";
import { useLanguage } from "@/provider/LanguageProvider";
import { useParams } from "next/navigation";
import { TActivity } from "@/types";




const SingleActivityPage = () => {

    const { id } = useParams();
    const { language } = useLanguage();
    const [singleActivity, setSingleActivity] = useState<TActivity>();
    const [error, setError] = useState<string | null>(null);
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const boxStyle = {
        display: 'flex', alignItems: 'left', gap: {
            md: 2,
            xs: 1
        }, flexDirection: 'column'
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/activity/${id}`);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const result = await res.json();
                console.log("Fetched activity data:", result);
                if (result?.data) {
                    setSingleActivity(result.data);
                } else {
                    setError("Data not found");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("An error occurred while fetching data.");
            }
        };

        fetchData();
    }, [id]);


    if (error) {
        return <div>{error}</div>;
    }


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

                            src={element.props.src || "/placeholder.svg"}
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



    const title = language === 'ENG' ? 'Recent Activities' : 'সাম্প্রতিক কার্যক্রম'
    // const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/activity/${id}`;
    const typegraphyStyle = { fontWeight: 'bold', fontSize: isMobile ? '0.7rem' : '1rem', }
    const typegraphyStyle2 = { fontSize: isMobile ? '0.6rem' : '1rem', }
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
    return (
        <>
            <div>
                <CommonBanner title={title} />
                <Container>
                    <div className="grid grid-cols-12 gap-6 sm:gap-8 lg:gap-10 my-8 md:my-12 lg:my-16 xl:my-20">
                        <div className="col-span-12 xl:col-span-9">
                            <div className="h-full text-base sm:text-lg">

                                <h3 className="text-xl md:text-2xl font-semibold mb-5 ">
                                    {language === 'ENG' ? singleActivity?.english_title : singleActivity?.bangla_title}
                                </h3>
                                <div className="space-y-4 sm:space-y-6 lg:space-y-8">


                                    <div className="relative rounded-md border border-gray-200 shadow-sm w-full  mb-6 overflow-hidden">


                                        {
                                            language === 'ENG' ? singleActivity?.eng_iamges?.slice(0, 1).map((img) => (
                                                <Image key={img}
                                                    width={500}
                                                    height={500}
                                                    src={img || "/placeholder.svg"}
                                                    alt="Top Image"
                                                    className="w-full h-full object-cover rounded-t-lg" />
                                            )) : singleActivity?.bng_Images?.slice(0, 1).map((img) => (
                                                <Image key={img}
                                                    width={500}
                                                    height={500}
                                                    src={img || "/placeholder.svg"}
                                                    alt="Top Image"
                                                    className="w-full h-full object-cover rounded-t-lg" />
                                            ))
                                        }

                                        <span className="mt-1 block px-4  py-2 text-center">
                                            {language === 'ENG'
                                                ? singleActivity?.img_tagline_english
                                                : singleActivity?.img_tagline_bangla}
                                        </span>
                                    </div>
                                    <div className="text-justify ">
                                    {language === 'ENG' ? renderContent(singleActivity?.english_description ?? '') : renderContent(singleActivity?.bangla_description ?? '')}
                                    </div>


                                    <div className="flex flex-col md:flex-row md:gap-4 lg:gap-5 space-y-4 md:space-y-0">
                                        {singleActivity?.bng_Images?.slice(1, 4)?.map((img) => (
                                            <Image
                                                key={img}
                                                src={img || "/placeholder.svg"}
                                                width={500}
                                                height={500}
                                                className="w-full md:w-[48%] lg:w-[32%] h-auto object-cover rounded-lg"
                                                alt="Additional Image"
                                            />
                                        ))}
                                    </div>
                                </div>


                                {singleActivity?.name_published_newspaper && singleActivity?.news_release_date && singleActivity?.Link_published_newspaper ? (
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
                                                <span className="mr-2">:</span> {singleActivity?.name_published_newspaper}
                                            </Typography>
                                            <Typography
                                                component="span"
                                                sx={typegraphyStyle2}
                                            >
                                                <span className="mr-2">:</span> {singleActivity?.news_release_date}
                                            </Typography>
                                            {singleActivity?.Link_published_newspaper ? (
                                                <Link target="_blank" href={singleActivity?.Link_published_newspaper}>
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


                                <ShareLink
                                    shareUrl={shareUrl}
                                    title={title}
                                    hashtag={`#${singleActivity?.bangla_title}`}
                                />
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-3 mt-8 xl:mt-0">
                            <div className="sticky top-32">
                                <Category />
                                <ActivitySidebar />
                            </div>
                        </div>
                    </div>

                </Container>
            </div>
        </>
    );
};

export default SingleActivityPage;

