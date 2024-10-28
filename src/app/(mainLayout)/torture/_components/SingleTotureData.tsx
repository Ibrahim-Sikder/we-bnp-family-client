/* eslint-disable react/no-unescaped-entities */

import Container from "@/components/shared/Container";
import "../../murdered/Murder.css";
import toture from "../../../../assets/images/torture/torture3.jpg";
import flood2 from "../../../../assets/images/flood/flood13.jpeg";
import flood3 from "../../../../assets/images/flood/flood15.jpeg";
import flood5 from "../../../../assets/images/flood/flood4.jpeg";
import flood6 from "../../../../assets/images/flood/flood2.jpeg";
import ReactHtmlParser from "react-html-parser";
import Image from "next/image";
import { TextField } from "@mui/material";
import Link from "next/link";
import ShareLink from "@/components/ShareLink/ShareLink";
import { TPrison } from "@/types/prison";

type SingleTortureProps = {
    singleTortureData: TPrison,
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


const SingleTotureData = ({ singleTortureData, language }: SingleTortureProps) => {

    const newsData = [
        {
            id: 1,
            description:
                "ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল",
            img: flood2
        },
        {
            id: 1,
            description:
                "ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল",
            img: flood3
        },
        {
            id: 1,
            description:
                "ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল",
            img: flood5
        },
        {
            id: 1,
            description:
                "ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল",
            img: flood6
        },
    ];


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
                    <h3 className="text-xl md:text-4xl font-semibold ">{language === 'ENG' ? 'Awami League torture' : 'আওয়ামী লীগের নির্যাতন'}</h3>
                </div>
            </div>
            <Container>
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 my-20">
                    <div className="xl:col-span-9">
                        <div className="murderRightSide">
                            <div className="imgWrap">
                                {singleTortureData?.bng_Images?.slice(0, 1)?.map((img: any) => {

                                    return <Image src={img} alt="hero" width={1000}
                                        height={500} className="object-cover w-full h-full"
                                        layout="responsive" key={img} />
                                })}
                            </div>
                            <div className="mt-12 ">
                                <h3 className="text-xl font-semibold">{language === 'ENG' ? singleTortureData?.english_title : singleTortureData?.bangla_title}</h3>
                                <div className="mt-5">
                                    <div> {language === 'ENG' ? renderContent(singleTortureData?.english_description) : renderContent(singleTortureData?.bangla_description)} </div>
                                </div>
                            </div>
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
                                <span>: {singleTortureData.name_published_newspaper}</span>
                                <span>: {formatDate(singleTortureData.news_release_date)}  </span>
                                <span>:
                                    <Link href={`${singleTortureData.Link_published_newspaper}`} passHref>

                                        <button className=" bg-gradient-to-r from-red-600 to-green-600 text-white py-1 text-[10px] px-3  rounded inline-block font-semibold uppercase">
                                            {
                                                language === 'ENG' ? 'See Link' : '  লিংক দেখুন'
                                            }
                                        </button>
                                    </Link>
                                </span>
                            </div>
                        </div>
                        <ShareLink />
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
                        <h3>ক্যাটাগরি</h3>
                        <hr className="w-16 h-1 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
                        <div>
                            <div className="flex justify-between my-3">
                                <button className="font-medium">গুমের তালিকা </button>{" "}
                                <span className="block font-medium">(1000)</span>
                            </div>

                            <hr />
                            <div className="flex justify-between my-3">
                                <button className="font-medium">শহীদদের তালিকা</button>{" "}
                                <span className="block font-medium">(200)</span>
                            </div>
                            <hr />

                            <hr />
                            <div className="flex justify-between my-3">
                                <button className="font-medium">আওয়ামী নির্যাতন</button>{" "}
                                <span className="block font-medium">(3)</span>
                            </div>
                            <hr />
                            <div className="flex justify-between my-3">
                                <button className="font-medium">কারাগারে নির্যাতন</button>{" "}
                                <span className="block font-medium">(3)</span>
                            </div>
                        </div>

                        {/* Recent Posts */}
                        <div className="mt-16">
                            <h3>সাম্প্রতিক পোস্ট</h3>
                            <hr className="w-16 h-1 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
                            <div className="flex flex-col gap-8 mt-5">
                                {newsData?.map((data) => (
                                    <div key={data.id} className="flex gap-5">
                                        <div className="">
                                            <div className="">
                                                <Image
                                                    src={data.img}
                                                    width={50}
                                                    height={30}
                                                    alt="victime"
                                                    className="w-44 h-16 object-fill rounded-sm"
                                                />
                                            </div>
                                        </div>
                                        <p>
                                            {data.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default SingleTotureData;
