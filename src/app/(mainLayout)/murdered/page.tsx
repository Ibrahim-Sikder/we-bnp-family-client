'use client'
import * as React from 'react';
import murtyre from "../../../assets/images/gum/gum.jpeg";
import murtyre2 from "../../../assets/images/murtyre/murtyre2.jpeg";
import murtyre3 from "../../../assets/images/murtyre/murtyre3.png";
import Image from 'next/image';
import { Button, TextField } from '@mui/material';
import Container from '@/components/shared/Container';
import '../../../components/ui/HomePage/PhotoGallery/PhotoGallery.css'
import { Search } from '@mui/icons-material';
export default function Cases() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const murtyreData = [
    {
      id: 1,
      title: "১০ বছরে গুম ১ হাজার ২০৯ জন: বিএনপি",
      description:
        "আওয়ামী লীগের শাসনামলে গত ১০ বছরে ১ হাজার ২০৯ জন গুম হয়েছেন দাবি করে বিএনপি বলছে, কোনো একদিন যথাযথ তদন্তের মাধ্যমে এ ধরনের মানবতাবিরোধী অপরাধের বিচার করা হবে।",
      img: murtyre,
      name: 'সাইফুল ইসলাম হিরু',
      designation: 'ছাত্রদল নেতা',
      address: 'লক্ষ্মীপুর ',
      short_description: '২০১২ সালের ১৭ এপ্রিল রাতে গাড়িতে করে নিজের বনানীর বাসা থেকে বের হওয়া পরে নিখোঁজ হন বিএনপি’র সাবেক সাংগঠনিক সম্পাদক এম ইলিয়াস আলী।'
    },
    {
      id: 1,
      title: "গুম হওয়া সাবেক এমপি হিরু, বিএনপি নেতা পারভেজকে ফেরত চায় পরিবার",
      description:
        "২০১৩ সালে গুম হয়েছিলেন কুমিল্লার লাকসামের সাবেক সংসদ সদস্য ও উপজেলা বিএনপির সভাপতি সাইফুল হিরু। দীর্ঘ ১১ বছর অতিবাহিত হলেও তার কোনো খবর পায়নি পরিবার। তিনি বেঁচে আছেন নাকি মারা গেছেন এই তথ্যটুকুও জানেন না তারা।",
      img: murtyre2,
      name: 'আসাদুজ্জামান হিরা খান',
      designation: 'কাওরাইদ ইউনিয়ন বিএনপির ৬ নম্বর ওয়ার্ডের সাধারণ সম্পাদক ',
      address: 'গাজীপুরের শ্রীপুর উপজেলার কাওরাইদ ইউনিয়ন ',
      short_description: 'নাশকতা ও ভাঙচুর মামলার আসামি  বিএনপি নেতা আসাদুজ্জামান হিরা খান কাশিমপুর কেন্দ্রীয় কারাগারে মারা গেছেন।'
    },
    {
      id: 1,
      title: "গুম হওয়া সাবেক এমপি হিরু, বিএনপি নেতা পারভেজকে ফেরত চায় পরিবার",
      description:
        "২০১৩ সালে গুম হয়েছিলেন কুমিল্লার লাকসামের সাবেক সংসদ সদস্য ও উপজেলা বিএনপির সভাপতি সাইফুল হিরু। দীর্ঘ ১১ বছর অতিবাহিত হলেও তার কোনো খবর পায়নি পরিবার। তিনি বেঁচে আছেন নাকি মারা গেছেন এই তথ্যটুকুও জানেন না তারা।",
      img: murtyre3,
      name: 'গোলাপুর রহমান',
      designation: 'চট্টগ্রাম মহানগরের চাঁন্দগাও থানার ৫ নম্বর মোহরা ওয়ার্ড বিএনপির সিনিয়র সহ-সভাপতি।   ',
      address: 'চট্টগ্রাম মহানগর',
      short_description: 'শনিবার (২৫ নভেম্বর) বিকেলে গাজীপুরের কাশিমপুর কারাগারে তিনি মৃত্যুবরণ করেন বলে গণমাধ্যমকে জানিয়েছেন বিএনপি চেয়ারপারসনের প্রেস উইং কর্মকর্তা শামসুদ্দিন দিদার।'
    },


  ];


  return (
    <>
      <div className='bannerWrap'>
        <div className="bannerContent">
          <h3 className='text-xl w-full  md:text-4xl font-semibold '>শহীদদের তালিকা </h3>
        </div>
      </div>
      <Container className='my-10'>
        <div className='mb-10 flex gap-2  '>
          <TextField label=' সার্চ করুন' size='small' />
          <Button><Search /></Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {
            murtyreData.map((data) => (
              <div key={data.id} className="disappeareCard">
                <div className="flex gap-x-5 items-end justify-between flex-col md:flex-row ">
                  <div className="disappeareImgWrap ">
                    <Image
                      src={data.img}
                      alt={data.title}

                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="disappeareContent items-end  justify-end ">
                    <div className="flex gap-x-10 ">
                      <div className="flex items-center justify-between w-[60px]">
                        <div className="flex flex-col  gap-y-2 text-sm ">
                          <b>নাম  </b>
                          <b>পদবী </b>
                          <b> ঠিকানা  </b>

                        </div>
                        <div className="flex flex-col ">
                          <b> : </b>
                          <b> : </b>
                          <b> : </b>
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-2 ">

                        <small> {data.name}</small>
                        <small>  {data.designation} </small>
                        <small>{data.address} </small>

                      </div>

                    </div>
                    <span className="mt-3 block text-sm "> <b>সংক্ষিপ্ত বিবরণী:</b>{data.short_description}

                      {/* <Link href="/murdered/1">
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
