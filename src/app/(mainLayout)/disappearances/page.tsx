'use client'
import * as React from 'react';
import gallery9 from '../../../assets/images/gallery/gallery.jpg';
import media2 from "../../../assets/images/gum/gum3.jpeg";
import media3 from "../../../assets/images/media/media9.webp";
import media from "../../../assets/images/gum/gum4.jpeg";
import Image from 'next/image';
import { Button, TextField } from '@mui/material';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import '../../../components/ui/HomePage/PhotoGallery/PhotoGallery.css'
import { Search } from '@mui/icons-material';
export default function Cases() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };


    const disappearanceData = [
        {
            id: 1,
            title: "১০ বছরে গুম ১ হাজার ২০৯ জন: বিএনপি",
            description:
                "আওয়ামী লীগের শাসনামলে গত ১০ বছরে ১ হাজার ২০৯ জন গুম হয়েছেন দাবি করে বিএনপি বলছে, কোনো একদিন যথাযথ তদন্তের মাধ্যমে এ ধরনের মানবতাবিরোধী অপরাধের বিচার করা হবে।",
            img: media3,
            name: 'এম ইলিয়াস আলী ',
            designation: 'সাংগঠনিক সম্পাদক ',
            address: 'বনানী, ঢাকা ',
            short_description: '২০১২ সালের ১৭ এপ্রিল রাতে গাড়িতে করে নিজের বনানীর বাসা থেকে বের হওয়া পরে নিখোঁজ হন বিএনপি’র সাবেক সাংগঠনিক সম্পাদক এম ইলিয়াস আলী।'
        },
        {
            id: 1,
            title: "গুম হওয়া সাবেক এমপি হিরু, বিএনপি নেতা পারভেজকে ফেরত চায় পরিবার",
            description:
                "২০১৩ সালে গুম হয়েছিলেন কুমিল্লার লাকসামের সাবেক সংসদ সদস্য ও উপজেলা বিএনপির সভাপতি সাইফুল হিরু। দীর্ঘ ১১ বছর অতিবাহিত হলেও তার কোনো খবর পায়নি পরিবার। তিনি বেঁচে আছেন নাকি মারা গেছেন এই তথ্যটুকুও জানেন না তারা।",
            img: media2,
            name: 'সাইফুল ইসলাম হিরু',
            designation: ' লাকসাম উপজেলা বিএনপির সভাপতি',
            address: 'লাকসাম, কুমিল্লা',
            short_description: '২০১৩ সালের ২৭ নভেম্বর। এদিন কুমিল্লার লাকসাম উপজেলা বিএনপির তৎকালীন সভাপতি ও সাবেক সংসদ সদস্য মো.সাইফুল ইসলাম হিরুসহ দুই বিএনপি নেতাকে র‌্যাব পরিচয়ে অপহরণের পর গুম করা হয়েছিল'
        },
        {
            id: 1,
            title: "গুম হওয়া সাবেক এমপি হিরু, বিএনপি নেতা পারভেজকে ফেরত চায় পরিবার",
            description:
                "২০১৩ সালে গুম হয়েছিলেন কুমিল্লার লাকসামের সাবেক সংসদ সদস্য ও উপজেলা বিএনপির সভাপতি সাইফুল হিরু। দীর্ঘ ১১ বছর অতিবাহিত হলেও তার কোনো খবর পায়নি পরিবার। তিনি বেঁচে আছেন নাকি মারা গেছেন এই তথ্যটুকুও জানেন না তারা।",
            img: media,
            name: 'হুমায়ুন কবির পারভেজ',
            designation: ' লাকসাম পৌরসভা বিএনপির সভাপতি',
            address: 'লাকসাম, কুমিল্লা',
            short_description: '২০১৩ সালের ২৭ নভেম্বর। এদিন কুমিল্লার লাকসাম উপজেলা বিএনপির তৎকালীন সভাপতি হিরুর সঙ্গে হুমায়ুন কবির পারভেজ অপহরণের পর গুম করা হয়েছিল । পারভেজ লাকসাম পৌরসভা বিএনপির তৎকালীন সভাপতি ছিলেন।'
        },


    ];


    return (
        <>
            <div className='bannerWrap'>
                <div className="bannerContent">
                    <h3 className='text-3xl md:text-4xl font-semibold '>গুম তালিকা </h3>
                </div>
            </div>
            <Container className='my-10'>
                <div className='mb-10 flex gap-2  '>
                    <TextField label=' সার্চ করুন' size='small' />
                    <Button><Search /></Button>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                    {
                        disappearanceData.map((data) => (
                            <div key={data.id} className="disappeareCard">
                                <div className="flex gap-x-5  justify-between flex-col md:flex-row items-end ">
                                    <div className="disappeareImgWrap ">
                                        <Image
                                            src={data.img}
                                            alt="mambal"
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                    <div className="disappeareContent items-end ">
                                        <div className="flex gap-x-10 ">
                                            <div className="flex items-center justify-between w-[60px]">
                                                <div className="flex flex-col  gap-y-2 text-sm ">
                                                    <b>নাম  </b>
                                                    <b>পদবী </b>
                                                    <b> ঠিকানা  </b>

                                                </div>
                                                <div className="flex flex-col ">
                                                    <b>  : </b>
                                                    <b> : </b>
                                                    <b>   : </b>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-y-2 ">

                                                <small> {data.name}</small>
                                                <small> {data.designation} </small>
                                                <small>{data.address} </small>

                                            </div>

                                        </div>
                                        <span className="mt-3 block text-sm "> <b>সংক্ষিপ্ত বিবরণী:</b>{data.short_description}
                                        {/* <Link href="/disappearances/1">
                                            <button className="mt-3 bg-gradient-to-r from-red-600 to-green-600 text-white py-0 text-[10px] px-2  rounded inline-block font-semibold uppercase">
                                                আরও পড়ুন
                                            </button>
                                        </Link> */}
                                        
                                         </span>
                                    </div>
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
