import { TCommitte } from "@/types";
import Image from "next/image";
import React from "react";


interface CommitteeProp {
  committeeFilterData: TCommitte[];
}


const CommitteeCard: React.FC<CommitteeProp> = ({ committeeFilterData }) => {



  return (
    <>
      <div className="w-full text-center lg:pt-2 mb-10 lg:mb-16 xl:mb-16">
        <div className="flex flex-row items-center justify-center content-center">
          <h2 className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent text-base mb-4 border rounded-full text-center w-[105px] bg-white">
            কমিটি
          </h2>
        </div>
        <div className="w-full text-center space-y-4 mb-2">
          <h1 className="text-3xl lg:text-5xl xl:text-5xl">
            কার্য নির্বাহী পরিষদ

          </h1>

        </div>

        <div className=" mx-auto lg:p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {committeeFilterData?.map((data, index: number) => (
            <div key={index} className="group relative">

              <div className="lg:max-w-sm max-h-full bg-[#fdf7f4] shadow-lg rounded-xl overflow-hidden">
                <div className="relative">



                  {data?.images.slice(0, 1)?.map((img: any) => {

                    return <Image src={img} alt="hero" width={500}
                      height={500} className="h-[400px] w-full" key={img} />
                  })}

                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{data.name}</h2>
                  <p className="text-gray-700">{data.designation}</p>
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