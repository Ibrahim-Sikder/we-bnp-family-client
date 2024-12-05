/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./NewsSection.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NewsSlider from "./NewsSlider";
import { useSectionData } from "@/hooks/useSectionData";

type LanguageProps = {
  language: string
}
const NewsSection = ({ language }: LanguageProps) => {

  const { sectionData } = useSectionData()
  return (
    <div className="sectionMargin">
      <div className="grid grid-cols-12 gap-x-5 ">
        <div className="hidden xl:block col-span-12 xl:col-span-5 ">
          <div className="newsLeftSide bg-gradient-to-r from-red-600 to-green-600 ">
            {
              sectionData.map((data) => (
                <div key={data._id}>

                  <div className="leftContent">
                    <h2 className="text-5xl">
                      {
                        language === 'ENG' ? data.programm_title_english : data.programm_title_bangla
                      }  </h2>
                    <p className="mt-5">
                      {
                        language === 'ENG' ? data.programm_description_english : data.programm_description_bangla
                      }

                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="col-span-12 xl:col-span-7 ">         <NewsSlider />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
