import React, { useEffect, useState } from "react";
import "../../HomePage/ImportantNews/LatestNews.css";
import Image from "next/image";
import { Button } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import Link from "next/link";
import { TReport } from "@/types/report";
import truncateText from "@/utils/truncate";

const buttonStyle = {
  width: "90px",
  height: "25px",
  borderRadius: "2px",
  padding: "3px",
  fontSize: "10px",
  backgroundColor: "white",
  color: "black",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
};

type LanguageProps = {
  language: string;
  reportData: TReport[];
};

function LatestMediaNewsCard({ language, reportData }: LanguageProps) {
  const [itemsToShow, setItemsToShow] = useState(8);

  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(window.innerWidth < 768 ? 2 : 8);
    };

    updateItemsToShow(); 
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const importantNewsFilterData = reportData.filter(
    (item) => item.newsCategory === "সর্বশেষ"
  );
  const sortedReportData = importantNewsFilterData.sort(
    (a: TReport, b: TReport) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    }
  );

  return (
    <div className="-mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-5 gap-y-[10px] mt-[80px] md:mt-[105px]">
        {sortedReportData.slice(0, itemsToShow).map((data) => (
          <div key={data._id} className="newsCard">
            <div className="flex md:flex-row items-center justify-between">
              <div className="newsContent text-sm">
                <small className="text-[12px] font-bold ">
                  {language === "ENG"
                    ? truncateText(data.english_title, 70)
                    : truncateText(data.bangla_title, 70)}
                </small>
                <div className="bnpBtnStyle">
                  <Button
                    component={Link}
                    href={`/report/${data._id}`}
                    sx={buttonStyle}
                  >
                    <span>
                      {language === "ENG" ? "Read More" : "আরও পড়ুন"}{" "}
                      <ArrowRightAlt sx={{ fontSize: "13px" }} />
                    </span>{" "}
                  </Button>
                </div>
              </div>
              <div className="newsImgWrap">
                {data?.bng_Images.slice(0, 1)?.map((img: any) => {
                  return (
                    <div
                      className="w-[150px] h-[90px]"
                      key={img}
                    >
                      <Image
                        src={img}
                        alt="image not found"
                        width={100}
                        height={100}
                        className="rounded-md object-cover w-full"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestMediaNewsCard;
