import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/shared/Container";
import { TActivity } from "@/types";
import icon from "../../../../src/assets/images/logo/logo.jpg";


const ActivityPage = async () => {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/activity/`
  );
  const data = await res.json();
  const activityData = data?.data.activities

  if (!activityData) {
    return {
      title: "Data not found",
      description: "The requested activity was not found.",
    };
  }

  return (
    <>
      <div className="bg-gray-100">
        <div className='bannerWrap'>
          <div className="bannerContent">
            {/* <h3 className='text-xl w-full  md:text-4xl font-semibold '>শহীদদের তালিকা </h3> */}
          </div>
        </div>

        <Container>

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 my-2 py-10 items-center ">
            {activityData?.map((card: TActivity) => (
              <div key={card._id}>
                <Link href={`/victim/${card._id}`}>
                  <div key={card._id} className="max-w-lg ">
                    {data?.bng_Images?.slice(0, 1)?.map((img: any) => {
                      return <Image layout="responsive" src={img} alt="hero" width={500}
                        height={500}
                        className="h-[300px] w-full" key={img} />
                    })}

                    <div className="relative group text-black hover:text-white">
                      <div className="relative group w-16 h-16 z-10 ml-[50px] -mt-32 transition-transform duration-600 group-hover:-translate-y-5 ">
                        <div className="bg-red-500 rounded-full p-3 w-[110px] h-[110px] flex items-center justify-center ">
                          <Image
                            src={icon}
                            className="h-[100px] w-[90px] rounded-full transition-all duration-300"
                            alt="icon"
                          />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center z-50 w-[130px] h-[130px] -ml-[10px] -mt-[10px] ">
                          <div className="rounded-full w-[130px] h-[130px] border-4 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        </div>
                      </div>

                      <div className="flex items-center content-center justify-center -mt-6 ">
                        <div className="max-w-sm h-auto px-6 py-4 shadow-lg border bg-white hover:bg-gradient-to-r hover:from-red-600 hover:to-green-600 custom-clip-path transition-transform duration-300 group-hover:-translate-y-5 ">
                          <div className="font-bold text-xl mb-2 mt-20">
                            {card?.bangla_title}
                          </div>
                          <p className=" text-sm mb-2 ">{card?.date}</p>
                          <p className=" text-base text-justify">
                            {card?.bangla_short_description.slice(0, 200)}

                            <span
                             
                              className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent p-1 text-lg "
                            >

                              বিস্তারিত দেখুন

                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div >
        </Container >
      </div >
    </>
  );
};

export default ActivityPage;
