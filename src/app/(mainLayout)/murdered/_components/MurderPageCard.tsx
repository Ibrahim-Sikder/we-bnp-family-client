'use client'
import * as React from 'react';
import Image from 'next/image';
import { Button, TextField } from '@mui/material';
import Container from '@/components/shared/Container';
import '../../../../components/ui/HomePage/PhotoGallery/PhotoGallery.css'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Search } from '@mui/icons-material';
import { TDisappearance } from '@/types/disappearance';
import '../../murdered//Murder.css'
import { loadBtnStyle } from '@/utils/customStyle';


type LanguageProps = {
    language: string,
    murderData: TDisappearance[]
}
export default function MurderPageCard({ language, murderData }: LanguageProps) {



    const murtyreFilterData = murderData.filter((item) => item.category === 'শহীদদের তালিকা')
    const sortedProgrammData = murtyreFilterData?.sort(
        (a: TDisappearance, b: TDisappearance) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return dateA - dateB;
        },
    );

    const [visibleCount, setVisibleCount] = React.useState(6);
    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 6);
    };

    return (
        <>
            <div className='bannerWrap'>
                <div className="bannerContent">
                    <h3 className='text-3xl md:text-4xl font-semibold '>{language === 'ENG' ? 'Martyrs List (2009-2024)' : 'শহীদদের তালিকা (২০০৯-২০২৪)'} </h3>
                </div>
            </div>
            <Container className='my-10'>
                <div className='mb-10 flex gap-2  '>
                    <TextField label={language === 'ENG' ? 'Search here' : 'সার্চ করুন'} size='small' />
                    <Button><Search /></Button>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                    {murtyreFilterData?.slice(0, visibleCount)?.map((data: TDisappearance) => (
                        <div key={data._id} className="disappeareCard">
                            <div className="flex gap-x-5 items-end justify-between flex-col md:flex-row ">
                                <div className="disappeareImgWrap ">


                                    {data?.bng_Images.slice(0, 1)?.map((img) => {

                                        return <Image src={img} alt="hero" width={500}
                                            height={500} key={img} />
                                    })}
                                </div>
                                <div className="disappeareContent text-left items-end  justify-end ">
                                    <div className="flex text-left gap-x-8 items-center">
                                        <div className="flex items-center justify-between w-[60px]">
                                            <div className="flex flex-col  gap-y-2 text-sm ">
                                                <b> {language === 'ENG' ? 'Name' : 'নাম'}  </b>
                                            </div>
                                            <div className="flex flex-col ">
                                                <b> : </b>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            {/* <small> {data.name_bangla}</small> */}
                                            <small>{language === "ENG" ? data.name_english : data.name_bangla}</small>
                                        </div>
                                    </div>
                                    <div className="flex text-left gap-x-8 items-center ">
                                        <div className="flex items-center justify-between w-[60px]">
                                            <div className=" text-sm ">
                                                <b>{language === 'ENG' ? 'Designation' : 'পদবী'}  </b>
                                            </div>
                                            <div>
                                                <b>:</b>
                                            </div>
                                        </div>
                                        <div>
                                            <small className="text-justify">
                                                {language === 'ENG' ? data.designation_english : data.designation_bangla}

                                            </small>
                                        </div>
                                    </div>
                                    <div className="flex text-left gap-x-10 ">
                                        <div className="flex text-left items-center justify-between  w-[60px]">
                                            <div className=" text-sm ">
                                                <b>{language === 'ENG' ? 'Address' : 'ঠিকানা'}</b>
                                            </div>
                                            <div>
                                                <b>: </b>
                                            </div>
                                        </div>
                                        <div className="text-left ">
                                            <small className="text-left">
                                                {language === "ENG" ? data.address_english : data.address_bangla}
                                            </small>
                                        </div>
                                    </div>

                                    <span className="mt-3 block text-sm ">

                                        <b>
                                            {language === "ENG" ? 'Short Description' : 'সংক্ষিপ্ত বিবরণী'} :</b>

                                        {language === "ENG" ? data.english_short_description : data.bangla_short_description}

                                        {/*                               
                              <Link href="/disappearances/1">
                                <button className="mt-3 bg-gradient-to-r from-red-600 to-green-600 text-white py-0 text-[10px] px-2  rounded inline-block font-semibold uppercase">
                                  আরও পড়ুন
                                </button>
                              </Link>  */}
                                    </span>
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

