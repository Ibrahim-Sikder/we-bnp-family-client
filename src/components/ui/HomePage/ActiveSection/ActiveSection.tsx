/* eslint-disable react/no-unescaped-entities */
"use client";
import Container from "@/components/shared/Container";
import "./ActiveSection.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button, Divider, useMediaQuery } from "@mui/material";
import React from "react";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import Link from "next/link";

import dynamic from "next/dynamic";
import ActivityCard from "./ActivityCard";
import { TActivity } from "@/types";
import { useLanguage } from "@/provider/LanguageProvider";
import ImportantNews from "../ImportantNews/ImportantProgrammNews";
import ImportantMediaNews from "../ImportantNews/ImportantMediaNews";
import LatestMediaNews from "../LatestNews/LatestMediaNews";
import LatestProgrammNews from "../LatestNews/LatestProgrammNews";
import Loading from "@/components/Loading/Loading";
import { useSectionData } from "@/hooks/useSectionData";
import ActiveSectionTitle from "./ActiveSectionTitle";

const VictimCard = dynamic(() => import("./VictimCard"), { ssr: false });
const VictimizedSection = () => {
  const { language } = useLanguage();
  const [activityData, setActivityData] = React.useState<TActivity[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [value, setValue] = React.useState("1");
  React.useEffect(() => {
    const fetchAffiliationData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/activity`, {
          cache: 'no-store'
        });
        const data = await response.json();
        setActivityData(data.data?.activities || []);

      } catch (err) {
        setError('Failed to fetch activity data.');
      } finally {
        setLoading(false);
      }
    };

    fetchAffiliationData();
  }, []);




  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const tabBtnStyle = {
    padding: "0px",
    fontSize: {
      md: "14px",
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
      padding: "0px",
      height: "20px",
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

  const arrowStyle = { fontSize: "13px", marginLeft: "3px" };

  if (loading) {
    return <Loading />
  }


  return (
    <Container className="sectionMargin">
      <ActiveSectionTitle />

      <div className="grid grid-cols-12 mt-10 md:mt-24   gap-x-5 ">
        <div className="col-span-12 xl:col-span-8 ">
          <ActivityCard language={language} activityData={activityData} />

          <VictimCard language={language} activityData={activityData} />

          <div className="flex justify-end mt-3 ml-3 ">
            <Button component={Link} href="/activity" sx={buttonStyle}>
              {
                language === 'ENG' ? 'See All' : ' সবগুলো দেখুন'
              }  <KeyboardDoubleArrowRight sx={arrowStyle} />
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
                  marginRight: {
                    xs: '0px',
                    md: '20px'
                  },
                  padding: "0px",
                }}
              >
                <TabList
                  onChange={handleChange}
                  sx={tabStyle}
                  aria-label="lab API tabs example"
                  centered
                >
                  <Tab sx={tabBtnStyle} label={language === 'ENG' ? 'Latest' : 'সর্বশেষ'} value="1" />
                  <Tab sx={tabBtnStyle} label={language === 'ENG' ? 'Important' : 'গুরুত্বপূ্র্ণ'} value="2" />
                </TabList>
              </Box>
              <TabPanel sx={{ padding: "0px" }} value="1">
                <div className="mt-10 lg:mt-0">
                  <ImportantNews />
                  <ImportantMediaNews />
                </div>
              </TabPanel>
              <TabPanel sx={{ padding: "0px" }} value="2">
                <div className="mt-10 lg:mt-0">
                  <LatestMediaNews />
                  <LatestProgrammNews />

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
