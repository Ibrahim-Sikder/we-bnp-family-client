import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import Link from "next/link";
import { TActivity } from "@/types";
import { useMediaQuery, useTheme } from "@mui/material";
import truncateText from "@/utils/truncate";

interface MurtyreCardProps {
  activityData: TActivity[];
  language: string;
}

const VictimCard: React.FC<MurtyreCardProps> = ({ activityData, language }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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

  const itemsToShow = isSmallScreen ? 3 : 4;

  return (
    <>
      <div className="grid grid-cols-2 gap-y-8 xl:gap-y-0 md:grid-cols-3 xl:grid-cols-3 mt-5 gap-x-3 ">
        {activityData?.slice(1, itemsToShow).map((data) => (
          <div key={data._id}>
            <div className="cardBox">
              <div className="lg:h-28 h-24 md:h-52">
                {data?.bng_Images.slice(0, 1)?.map((img: any) => (
                  <Image
                    src={img}
                    alt="hero"
                    width={500}
                    height={500}
                    className="rounded-md object-cover w-full h-full"
                    key={img}
                  />
                ))}
              </div>
              <div className="mt-3 text-center flex flex-col p-3">
                <b className="text-[10px] md:text-[12px] text-left ">
                  {language === "ENG"
                    ? truncateText(data.english_title, 70)
                    : truncateText(data.bangla_title, 70)}
                </b>
                <Button component={Link} href={`/activity/${data._id}`} sx={smallBtnStyle}>
                  {language === "ENG" ? "Read More" : "আরও পড়ুন"}
                  <KeyboardDoubleArrowRight sx={arrowStyle} />
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
