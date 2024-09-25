/* eslint-disable react/no-unescaped-entities */
"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Container from "@/components/shared/Container";

import gum from "../../../../assets/images/gum/gum.jpeg";
import prison from "../../../../assets/images/prison/karagar.webp";
import prison3 from "../../../../assets/images/prison/prison3.jpg";
import murtyre from "../../../../assets/images/gum/gum.jpeg";
import murtyre2 from "../../../../assets/images/murtyre/murtyre2.jpeg";
import prison4 from "../../../../assets/images/murtyre/murtyre.jpeg";
import toture from "../../../../assets/images/torture/torture3.jpg";
import toture2 from "../../../../assets/images/torture/toture2.jpg";
import toture3 from "../../../../assets/images/torture/toture3.jpg";

import Image from "next/image";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./PhotoGallery.css";
import { Button, Divider, Tabs } from "@mui/material";
import Link from "next/link";
import media2 from "../../../../assets/images/gum/gum3.jpeg";
import media3 from "../../../../assets/images/media/media9.webp";
export default function PhotoGallery() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };




  const galleryData = [
    {
      id: 1,
      title: "ঘুম খুনের নির্যাতনের শিকার: বাস্তবতার নির্মম চিত্র",
      img: gum,
      description:
        "ঘুম খুনের নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন।",
    },
    {
      id: 2,
      title: "ঘুম খুনের নির্যাতনের শিকার: বাস্তবতার নির্মম চিত্র",
      img: gum,
      description:
        "ঘুম খুনের নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন।",
    },
    {
      id: 3,
      title: "ঘুম খুনের নির্যাতনের শিকার: বাস্তবতার নির্মম চিত্র",
      img: gum,
      description:
        "ঘুম খুনের নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন।",
    },
    {
      id: 4,
      title: "ঘুম খুনের নির্যাতনের শিকার: বাস্তবতার নির্মম চিত্র",
      img: gum,
      description:
        "ঘুম খুনের নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন।",
    },
    {
      id: 5,
      title: "ঘুম খুনের নির্যাতনের শিকার: বাস্তবতার নির্মম চিত্র",
      img: gum,
      description:
        "ঘুম খুনের নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন।",
    },
    {
      id: 6,
      title: "ঘুম খুনের নির্যাতনের শিকার: বাস্তবতার নির্মম চিত্র",
      img: gum,
      description:
        "ঘুম খুনের নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন।",
    },
  ];
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



  const tabStyle = {
    "& .MuiTabs-indicator": {
      display: "none",
    },
    "& .MuiTab-root": {
      backgroundColor: "#2B8444",
      color: "#fff",
      margin: "0 5px",
      padding: {
        sm: "auto",
        xs: "5px",
        lg: '12px 16px'
      },
      borderRadius: {
        md: "30px",
        xs: "10px",
      },
      position: "relative",
      transition: "all 0.5s cubic-bezier(0.48, 0.46, 0.6, 0.57)",
      zIndex: 1,
      minWidth: { xs: "auto", sm: "100px", lg: '160px' },
      width: "auto",
      fontSize: { xs: "10px", sm: "14px" },
      minHeight: { xs: "25px", sm: "auto", lg: '50px' },
      "&.Mui-selected": {
        backgroundColor: "#CB2D2E",
        color: "white",
        zIndex: 10,
      },
      "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        width: "0%",
        height: "100%",
        backgroundImage: "-webkit-linear-gradient(right, #2B8444, #CB2D2E)",
        transition: "all 0.5s cubic-bezier(0.48, 0.46, 0.6, 0.57)",
        zIndex: -1,
      },
      "&:hover": {
        color: "white",
        zIndex: 10,
        "&::after": {
          width: "100%",
        },
      },
    },
  };

  const boxStyle = {
    width: {
      lg: "100%",
      md: "100%",
      sm: "100%",
      xs: "100%",
    },
    margin: "auto",
    typography: "body1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }
  const buttonStyle = {
    width: { xs: "70px", md: "120px", sm: "120px" },
    height: { md: "30px", xs: "30px", lg: '50px' },
    fontSize: { md: "12px", xs: "10px", xl: "13px" },
    borderRadius: "30px",
    background: "#2B8444",
    padding: '0px'
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


  ];
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

  return (
    <Container className="sectionMargin px-0">
      <div className="md:w-full px-5 text-center mb-10 ">
        <h3 className="text-xl md:text-3xl"> স্বৈরাচার হাসিনার দুঃশাসন</h3>
        <Divider
          sx={{
            width: "200px",
            height: "5px",
            margin: '0 auto',
            marginTop: "10px",
            background: "linear-gradient(to right, #2B8444, #CB2D2E)",
          }}
        />
        <p className="mt-5 md:w-[780px] mx-auto text-sm md:text-base">
          বিএনপির উপর স্বৈরাচারী হাসিনার গুম, খুন, দুঃশাসন, অনাচার, অপকর্মের কিছু প্রতীক রয়েছে এখানে।
        </p>
      </div>
      <Box
        sx={boxStyle}
      >
        <TabContext value={value}>
          <Box
            sx={{
              borderColor: "divider",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Tabs
              onChange={handleChange}
              sx={tabStyle}
              value={value}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label=" গুমের তালিকা  " value="1" />
              <Tab label="শহীদদের তালিকা (২০০৯ - ২০২৪)" value="2" />
              <Tab label="আগস্ট গণ-অভ্যুত্থান" value="2" />
              <Tab label="কারা নির্যাতন" value="3" />
              <Tab label="আওয়ামী লীগের নির্যাতন" value="4" />
            </Tabs>
          </Box>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={value}
              addEndListener={(node, done) =>
                node.addEventListener("transitionend", done, false)
              }
              classNames="fade"
            >
              <div>

                <TabPanel value="1">
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                    {
                      disappearanceData.slice(0, 2).map((data) => (
                        <div key={data.id} className="disappeareCard">
                          <div className="flex gap-x-5 items-end justify-between flex-col md:flex-row ">
                            <div className="disappeareImgWrap ">
                              <Image
                                src={data.img}
                                alt="mambal"
                                width={500}
                                height={500}
                              />
                            </div>
                            <div className="disappeareContent text-left items-end  justify-end ">
                              <div className="flex text-left gap-x-8 items-center">
                                <div className="flex items-center justify-between w-[60px]">

                                  <div className="flex flex-col  gap-y-2 text-sm ">
                                    <b>নাম  </b>
                                  </div>
                                  <div className="flex flex-col ">
                                    <b>  : </b>
                                  </div>
                                </div>
                                <div className="flex flex-col">
                                  <small> {data.name}</small>
                                </div>
                              </div>
                              <div className="flex text-left gap-x-8 items-center ">
                                <div className="flex justify-between w-[60px]">
                                  <div className=" text-sm ">
                                    <b>পদবী </b>
                                  </div>
                                  <div>
                                    <b>:</b>
                                  </div>
                                </div>
                                <div>
                                  <small className="text-justify">{data.designation} </small>
                                </div>

                              </div>
                              <div className="flex text-left gap-x-10 ">
                                <div className="flex text-left items-center justify-between  w-[60px]">
                                  <div className=" text-sm ">
                                    <b>ঠিকানা</b>
                                  </div>
                                  <div>
                                    <b>:</b>
                                  </div>
                                </div>
                                <div className="text-left ">
                                  <small className="text-left">{data.address} </small>
                                </div>

                              </div>
                              {/* <div className="flex gap-x-10 ">
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

                              </div> */}
                              <span className="mt-3 block text-sm "> <b>সংক্ষিপ্ত বিবরণী:</b>{data.short_description}
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
                      ))
                    }
                  </div>
                  <div className="flex justify-end items-end w-full mr-16 mt-5 ">
                    <Link href="/disappearances">
                      <button className="bg-gradient-to-r from-red-600 to-green-600 text-white py-2 px-8 rounded inline-block font-semibold uppercase">
                        সবগুলো দেখুন
                      </button>
                    </Link>
                  </div>
                </TabPanel>
                <TabPanel value="2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                      murtyreData.slice(0, 2).map((data) => (
                        <div key={data.id} className="disappeareCard">
                          <div className="flex gap-x-5 items-end justify-between flex-col md:flex-row ">
                            <div className="disappeareImgWrap ">
                              <Image
                                src={data.img}
                                alt="mambal"
                                width={500}
                                height={500}
                              />
                            </div>
                            <div className="disappeareContent text-left items-end  justify-end ">
                              <div className="flex text-left gap-x-8 items-center">
                                <div className="flex items-center justify-between w-[60px]">

                                  <div className="flex flex-col  gap-y-2 text-sm ">
                                    <b>নাম  </b>
                                  </div>
                                  <div className="flex flex-col ">
                                    <b>  : </b>
                                  </div>
                                </div>
                                <div className="flex flex-col">
                                  <small> {data.name}</small>
                                </div>
                              </div>
                              <div className="flex text-left gap-x-8 items-center ">
                                <div className="flex  justify-between w-[60px]">
                                  <div className=" text-sm ">
                                    <b>পদবী </b>
                                  </div>
                                  <div>
                                    <b>:</b>
                                  </div>
                                </div>
                                <div>
                                  <small className="text-justify">{data.designation} </small>
                                </div>

                              </div>
                              <div className="flex text-left gap-x-10 ">
                                <div className="flex text-left items-center justify-between  w-[60px]">
                                  <div className=" text-sm ">
                                    <b>ঠিকানা</b>
                                  </div>
                                  <div>
                                    <b>:</b>
                                  </div>
                                </div>
                                <div className="text-left ">
                                  <small className="text-left">{data.address} </small>
                                </div>

                              </div>

                              <span className="mt-3 block text-sm "> <b>সংক্ষিপ্ত বিবরণী:</b>{data.short_description}
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
                      ))
                    }
                  </div>
                  <div className="flex justify-end items-end w-full mr-16 mt-5 ">
                    <Link href="/murdered">
                      <button className="bg-gradient-to-r from-red-600 to-green-600 text-white py-2 px-8 rounded inline-block font-semibold uppercase">
                        সবগুলো দেখুন
                      </button>
                    </Link>
                  </div>
                </TabPanel>
                <TabPanel value="3">
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
                  <div className="flex justify-end items-end w-full mr-16 mt-5 ">
                    <Link href="/prison">
                      <button className="bg-gradient-to-r from-red-600 to-green-600 text-white py-2 px-8 rounded inline-block font-semibold uppercase">
                        সবগুলো দেখুন
                      </button>
                    </Link>
                  </div>
                </TabPanel>
                {/* <TabPanel value="4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {prisonData.slice(0, 3).map((data) => (
                      <div key={data.id} className="imgGalleryImgWraps ">
                        <Image
                          src={data.img}
                          alt="gallery"
                          width={500}
                          height={500}
                        />
                        <div className="imgGalleryContent">
                          <h3>মামলা: ন্যায়বিচারের পথে এক দীর্ঘযাত্রা</h3>
                          <Button component={Link} href='/cases/1' sx={buttonStyle}>আরও পড়ুন</Button>
                        </div>

                        <div className="galleryContent">
                          <h3>
                            মামলা: ন্যায়বিচারের পথে এক দীর্ঘযাত্রা
                          </h3>
                          <p>
                            মামলা হলো ন্যায়বিচার পাওয়ার একটি গুরুত্বপূর্ণ মাধ্যম, যা আইন ও বিচার ব্যবস্থার মাধ্যমে সমাজে সুবিচার প্রতিষ্ঠা করতে সহায়ক। তবে মামলার প্রক্রিয়া প্রায়ই দীর্ঘ
                          </p>
                          <Button component={Link} href='/cases/1' sx={buttonStyle}>আরও পড়ুন</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end items-end w-full mr-16 mt-5 ">
                    <Link href="/cases">
                      <button className="bg-gradient-to-r from-red-600 to-green-600 text-white py-2 px-8 rounded inline-block font-semibold uppercase">
                        সবগুলো দেখুন
                      </button>
                    </Link>
                  </div>
                </TabPanel> */}
                <TabPanel value="4">
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
                  <div className="flex justify-end items-end w-full mr-16 mt-5 ">
                    <Link href="/torture">
                      <button className="bg-gradient-to-r from-red-600 to-green-600 text-white py-2 px-8 rounded inline-block font-semibold uppercase">
                        সবগুলো দেখুন
                      </button>
                    </Link>
                  </div>
                </TabPanel>
              </div>
            </CSSTransition>
          </SwitchTransition>

        </TabContext>
      </Box>
    </Container>
  );
}
