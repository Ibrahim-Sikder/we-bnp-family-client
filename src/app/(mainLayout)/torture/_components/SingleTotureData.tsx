/* eslint-disable react/no-unescaped-entities */

import Container from "@/components/shared/Container";
import "../../murdered/Murder.css";
import ReactHtmlParser from "react-html-parser";
import Image from "next/image";
import Link from "next/link";
import ShareLink from "@/components/ShareLink/ShareLink";
import { TPrison } from "@/types/prison";
import RecentTorturePost from "./RecentTorturePost";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

type SingleTortureProps = {
    singleTortureData: TPrison,
    language: string
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


const SingleTotureData = ({ singleTortureData, language }: SingleTortureProps) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const boxStyle = {
        display: 'flex', alignItems: 'left', gap: {
            md: 2,
            xs: 1
        }, flexDirection: 'column'
    }
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
                            <div className="imgWrap">
                                {singleTortureData?.bng_Images?.slice(0, 1)?.map((img: any) => {

                                    return <Image src={img} alt="hero" width={1000}
                                        height={500} className="object-cover w-full h-full"
                                        layout="responsive" key={img} />
                                })}
                            </div>

                          
                            <div className="mt-10 md:mt-16 ">
                                <h3 className="text-xl md:text-3xl font-semibold ">{language === 'ENG' ? singleTortureData?.english_title : singleTortureData?.bangla_title}</h3>
                                <div className="mt-5">
                                    <div> {language === 'ENG' ? renderContent(singleTortureData?.english_description) : renderContent(singleTortureData?.bangla_description)} </div>
                                </div>
                            </div>

                        </div>
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
                                    <span className=" mr-2 ">:</span> {singleTortureData?.name_published_newspaper}
                                </Typography>
                                <Typography
                                    component="span"
                                    sx={typegraphyStyle2}
                                >
                                    <span className=" mr-2 ">:</span> {singleTortureData?.news_release_date}
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
                        <ShareLink />
                    </div>
                    <div className="xl:col-span-3  ">

                        <div className="sticky top-32">
                            <div >
                                <h3>সাম্প্রতিক পোস্ট</h3>
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
