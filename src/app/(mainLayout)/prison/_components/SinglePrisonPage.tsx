/* eslint-disable react/no-unescaped-entities */

import Container from "@/components/shared/Container";
import "../../murdered/Murder.css";
import ReactHtmlParser from "react-html-parser";
import Image from "next/image";
import { Typography } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import Link from "next/link";
import { TPrison } from "@/types/prison";
import Category from "@/components/shared/Category/Category";

type SinglePrisonProps = {
    singlePrisonData: TPrison,
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



const SinglePrisonPage = ({ singlePrisonData, language }: SinglePrisonProps) => {

    const formatDate = (dateString: string | number | Date) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

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
                            <div className="imgWrap">


                                {singlePrisonData.bng_Images.slice(0, 1)?.map((img: any) => {

                                    return <Image src={img} alt="hero" className="w-full object-contain " width={500}
                                        height={500} key={img} />
                                })}
                            </div>
                            <div className="my-10">
                                <h2>
                                    {language === 'ENG' ? singlePrisonData.english_title : singlePrisonData.bangla_title}
                                </h2>
                                <div className="space-y-5 mt-5 ">

                                    {language === 'ENG' ? renderContent(singlePrisonData.english_description) : renderContent(singlePrisonData.bangla_description)}


                                </div>
                                <div className="flex gap-10">
                                    <div className="flex flex-col mt-5 ">
                                        <b>
                                            {language === 'ENG' ? 'Name of published newspaper' : ' প্রকাশিত পত্রিকার নাম'}   
                                        </b>
                                        <b> {language === 'ENG' ? 'Date of news release' : 'সংবাদ প্রকাশের তারিখ'}   </b>
                                        <b>{language === 'ENG' ? 'Link published in the newspaper' : 'পত্রিকার প্রকাশিত লিংক'}  </b>
                                    </div>
                                    <div className="flex flex-col mt-5 ">
                                        <span>: {singlePrisonData.name_published_newspaper}</span>
                                        <span>: {formatDate(singlePrisonData.news_release_date)}  </span>
                                        <span>:
                                            <Link href={`${singlePrisonData.Link_published_newspaper}`} passHref>

                                                <button className=" bg-gradient-to-r from-red-600 to-green-600 text-white py-1 text-[10px] px-3  rounded inline-block font-semibold uppercase">
                                                    {
                                                        language === 'ENG' ? 'See Link' : '  লিংক দেখুন'
                                                    }
                                                </button>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                    <div className="xl:col-span-3">
                        <div className="murderLeftSide">
                           <Category/>
                        </div>

                    </div>
                </div>
            </Container>
        </>
    );
};

export default SinglePrisonPage;
