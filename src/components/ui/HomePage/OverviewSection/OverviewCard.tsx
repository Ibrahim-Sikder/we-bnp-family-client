import React from "react";
import "./OverviewSection.css";
import Container from "@/components/shared/Container";
import { Button } from "@mui/material";
import icon from '../../../../assets/images/icons/icon.jpeg'
import Image from "next/image";
import Link from "next/link";
import { TSection } from "@/types/type";
import { useSectionData } from "@/hooks/useSectionData";


export type LanguageProps = {
    language: string;
    sectionData: TSection[];
}
const OverviewCard = ({ language, sectionData }: LanguageProps) => {

    const buttonStyle = {
        width: { xs: "100px", md: "180px", sm: "140px", },
        height: { md: "40px", xs: "30px", },
        fontSize: { md: "14px", xs: "9px", xl: "16px" },
        borderRadius: "30px",
        background: "#2B8444",
    };

    return (
        <>
            <div className="experienceWraps sectionMargin ">
                <Container>
                    {
                        sectionData.map((data) => (

                            <div key={data._id}>
                                <div className="experienceContent">

                                    <div className="flex lg:flex-row flex-col justify-between items-center w-full xl:w-[1200px] lg:w-[1000px] gap-10  ">
                                        <div className="w-full md:w-[500px]">
                                            <h1 className="text-xl md:text-4xl">{language === 'ENG' ? data.overview_title_english : data.overview_title_bangla}</h1>
                                            <p className="leading-6  md:leading-8 text-sm md:text-xl my-3">

                                                {language === 'ENG' ? data.overview_description_english : data.overview_description_bangla}
                                            </p>
                                            <div className=" bnpBtnStyle">
                                                <Button component={Link} href='/information' sx={buttonStyle}> <span>
                                                    {language === 'ENG' ? data.buttontext_english : data.buttontext_bangla}

                                                </span> </Button>
                                            </div>
                                        </div>

                                        <div>
                                            <div className=" grid grid-cols-2 gap-10">

                                                <div className="iconWraps ">

                                                    <h1 className="text-xl md:text-3xl font-bold text-red-500">
                                                        {language === 'ENG' ? data.missing_count_english : data.missing_count_bangla}

                                                    </h1>
                                                    <p className="md:text-3xl font-fold text-red-500"> {language === 'ENG' ? data.missing_title_english : data.missing_title_bangla}

                                                    </p>
                                                </div>
                                                <div className="iconWraps ">

                                                    <h1 className="text-xl md:text-3xl font-bold  text-red-500">
                                                        {language === 'ENG' ? data.murder_count_english : data.murder_count_bangla}
                                                    </h1>
                                                    <p className="md:text-3xl font-fold  text-red-500"> {language === 'ENG' ? data.murder_title_english : data.murder_title_bangla}   </p>
                                                </div>


                                                <div className="iconWraps ">


                                                    <h1 className="text-xl md:text-3xl font-bold  text-red-500">
                                                        {language === 'ENG' ? data.case_count_english : data.case_count_bangla}
                                                    </h1>
                                                    <p className="md:text-3xl font-fold text-red-500">
                                                        {language === 'ENG' ? 'Case' : 'মামলা'}

                                                    </p>
                                                </div>
                                                <div className="iconWraps ">

                                                    <h1 className="text-xl md:text-3xl  font-bold  text-red-500">
                                                        {language === 'ENG' ? data.criminal_count_english : data.criminal_count_bangla}
                                                    </h1>
                                                    <p className="md:text-3xl font-fold text-red-500"> {language === 'ENG' ? data.criminal_title_english : data.criminal_title_bangla}  </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="victime">
                                    <div className="victimIconWrap">
                                        <div className="victimImgWraps">
                                            <Image className="rounded-full object-cover" src={icon} width={30} height={30} alt='victime' />
                                        </div>
                                    </div>
                                    <p> {language === 'ENG' ? data.overview_message_english : data.overview_message_bangla}  </p>
                                </div>
                            </div>
                        ))
                    }
                </Container>
            </div>
        </>
    );
};

export default OverviewCard;
