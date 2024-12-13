'use client'

import { useHistoryData } from '@/hooks/useHistoryData';
import { useLanguage } from '@/provider/LanguageProvider';
import { Box, Tab, Tabs } from '@mui/material';
import Image from 'next/image';
import React from 'react';





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
const History = () => {
    const [value, setValue] = React.useState(0);
    const { language } = useLanguage();
    const { historyData, loading } = useHistoryData();
    const filterHistoryData = historyData.filter((data) => data.category === "History");

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            {filterHistoryData?.map((data) => (
                <div key={data._id}>
                    <div className="shadow-lg rounded-lg lg:rounded-3xl overflow-hidden flex flex-col lg:flex-row my-10 border">
                        <div className="lg:w-1/2 lg:h-auto p-3 lg:p-6 bg-[#fdf7f4] space-y-6">
                            <div className="flex flex-row justify-center md:justify-start lg:justify-start lg:content-normal">
                                <h2 className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent text-base lg:mb-4 border rounded-full text-center w-[105px] bg-white">
                                    {language === 'ENG' ? 'History' : 'ইতিহাস'}
                                </h2>
                            </div>
                            <h1>{language === 'ENG' ? data.english_title : data.bangla_title}</h1>
                            <h4 className="font-normal">
                                {language === 'ENG' ? data.english_description : data.bangla_description}
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
                                        {data.tab_content.map((tab, index) => (
                                            <Tab
                                                key={tab._id}
                                                label={language === 'ENG' ? tab.english_tab_title : tab.bangla_tab_title}
                                                {...a11yProps(index)}
                                            />
                                        ))}
                                    </Tabs>
                                </Box>
                                <Box>
                                    {data.tab_content.map((tab, index) => (
                                        <CustomTabPanel key={tab._id} value={value} index={index}>
                                            {language === 'ENG'
                                                ? tab.english_tab_description
                                                : tab.bangla_tab_description}
                                        </CustomTabPanel>
                                    ))}
                                </Box>
                            </Box>
                        </div>
                        <div className="lg:w-1/2 lg:relative">
                            {data.images?.slice(0, 1).map((img) => (
                                <Image
                                    key={img}
                                    width={500}
                                    height={500}
                                    objectFit="cover"
                                    src={img}
                                    alt={data.bangla_title}
                                    className="h-[300px] md:h-[400px] lg:h-[500px] w-[500px] md:w-full lg:w-auto"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};


export default History;