/* eslint-disable react/no-unescaped-entities */
'use client'
import * as React from 'react';
import toture from "../../../assets/images/torture/torture3.jpg";
import toture2 from "../../../assets/images/torture/toture2.jpg";
import toture3 from "../../../assets/images/torture/torture3.jpg";

import Image from 'next/image';
import { Button } from '@mui/material';
import Link from 'next/link';
import Container from '@/components/shared/Container';

export default function Prison() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const totureData = [
        {
            id: 1,
            title: "পুলিশের সামনে বিএনপির ওপর যুবলীগ-ছাত্রলীগের হামলার অভিযোগ",
            img: toture,
            description: 'ফরিদপুরে যুবলীগ-ছাত্রলীগের বিরুদ্ধে বিএনপির বিক্ষোভ সমাবেশে হামলা, ককটেল বিস্ফোরণ ও চেয়ার ভাঙচুরের অভিযোগ পাওয়া গেছে।আজ বুধবার বিকেল ৪টার দিকে এ হামলার পর শহরের মুজিব সড়ক সংলগ্ন প্রেসক্লাব চত্বরে বিএনপির সমাবেশ পণ্ড হয়ে যায়। '
        },
        {
            id: 1,
            title: "বিএনপির সমাবেশে আওয়ামী লীগের হামলা, আহত ৫ নেতা",
            img: toture2,
            description: 'নাটোরে বিএনপির সমাবেশ চলাকালে দুর্বৃত্তদের হামলায় বিএনপির কেন্দ্রীয় নেতা মোসাদ্দেক হোসেন বুলবুলসহ পাঁচজন আহত হয়েছেন। আজ সকাল সাড়ে নয়টায় জেলা বিএনপির অস্থায়ী কার্যালয়ের সামনে এই হামলার ঘটনা ঘটে। জেলা বিএনপি এই ঘটনার জন্য আওয়ামী লীগকে দায়ী করেছেন।'
        },
        {
            id: 1,
            title: "গাবতলীতে বিএনপির মিছিলে আওয়ামী লীগের হামলা",
            img: toture3,
            description: 'ঢাকার প্রবেশপথ গাবতলীতে বিএনপির মিছিলে হামলা চালিয়েছে আওয়ামী লীগের নেতাকর্মীরা। এতে ২ জন আহত হয়েছেন। আজ শনিবার দুপুর ১২টার দিকে গাবতলী বেড়িবাঁধ এলাকায় এ ঘটনা ঘটে।প্রত্যক্ষদর্শীদের বরাত দিয়ে দ্য ডেইলি স্টারের নিজস্ব প্রতিবেদক জানান, টেকনিক্যাল মোড় থেকে সাভারমুখী লেনে বেড়িবাঁধের দিকে বিএনপির একটি মিছিল যাচ্ছিল। সেই সময় পেছন থেকে আরেকটি মিছিল নিয়ে আওয়ামী লীগের নেতাকর্মীরা বিএনপি নেতাকর্মীদের ওপর অতর্কিত হামলা চালান। এতে রাজিব নামে এক কিশোরসহ ২ জন আহত হন।'
        },
    ];
    const buttonStyle = {
        width: { xs: '100px', md: '140px', sm: '140px' },
        height: { md: '40px', xs: '30px' },
        fontSize: { md: '14px', xs: '9px', xl: '16px' },
        borderRadius: '30px',
        background: '#2B8444',
    };

    return (
        <>
            <div className='bannerWrap'>
                <div className="bannerContent">
                    <h3 className='text-xl md:text-4xl font-semibold '>আওয়ামী লীগের নির্যাতন</h3>
                </div>
            </div>
            <Container className='my-10'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {totureData.map((data) => (
                        <div key={data.id} className="imgGalleryImgWraps ">
                            <Image
                                src={data.img}
                                alt="gallery"
                                width={500}
                                height={500}
                            />
                            <div className="imgGalleryContent">
                                <h4> {data.title}</h4>
                                <Button component={Link} href='/torture/1' sx={buttonStyle}>আরও পড়ুন</Button>
                            </div>

                            <div className="galleryContent">
                                <h4>
                                    {data.title}
                                </h4>
                                <p className="text-sm">
                                    {data.description.slice(0, 100)}...
                                </p>
                                <Button component={Link} href='/torture/1' sx={buttonStyle}>আরও পড়ুন</Button>
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
