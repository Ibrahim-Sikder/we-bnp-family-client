/* eslint-disable react/no-unescaped-entities */
"use client";
import Container from "@/components/shared/Container";
import "./VictimizedSection.css";
import Image from "next/image";
import victime from "../../../../assets/images/victime/victime3.png";
import img1 from "../../../../assets/images/flood/flood2.jpeg";
import img2 from "../../../../assets/images/flood/floode3.jpeg";
import img3 from "../../../../assets/images/flood/flood6.jpeg";
import flood from "../../../../assets/images/flood/new.jpg";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { Button, Divider, useMediaQuery } from "@mui/material";
import LatestNews from "../LatestNews/LatestNews";
import React from "react";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import Link from "next/link";

const VictimizedSection = () => {
  const images = [
    {
      id: 1,
      img: img1,
      title: "বন্যার্তদের জন্য আমরা বিএনপি পরিবার এর এান কার্যক্রম অব্যাহত ",
    },
    {
      id: 2,
      img: img2,
      title: "বন্যার্তদের জন্য আমরা বিএনপি পরিবার এর এান কার্যক্রম অব্যাহত ",
    },
    {
      id: 3,
      img: img3,
      title: "বন্যার্তদের জন্য আমরা বিএনপি পরিবার এর এান কার্যক্রম অব্যাহত ",
    },
  ];
  const isSmallScreen = useMediaQuery('(max-width: 640px)');
  const newsToShow = isSmallScreen ? images.slice(0, 1) : images;

  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const tabBtnStyle = {
    padding: "0px",
    fontSize: {
      md: "15px",
      xs: "12px",
    },
  };

  const tabStyle = {
    "& .MuiTabs-indicator": {
      display: "none",
    },
    "& .MuiTab-root": {
      backgroundColor: "#2B8444",
      color: "#fff",
      margin: "0 5px",
      borderRadius: "5px",
      position: "relative",
      transition: "all 0.5s cubic-bezier(0.48, 0.46, 0.6, 0.57)",
      zIndex: 1,
      width: "70px",
      padding: '0px',
      height: '20px',
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
        borderRadius: "5px",
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
  const buttonStyle = {
    width: "100px",
    height: "25px",
    borderRadius: "2px",
    padding: "3px",
    fontSize: "10px",
    background: "linear-gradient(to right, #2B8444, #CB2D2E)",
    color: "white",
  };
  const smallBtnStyle = {
    width: "70px",
    height: "20px",
    borderRadius: "2px",
    padding: "3px",
    fontSize: "8px",
    background: "linear-gradient(to right, #2B8444, #CB2D2E)",
    color: "white",
    marginTop: '5px'
  };
  const arrowStyle = { fontSize: '13px', marginLeft: '3px' }

  return (
    <Container className="sectionMargin">
      <div className="md:w-full px-5 text-center ">
        <h3 className="text-xl md:text-3xl">নির্যাতিত ও ক্ষতিগ্রস্ত পরিবারের পাশে আমরা বিএনপি পরিবার</h3>
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
          নির্যাতিত পরিবারের পাশে দাঁড়িয়েছেন দেশনায়ক তারেক রহমান। তার সহানুভূতি
          ও সহায়তায় পরিবারগুলো নতুন করে বাঁচার আশা পেয়েছে। তারেক রহমানের মানবিক
          কাজগুলো অনেকের অনুপ্রেরণা হয়ে দাঁড়িয়েছে।
        </p>
      </div>

      <div className="grid grid-cols-12 mt-24   gap-x-5 ">
        <div className="col-span-12 xl:col-span-8 ">
          <div className="victimCard">
            <div className="imgWrap">
              <Image
                className="rounded-md object-cover w-full h-full"
                src={flood}
                alt="victime"
                layout="responsive"
              />
            </div>

            <div className="p-3 space-y-2">
              <h3 className="text-xl md:text-2xl">ফেনীতে বন্যার্তদের পাশে ‘আমরা বিএনপি পরিবার</h3>
              <p>ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল। মঙ্গলবার (২৭ আগস্ট) দিনব্যাপী ফেনী সদর উপজেলায় ‘আমরা বিএনপি পরিবার’ ব্যানারে ত্রাণ বিতরণ করেন।</p>
              <Button component={Link} href='/victim/1' sx={buttonStyle}>
                আরও পড়ুন <KeyboardDoubleArrowRight sx={arrowStyle} />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-8 xl:gap-y-0 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-x-3 ">
            {newsToShow.map((data) => (
              <div key={data.id}>
                <div className="cardBox">
                  <div className="lg:h-28 h-40 md:h-52">
                    <Image
                      className="rounded-md object-cover w-full h-full "
                      src={data.img}
                      alt="victim"
                    />
                  </div>

                  <div className="mt-3 text-center flex flex-col p-3">
                    <b className='text-sm text-left '>{data.title.slice(0, 28)}...</b>
                    <Button component={Link} href='/victim/1' sx={smallBtnStyle}>
                      আরও পড়ুন <KeyboardDoubleArrowRight sx={arrowStyle} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-3 ml-3 ">
            <Button component={Link} href='/victim' sx={buttonStyle}>
              সবগুলো দেখুন <KeyboardDoubleArrowRight sx={arrowStyle} />
            </Button>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-4 mt-10   xl:-mt-[87px] ">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box
                sx={{
                  borderColor: "divider",
                  display: "flex",
                  justifyContent: "flex-end",
                  marginRight: "20px",
                  padding: "0px",
                }}
              >
                <TabList
                  onChange={handleChange}
                  sx={tabStyle}
                  aria-label="lab API tabs example"
                  centered
                >
                  <Tab sx={tabBtnStyle} label="সর্বশেষ" value="1" />
                  <Tab sx={tabBtnStyle} label="গুরুত্বপূ্র্ণ" value="2" />
                </TabList>
              </Box>
              <TabPanel sx={{ padding: "0px" }} value="1">
                <div className="mt-10 lg:mt-0">
                  <LatestNews />
                </div>
              </TabPanel>
              <TabPanel sx={{ padding: "0px" }} value="2">
                <div className="mt-10 lg:mt-0">
                  <LatestNews />
                </div>
              </TabPanel>
            </TabContext>

          </Box>
        </div>
      </div>
    </Container>
  );
};

export default VictimizedSection;
