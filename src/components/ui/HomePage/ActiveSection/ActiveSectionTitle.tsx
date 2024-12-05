'use client'
import { useSectionData } from '@/hooks/useSectionData';
import { useLanguage } from '@/provider/LanguageProvider';
import { Divider } from '@mui/material';
import React from 'react';

const ActiveSectionTitle = () => {
    const { language } = useLanguage();
    const { sectionData } = useSectionData()
  
    return (
        <>
            {
                sectionData.map((data) => (
                    <div key={data._id}>
                        <div className="md:w-full md:px-5 text-center ">
                            <h3 className="text-xl md:text-3xl">
                                {
                                    language === 'ENG' ? data.oppressed_title_english : data.oppressed_title_bangla
                                }
                            </h3>
                            <Divider

                                sx={{
                                    width: "200px",
                                    height: "5px",
                                    margin: "0 auto",
                                    marginTop: "10px",
                                    background: "linear-gradient(to right, #2B8444, #CB2D2E)",
                                }}
                            />
                            <p className="mt-5 xl:w-[780px] mx-auto text-sm md:text-base">

                                {
                                    language === 'ENG' ? data.oppressed_description_english : data.oppressed_description_bangla
                                }
                            </p>
                        </div>
                    </div>

                ))
            }
        </>
    );
};

export default ActiveSectionTitle;