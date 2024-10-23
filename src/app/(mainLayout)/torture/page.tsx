/* eslint-disable react/no-unescaped-entities */

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import { TPrison } from '@/types/prison';

export default async function TorturePage() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/prison?limit=1000`, {
        cache: 'no-store'
    });
    const data = await res.json();
    const tortureData = data.data?.prisons

    const buttonStyle = {
        width: { xs: '100px', md: '140px', sm: '140px' },
        height: { md: '40px', xs: '30px' },
        fontSize: { md: '14px', xs: '9px', xl: '16px' },
        borderRadius: '30px',
        background: '#2B8444',
    };
    if (!tortureData) {
        return (
            <h1 className="mt-10 flex items-center justify-center text-3xl capitalize">
                Oops! torture data not found!
            </h1>
        );
    }

    const tortureFilterData = tortureData.filter((item: any) => item.category === 'আওয়ামী লীগের নির্যাতন')

    return (
        <>
            <div className='bannerWrap'>
                <div className="bannerContent">
                    <h3 className='text-xl md:text-4xl font-semibold '>আওয়ামী লীগের নির্যাতন</h3>
                </div>
            </div>
            <Container className='my-10'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {tortureFilterData.map((data: TPrison, index: number) => (
                        <div key={data._id} className="imgGalleryImgWraps ">
                            <div className="murtyreImgWraps">
                                {data?.bng_Images.slice(0, 1)?.map((img: any) => {

                                    return <Image src={img} alt="hero" width={500}
                                        height={500} key={img} />
                                })}
                            </div>
                            <div className="imgGalleryContent">
                                <h3>{data.bangla_title}</h3>
                                <Button
                                    component={Link}
                                    href={`/torture/${data._id}`}
                                    sx={buttonStyle}
                                >
                                    আরও পড়ুন
                                </Button>
                            </div>

                            <div className="galleryContent">
                                <h3>{data.bangla_title}</h3>
                                <p>{data.bangla_short_description}</p>
                                <Button
                                    component={Link}
                                    href={`/torture/${data._id}`}
                                    sx={buttonStyle}
                                >
                                    আরও পড়ুন
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center mt-5 ">
                    <Button>Load more </Button>
                </div>
            </Container>
        </>
    );
}
