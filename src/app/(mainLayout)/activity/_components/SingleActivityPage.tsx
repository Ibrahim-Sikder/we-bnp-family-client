import Image from "next/image";
import React from "react";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ReactHtmlParser from "react-html-parser";
import Container from "@/components/shared/Container";
import ShareLink from "@/components/ShareLink/ShareLink";
import Category from "@/components/shared/Category/Category";


type Idprops = {
    singleActivity: TOppressed,
    language: string
}

export type TOppressed = {
    img_tagline_bangla: string;
    img_tagline_english: string;
    admin_name: string;
    date: string;
    bangla_title: string;
    english_title: string;
    category: string[];
    bangla_short_description: string;
    english_short_description: string;
    bangla_description: string;
    english_description: string;
    name_published_newspaper: string;
    news_release_date: string;
    Link_published_newspaper: string;
    meta_title: string;
    meta_keywords: string[];
    meta_description: string;
    thumnail_images: string[],
    eng_iamges: string[],
    bng_Images: string[],
    slug: string,
};


const SingleActivityPage = ({ singleActivity, language }: Idprops) => {


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

            // else if (element.type === "img") {
            //   return (
            //     <img
            //       key={index}
            //       className="w-full h-auto object-cover mb-4 hidden "
            //       src={element.props.src}
            //       alt="Blog Image"
            //     />
            //   );
            // }
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

    return (
        <>
            <div>
                <div className="bannerWrap">
                    <div className="bannerContent">
                        <h3 className="text-xl w-full  md:text-4xl font-semibold ">
                            {language === 'ENG' ? singleActivity?.english_title : singleActivity?.bangla_title}
                        </h3>
                    </div>
                </div>
                <Container>
                    <div className="grid grid-cols-12 gap-6 sm:gap-8 lg:gap-10 my-8 md:my-12 lg:my-16 xl:my-20">
                        <div className="col-span-12 xl:col-span-9">
                            <div className="h-full text-base sm:text-lg">
                                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                                    {/* Main Image */}
                                    {singleActivity?.bng_Images?.slice(0, 1)?.map((img) => (
                                        <Image
                                            key={img}
                                            src={img}
                                            width={500}
                                            height={500}
                                            className="w-full h-auto sm:h-[300px] md:h-[350px] lg:h-[400px] object-contain rounded-lg"
                                            alt="Cover Image"
                                            layout="responsive"
                                        />
                                    ))}

                                    {/* Title */}
                                    <h3 className="text-xl md:text-2xl font-semibold">
                                        {language === 'ENG' ? singleActivity?.english_title : singleActivity?.bangla_title}
                                    </h3>

                                    {/* Description */}
                                    <div className="text-justify">
                                        {language === 'ENG' ? renderContent(singleActivity?.english_description) : renderContent(singleActivity?.bangla_description)}
                                    </div>

                                    {/* Quote Section */}
                                    <div className="bg-gray-100 rounded-lg p-4 md:p-6 lg:p-8 space-y-2 lg:px-12 xl:px-16">
                                        <p className="text-justify italic text-lg md:text-xl">
                                            <FormatQuoteIcon className="rotate-180" />
                                            {language === 'ENG' ? singleActivity?.english_short_description : singleActivity?.bangla_short_description}
                                            <FormatQuoteIcon />
                                        </p>
                                    </div>

                                    {/* Additional Images */}
                                    <div className="flex flex-col md:flex-row md:gap-4 lg:gap-5 space-y-4 md:space-y-0">
                                        {singleActivity?.bng_Images?.slice(1, 4)?.map((img) => (
                                            <Image
                                                key={img}
                                                src={img}
                                                width={500}
                                                height={500}
                                                className="w-full md:w-[48%] lg:w-[32%] h-auto object-cover rounded-lg"
                                                alt="Additional Image"
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Share Links */}
                                <ShareLink />
                            </div>
                        </div>

                        {/* Category Section */}
                        <div className="col-span-12 xl:col-span-3 mt-8 xl:mt-0">
                            <Category />
                        </div>
                    </div>

                </Container>
            </div>
        </>
    );
};

export default SingleActivityPage;
