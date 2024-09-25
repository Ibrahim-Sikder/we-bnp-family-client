import Image from "next/image";
import React from "react";
import img from "../../../../src/assets/images/banner/banner.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Container from "../Container";
import logo from "../../../../src/assets/images/logo/logo.jpg";
import { LocalPhone, LocalPostOffice, LocationOn } from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#111A22] text-white  sectionMargin ">
      <Container>
        <footer className="lg:relative w-full ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-8">
            <div className="bg-red-600 p-5 text-center rounded">

              <h2 className="text-2xl font-bold">সাবস্ক্রাইব নিউজলেটার</h2>
              <div className="mt-4 flex justify-center">
                <input
                  type="email"
                  placeholder="আপনার ইমেইল লিখুন"
                  className="p-3 rounded-l-md w-2/3 focus:outline-none text-black"
                />
                <button className="bg-white text-red-600 font-semibold px-4 py-3 rounded-r-md">
                  সাবস্ক্রাইব
                </button>
              </div>
            </div>

            <div className="bg-red-600 p-5 text-center rounded">
              <h3 className="text-lg font-semibold uppercase">
                আমাদের অনুসরণ করুন
              </h3>

              <div className="flex justify-center flex-wrap gap-3 mt-4">
                <a target="_blank" href="https://www.facebook.com/webnpfamily" className="bg-white text-red-600 p-1 rounded-md">
                  <FacebookIcon />
                </a>
                <a target="_blank" href="https://x.com/i/flow/login?redirect_after_login=%2Fwebnpfamily" className="bg-white text-red-600 p-1 rounded-md">
                  <XIcon />
                </a>
                <a href="#" className="bg-white text-red-600 p-1 rounded-md">
                  <InstagramIcon />
                </a>
                <a href="#" className="bg-white text-red-600 p-1 rounded-md">
                  <YouTubeIcon />
                </a>
                <a href="#" className="bg-white text-red-600 p-1 rounded-md">
                  <LinkedInIcon />
                </a>
              </div>
            </div>


          </div>

          <hr />

          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-full place-content-between place-items-center ">
              <div>
                <Image
                  src={logo}
                  alt="logo"
                  className="w-24 h-24 object-cover rounded-full mx-auto"
                />
                <h3 className="text-lg font-semibold mt-3">আমরা বিএনপি পরিবার</h3>


              </div>

              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-2"> যোগাযোগ </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 md:justify-normal justify-center">
                    <LocalPhone />
                    <p className="mb-2">৯৩৬১০৬৪ </p>
                  </div>
                  <div className="flex items-center gap-2 md:justify-normal justify-center">
                    <LocalPostOffice />
                    <p className="mb-2">bnpfamily24@outlook.com</p>
                  </div>
                  <div className="flex items-center gap-2 md:justify-normal justify-center">
                    <LocationOn />
                    <p>২৮/১ ভিআইপি রোড, নয়াপল্টন, ঢাকা, বাংলাদেশ</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">আমাদের সম্পর্কে</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      আমাদের ইতিহাস
                    </a>
                  </li>

                </ul>
                
                  <button className="bg-gradient-to-r from-red-600 to-green-600 text-white py-2 px-4 rounded inline-block font-semibold mt-5">
                    সহযোগিতা
                  </button>
         
              </div>



            </div>
          </div>
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -top-12 bg-white p-1 rounded-full">
            <Image
              src={logo}
              alt="logo"
              className="w-24 h-24 object-cover rounded-full"
            />
          </div>
          <div className="text-center py-8">
            <p>© ২০২৪ আমরা বিএনপি পরিবার </p>
            <p>বাংলাদেশ জাতীয়তাবাদী দল - বিএনপি এর তথ্য ও প্রযুক্তি অফিস হতে পরিচালিত</p>
          </div>

        </footer>
      </Container>
    </div>
  );
};

export default Footer;
