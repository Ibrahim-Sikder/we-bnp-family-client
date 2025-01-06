import Image from "next/image";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Container from "../Container";
import logo from "../../../../src/assets/images/logo/logo.jpg";
import { LocalPhone, LocalPostOffice, LocationOn } from "@mui/icons-material";
import { TSection } from "@/types/type";
import DonationButton from "./DonationButton";
import Subscribe from "./Subscribe";
import Link from "next/link";



export type LanguageProps = {
  language: string;
  sectionData: TSection[];
}

const Footer = ({ language, sectionData }: LanguageProps) => {
  const placeholder = language === 'ENG' ? 'Enter your email' : 'আপনার ইমেইল লিখুন'
  const breakAfterWords = (text: string, maxWordsPerLine: number) => {
    const words = text.split(' ');

    if (words.length <= maxWordsPerLine) {
      return <>{text}</>;
    }

    const firstLine = words.slice(0, maxWordsPerLine).join(' ');
    const secondLine = words.slice(maxWordsPerLine).join(' ');

    return (
      <>
        {firstLine}
        <br />
        {secondLine}
      </>
    );
  };


  return (
    <div className="bg-[#111A22] text-white  sectionMargin ">
      <Container>
        {
          sectionData.map((data) => (
            <footer key={data._id} className="lg:relative w-full ">
              <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-5 py-8">
                <div className="bg-red-600 p-5 text-center rounded">

                  <h2 className="md:text-2xl font-bold"> {language === 'ENG' ? data.subscribe_title_english : data.subscribe_title_bangla}  </h2>
                  <Subscribe />
                </div>

                <div className="bg-red-600 p-5 text-center rounded">
                  <h3 className="text-lg font-semibold uppercase">

                    {language === 'ENG' ? data.followus_title_english : data.followus_title_bangla}
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
                    <a href="https://www.youtube.com/@webnpfamily" className="bg-white text-red-600 p-1 rounded-md">
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
                    <h3 className="text-lg font-semibold mt-3"> {language === 'ENG' ? 'We BNP family' : 'আমরা বিএনপি পরিবার '} </h3>


                  </div>

                  <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold mb-2"> {language === 'ENG' ? data.footer_title_english : data.footer_title_bangla}  </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 md:justify-normal justify-center">
                        <LocalPhone />
                        <p className="mb-2">
                          {language === 'ENG' ? data.footer_phone_english : data.footer_phone_bangla}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 md:justify-normal justify-center">
                        <LocalPostOffice />
                        <p className="mb-2">bnpfamily24@outlook.com</p>
                      </div>
                      <div className="flex items-center gap-2 md:justify-normal justify-center">
                        <LocationOn />
                        <p> {language === 'ENG' ? data.footer_address_english : data.footer_address_bangla} </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Link href='/about'>
                      <h3 className="text-lg font-semibold mb-2">  {language === 'ENG' ? 'About Us' : 'আমাদের সম্পর্কে'} </h3>
                    </Link>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="hover:underline">
                          {language === 'ENG' ? 'Our History' : 'আমাদের ইতিহাস'}
                        </a>
                      </li>

                    </ul>

                    <DonationButton />

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
                <p>
                  {language === 'ENG'
                    ? breakAfterWords(data.footer_copywright_title_english, 8)
                    : breakAfterWords(data.footer_copywright_title_bangla, 5)}
                </p>

              </div>

            </footer>
          ))
        }
      </Container>
    </div>
  );
};

export default Footer;
