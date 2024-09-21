"use client";

import React from "react";
import Image from "next/image";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import banner1 from "../../../../assets/images/banner/banner7.jpg";
import banner2 from "../../../../assets/images/banner/banner4.jpg";
import cardimg1 from "../../../../assets/images/hero/hero.jpg";
import cardimg2 from "../../../../assets/images/hero/hero2.jpg";
import cardimg3 from "../../../../assets/images/hero/hero3.jpg";
import Container from "@/components/shared/Container";
import Link from "next/link";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CommitteeCard from "./CommitteeCard";

import Founder from "./Founder";
import Upodesta from "./Upodesta";
import Banner from "./Banner";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const About = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Banner />
      {/* <Image
        src={banner1}
        className="w-full h-[150px] md:h-[350px] lg:h-[400px] xl:h-[400px]"
        alt="this is cover img"
      /> */}
      <Container>
        <div className="mb-10">
          <div className="shadow-lg rounded-lg lg:rounded-3xl overflow-hidden flex flex-col lg:flex-row my-10 border">
            {/* Left Part */}

            <div className="lg:w-1/2 lg:h-[500px] p-3 lg:p-6 bg-[#fdf7f4] space-y-6">
              <div className="flex flex-row justify-center md:justify-start lg:justify-start lg:content-normal">
                <h2 className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent text-base lg:mb-4 border rounded-full text-center w-[105px] bg-white">
                  ইতিহাস
                </h2>
              </div>
              <h1>আমরা বিএনপি পরিবার</h1>
              <h4 className="font-normal">
                বাংলাদেশের গণতন্ত্র পুনঃরুদ্ধারের আন্দোলনে গুম, খুন ও পঙ্গুত্বের
                শিকার বিএনপির নেতাকর্মীদের পাশে থাকার প্রত্যয়ে আমরা বিএনপি
                পরিবার নামে সেল গঠন করেছে বিএনপি। আমরা বিএনপি পরিবার সেলের
                প্রধান পৃষ্ঠপোষক বিএনপির ভারপ্রাপ্ত চেয়ারম্যান দেশনায়ক তারেক রহমান।
              </h4>
              <Box>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    borderRadius: "8px",
                    overflow: "hidden",
                    borderBottomColor: "white",
                  }}
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="card tabs"
                    sx={{
                      "& .MuiTab-root": {
                        color: "black",
                        backgroundColor: "white",
                        "&.Mui-selected": {
                          backgroundImage:
                            "linear-gradient(to right, #2B8444, #CB2D2E)",
                          color: "white",
                        },
                      },
                    }}
                  >
                    <Tab label="প্রতিষ্ঠা" {...a11yProps(0)} />
                    <Tab label="স্লোগান" {...a11yProps(1)} />
                    <Tab
                      label="লক্ষ্য ও উদ্দেশ্য"
                      {...a11yProps(2)}
                      sx={{
                        borderBottomRightRadius: "8px",
                        borderTopRightRadius: "8px",
                      }}
                    />
                  </Tabs>
                </Box>
                <Box>
                  <CustomTabPanel value={value} index={0}>
                    আমরা বিএনপি পরিবার  ২০২৪ খ্রিস্টাব্দে প্রতিষ্ঠিত হয়
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                    গণতন্ত্র পুনরুদ্ধার আন্দোলনে গুম, খুন ও পঙ্গুত্বের শিকার
                    বিএনপি&apos;র নেতাকর্মীদের পাশে আমরা বিএনপি পরিবার
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                    বাংলাদেশের গণতন্ত্র পুনঃরুদ্ধারের আন্দোলনে গুম, খুন ও
                    পঙ্গুত্বের শিকার বিএনপির নেতাকর্মীদের পাশে থাকার প্রত্যয়ে
                    আমরা বিএনপি পরিবার
                  </CustomTabPanel>
                </Box>
              </Box>
            </div>

            {/* Right Part */}
            <div className="lg:w-1/2 lg:relative">
              <Image
                src={banner2}
                alt="Card Image"
                // layout="fill"
                objectFit="cover"
                className="h-[300px] md:h-[400px] lg:h-[500px] w-[500px] md:w-full lg:w-auto"
              />
            </div>
          </div>

          <div className="w-full text-center lg:pt-10 mb-10">
            <div className="flex flex-row items-center justify-center content-center">
              <h2 className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent text-base mb-4 border rounded-full text-center w-[105px] bg-white">
                পৃষ্ঠপোষক
              </h2>
            </div>
            <div className="w-full text-center space-y-4 mb-2">
              <h1 className="text-3xl lg:text-5xl xl:text-5xl">দেশনায়ক তারেক রহমান</h1>
              <h3 className="text-2xl ">
                প্রধান পৃষ্ঠপোষক
                {/* <span className="text-xl font-light"> আমরা বিএনপি পরিবার</span> */}
              </h3>

            </div>
            <Founder />
          </div>

          <div>
            <Upodesta />
          </div>
          <div>
            <CommitteeCard />
          </div>

          {/* SpeechBubble */}
          {/* <div className="w-full text-center">
            <div className="pb-10 md:pb-20 lg:pb-32 xl:pb-32">
              <div className="flex flex-row items-center justify-center content-center">
                <h2 className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent text-base mb-4 border rounded-full text-center w-[200px] bg-white">
                  Organization journey
                </h2>
              </div>
              <h1>Our evolutionary path</h1>
              <h4 className="font-normal">
                Tracing our journey from grassroots beginnings to global
                influence, see how we&apos;ve evolved to create sustainable
                change worldwide.
              </h4>
            </div> */}

          {/* <SpeechBubble /> */}
          {/* </div> */}

          {/* Donation */}
          <div className="w-full text-center lg:pt-10 xl:pt-4 space-y-5">
            <div className="flex flex-row items-center justify-center content-center">
              <h2 className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent text-base border rounded-full text-center w-[105px] bg-white">
                তথ্য পাঠান
              </h2>
            </div>
            <div className="w-full text-center space-y-2">
              <h1 className="text-3xl lg:text-5xl">
                আমাদের তথ্য পাঠানোর মাধ্যম
              </h1>
              <h5>
                আপনার ও আপনার পাশের নির্যাতিত তথ্য চিত্র, ভিডিও ডকুমেন্টস পাঠান আমাদেরকে। যেন আমরা সহজেই আমাদের ভাইদের পাশে দাঁড়াতে পারি।
              </h5>
            </div>
            <div className="">
              <Button href="/information" className="bg-gradient-to-r from-red-600 to-green-600">
                তথ্য পাঠান <ArrowRightAltIcon />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
