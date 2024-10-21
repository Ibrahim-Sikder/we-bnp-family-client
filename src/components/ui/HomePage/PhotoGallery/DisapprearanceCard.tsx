import Link from "next/link";
import React from "react";

const DisapprearanceCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {disappearanceData.slice(0, 2).map((data) => (
          <div key={data.id} className="disappeareCard">
            <div className="flex gap-x-5 items-end justify-between flex-col md:flex-row ">
              <div className="disappeareImgWrap ">
                <Image src={data.img} alt="mambal" width={500} height={500} />
              </div>
              <div className="disappeareContent text-left items-end  justify-end ">
                <div className="flex text-left gap-x-8 items-center">
                  <div className="flex items-center justify-between w-[60px]">
                    <div className="flex flex-col  gap-y-2 text-sm ">
                      <b>নাম </b>
                    </div>
                    <div className="flex flex-col ">
                      <b> : </b>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <small> {data.name}</small>
                  </div>
                </div>
                <div className="flex text-left gap-x-8 items-center ">
                  <div className="flex justify-between w-[60px]">
                    <div className=" text-sm ">
                      <b>পদবী </b>
                    </div>
                    <div>
                      <b>:</b>
                    </div>
                  </div>
                  <div>
                    <small className="text-justify">{data.designation} </small>
                  </div>
                </div>
                <div className="flex text-left gap-x-10 ">
                  <div className="flex text-left items-center justify-between  w-[60px]">
                    <div className=" text-sm ">
                      <b>ঠিকানা</b>
                    </div>
                    <div>
                      <b>:</b>
                    </div>
                  </div>
                  <div className="text-left ">
                    <small className="text-left">{data.address} </small>
                  </div>
                </div>

                <span className="mt-3 block text-sm ">
                  {" "}
                  <b>সংক্ষিপ্ত বিবরণী:</b>
                  {data.short_description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end items-end w-full mr-16 mt-5 ">
        <Link href="/disappearances">
          <button className="bg-gradient-to-r from-red-600 to-green-600 text-white py-2 px-8 rounded inline-block font-semibold uppercase">
            সবগুলো দেখুন
          </button>
        </Link>
      </div>
    </>
  );
};

export default DisapprearanceCard;
