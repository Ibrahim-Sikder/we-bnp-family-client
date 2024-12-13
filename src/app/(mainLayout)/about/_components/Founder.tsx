'use client'
import Image from "next/image";
import { LanguageProps } from "@/types";
import { useHistoryData } from "@/hooks/useHistoryData";

const Founder = ({ language }: LanguageProps) => {
  const { historyData, loading } = useHistoryData()
  const filterHistoryData = historyData.filter((data) => data.category === "Patron")

  return (
    <div>

      {
        filterHistoryData?.map((data) => (
          <div key={data._id}>
            <div className="flex flex-row items-center justify-center content-center">
              <h2 className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent text-base mb-4 border rounded-full text-center w-[105px] bg-white">
                {language === 'ENG' ? 'Patron' : 'পৃষ্ঠপোষক'}
              </h2>
            </div>
            <div className="w-full text-center space-y-4 mb-2">
              <h1 className="text-3xl lg:text-5xl xl:text-5xl">  {language === 'ENG' ? data.english_title : data.bangla_title} </h1>
              <h3 className="text-2xl ">
                {language === 'ENG' ? data.english_subtitle : data.bangla_subtitle}
              </h3>

            </div>
            <div className="shadow-lg rounded-lg lg:rounded-3xl overflow-hidden grid grid-cols-12 my-10 border place-items-center ">
              <div className="col-span-12 lg:col-span-4">
                <div className=" bg-[#fdf7f4] shadow-lg rounded-xl ">
                  <div className="w-full  ">
                    {
                      data.images?.slice(0, 1).map((img) => (
                        <Image
                          width={500}
                          height={500}
                          key={img}
                          src={img}
                          alt={" তারেক রহমান"}
                          
                        />
                      ))
                    }
                  </div>
                </div>
              </div>
              {/* Right Part */}

              <div className="col-span-12 lg:col-span-8 lg:h-[500px] p-3 lg:p-6 bg-[#fdf7f4] space-y-6">
                <p className="text-justify text-xl">
                  {
                    language === 'ENG' ? data.english_description : data.bangla_description
                  }
                </p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};
export default Founder;