'use client'

import Container from "@/components/shared/Container";
import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

import ShareLink from "@/components/ShareLink/ShareLink";
import Banner from "../_components/Banner";
import ReactHtmlParser from "react-html-parser";
import { TProgramm } from "@/types";
import Category from "@/components/shared/Category/Category";
import RecentPressPost from "./RecentPressPost";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/app/loading";
import { useLanguage } from "@/provider/LanguageProvider";
import { useParams } from "next/navigation";

const renderContent = (content: string) => {
    const parsedContent = ReactHtmlParser(content);

    return parsedContent.map((element, index) => {
        if (element.type === "h1") {
            return (
                <h1 key={index} className="text-2xl font-bold mb-2 ">
                    {element.props.children}
                </h1>
            );
        } else if (element.type === "h2") {
            return (
                <h2 key={index} className="text-xl font-bold mb-2 ">
                    {element.props.children}
                </h2>
            );
        } else if (element.type === "h3") {
            return (
                <h3 key={index} className="text-xl font-bold mb-2 ">
                    {element.props.children}
                </h3>
            );
        } else if (element.type === "p") {
            return (
                <p key={index} className="mb-2">
                    {element.props.children}
                </p>
            );
        }


        else if (
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


const SinglePressPage = () => {

    const { language } = useLanguage();
    const bannerTitle = language === "ENG" ? "Program and Notices" : "প্রোগ্রাম ও নোটিশ";
    const bannerText = language === "ENG" ? "Notice" : "নোটিশ";
    const { id } = useParams();
    const [singlePressData, setSinglePressData] = useState<TProgramm>();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null);
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/programm/${id}`);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const result = await res.json();
                console.log("Fetched activity data:", result);
                if (result?.data) {
                    setSinglePressData(result.data);
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
    const boxStyle = {
        display: 'flex', alignItems: 'left', gap: {
            md: 2,
            xs: 1
        }, flexDirection: 'column'
    }
    const typegraphyStyle = { fontWeight: 'bold', fontSize: isMobile ? '0.7rem' : '1rem', }
    const typegraphyStyle2 = { fontSize: isMobile ? '0.6rem' : '1rem', }
    return (
        <div>
            <Banner title={bannerTitle} text={bannerText} />
            <Container>
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 my-5 md:my-20">
                    <div className="xl:col-span-9">
                        <h3 className="text-xl md:text-3xl font-semibold mb-5 ">
                            {language === 'ENG' ? singlePressData?.english_title : singlePressData?.bangla_title}
                        </h3>
                        <div key={singlePressData?._id} className="h-full w-full">
                            <div className="relative overflow-hidden shadow-sm rounded-lg border border-gray-200">

                                {
                                    language === 'ENG' ? singlePressData?.eng_iamges?.slice(0, 1).map((img) => (
                                        <Image
                                            width={500}
                                            height={500}
                                            src={img}
                                            alt="hero"
                                            className="object-cover w-full h-[340px] rounded-t-lg"
                                            layout="responsive"
                                            key={img}
                                        />
                                    )) : singlePressData?.bng_Images?.slice(0, 1).map((img) => (
                                        <Image
                                            width={500}
                                            height={500}
                                            src={img}
                                            alt="hero"
                                            className="object-cover w-full h-[340px] rounded-t-lg"
                                            layout="responsive"
                                            key={img}
                                        />
                                    ))
                                }
                                <span className="mt-3 block px-4 py-2 text-center bg-white shadow-inner rounded-b-lg">
                                    {language === 'ENG'
                                        ? singlePressData?.img_tagline_english
                                        : singlePressData?.img_tagline_bangla}
                                </span>
                            </div>

                            {/* <div className="mt-10 h-3 ">

                            </div> */}
                            <div className="mt-5  md:mt-10 ">

                                <div className="mt-5 space-y-5">
                                    <div>


                                        {language === 'ENG' ? renderContent(singlePressData?.english_description ?? '') : renderContent(singlePressData?.bangla_description ?? '')}

                                    </div>
                                </div>
                            </div>
                            {singlePressData?.name_published_newspaper && singlePressData?.news_release_date && singlePressData?.Link_published_newspaper ? (
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
                                            <span className="mr-2">:</span> {singlePressData?.name_published_newspaper}
                                        </Typography>
                                        <Typography
                                            component="span"
                                            sx={typegraphyStyle2}
                                        >
                                            <span className="mr-2">:</span> {singlePressData?.news_release_date}
                                        </Typography>
                                        {singlePressData?.Link_published_newspaper ? (
                                            <Link target="_blank" href={singlePressData?.Link_published_newspaper}>
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
                                title={language === 'ENG' ? singlePressData?.english_title : singlePressData?.bangla_title}
                                hashtag={`#${singlePressData?.bangla_title}`}
                            />




                        </div>
                    </div>
                    <div className="xl:col-span-3">


                        <div className="top-32 sticky">
                            <Category />
                            <div className="mt-16">
                                <h3>{language === 'ENG' ? 'Recent Post ' : 'সাম্প্রতিক পোস্ট'}</h3>
                                <hr className="w-16 h-1 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
                                <RecentPressPost />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SinglePressPage;
