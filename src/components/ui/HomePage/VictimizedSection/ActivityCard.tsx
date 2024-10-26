
import { TActivity } from "@/types";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const buttonStyle = {
  width: "100px",
  height: "25px",
  borderRadius: "2px",
  padding: "3px",
  fontSize: "10px",
  background: "linear-gradient(to right, #2B8444, #CB2D2E)",
  color: "white",
};

const arrowStyle = { fontSize: "13px", marginLeft: "3px" };


interface MurtyreCardProps {
  activityData: TActivity[];
}


const ActivityCard: React.FC<MurtyreCardProps> = ({ activityData }) => {

  return (
    <>
      {activityData?.slice(0, 1).map((data) => (
        <div key={data._id} className="victimCard">
          <div className="imgWrap">


            {data?.bng_Images.slice(0, 1)?.map((img: any) => {

              return <Image layout="responsive" src={img} alt="hero" width={500}
                height={500}
                className="rounded-md object-cover w-full h-full" key={img} />
            })}
          </div>

          <div className="p-3 space-y-2">
            <h3 className="text-xl md:text-2xl">{data?.bangla_title}</h3>
            <p>{data.bangla_short_description}</p>
            <Button component={Link} href={`/activity/${data._id}`} sx={buttonStyle}>
              আরও পড়ুন <KeyboardDoubleArrowRight sx={arrowStyle} />
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ActivityCard;