/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./history.css";
import Container from "@/components/shared/Container";
import hero from "../../../../assets/images/profile/profile.jpeg";
import heros2 from "../../../../assets/images/profile/profile2.jpeg";
import hero3 from "../../../../assets/images/profile/profile3.jpeg";
import hero2 from '../../../../assets/images/founder/founder.jpeg';
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa6";
import { East } from "@mui/icons-material";
import Link from "next/link";

const HistorySection = () => {
  return (
    <div className="historyWrap">
      <Container>
        <div className="historyContent">
          <div className="grid grid-cols-1  xl:grid-cols-3 xl:-mt-16     z-10 gap-5 ">
            <div>
              <div className="heroImgWrap relative">
                <Image src={hero3} alt="hero" width={300} height={300} />
                {/* <div className="absolute arrowBtn ">
                  <div>
                    <Link href="">
                      <button>
                        <East sx={{ fontSize: "30px" }} />
                      </button>
                    </Link>
                  </div>
                </div> */}
              </div>
              <div className="mt-5 block xl:hidden">
                <div className="historyContents text-white                                                 ">
                  <div className="flex gap-5">
                    <div>
                      <FaQuoteRight size={30} />
                    </div>
                    <div>
                      <h4 className="leading-8 ">
                        জনগণই সকল ক্ষমতার উৎস
                      </h4>
                      <div className="flex items-center">
                        <div className="dahsed"></div>
                        <p className="ml-2">শহীদ প্রেসিডেন্ট জিয়াউর রহমান</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="heroImgWrap relative">
                <div>
                  <Image src={hero} alt="hero" width={300} height={300} />
                  {/* <div className="absolute arrowBtn ">
                    <div>
                      <Link href="">
                        <button>
                          <East sx={{ fontSize: "30px" }} />
                        </button>
                      </Link>
                    </div>
                  </div> */}
                </div>


              </div>
              <div className="mt-5 xl:hidden block">
                <div className="historyContents text-white ">
                  <div className="flex gap-5">
                    <div>
                      <FaQuoteRight size={30} />
                    </div>
                    <div>
                      <h4 className="leading-8 ">
                        “দেশ বাঁচাও, মানুষ বাঁচাও”
                      </h4>
                      <div className="flex items-center">
                        <div className="dahsed"></div>
                        <p className="ml-2">দেশনেত্রী বেগম খালেদা জিয়া</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="heroImgWrap relative">
                <Image src={hero2} alt="hero" width={300} height={300} />
                {/* <div className="absolute arrowBtn ">
                  <div>
                    <Link href="">
                      <button>
                        <East sx={{ fontSize: "30px" }} />
                      </button>
                    </Link>
                  </div>
                </div> */}
              </div>
              <div className="mt-5 block xl:hidden">
                <div className="historyContents text-white ">
                  <div className="flex gap-5">
                    <div>
                      <FaQuoteRight size={30} />
                    </div>
                    <div>
                      <h4 className="leading-8 ">
                        জনগণকে সঙ্গে রাখি, জনগণের সঙ্গে থাকি
                      </h4>
                      <div className="flex items-center">
                        <div className="dahsed"></div>
                        <p className="ml-2">দেশনায়ক তারেক রহমান</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-[#fff] mt-14 flex   items-center  justify-between ">
            <div className="historyContents hidden xl:block                                                ">
              <div className="flex gap-5">
                <div>
                  <FaQuoteRight size={30} />
                </div>
                <div>
                  <h4 className="leading-8 ">
                    জনগণই সকল ক্ষমতার উৎস
                  </h4>
                  <div className="flex items-center">
                    <div className="dahsed"></div>
                    <p className="ml-2">শহীদ প্রেসিডেন্ট জিয়াউর রহমান</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashed2 hidden xl:block"></div>
            <div className="historyContents  hidden xl:block">
              <div className="flex gap-5">
                <div>
                  <FaQuoteRight size={30} />
                </div>
                <div>
                  <h4 className="leading-8 ">
                    “দেশ বাঁচাও, মানুষ বাঁচাও”
                  </h4>
                  <div className="flex items-center">
                    <div className="dahsed"></div>
                    <p className="ml-2">দেশনেত্রী বেগম খালেদা জিয়া</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashed2 dashed3 hidden xl:block "></div>
            <div className="historyContents hidden xl:block ">
              <div className="flex gap-5">
                <div>
                  <FaQuoteRight size={30} />
                </div>
                <div>
                  <h4 className="leading-8 ">
                    জনগণকে সঙ্গে রাখি, জনগণের সঙ্গে থাকি
                  </h4>
                  <div className="flex items-center">
                    <div className="dahsed"></div>
                    <p className="ml-2">তারেক রহমান</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HistorySection;
