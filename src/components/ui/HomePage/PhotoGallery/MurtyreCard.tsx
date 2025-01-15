"use client"

import { TDisappearance } from "@/types/disappearance"
import Image from "next/image"
import Link from "next/link"

interface MurtyreCardProps {
    murtyreFilterData: TDisappearance[]
    language: string
}

const MurtyreCard: React.FC<MurtyreCardProps> = ({ murtyreFilterData, language }) => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {murtyreFilterData?.map((data: TDisappearance) => (
                    <div key={data._id} className="disappeareCard">
                        <div className="flex gap-x-5 items-stretch justify-between flex-col md:flex-row min-h-[300px]">
                            <div className="disappeareImgWrap">
                                {language === 'ENG'
                                    ? data.bng_Images?.slice(0, 1).map((img) => (
                                        <Image src={img || "/placeholder.svg"} alt="hero" width={500} height={500} key={img} />
                                    ))
                                    : data.bng_Images?.slice(0, 1).map((img) => (
                                        <Image src={img || "/placeholder.svg"} alt="hero" width={500} height={500} key={img} />
                                    ))
                                }
                            </div>
                            <div className="disappeareContent text-left flex-1 min-w-0 flex flex-col justify-end">
                                <div className="grid grid-cols-[auto,1fr] gap-x-2 gap-y-2">
                                    <div className="font-semibold text-sm whitespace-nowrap">
                                        {language === 'ENG' ? 'Name' : 'নাম'}
                                    </div>
                                    <div className="text-sm truncate flex ">
                                        <small className="mr-2 block">:</small> {language === "ENG" ? data.name_english : data.name_bangla}
                                    </div>

                                    <div className="font-semibold text-sm whitespace-nowrap">
                                        {language === 'ENG' ? 'Designation' : 'পদবী'}
                                    </div>
                                    <div className="text-sm break-words flex ">
                                        <small className="mr-2 block">:</small> {language === 'ENG' ? data.designation_english : data.designation_bangla}
                                    </div>

                                    <div className="font-semibold text-sm whitespace-nowrap">
                                        {language === 'ENG' ? 'Address' : 'ঠিকানা'}
                                    </div>
                                    <div className="text-sm break-words flex ">
                                        <small className="mr-2 block">:</small> {language === "ENG" ? data.address_english : data.address_bangla}
                                    </div>
                                </div>

                                <div className="mt-3">
                                    <span className="font-semibold text-sm">
                                        {language === "ENG" ? 'Short Description' : 'সংক্ষিপ্ত বিবরণী'}:
                                    </span>
                                    <p className="text-sm mt-1 break-words">
                                        {language === "ENG" ? data.english_short_description : data.bangla_short_description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-end items-end w-full mr-16 mt-5">
                <Link href="/disappearances">
                    <button className="bg-gradient-to-r from-red-600 to-green-600 text-white py-2 px-8 rounded inline-block font-semibold uppercase">
                        {language === 'ENG' ? 'See All' : 'সবগুলো দেখুন'}
                    </button>
                </Link>
            </div>
        </>
    )
}

export default MurtyreCard

