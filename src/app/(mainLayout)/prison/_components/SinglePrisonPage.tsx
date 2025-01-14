/* eslint-disable react/no-unescaped-entities */

import Container from "@/components/shared/Container";
import "../../murdered/Murder.css";
import ReactHtmlParser from "react-html-parser";
import Image from "next/image";
import Link from "next/link";
import { TPrison } from "@/types/prison";
import Category from "@/components/shared/Category/Category";
import { useMediaQuery, useTheme } from "@mui/system";
import { Box, Typography } from "@mui/material";

type SinglePrisonProps = {
    singlePrisonData: TPrison,
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



const SinglePrisonPage = ({ singlePrisonData, language }: SinglePrisonProps) => {

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
                    <h3 className="text-xl  md:text-4xl font-semibold ">{language === 'ENG' ? 'Prison Torture' : 'কারাগারে নির্যাতন'}</h3>
                </div>
            </div>
            <Container>
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 my-20">
                    <div className="xl:col-span-9">
                        <div className="murderRightSide">
                            <h2 className="mb-5 ">
                                {language === 'ENG' ? singlePrisonData.english_title : singlePrisonData.bangla_title}
                            </h2>
                            <div className="imgWrap">

                                {language === 'ENG'
                                    ? singlePrisonData?.eng_iamges?.slice(0, 1)?.map((img: any) => (
                                        <Image src={img} alt="hero" className="w-full object-contain " width={500}
                                            height={500} key={img} />
                                    ))
                                    : singlePrisonData?.bng_Images?.slice(0, 1)?.map((img: any) => (
                                        <Image src={img} alt="hero" className="w-full object-contain " width={500}
                                            height={500} key={img} />
                                    ))}

                            </div>

                            <span className="mt-3  block ">{language === 'ENG' ? singlePrisonData?.img_tagline_english : singlePrisonData?.img_tagline_bangla}</span>
                            <div className="my-10">

                                <div className="space-y-5 mt-5 ">

                                    {language === 'ENG' ? renderContent(singlePrisonData.english_description) : renderContent(singlePrisonData.bangla_description)}


                                </div>

                            </div>

                            {singlePrisonData?.name_published_newspaper && singlePrisonData?.news_release_date && singlePrisonData?.Link_published_newspaper ? (
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
                                            <span className="mr-2">:</span> {singlePrisonData?.name_published_newspaper}
                                        </Typography>
                                        <Typography
                                            component="span"
                                            sx={typegraphyStyle2}
                                        >
                                            <span className="mr-2">:</span> {singlePrisonData?.news_release_date}
                                        </Typography>
                                        {singlePrisonData?.Link_published_newspaper ? (
                                            <Link target="_blank" href={singlePrisonData?.Link_published_newspaper}>
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


                        </div>
                    </div>
                    <div className="xl:col-span-3">
                        <div className="murderLeftSide sticky top-32 ">
                            <Category />
                        </div>

                    </div>
                </div>
            </Container>
        </>
    );
};

export default SinglePrisonPage;
