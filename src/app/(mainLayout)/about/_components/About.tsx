"use client";

import React from "react";
import Container from "@/components/shared/Container";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CommitteeCard from "./CommitteeCard";

import Founder from "./Founder";
import Upodesta from "./Upodesta";

import CommonBanner from "@/components/shared/CommonBanner/CommonBanner";
import { LanguageProps, TCommitte } from "@/types";
import Loading from "@/components/Loading/Loading";
import History from "./History";
import { useSectionData } from "@/hooks/useSectionData";


const About = ({ language }: LanguageProps) => {
  const { sectionData } = useSectionData()
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


  const title = language === 'ENG' ? 'About Us' : 'আমাদের সম্পর্কে'



  return (
    <>
      <CommonBanner title={title} />

      <Container>
        <div className="mb-10">

          <div >
            <History />
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
            {
              sectionData.map((data) => (
                <div key={data._id} className="w-full text-center space-y-2">
                  <h1 className=" text-center text-xl md:text-3xl lg:text-5xl text-[#CB2D2E]">
                    {language === 'ENG' ? data.information_title_english : data.information_title_bangla}
                  </h1>
                  <p className="mt-5 text-sm md:text-xl text-center ">

                    {language === 'ENG' ? data.information_description_english : data.information_description_bangla}
                  </p>
                </div>
              ))
            }


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
