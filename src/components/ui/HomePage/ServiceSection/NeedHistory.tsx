/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./history.css";
import Container from "@/components/shared/Container";
import hero from "../../../../assets/images/hero/hero.jpg";
import hero2 from "../../../../assets/images/hero/hero2.jpg";
import hero3 from "../../../../assets/images/hero/hero3.jpg";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa6";
import { East } from "@mui/icons-material";
import Link from "next/link";
const HistorySection = () => {
  return (
    <div className="historyWrap">
      <Container>
        <div className="historyContent">
          <div className="grid grid-cols-1  xl:grid-cols-3 xl:-mt-32     z-10 gap-5 ">
            <div>
              <div className="heroImgWrap relative">
                <Image src={hero} alt="hero" width={300} height={300} />
                <div className="absolute arrowBtn ">
                  <div>
                    <Link href="/profile/ziaur-rahman">
                      <button>
                        <East sx={{ fontSize: "30px" }} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="heroImgWrap relative">
              <Image src={hero2} alt="hero" width={300} height={300} />
              <div className="absolute arrowBtn ">
                <div>
                  <Link href="/profile/khaleda-zia">
                    <button>
                      <East sx={{ fontSize: "30px" }} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="heroImgWrap relative">
              <Image src={hero3} alt="hero" width={300} height={300} />
              <div className="absolute arrowBtn ">
                <div>
                  <Link href="/profile/tarek-rahman">
                    <button>
                      <East sx={{ fontSize: "30px" }} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-[#fff] mt-14 flex   justify-between ">
            <div className="historyContents ">
              <div className="flex gap-5">
                <div>
                  <FaQuoteRight size={30} />
                </div>
                <div>
                  <h4 className="leading-8 ">
                    দেশ গড়তে মানুষের প্রয়োজন আত্মসম্মান, দায়িত্ববোধ ও সংগঠন
                  </h4>
                  <div className="flex items-center">
                    <div className="dahsed"></div>
                    <p className="ml-2">শহীদ রাষ্ট্রপতি জিয়াউর রহমান</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashed2"></div>
            <div className="historyContents ">
              <div className="flex gap-5">
                <div>
                  <FaQuoteRight size={30} />
                </div>
                <div>
                  <h4 className="leading-8 ">
                    “ওদের হাতে গোলামীর জিঞ্জির, আমাদের হাতে স্বাধীনতার পতাকা”{" "}
                  </h4>
                  <div className="flex items-center">
                    <div className="dahsed"></div>
                    <p className="ml-2">দেশনেত্রী বেগম খালেদা জিয়া</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashed2 dashed3"></div>
            <div className="historyContents ">
              <div className="flex gap-5">
                <div>
                  <FaQuoteRight size={30} />
                </div>
                <div>
                  <h4 className="leading-8 ">
                    কারাগারে নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা
                    যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র
                    যন্ত্রণার সম্মুখীন হন।{" "}
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
      </Container>
    </div>
  );
};

export default HistorySection;
