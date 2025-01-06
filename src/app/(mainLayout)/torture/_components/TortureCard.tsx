/* eslint-disable react/no-unescaped-entities */

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import { TPrison } from '@/types/prison';
import { btnStyle, loadBtnStyle } from '@/utils/customStyle';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { formatDate } from '@/utils/formatedate';
import EastIcon from "@mui/icons-material/East";
type LanguageProps = {
    language: string,
    tortureData: TPrison[]
}
export default function TortureCard({ language, tortureData }: LanguageProps) {


    const buttonStyle = {
        width: { xs: '120px', sm: '150px', md: '150px', lg: '170px' },
        height: { xs: '30px', sm: '35px', md: '40px', lg: '45px' },
        fontSize: { xs: '10px', sm: '12px', md: '14px', lg: '16px' },
        borderRadius: '30px',
        background: '#2B8444',
        color: '#fff',
        textTransform: 'none',
        '&:hover': {
            background: '#256d37',
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const tortureFilterData = tortureData.filter((item: any) => item.category === 'আওয়ামী লীগের নির্যাতন')


    const sortedTorTureData = tortureFilterData?.sort(
        (a: TPrison, b: TPrison) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return dateA - dateB;
        },
    );

    const [visibleCount, setVisibleCount] = React.useState(1);
    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 1);
    };
    return (
        <>
            <div className='bannerWrap'>
                <div className="bannerContent">
                    <h3 className='text-xl md:text-4xl font-semibold '>{language === 'ENG' ? 'Awami League torture' : 'আওয়ামী লীগের নির্যাতন'}</h3>
                </div>
            </div>
            <Container className='my-10'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {sortedTorTureData?.slice(0, visibleCount)?.map((data: TPrison, index: number) => (
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

                            <div className="galleryContent  ">
                                <div className='space-y-2'>
                                    <h3 className='text-[18px] md:text-xl'>   {language === 'ENG' ? data.english_title : data.bangla_title} </h3>
                                    <p className='text-sm '>

                                        {language === 'ENG' ? data.english_short_description : data.bangla_short_description}
                                    </p>
                                </div>


                                <div className="flex justify-between mt-10 w-full items-center ">
                                    <b>
                                        {formatDate(data.date)}
                                    </b>
                                    <Link href={`/torture/${data._id}`}>
                                        <Button sx={btnStyle}>
                                            {language === "ENG" ? "Read More" : "আরও পড়ুন"}{" "}
                                            <EastIcon sx={{ fontSize: { md: '20px', xs: '20px' } }} />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {visibleCount < sortedTorTureData?.length && (
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
