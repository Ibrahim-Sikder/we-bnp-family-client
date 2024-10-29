import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/shared/Container";
import { TActivity } from "@/types";
import icon from "../../../../../src/assets/images/logo/logo.jpg";
import CommonBanner from "../../report/_component/Banner";


type LanguageProps = {
    language: string,
    activityData: TActivity[]
}


function ActivityPage({ language, activityData }: LanguageProps) {
    const title = language === 'ENG' ? 'Our Activity' : 'আমাদের কার্যকলাপ'

    return (
        <>
            <CommonBanner title={title} />

            <Container>

                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 my-2 py-10 items-center ">
                    {activityData?.map((card: TActivity) => (
                        <div key={card._id}>
                            <Link href={`/activity/${card._id}`}>
                                <div key={card._id} className="max-w-lg ">
                                    {/* {activityData?.bng_Images?.slice(0, 1)?.map((img: any) => {
                      return <Image layout="responsive" src={img} alt="hero" width={500}
                        height={500}
                        className="h-[300px] w-full" key={img} />
                    })} */}

                                    <div className="relative group text-black hover:text-white">
                                        <div className="relative group w-16 h-16 z-10 ml-[50px]  transition-transform duration-600 group-hover:-translate-y-5 ">
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
                                            <div className="max-w-sm h-auto px-6 py-4 shadow-lg border bg-white hover:bg-gradient-to-r hover:from-red-600 hover:to-green-600 custom-clip-path transition-transform duration-300 group-hover:-translate-y-5 ">
                                                <div className="font-bold text-xl mb-2 mt-20">
                                                    {language === 'ENG' ? card?.english_title : card?.bangla_title}
                                                </div>
                                                <p className=" text-sm mb-2 ">{card?.date}</p>
                                                <p className=" text-base text-justify">
                                                    {language === 'ENG' ? card?.english_short_description.slice(0, 200) : card?.bangla_short_description.slice(0, 200)}

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
            </Container >

        </>
    );
};

export default ActivityPage;
