

import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import Link from "next/link";

type TVictim = {
  img_bangla:string,
  bangla_title:string,
  _id:string,
}

const VictimCard = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/oppressed`);
  const data = await res.json();
  console.log(data)
  
  const smallBtnStyle = {
    width: "70px",
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
        {data?.data?.oppresses?.slice(0,3).map((data: TVictim) => (
          <div key={data._id}>
            <div className="cardBox">
              <div className="lg:h-28 h-40 md:h-52">
                <Image
                  width={500}
                  height={500}
                  className="rounded-md object-cover w-full h-full "
                  src={data?.img_bangla}
                  alt="victim"
                />
              </div>

              <div className="mt-3 text-center flex flex-col p-3">
                <b className="text-sm text-left ">
                  {data.bangla_title.slice(0, 28)}...
                </b>
                <Button component={Link} href={`/victim/${data._id}`} sx={smallBtnStyle}>
                  আরও পড়ুন <KeyboardDoubleArrowRight sx={arrowStyle} />
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
