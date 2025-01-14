import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/shared/Container";
import { TActivity } from "@/types";
import icon from "../../../../../src/assets/images/logo/logo.jpg";
import CommonBanner from "../../report/_component/Banner";
import './Activity.css'
import { Button } from "@mui/material";
import { loadBtnStyle } from "@/utils/customStyle";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import truncateText from "@/utils/truncate";
import { formatDate } from "@/utils/formatedate";
import { sortByDate } from "@/utils/sort";
type LanguageProps = {
    language: string,
    activityData: TActivity[]
}


function ActivityPage({ language, activityData }: LanguageProps) {


    const sortedActivityData = sortByDate(activityData, 'date');


    const [visibleCount, setVisibleCount] = useState(6);
    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 6);
    };
    const title = language === 'ENG' ? 'Recent Activities' : 'সাম্প্রতিক কার্যক্রম'


    return (
        <>
            <CommonBanner title={title} />

            <Container className="sectionMargin">

                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 my-2  items-center ">
                    {sortedActivityData?.slice(0, visibleCount)?.map((card: TActivity) => (
                        <div key={card._id}>
                            <Link href={`/activity/${card._id}`}>
                                <div key={card._id} className="max-w-lg activityCard ">
                                    <div className=" h-[200px] md:h-[250px] w-full ">

                                        <div className="w-full rounded-sm overflow-hidden">
                                            {language === 'ENG'
                                                ? card?.eng_iamges?.slice(0, 1)?.map((img: any) => (
                                                    <Image layout="" src={img} alt="hero" width={500}
                                                        height={500}
                                                        className="h-full object-contain w-full" key={img} />
                                                ))
                                                : card?.bng_Images?.slice(0, 1)?.map((img: any) => (
                                                    <Image layout="" src={img} alt="hero" width={500}
                                                        height={500}
                                                        className="h-full object-contain w-full" key={img} />
                                                ))}
                                        </div>

                                    </div>

                                    <div className="-top-20 relative group text-black hover:text-white">

                                        <div className="relative group h-10 md:w-16 w-10  md:h-16 z-10 ml-[50px] transition-transform duration-600 group-hover:-translate-y-5 ">
                                            <div className="bg-red-500 rounded-full p-3 w-[110px] h-[110px] flex items-center justify-center ">
                                                <Image
                                                    src={icon}
                                                    className="h-[100px] w-[90px] rounded-full transition-all duration-300"
                                                    alt="icon"
                                                />
                                            </div>
                                            <div className="absolute inset-0 flex items-center justify-center z-50 w-[130px] h-[130px]  ">
                                                <div className="rounded-full w-[130px] h-[130px] border-4 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                            </div>
                                        </div>

                                        <div className="flex items-center content-center justify-center  ">
                                            <div className="max-w-sm h-auto md:px-6 p-2 md:py-4 shadow-lg  bg-white hover:bg-gradient-to-r hover:from-red-600 hover:to-green-600 custom-clip-path transition-transform duration-300 group-hover:-translate-y-5 ">
                                                <h3 className="font-bold text-xl mb-2 mt-16 md:mt-10 rounded-md  ">
                                                    {language === 'ENG' ? truncateText(card?.english_title, 45) : truncateText(card?.bangla_title, 45)}
                                                </h3>
                                                <p className=" text-sm mb-2 ">{formatDate(card?.date)}</p>
                                                <p className=" text-base text-justify">
                                                    {language === 'ENG' ? truncateText(card?.english_short_description, 100) : truncateText(card?.bangla_short_description, 100)}

                                                    <span

                                                        className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent p-1 text-lg "
                                                    >

                                                        {language === 'ENG' ? 'See Details' : ' বিস্তারিত দেখুন'}

                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div >

                {visibleCount < sortedActivityData?.length && (
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
            </Container >

        </>
    );
};

export default ActivityPage;
