import Container from "@/components/shared/Container";
import React from "react";
import "../../human-rights/Blog.css";
import { TextField } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShareLink from "@/components/ShareLink/ShareLink";
import Banner from "../_components/Banner";
import ReactHtmlParser from "react-html-parser";
import { TProgramm } from "@/types";
import Category from "@/components/shared/Category/Category";
import RecentPressPost from "./RecentPressPost";
import Image from "next/image";

type SinglePressProps = {
    singlePressData: TProgramm,
    language: string
}



const SinglePressPage = ({ singlePressData, language }: SinglePressProps) => {




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
    const bannerTitle = language === "ENG" ? "Program and Notice" : "প্রোগ্রাম ও নোটিশ";
    const bannerText = language === "ENG" ? "Notice" : "নোটিশ";


    return (
        <div>
            <Banner title={bannerTitle} text={bannerText} />
            <Container>
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 my-5 md:my-20">
                    <div className="xl:col-span-9">
                        <div key={singlePressData?._id} className="h-full w-full">
                            <div className="relative overflow-hidden">


                                {singlePressData?.bng_Images?.slice(0, 1)?.map((img: any) => {

                                    return <Image width={500}
                                        height={500} src={img} alt="hero" className="object-cover w-full h-[340px]"
                                        layout="responsive" key={img} />
                                })}
                            </div>

                            <div className="mt-5  md:mt-10 ">
                                <h3 className="text-xl md:text-3xl font-semibold">
                                    {language === 'ENG' ? singlePressData?.english_title : singlePressData?.bangla_title}
                                </h3>
                                <div className="mt-5 space-y-5">
                                    <div>
                                        {language === 'ENG' ? renderContent(singlePressData?.english_description) : renderContent(singlePressData?.bangla_description)}

                                    </div>
                                </div>
                            </div>
               
                            <ShareLink />
               
                            <div className="p-5 bg-gray-100  rounded mt-5 ">
                                <div className="flex items-center gap-2">
                                    <AccountCircleIcon fontSize="large" />
                                    <p className="font-medium">John Doe</p>
                                </div>
                                <p className="mt-3">
                                    কারাগারে নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা
                                    যায় না।
                                </p>
                            </div>

                  
                            <div className="flex flex-col gap-5 mt-5  ">
                                <TextField
                                    label="Add a comment"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={4}
                                />
                                <div className="flex justify-end mt-5">
                                    <button className="bg-gradient-to-r from-red-600 to-green-600 px-7 py-2 text-white font-medium rounded">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-3">
                        <div className="mb-10">
                            <TextField
                                id="outlined-basic"
                                label="Search Here"
                                variant="outlined"
                                fullWidth
                                size="small"
                            />
                        </div>

                        <Category />
                        <div className="mt-16">
                            <h3>{language === 'ENG' ? 'Recent Post ' : 'সাম্প্রতিক পোস্ট'}</h3>
                            <hr className="w-16 h-1 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
                            <RecentPressPost />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SinglePressPage;
