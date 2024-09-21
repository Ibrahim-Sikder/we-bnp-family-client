'use client'
import * as React from 'react';
import gallery9 from '../../../assets/images/mamla/mamla11.jpeg';
import Image from 'next/image';
import { Button } from '@mui/material';
import Link from 'next/link';
import Container from '@/components/shared/Container';

export default function Cases() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const galleryData = [
        {
            id: 1,
            title: 'মামলা: ন্যায়বিচারের পথে এক দীর্ঘযাত্রা',
            img: gallery9,
            description: ' মামলা হলো ন্যায়বিচার পাওয়ার একটি গুরুত্বপূর্ণ মাধ্যম, যা আইন ও বিচার ব্যবস্থার মাধ্যমে সমাজে সুবিচার প্রতিষ্ঠা করতে সহায়ক। তবে মামলার প্রক্রিয়া প্রায়ই দীর্ঘ '
        },
        {
            id: 1,
            title: 'ঘুম খুনের নির্যাতনের শিকার: বাস্তবতার নির্মম চিত্র',
            img: gallery9,
            description: 'ঘুম খুনের নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন।'
        },
        {
            id: 1,
            title: 'ঘুম খুনের নির্যাতনের শিকার: বাস্তবতার নির্মম চিত্র',
            img: gallery9,
            description: 'ঘুম খুনের নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন।'
        },
        {
            id: 1,
            title: 'ঘুম খুনের নির্যাতনের শিকার: বাস্তবতার নির্মম চিত্র',
            img: gallery9,
            description: 'ঘুম খুনের নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন।'
        },
        {
            id: 1,
            title: 'ঘুম খুনের নির্যাতনের শিকার: বাস্তবতার নির্মম চিত্র',
            img: gallery9,
            description: 'ঘুম খুনের নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন।'
        },
        {
            id: 1,
            title: 'ঘুম খুনের নির্যাতনের শিকার: বাস্তবতার নির্মম চিত্র',
            img: gallery9,
            description: 'ঘুম খুনের নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন।'
        },
        {
            id: 1,
            title: 'ঘুম খুনের নির্যাতনের শিকার: বাস্তবতার নির্মম চিত্র',
            img: gallery9,
            description: 'ঘুম খুনের নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন।'
        },
        {
            id: 1,
            title: 'ঘুম খুনের নির্যাতনের শিকার: বাস্তবতার নির্মম চিত্র',
            img: gallery9,
            description: 'ঘুম খুনের নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন।'
        },
        {
            id: 1,
            title: 'ঘুম খুনের নির্যাতনের শিকার: বাস্তবতার নির্মম চিত্র',
            img: gallery9,
            description: 'ঘুম খুনের নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন।'
        },

    ]



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
                    <h3 className='text-4xl font-semibold '>মামলা</h3>
                </div>
            </div>
            <Container className='my-10'>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        galleryData.map((data) => (
                            <div key={data.id} className='imgGalleryImgWraps '>
                                <Image src={data.img} alt='gallery' width={500} height={500} />
                                <div className="imgGalleryContent bnpBtnStyle ">
                                    <h4 className='text-xl'>মামলা: ন্যায়বিচারের পথে এক দীর্ঘযাত্রা</h4>
                                    <Button component={Link} href='/' sx={buttonStyle}> <span>
                                        আরো দেখুন </span> </Button>
                                </div>


                                <div className="galleryContent bnpBtnStyle">
                                    <h4 className='text-xl'>মামলা: ন্যায়বিচারের পথে এক দীর্ঘযাত্রা</h4>
                                    <p>মামলা হলো ন্যায়বিচার পাওয়ার একটি গুরুত্বপূর্ণ মাধ্যম, যা আইন ও বিচার ব্যবস্থার মাধ্যমে সমাজে  </p>
                                    <Button component={Link} href='/cases/1' sx={buttonStyle}> <span>
                                        আরও পড়ুন </span> </Button>

                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex items-center justify-center mt-5 ">
                    <Button>Load more </Button>
                </div>
            </Container>
        </>
    );
}
