

import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import { KeyboardDoubleArrowRight, Language } from "@mui/icons-material";
import Link from "next/link";
import { TActivity } from "@/types";

interface MurtyreCardProps {
  activityData: TActivity[];
  language: string,
}

const VictimCard: React.FC<MurtyreCardProps> = ({ activityData, language }) => {


  const smallBtnStyle = {
    width: "75px",
    height: "20px",
    borderRadius: "2px",
    padding: "3px",
    fontSize: "8px",
    background: "linear-gradient(to right, #2B8444, #CB2D2E)",
    color: "white",
    marginTop: "5px",
  };

  const arrowStyle = { fontSize: "13px", marginLeft: "3px" };

  return (
    <>
      <div className="grid grid-cols-1 gap-y-8 xl:gap-y-0 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-x-3 ">
        {activityData?.slice(0, 3).map((data) => (
          <div key={data._id}>
            <div className="cardBox">
              <div className="lg:h-28 h-40 md:h-52">
                {data?.bng_Images.slice(0, 1)?.map((img: any) => {
                  return <Image src={img} alt="hero" width={500}
                    height={500}
                    className="rounded-md object-cover w-full h-full " key={img} />
                })}
              </div>
              <div className="mt-3 text-center flex flex-col p-3">
                <b className="text-[12px] text-left ">
                  {
                    language === 'ENG' ? data.english_title : data.bangla_title
                  }
                </b>
                <Button component={Link} href={`/activity/${data._id}`} sx={smallBtnStyle}>
                  {
                    language === 'ENG' ? 'Read More' : 'আরও পড়ুন'
                  } <KeyboardDoubleArrowRight sx={arrowStyle} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VictimCard;
