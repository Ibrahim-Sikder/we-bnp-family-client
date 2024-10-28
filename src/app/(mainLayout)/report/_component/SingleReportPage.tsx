/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/shared/Container";
import React from "react";
import Image from "next/image";
import "../../human-rights/Blog.css";
import { TextField } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import media from "../../../../assets/images/media/media.jpeg";
import media2 from "../../../../assets/images/media/media2.jpeg";
import media3 from "../../../../assets/images/media/media3.jpeg";
import media4 from "../../../../assets/images/media/media4.jpg";
import ReactHtmlParser from "react-html-parser";
import CommonBanner from "../_component/Banner";
import { TReport } from "@/types/report";
import Category from "@/components/shared/Category/Category";
type SinglePrisonProps = {
    singleReportData: TReport,
    language: string
}

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


const SingleReportPage = ({ singleReportData, language }: SinglePrisonProps) => {
    const newsData = [
        {
            id: 1,
            description:
                "ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল",
            img: media
        },
        {
            id: 1,
            description:
                "ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল",
            img: media2
        },
        {
            id: 1,
            description:
                "ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল",
            img: media3
        },
        {
            id: 1,
            description:
                "ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল",
            img: media4
        },
    ];




    return (
        <div>
            <CommonBanner title={singleReportData?.category} />
            <Container>
                <div className="lg:flex md:flex gap-10 my-16">
                    <div className="w-full grid grid-cols-1">

                        <div className="h-full w-full">
                            <div className="relative overflow-hidden">


                                {singleReportData?.bng_Images?.slice(0, 1)?.map((img: any) => {

                                    return <Image src={img} alt="hero" width={1000}
                                        height={500} className="object-cover w-full h-full"
                                        layout="responsive" key={img} />
                                })}

                            </div>

                            <div className="p-5">
                                <h3 className="text-xl font-semibold">{language === 'ENG' ? singleReportData?.english_title : singleReportData?.bangla_title}</h3>
                                <div className="space-y-5">
                                    <div> {language === 'ENG' ? renderContent(singleReportData?.english_description) : renderContent(singleReportData?.bangla_description)} </div>
                                </div>
                            </div>
                            {/* share section */}
                            <div className="flex gap-5 p-5">
                                <span className="text-xl font-medium">Share : </span>
                                <span className="cursor-pointer">
                                    <FacebookIcon fontSize="small" />
                                </span>
                                <span className="cursor-pointer">
                                    <XIcon fontSize="small" />
                                </span>
                                <span className="cursor-pointer">
                                    <InstagramIcon fontSize="small" />
                                </span>
                                <span className="cursor-pointer">
                                    <LinkedInIcon fontSize="small" />
                                </span>
                            </div>

                            {/* user comment */}
                            <div className="p-5 bg-gray-100 mx-5 rounded">
                                <div className="flex items-center gap-2">
                                    <AccountCircleIcon fontSize="large" />
                                    <p className="font-medium">John Doe</p>
                                </div>
                                <p className="mt-3">
                                    কারাগারে নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা
                                    যায় না।
                                </p>
                            </div>

                            {/* comment section */}
                            <div className="p-5">
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
                    <Category />
                </div>
            </Container>
        </div>
    );
};

export default SingleReportPage;