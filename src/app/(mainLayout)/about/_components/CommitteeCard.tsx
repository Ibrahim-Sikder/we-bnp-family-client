import { TCommitte } from "@/types";
import Image from "next/image";
import React from "react";


interface CommitteeProp {
  committeeFilterData: TCommitte[];
  language: string,
}


const CommitteeCard: React.FC<CommitteeProp> = ({ committeeFilterData, language }) => {



  return (
    <>
      <div className="w-full text-center lg:pt-2 mb-10 lg:mb-16 xl:mb-16">
        <div className="flex flex-row items-center justify-center content-center">
          <h2 className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent text-base mb-4 border rounded-full text-center w-[105px] bg-white">
            {language === 'ENG' ? 'Committee ' : ' কমিটি'}
          </h2>
        </div>
        <div className="w-full text-center space-y-4 mb-2">
          <h1 className="text-3xl lg:text-5xl xl:text-5xl">

            {language === 'ENG' ? 'Executive Council' : 'কার্য নির্বাহী পরিষদ '}
          </h1>

        </div>

        <div className="mx-auto lg:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeeFilterData?.map((data, index: number) => (
            <div key={index} className="group relative">
              <div className="w-[90%] mx-auto max-w-full lg:max-w-sm max-h-full bg-[#fdf7f4] shadow-lg rounded-xl overflow-hidden">
                <div className="relative">
                  {data?.images.slice(0, 1)?.map((img: any) => (
                    <Image
                      src={img}
                      alt="hero"
                      width={500}
                      height={500}
                      className=" sm:h-[300px] md:h-[350px] lg:h-[400px] w-full object-cover"
                      key={img}
                    />
                  ))}
                </div>
                <div className="p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
                    {language === "ENG" ? data.english_name : data.bangla_name}
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-base">
                    {language === "ENG"
                      ? data.designation_english
                      : data.designation_bangla}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default CommitteeCard;