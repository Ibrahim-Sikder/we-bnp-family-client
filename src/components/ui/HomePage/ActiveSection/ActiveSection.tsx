/* eslint-disable react/no-unescaped-entities */
"use client";
import Container from "@/components/shared/Container";
import "./ActiveSection.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import Link from "next/link";
import dynamic from "next/dynamic";
import ActivityCard from "./ActivityCard";
import { useLanguage } from "@/provider/LanguageProvider";
import ImportantMediaNews from "../ImportantNews/ImportantMediaNews";
import LatestMediaNews from "../LatestNews/LatestMediaNews";
import Loading from "@/components/Loading/Loading";
import ActiveSectionTitle from "./ActiveSectionTitle";
import { TActivity } from "@/types";
import { buttonStyle, tabBtnStyle, tabStyle } from "@/utils/style";
import { activityFields } from "@/utils/fields";
import { sortByDate } from "@/utils/sort";


const VictimCard = dynamic(() => import("./VictimCard"), { ssr: false });
const VictimizedSection = () => {
  const { language } = useLanguage()
  const [activityData, setActivityData] = useState<TActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchWhatwedoData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/activity?limit=4&fields=${activityFields}`, {
          cache: "no-store",
        });
        const data = await response.json();
        setActivityData(data.data?.activities || []);
      } catch (err) {
        setError("Failed to fetch activity data!");
      } finally {
        setLoading(false);
      }
    };

    fetchWhatwedoData();
  }, []);


  const [value, setValue] = React.useState("1");



  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const arrowStyle = { fontSize: "13px", marginLeft: "3px" };

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <p>Oops! activity data not found!</p>
  }
  const sortedActivityData = sortByDate(activityData, 'date')
  return (
    <Container className="sectionMargin">
      <ActiveSectionTitle />

      <div className="grid grid-cols-12 mt-10 md:mt-24   gap-x-5 ">
        <div className="col-span-12 xl:col-span-8 ">
          <ActivityCard language={language} activityData={sortedActivityData} />

          <VictimCard language={language} activityData={sortedActivityData} />

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
                  sx={{
                    ...tabStyle,
                    display: 'flex',
                    width: {
                      sm: '100%',
                      md: 'auto',
                      xs: '100%'
                    },


                  }}
                  aria-label="lab API tabs example"
                  centered
                >
                  <Tab sx={{
                    ...tabBtnStyle,
                  }} label={language === 'ENG' ? 'Latest' : 'সর্বশেষ'} value="1" />
                  <Tab sx={{
                    ...tabBtnStyle,
                  }} label={language === 'ENG' ? 'Important' : 'গুরুত্বপূ্র্ণ'} value="2" />
                </TabList>
              </Box>
              <TabPanel sx={{ padding: "0px" }} value="1">
                <div className="mt-10 lg:mt-0">
                  <LatestMediaNews />
                </div>
              </TabPanel>
              <TabPanel sx={{ padding: "0px" }} value="2">
                <div className="mt-10 lg:mt-0">
                  <ImportantMediaNews />

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
