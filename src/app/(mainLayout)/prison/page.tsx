'use client'
import * as React from 'react';
import gallery9 from '../../../assets/images/nirjaton/mabla4.jpeg';

import Image from 'next/image';
import { Button, TextField } from '@mui/material';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import './prison.css'
import { ArrowRightAlt, Search } from '@mui/icons-material';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import prison from "../../../assets/images/prison/karagar.webp";
import prison2 from "../../../assets/images/prison/prison2.jpg";
import prison3 from "../../../assets/images/prison/prison3.jpg";
import prison4 from "../../../assets/images/prison/prison2.webp";
import prison5 from "../../../assets/images/prison/prison4.webp";
import prison6 from "../../../assets/images/prison/prison5.jpg";

export default function Prison() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const prisonData = [
        {
            id: 1,
            title: "নয়াপল্টনে গ্রেপ্তার বিএনপি নেতার কারাগারে মৃত্যু",
            img: prison,
            description: ' বিএনপির গোলাপুর রহমান (৫৮) নামে এক নেতার কারাগারে মৃত্যু হয়েছে। ইন্না লিল্লাহি ওয়া ইন্না ইলাহি রাজিউন।'
        },
        {
            id: 2,
            title: "চট্টগ্রাম কারাগারে বিএনপি নেতার মৃত্যু",
            img: prison4,
            description: 'চট্টগ্রাম কেন্দ্রীয় কারাগারে মিরসরাই পৌরসভা বিএনপির আহ্বায়ক ফকির আহমদের (৬০) মৃত্যু হয়েছে। মঙ্গলবার (১৬ই নভেম্বর) সকালে তার মৃত্যু হয়।'
        },
        {
            id: 3,
            title: "কাশিমপুর কারাগারে বিএনপি নেতার মৃত্যু",
            img: prison3,
            description: '২৮ অক্টোবর ঢাকায় বিএনপির মহাসমাবেশে যাওয়ার পর হিরা খান গ্রেপ্তার হন বলে জানিয়েছেন দলের নেতারা।'
        },



    ];

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
                    {prisonData.slice(0, 3).map((data, index) => (
                        <div key={data.id} className="imgGalleryImgWraps ">
                            <div className="murtyreImgWraps">
                                <Image
                                    src={data.img}
                                    alt="gallery"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div className="imgGalleryContent">
                                <h3>{data.title}</h3>
                                <Button component={Link} href={getLinkHref(index)} sx={buttonStyle}>আরও পড়ুন</Button>
                            </div>

                            <div className="galleryContent">
                                <h3>
                                    {data.title}
                                </h3>
                                <p>
                                    {data.description}
                                </p>
                                <Button component={Link} href={getLinkHref(index)} sx={buttonStyle}>আরও পড়ুন</Button>
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
