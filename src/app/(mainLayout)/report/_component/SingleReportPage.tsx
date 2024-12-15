/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/shared/Container";
import React from "react";
import Image from "next/image";
import "../../human-rights/Blog.css";
import ReactHtmlParser from "react-html-parser";
import CommonBanner from "../_component/Banner";
import { TReport } from "@/types/report";
import Category from "@/components/shared/Category/Category";
import ShareLink from "@/components/ShareLink/ShareLink";
import RecentReportList from "./RecentReportList";
type SinglePrisonProps = {
    singleReportData: TReport,
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


const SingleReportPage = ({ singleReportData, language }: SinglePrisonProps) => {


    const title = language === 'ENG' ? 'Information published in the media' : 'মিডিয়ায় প্রকাশিত তথ্য'

    console.log(singleReportData)
    return (
        <div>
            <CommonBanner title={title} />
            <Container>
                <div className="lg:flex md:flex gap-10 my-16">
                    <div className="w-full grid grid-cols-1">

                        <div className="h-full w-full">

                            <div className="relative w-full h-[200px] md:h-[400px] lg:h-[500px] mb-6">
                                {
                                    singleReportData.bng_Images?.slice(0, 1).map((img) => (
                                        <Image
                                            width={500}
                                            height={500}
                                            key={img}
                                            src={img}
                                            alt="Top Image"

                                            className="rounded-lg w-full h-full object-cover"
                                        />
                                    ))
                                }
                            </div>

                            <div className="md:p-5 mt-5 ">
                                <h3 className="text-xl md:text-3xl font-semibold">{language === 'ENG' ? singleReportData?.english_title : singleReportData?.bangla_title}</h3>
                                <div className="space-y-5">
                                    <div> {language === 'ENG' ? renderContent(singleReportData?.english_description) : renderContent(singleReportData?.bangla_description)} </div>
                                </div>
                            </div>
                            {/* share section */}
                            <div className="my-5">
                                <ShareLink />
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
