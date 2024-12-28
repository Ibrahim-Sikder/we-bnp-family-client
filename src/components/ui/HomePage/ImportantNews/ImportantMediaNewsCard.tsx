import React from "react";
import "./LatestNews.css";
import Image from "next/image";
import { Button } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import Link from "next/link";
import { TReport } from "@/types/report";
const buttonStyle = {
    width: "90px",
    height: "25px",
    borderRadius: "2px",
    padding: "3px",
    fontSize: "10px",
    backgroundColor: "white",
    color: "black",
    '&:hover': {
        backgroundColor: "#f0f0f0",
    },
};


type LanguageProps = {
    language: string,
    reportData: TReport[]
}
function ImportantMediaNewsCard({ language, reportData }: LanguageProps) {
    console.log(reportData)

    const importantNewsFilterData = reportData.filter((item) => item.newsCategory == 'গুরুত্বপূ্র্ণ')

    return (
        <div className="-mt-16">
            <div className="grid grid-cols-1 gap-y-[10px] mt-[80px] ">
                {importantNewsFilterData.slice(0, 8).map((data) => (
                    <div key={data._id} className="newsCard">
                        <div className="flex md:flex-row items-center justify-between">
                            <div className="newsContent text-sm">
                                <small className="text-[12px] font-bold ">{language === 'ENG' ? data?.english_title?.slice(0, 70) : data?.bangla_title?.slice(0, 70)}... </small>
                                <div className="bnpBtnStyle">
                                    <Button component={Link} href={`/report/${data._id}`} sx={buttonStyle}>
                                        <span>
                                            {language === 'ENG' ? 'Read More' : 'আরও পড়ুন'} <ArrowRightAlt sx={{ fontSize: "13px" }} />
                                        </span>{" "}
                                    </Button>
                                </div>
                            </div>
                            <div className="newsImgWrap">
                                {data?.bng_Images.slice(0, 1)?.map((img: any) => {

                                    return <Image layout="responsive" src={img} alt="image no found" width={100}
                                        height={100}
                                        className="rounded-md object-cover w-full h-full" key={img} />
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImportantMediaNewsCard;
