/* eslint-disable react/no-unescaped-entities */
"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Container from "@/components/shared/Container";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./PhotoGallery.css";
import { Divider, Tabs } from "@mui/material";
import DisappearanceCard from "./DisappearanceCard";
import { TDisappearance } from "@/types/disappearance";
import MurtyreCard from "./MurtyreCard";
import PrisonCard from "./PrisonCard";
import AwamiTortureCard from "./AwamiTortureCard";
import { TPrison } from "@/types/prison";
import { useLanguage } from "@/provider/LanguageProvider";
import Loading from "@/components/Loading/Loading";
import { useSectionData } from "@/hooks/useSectionData";
import AugustMassUprisingCard from "./AugustMassUprisingCard";
import { usePrisonData } from "@/hooks/usePrisonData";
import { useDisappearanceData } from "@/hooks/useDisappearanceData";

export default function PhotoGallery() {
  const { language } = useLanguage()
  const { sectionData, } = useSectionData()
  const { prisonData, loading: prisonLoading } = usePrisonData()
  const { disappearanceData, loading: disappearanceLoading, } = useDisappearanceData()
  const [value, setValue] = React.useState("1");

  if (disappearanceLoading || prisonLoading) {
    return <Loading />;
  }



  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };


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
        lg: "12px 16px",
      },
      borderRadius: {
        md: "30px",
        xs: "10px",
      },
      position: "relative",
      transition: "all 0.5s cubic-bezier(0.48, 0.46, 0.6, 0.57)",
      zIndex: 1,
      minWidth: { xs: "auto", sm: "100px", lg: "160px" },
      width: "auto",
      fontSize: { xs: "10px", sm: "14px" },
      minHeight: { xs: "25px", sm: "auto", lg: "50px" },
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
  };


  const disappearanceFilterData = disappearanceData.filter((item) => item.category === 'গুমের তালিকা')
  const murtyreFilterData = disappearanceData.filter((item) => item.category === 'শহীদদের তালিকা')
  const prisonFilterData = prisonData.filter((item) => item.category === 'কারাগারে নির্যাতন')
  const tortureFilterData = prisonData.filter((item) => item.category === 'আওয়ামী লীগের নির্যাতন')
  const augostilterData = disappearanceData.filter((item) => item.category === 'আগস্ট গণ-অভ্যুত্থান')


  return (
    <Container className="sectionMargin px-0">
      {
        sectionData.map((data) => (
          <div key={data._id} className="md:w-full px-5 text-center mb-10 ">
            <h3 className="text-xl md:text-3xl"> {language === 'ENG' ? data.history_title_english : data.history_title_english} </h3>
            <Divider
              sx={{
                width: "200px",
                height: "5px",
                margin: "0 auto",
                marginTop: "10px",
                background: "linear-gradient(to right, #2B8444, #CB2D2E)",
              }}
            />
            <p className="mt-5 md:w-[780px] mx-auto text-sm md:text-base">
              {
                language === 'ENG' ? data.history_description_english : data.history_description_bangla
              }
            </p>
          </div>
        ))
      }
      <Box sx={boxStyle}>
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
              <Tab label={language === 'ENG' ? 'Disappeared List' : 'গুমের তালিকা'} value="1" />
              <Tab label={language === 'ENG' ? 'Martyrs List' : 'শহীদদের তালিকা (২০০৯ - ২০২৪)'} value="2" />
              <Tab label={language === 'ENG' ? 'August Mass Uprising' : 'আগস্ট গণ-অভ্যুত্থান'} value="3" />
              <Tab label={language === 'ENG' ? 'Prison Torture' : 'কারা নির্যাতন'} value="4" />
              <Tab label={language === 'ENG' ? 'Awami League Torture' : 'আওয়ামী লীগের নির্যাতন'} value="5" />
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
                  <DisappearanceCard language={language} disappearanceData={disappearanceFilterData} />
                </TabPanel>

                <TabPanel value="2">
                  <MurtyreCard language={language} murtyreFilterData={murtyreFilterData} />
                </TabPanel>
                <TabPanel value="3">
                  <AugustMassUprisingCard language={language} augostilterData={augostilterData} />
                </TabPanel>
                <TabPanel value="4">
                  <PrisonCard language={language} prisonData={prisonFilterData} />
                </TabPanel>
                <TabPanel value="5">
                  <AwamiTortureCard language={language} tortureData={tortureFilterData} />
                </TabPanel>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </TabContext>
      </Box>
    </Container>
  );
}
