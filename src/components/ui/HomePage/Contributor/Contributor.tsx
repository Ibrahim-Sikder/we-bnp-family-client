import React from "react";
import "./Contribute.css";
import Link from "next/link";
import animation from '../../../../assets/images/icon/animation.png'
import animation2 from '../../../../assets/images/icon/animation.png'
import animation3 from '../../../../assets/images/icon/animation2.png'
import animation4 from '../../../../assets/images/icon/animation3.png'
import animation5 from '../../../../assets/images/icon/animation4.png'
import animation6 from '../../../../assets/images/icon/animation5.png'
import animation7 from '../../../../assets/images/icon/animation6.png'
import animation8 from '../../../../assets/images/icon/animation.png'
import animation9 from '../../../../assets/images/icon/animation.png'
import Image from "next/image";
import { LanguageProps } from "@/types";
const Contributor = ({ language }: LanguageProps) => {
  return (
    <>


      <div className="donationWraps my-16 rounded overflow-hidden contributionWrap ">

        <div className="bg-image flex justify-center items-center lg:px-0 px-5">
          <div className="animationIcon">
            <Image src={animation} alt='animation' />
          </div>
          <div className="animationIcon2">
            <Image src={animation2} alt='animation' />
          </div>
          <div className="animationIcon3">
            <Image src={animation5} alt='animation' />
          </div>
          <div className="animationIcon4">
            <Image src={animation3} alt='animation' />
          </div>
          <div className="animationIcon5">
            <Image src={animation4} alt='animation' />
          </div>
          <div className="animationIcon6">
            <Image src={animation5} alt='animation' />
          </div>
          <div className="animationIcon7">
            <Image src={animation6} alt='animation' />
          </div>
          <div className="animationIcon8">
            <Image src={animation7} alt='animation' />
          </div>
          <div className="animationIcon9">
            <Image src={animation8} alt='animation' />
          </div>
          <div className="animationIcon10">
            <Image src={animation9} alt='animation' />
          </div>
          <div className="contributeContent">
            <div className="lg:max-w-3xl mx-auto ">
              <h1 className=" text-center text-xl md:text-3xl lg:text-5xl text-[#CB2D2E]">
                {language === 'ENG' ? 'Our means of sending information' : 'আমাদের তথ্য পাঠানোর মাধ্যম'}
              </h1>
              <p className="mt-5 text-sm md:text-xl text-center ">

                {language === 'ENG' ? 'Send us pictures, video documents of you and your partner. So that we can easily stand by our brothers.' : 'আপনার ও আপনার পাশের নির্যাতিত তথ্য চিত্র, ভিডিও ডকুমেন্টস পাঠান আমাদেরকে। যেন আমরা সহজেই আমাদের ভাইদের পাশে দাঁড়াতে পারি।'}
              </p>
            </div>
            <div className="flex justify-center z-10">

              <Link href='/information'>
                <button className="bg-gradient-to-r from-red-600 to-green-600 text-white py-3 px-6 rounded inline-block font-semibold mt-5">
                  {language === 'ENG' ? 'Send Information' : 'তথ্য পাঠান'}
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Contributor;
