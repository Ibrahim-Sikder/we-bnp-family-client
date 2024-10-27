import * as React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";
import Container from "@/components/shared/Container";
import "../../press/Press.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import icon from "../../../../assets/images/logo/logo.jpg";

import { TProgramm } from "@/types";
type ProgrammProps = {
    programmData: TProgramm[],
    language: string,
}

export default function PressPage({ programmData, language }: ProgrammProps) {


    const btnStyle = {
        background: "#fff",
        padding: "5px",
        color: "black",
        fontSize: "12px",
        borderRadius: "5px",
        width: "100px",
        transition: "background 0.3s ease",

        "&:hover": {
            background: "linear-gradient(45deg, red, green)",
            color: "#fff",
        },
    };
    return (
        <>
            <div className="bannerWrap">
                <div className="bannerContent">
                    <h3 className="text-xl md:text-4xl font-semibold text-center ">
                        {
                            language === 'ENG' ? 'Program and Notice Notification' : ' প্রোগ্রাম ও নোটিশ বিজ্ঞপ্তি'
                        }
                    </h3>
                </div>
            </div>
            <Container className="my-10 ">
                <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-5  lg:gap-x-5">
                    {programmData?.map((programm: TProgramm) => (
                        <div key={programm._id} className="upcommingNewsCardWrap ">
                            <div className="upcomingNewsCard relative ">
                                <div className="imgWrap">


                                    {programm?.bng_Images.slice(0, 1)?.map((img: any) => {

                                        return <Image src={img} alt="hero" width={500}
                                            height={500}
                                            className="rounded-md" key={img} />
                                    })}

                                </div>
                                <div className="flex items-center w-full gap-3 mt-5">
                                    <Image className="w-10" src={icon} alt="news" />
                                    <h4> {
                                        language === 'ENG' ? programm.english_title : programm.bangla_title
                                    } </h4>
                                </div>
                                <div className="hoverCard">
                                    <div className="hoverContent">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    className="w-10 rounded-full"
                                                    src={icon}
                                                    alt="news"
                                                />
                                                <h4> {
                                                    language === 'ENG' ? programm.english_title : programm.bangla_title
                                                } ...</h4>
                                            </div>
                                            <span className="block text-justify">
                                                {
                                                    language === 'ENG' ? programm.english_short_description.slice(0, 100) : programm.bangla_short_description.slice(0, 100)
                                                }...
                                            </span>
                                            <Button component={Link} href={`/press/${programm._id}`} sx={btnStyle}>
                                                {
                                                    language === 'ENG' ? 'Read More' : 'আরও পড়ুন'}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center mt-5 ">
                    <Button className="bg-gradient-to-r from-red-600 to-green-600">
                        {language === 'ENG' ? 'Load More' : 'আরো লোড'}   <ArrowRightAltIcon />
                    </Button>
                </div>
            </Container>
        </>
    );
}
