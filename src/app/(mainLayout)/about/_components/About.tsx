"use client";

import React from "react";
import Image from "next/image";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import banner2 from "../../../../assets/images/banner/banner4.webp";
import Container from "@/components/shared/Container";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CommitteeCard from "./CommitteeCard";

import Founder from "./Founder";
import Upodesta from "./Upodesta";

import CommonBanner from "@/components/shared/CommonBanner/CommonBanner";
import { LanguageProps, TCommitte } from "@/types";
import Loading from "@/components/Loading/Loading";

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

const About = ({ language }: LanguageProps) => {
  const [value, setValue] = React.useState(0);
  const [committeeData, setCommitteeData] = React.useState<TCommitte[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchPrisonData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/committee?limit=1000`, {
          cache: 'no-store'
        });
        const data = await response.json();
        setCommitteeData(data.data?.committees || []);

      } catch (err) {
        setError('Failed to fetch committee data.');
      } finally {
        setLoading(false);
      }
    };

    fetchPrisonData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <h1 className="mt-10 flex items-center justify-center text-3xl capitalize">
        {error}
      </h1>
    );
  }

  const committeeFilterData = committeeData.filter((item) => item.category == 'Committee')
  const upodestaFilterData = committeeData.filter((item) => item.category == 'Upodesta')

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const title = language === 'ENG' ? 'About Us' : 'আমাদের সম্পর্কে'


  return (
    <>
      <CommonBanner title={title} />

      <Container>
        <div className="mb-10">
          <div className="shadow-lg rounded-lg lg:rounded-3xl overflow-hidden flex flex-col lg:flex-row my-10 border">


            <div className="lg:w-1/2 lg:h-[500px] p-3 lg:p-6 bg-[#fdf7f4] space-y-6">
              <div className="flex flex-row justify-center md:justify-start lg:justify-start lg:content-normal">
                <h2 className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent text-base lg:mb-4 border rounded-full text-center w-[105px] bg-white">
                  {language === 'ENG' ? 'History' : 'ইতিহাস'}
                </h2>
              </div>
              <h1> {language === 'ENG' ? 'We are BNP family' : 'আমরা বিএনপি পরিবার'}   </h1>
              <h4 className="font-normal">
                {language === 'ENG' ? 'In the movement for the restoration of democracy in Bangladesh, the BNP has formed a cell named "We BNP Family" "Amra BNP Poribar" with the commitment to stand by the BNP leaders and activists who have been victims of disappearances, killings, and disabilities. The chief patron of the "We BNP Family" cell is Tarique Rahman, the Acting Chairman of BNP.' : 'বাংলাদেশের গণতন্ত্র পুনঃরুদ্ধারের আন্দোলনে গুম, খুন ও পঙ্গুত্বের শিকার বিএনপির নেতাকর্মীদের পাশে থাকার প্রত্যয়ে আমরা বিএনপি পরিবার নামে সেল গঠন করেছে বিএনপি। আমরা বিএনপি পরিবার সেলের প্রধান পৃষ্ঠপোষক বিএনপির ভারপ্রাপ্ত চেয়ারম্যান তারেক রহমান। '}

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
                    <Tab label={language === 'ENG' ? 'Establishment' : 'প্রতিষ্ঠা'}  {...a11yProps(0)} />
                    {/* <Tab label={language === 'ENG' ? 'Slogan' : 'স্লোগান'} {...a11yProps(1)} /> */}
                    <Tab
                      label={language === 'ENG' ? 'Goals and Objectives' : 'লক্ষ্য ও উদ্দেশ্য'}
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
                    {language === 'ENG' ? 'We BNP Family" was established in the year of 2024.' : 'আমরা বিএনপি পরিবার ২০২৪ খ্রিস্টাব্দে প্রতিষ্ঠিত হয় '}

                  </CustomTabPanel>
                  {/* <CustomTabPanel value={value} index={1}>
                    {language === 'ENG' ? "Victims of disappearances, murders and maiming in the movement to restore democracy We are the BNP family on the side of BNP's leaders and activists" : ' গণতন্ত্র পুনরুদ্ধার আন্দোলনে গুম, খুন ও পঙ্গুত্বের শিকার বিএনপির নেতাকর্মীদের পাশে আমরা বিএনপি পরিবার'}


                  </CustomTabPanel> */}
                  <CustomTabPanel value={value} index={2}>
                  {language === 'ENG' ? 'We BNP Family", committed to standing by the BNP leaders and activists who have been victims of disappearances, killings, and disabilities in the movement for the restoration of democracy in Bangladesh.' : ' বাংলাদেশের গণতন্ত্র পুনঃরুদ্ধারের আন্দোলনে গুম, খুন ও পঙ্গুত্বের শিকার বিএনপির নেতাকর্মীদের পাশে থাকার প্রত্যয়ে আমরা বিএনপি পরিবার'}



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
                {language === 'ENG' ? 'Patron' : 'পৃষ্ঠপোষক'}
              </h2>
            </div>
            <div className="w-full text-center space-y-4 mb-2">
              <h1 className="text-3xl lg:text-5xl xl:text-5xl">  {language === 'ENG' ? 'Tarique Rahman' : ' তারেক রহমান '} </h1>
              <h3 className="text-2xl ">
                {language === 'ENG' ? 'Chief Patron' : 'প্রধান পৃষ্ঠপোষক'}
              </h3>

            </div>
            <Founder language={language} />
          </div>

          <div>
            <Upodesta language={language} upodestaFilterData={upodestaFilterData} />
          </div>
          <div>
            <CommitteeCard language={language} committeeFilterData={committeeFilterData} />
          </div>

          <div className="w-full text-center lg:pt-10 xl:pt-4 space-y-5">
            <div className="flex flex-row items-center justify-center content-center">
              
            </div>
            <div className="w-full text-center space-y-2">
              <h1 className="text-3xl lg:text-5xl">
                {language === 'ENG' ? 'Our means of sending information' : 'আমাদের তথ্য পাঠানোর মাধ্যম'}
              </h1>
              <h5>
                {language === 'ENG' ? 'Send us pictures, video documents of you and your partner. So that we can easily stand by our brothers.' : ' আপনার ও আপনার পাশের নির্যাতিত তথ্য চিত্র, ভিডিও ডকুমেন্টস পাঠান আমাদেরকে। যেন আমরা সহজেই আমাদের ভাইদের পাশে দাঁড়াতে পারি।'}
              </h5>
            </div>
            <div className="">
              <Button href="/information" className="bg-gradient-to-r from-red-600 to-green-600">
                {language === 'ENG' ? 'Send Information' : 'তথ্য পাঠান'} <ArrowRightAltIcon />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
