/* eslint-disable react/no-unescaped-entities */
'use client'
import Container from "@/components/shared/Container";
import "../../murdered/Murder.css";
import ReactHtmlParser from "react-html-parser";
import Image from "next/image";
import Link from "next/link";
import ShareLink from "@/components/ShareLink/ShareLink";
import { TPrison } from "@/types/prison";
import RecentTorturePost from "./RecentTorturePost";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Loading from "@/app/loading";
import { boxStyle } from "@/utils/style";
import { useEffect, useState } from "react";
import { useLanguage } from "@/provider/LanguageProvider";
import { useParams } from "next/navigation";


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
        } else if (element.type === "p") {
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


const SingleTotureData = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const { language } = useLanguage();
    const bannerTitle = language === "ENG" ? "Program and Notices" : "প্রোগ্রাম ও নোটিশ";
    const bannerText = language === "ENG" ? "Notice" : "নোটিশ";
    const title = language === 'ENG' ? 'Information published in the media' : 'মিডিয়ায় প্রকাশিত তথ্য'
    const { id } = useParams();
    const [singleTortureData, setTortureData] = useState<TPrison>();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/prison/${id}`);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const result = await res.json();
                console.log("Fetched report data:", result);
                if (result?.data) {
                    setTortureData(result.data);
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
        <>
            <div className="bannerWrap">
                <div className="bannerContent">
                    <h3 className="text-xl md:text-4xl font-semibold ">{language === 'ENG' ? 'Awami League torture' : 'আওয়ামী লীগের নির্যাতন'}</h3>
                </div>
            </div>
            <Container>
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 my-5 md:my-20  ">
                    <div className="xl:col-span-9">
                        <div className="murderRightSide">
                            <h3 className="text-xl md:text-3xl font-semibold  mb-5 ">{language === 'ENG' ? singleTortureData?.english_title : singleTortureData?.bangla_title}</h3>
                            <div className="relative rounded-md border border-gray-200 shadow-sm w-full  mb-6 overflow-hidden">

                                {language === 'ENG'
                                    ? singleTortureData?.eng_iamges?.slice(0, 1)?.map((img: any) => (
                                        <Image
                                            width={500}
                                            height={500}
                                            key={img}
                                            src={img}
                                            alt="Top Image"
                                            className="w-full h-full object-cover rounded-t-lg"
                                        />
                                    ))
                                    : singleTortureData?.bng_Images?.slice(0, 1)?.map((img: any) => (
                                        <Image
                                            width={500}
                                            height={500}
                                            key={img}
                                            src={img}
                                            alt="Top Image"
                                            className="w-full h-full object-cover rounded-t-lg"
                                        />
                                    ))}

                                <span className="mt-1 block px-4  py-2 text-center">
                                    {language === 'ENG'
                                        ? singleTortureData?.img_tagline_english
                                        : singleTortureData?.img_tagline_bangla}
                                </span>
                            </div>

                            <div className="mt-10 md:mt-16 ">

                                <div className="mt-5">
                                    <div>


                                        {language === 'ENG' ? renderContent(singleTortureData?.english_description ?? '') : renderContent(singleTortureData?.bangla_description ?? '')}
                                    </div>
                                </div>
                            </div>

                        </div>
                        {singleTortureData?.name_published_newspaper && singleTortureData?.news_release_date && singleTortureData?.Link_published_newspaper ? (
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
                                        <span className="mr-2">:</span> {singleTortureData?.name_published_newspaper}
                                    </Typography>
                                    <Typography
                                        component="span"
                                        sx={typegraphyStyle2}
                                    >
                                        <span className="mr-2">:</span> {singleTortureData?.news_release_date}
                                    </Typography>
                                    {singleTortureData?.Link_published_newspaper ? (
                                        <Link target="_blank" href={singleTortureData?.Link_published_newspaper}>
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
                            hashtag={`#${singleTortureData?.bangla_title}`}
                        />
                    </div>
                    <div className="xl:col-span-3  ">

                        <div className="sticky top-32">
                            <div >
                                <h3>{language === 'ENG' ? 'Recent Posts' : 'সাম্প্রতিক পোস্ট'}</h3>
                                <hr className="w-16 h-1 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
                                <RecentTorturePost />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default SingleTotureData;
