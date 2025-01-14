
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";
import Container from "@/components/shared/Container";
import "../../press/Press.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import icon from "../../../../assets/images/logo/logo.jpg";
import EastIcon from "@mui/icons-material/East";
import { TProgramm } from "@/types";
import truncateText from "@/utils/truncate";
import { useState } from "react";
import { formatDate } from "@/utils/formatedate";
import { btnStyle, loadBtnStyle } from "@/utils/customStyle";
import { sortByDate } from "@/utils/sort";
type ProgrammProps = {
    programmData: TProgramm[],
    language: string,
}

export default function PressPage({ programmData, language }: ProgrammProps) {



    const sortedProgrammData = sortByDate(programmData, 'date');

    const [visibleCount, setVisibleCount] = useState(6);
    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 6);
    };



    return (
        <>
            <div className="bannerWrap">
                <div className="bannerContent">
                    <h3 className="text-xl md:text-4xl font-semibold text-center ">
                        {
                            language === 'ENG' ? 'Programs & Notices' : ' প্রোগ্রাম ও নোটিশ'
                        }
                    </h3>
                </div>
            </div>
            <Container className="my-10 ">
                <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-5  lg:gap-x-5">
                    {sortedProgrammData?.slice(0, visibleCount)?.map((programm: TProgramm) => (
                        <div key={programm._id} className="upcommingNewsCardWrap ">
                            <div className="upcomingNewsCard relative ">
                                <div className="imgWrap">

                                    {
                                        language === 'ENG' ? programm.eng_iamges?.slice(0, 1).map((img) => (
                                            <Image src={img} alt="hero" width={500}
                                                height={500}
                                                className="rounded-md" key={img} />
                                        )) : programm.bng_Images?.slice(0, 1).map((img) => (
                                            <Image src={img} alt="hero" width={500}
                                                height={500}
                                                className="rounded-md" key={img} />
                                        ))
                                    }

                                </div>
                                <div className="p-3 ">

                                    <h4 className="text-sm md:text-xl"> {
                                        language === 'ENG' ? truncateText(programm.english_title, 80) : truncateText(programm.bangla_title, 80)
                                    } </h4>
                                </div>
                                <div className="hoverCard">
                                    <div className="hoverContent">
                                        <div className="flex  flex-col justify-between ">
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-3">
                                                    <Image
                                                        className="w-10 rounded-full"
                                                        src={icon}
                                                        alt="news"
                                                    />
                                                    <h4> {
                                                        language === 'ENG' ? truncateText(programm.english_title, 80) : truncateText(programm.bangla_title, 80)
                                                    } </h4>
                                                </div>
                                                <span className="block text-justify">
                                                    {
                                                        language === 'ENG' ? truncateText(programm.english_short_description, 100) : truncateText(programm.bangla_short_description, 100)
                                                    }
                                                </span>
                                            </div>

                                            <div className="">
                                                <div className="flex justify-between mt-8 w-full items-center ">
                                                    <b>
                                                        {formatDate(programm.date)}
                                                    </b>
                                                    <Link href={`/press/${programm._id}`}>
                                                        <Button sx={btnStyle}>
                                                            {language === "ENG" ? "Read More" : "আরও পড়ুন"}{" "}
                                                            <EastIcon sx={{ fontSize: { md: '20px', xs: '20px' } }} />
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {visibleCount < sortedProgrammData?.length && (
                    <div className="flex items-center justify-center mt-5">
                        <Button
                            onClick={loadMore}
                            variant="contained"
                            sx={loadBtnStyle}
                        >
                            {language === 'ENG' ? 'Load More' : 'আরো লোড'} <ArrowRightAltIcon />
                        </Button>
                    </div>
                )}

            </Container>
        </>
    );
}
