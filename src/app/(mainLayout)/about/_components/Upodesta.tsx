import { TCommitte } from "@/types";
import { sortByDate } from "@/utils/sort";
import Image from "next/image";
import React from "react";


interface UpodestProps {
  upodestaFilterData: TCommitte[];
  language: string,
}


const Upodesta: React.FC<UpodestProps> = ({ upodestaFilterData, language }) => {

  const sortedUpodestaData = sortByDate(upodestaFilterData, 'date');

  return (
    <>
      <div className="w-full text-center lg:pt-2 mb-10 lg:mb-20 xl:mb-20">
        <div className="flex flex-row items-center justify-center content-center">
          <h2 className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent text-base mb-4 border rounded-full text-center w-[105px] bg-white">
            {language === 'ENG' ? 'Advisors' : 'উপদেষ্টাগন '}
          </h2>
        </div>
        <div className="w-full text-center space-y-4 mb-2">
          <h1 className="text-3xl lg:text-5xl xl:text-5xl">

            {language === 'ENG' ? 'Advisory Council' : 'উপদেষ্টা পরিষদ '}
          </h1>

        </div>

        <div className=" mx-auto lg:p-6 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
          {sortedUpodestaData.map((data, index: number) => (
            <div key={index} className="group relative">
              <div className="w-[90%] mx-auto lg:max-w-sm max-h-full bg-[#fdf7f4] shadow-lg rounded-xl overflow-hidden">
                <div className="relative">
                  {data?.images.slice(0, 1)?.map((img: any) => {
                    return <Image src={img} alt="hero" width={500}
                      height={500} className="h-[250px] md:h-[400px] w-full" key={img} />
                  })}

                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{language === 'ENG' ? data.english_name : data.bangla_name}</h2>
                  <p className="text-gray-700">{language === 'ENG' ? data.designation_english : data.designation_bangla}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Upodesta;
