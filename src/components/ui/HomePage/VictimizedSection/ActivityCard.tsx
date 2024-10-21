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

type TVictim = {
  img_bangla: string;
  bangla_title: string;
  _id: string;
  bangla_short_description: string;
};
const ActivityCard = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/oppressed`);
  const data = await res.json();

  return (
    <>
      {data?.data?.oppresses?.slice(0, 1).map((data: TVictim) => (
        <div key={data._id} className="victimCard">
          <div className="imgWrap">
            <Image
              width={500}
              height={500}
              className="rounded-md object-cover w-full h-full"
              src={data?.img_bangla}
              alt="victime"
              layout="responsive"
            />
          </div>

          <div className="p-3 space-y-2">
            <h3 className="text-xl md:text-2xl">{data.bangla_title}</h3>
            <p>{data.bangla_short_description}</p>
            <Button component={Link} href="/victim/1" sx={buttonStyle}>
              আরও পড়ুন <KeyboardDoubleArrowRight sx={arrowStyle} />
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ActivityCard;
