'use client'

/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import "./history.css";
import Container from "@/components/shared/Container";

import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa6";
import { East } from "@mui/icons-material";
import Link from "next/link";
import { useLanguage } from "@/provider/LanguageProvider";
import { TBanner } from "@/types";
import Loading from "@/components/Loading/Loading";

type TLeader = {
  _id: string,
  bng_name: string;
  eng_name: string;
  bng_qoute: string;
  eng_qoute: string;
  images: string[];
  createdAt: string,
}
const HistorySection = () => {
  const { language, setLanguage } = useLanguage();

  const [bannerData, setBannerData] = React.useState<TLeader[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [value, setValue] = React.useState("1");
  React.useEffect(() => {
    const fetchAffiliationData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/leader`, {
          cache: 'no-store'
        });
        const data = await response.json();
        setBannerData(data.data?.leaders || []);

      } catch (err) {
        setError('Failed to fetch leader data.');
      } finally {
        setLoading(false);
      }
    };

    fetchAffiliationData();
  }, []);

  if (loading) {
    return <Loading />
  }

  const ResponsiveIcon = () => {
    const [iconSize, setIconSize] = useState(30);
  
    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        if (width < 640) {
          setIconSize(20); 
        } else if (width < 768) {
          setIconSize(20); 
        } else if (width < 1024) {
          setIconSize(20);
        } else {
          setIconSize(50); 
        }
      };
      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return <FaQuoteRight size={iconSize} />;
  };
  


  return (
    <div className="historyWrap">
      <Container>
        <div className="historyContent">
          <div className="grid grid-cols-1 md:grid-cols-3 xl:-mt-16 z-10 gap-5 ">
            {
              bannerData?.map((leader: TLeader) => (
                <div key={leader._id}>
                  <div>
                    <div className="heroImgWrap relative">
                      {leader?.images?.map((img) => {

                        return <Image src={img} alt="hero" width={300} height={300} key={img} />
                      })}

                     
                    </div>
                    <div className="mt-5 block xl:hidden">
                      <div className="historyContents text-white                                                 ">
                        <div className="flex lg:gap-x-2 md:gap-5">
                          <div>
                            <ResponsiveIcon />
                          </div>
                          <div>
                            <h5 className="leading-8 text-[18px] xl:text-[20px] md:text-[18px] font-bold ">
                              {language === 'ENG' ? leader.eng_qoute : leader.bng_qoute}
                            </h5>
                            <div className="flex items-center">
                              <div className="dahsed"></div>
                              <p className="ml-2 text-[12px] md:text-sm">

                                {language === 'ENG' ? leader.eng_name : leader.bng_name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }


          </div>


          <div className=" text-[#fff] mt-14 flex   items-center  justify-between ">
            {
              bannerData.map((leader: TLeader, index: number) => (
                <div key={index}>
                  <div className="historyContents hidden xl:block                                                ">
                    <div className="flex gap-5">
                      <div>
                        <ResponsiveIcon />
                      </div>
                      <div>
                        <h4 className="leading-8 ">
                          {language === 'ENG' ? leader.eng_qoute : leader.bng_qoute}
                        </h4>
                        <div className="flex items-center">
                          <div className="dahsed"></div>
                          <p className="ml-2"> {language === 'ENG' ? leader.eng_name : leader.bng_name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="dashed  hidden xl:block "></div>
                  <div className="dashed2  hidden xl:block "></div> */}
                </div>
              ))
            }

          </div>
        </div>
      </Container>
    </div>
  );
};

export default HistorySection;


