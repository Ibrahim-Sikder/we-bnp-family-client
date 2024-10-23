
import * as React from 'react';
import Image from 'next/image';
import { Button, TextField } from '@mui/material';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import './prison.css'
import { Search } from '@mui/icons-material';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { TPrison } from '@/types/prison';

export default async function Prison() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/prison?limit=1000`, {
        cache: 'no-store'
    });
    const prisonData = await res.json();


    const getLinkHref = (index: number) => {
        switch (index) {
            case 0:
                return '/prison/1';
            case 1:
                return '/prison/prison-second';
            case 2:
                return '/prison/prison-third';
            default:
                return '/prison/1';
        }
    };
    const buttonStyle = {
        width: { xs: "50px", md: "120px", sm: "120px" },
        height: { md: "30px", xs: "30px" },
        fontSize: { md: "12px", xs: "9px", xl: "13px" },
        borderRadius: "30px",
        background: "#2B8444",
    };
    const prisonFilterData = prisonData?.data?.prisons.filter((item:any) => item.category === 'কারাগারে নির্যাতন')

    console.log(prisonFilterData)
    return (
        <>
            <div className='bannerWrap'>
                <div className="bannerContent">
                    <h3 className='text-xl md:text-4xl font-semibold'> কারাগারে নির্যাতন </h3>
                </div>
            </div>
            <Container className='my-10'>
                <div className='mb-10 flex gap-2  '>
                    <TextField label=' সার্চ করুন' size='small' />
                    <Button><Search /></Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {prisonFilterData?.slice(0, 3).map((data: TPrison, index: number) => (
                        <div key={data._id} className="imgGalleryImgWraps ">
                            <div className="murtyreImgWraps">

                                {data?.bng_Images.slice(0, 1)?.map((img) => {

                                    return <Image src={img} alt="hero" width={500}
                                        height={500} key={img} />
                                })}
                            </div>
                            <div className="imgGalleryContent">
                                <h3>{data.bangla_title}</h3>
                                <Button component={Link} href={getLinkHref(index)} sx={buttonStyle}>আরও পড়ুন</Button>
                            </div>

                            <div className="galleryContent">
                                <h3>
                                    {data.bangla_title}
                                </h3>
                                <p>
                                    {data.bangla_short_description}
                                </p>
                                <Button component={Link} href={`/prison/${data._id}`} sx={buttonStyle}>আরও পড়ুন</Button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center mt-5 ">
                    <Button className="bg-gradient-to-r from-red-600 to-green-600">
                        Load More <ArrowRightAltIcon />
                    </Button>
                </div>
            </Container>


        </>
    );
}
