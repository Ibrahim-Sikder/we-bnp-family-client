import React from "react";
import "../../HomePage/ImportantNews/LatestNews.css";
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
function LatestMediaNewsCard({ language, reportData }: LanguageProps) {

    const importantNewsFilterData = reportData.filter((item) => item.newsCategory == 'সর্বশেষ')

    return (
        <div className="-mt-16">
            <div className="grid grid-cols-1 gap-y-[10px] mt-[80px] md:mt-[105px] ">
                {importantNewsFilterData.slice(0, 3).map((data) => (
                    <div key={data._id} className="newsCard">
                        <div className="flex md:flex-row items-center justify-between">
                            <div className="newsContent text-sm">
                                <small className="text-[12px] font-bold ">{language === 'ENG' ? data.english_title : data.bangla_title} </small>
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

export default LatestMediaNewsCard;
