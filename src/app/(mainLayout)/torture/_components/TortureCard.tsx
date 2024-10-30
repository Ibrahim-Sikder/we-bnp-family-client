/* eslint-disable react/no-unescaped-entities */

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import { TPrison } from '@/types/prison';


type LanguageProps = {
    language: string,
    tortureData: TPrison[]
}
export default function TortureCard({ language, tortureData }: LanguageProps) {


    const buttonStyle = {
        width: { xs: '100px', md: '150px', sm: '140px' },
        height: { md: '40px', xs: '30px' },
        fontSize: { md: '14px', xs: '9px', xl: '16px' },
        borderRadius: '30px',
        background: '#2B8444',
    };


    const tortureFilterData = tortureData.filter((item: any) => item.category === 'আওয়ামী লীগের নির্যাতন')

    return (
        <>
            <div className='bannerWrap'>
                <div className="bannerContent">
                    <h3 className='text-xl md:text-4xl font-semibold '>{language === 'ENG' ? 'Awami League torture' : 'আওয়ামী লীগের নির্যাতন'}</h3>
                </div>
            </div>
            <Container className='my-10'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {tortureFilterData?.map((data: TPrison, index: number) => (
                        <div key={data._id} className="imgGalleryImgWraps ">
                            <div className="murtyreImgWraps">

                                {data?.bng_Images.slice(0, 1)?.map((img) => {

                                    return <Image src={img} alt="hero" width={500}
                                        height={500} key={img} />
                                })}
                            </div>
                            <div className="imgGalleryContent">
                                <h3 className='text-[18px] md:text-xl'>{language === 'ENG' ? data.english_title : data.bangla_title} </h3>
                                <Button
                                    component={Link}
                                    href=''
                                    sx={buttonStyle}
                                >
                                    {language === 'ENG' ? 'Read More' : 'আরও পড়ুন'}
                                </Button>
                            </div>

                            <div className="galleryContent space-y-2 ">
                                <h3 className='text-[18px] md:text-xl'>   {language === 'ENG' ? data.english_title : data.bangla_title} </h3>
                                <p className='text-sm '>

                                    {language === 'ENG' ? data.english_short_description : data.bangla_short_description}
                                </p>
                                <Button
                                    component={Link}
                                    href={`/torture/${data._id}`}
                                    sx={buttonStyle}
                                >
                                    {language === 'ENG' ? 'Read More' : 'আরও পড়ুন'}

                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center mt-5 ">
                    <Button> {language === 'ENG' ? 'Load More' : 'আরো লোড'}</Button>
                </div>
            </Container>
        </>
    );
}
