import Container from "@/components/shared/Container";
import React from "react";
import Image from "next/image";
import "./Blog.css";
import Link from "next/link";
import bannerImage from "../../../assets/images/banner/newSlider.jpeg";
import { Button } from "@mui/material";
import { East } from "@mui/icons-material";
import '../../../components/ui/HomePage/BlogSection/BlogSection.css'
import { TReport } from "@/types/report";
const page = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/report?limit=100000`, {
    cache: 'no-store'
  });
  const data = await res.json();
  const reportData = data?.data?.reports
  const mediaReportData = reportData.filter((item: any) => item.category === 'মিডিয়ায় প্রকাশিত তথ্য')

  const smallBtnStyle = {
    background: "#2B8444",
    color: "#fff",
    borderRadius: "10px",
    marginTop: "5px",
    width: "25px",
    height: "25px",
    padding: '0px'
  }

  return (
    <div>
      <div className="relative h-80 md:h-96 lg:h-[350px] bg-gray-800 overflow-hidden">
        <Image
          src={bannerImage}
          alt="Blog Banner"
          layout="fill"
          objectFit="cover"
          className="opacity-75"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-5">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            মিডিয়ায় প্রকাশিত তথ্য
          </h1>
          <p className="text-lg md:text-2xl mt-3 text-center">

          </p>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-5 mt-10">
          {mediaReportData?.slice(0, 3)?.map((report: TReport) => (
            <div key={report._id} className="blogCard mt-5">
              <div className="blogImgWrap">



                {report?.bng_Images?.slice(0, 1)?.map((img) => {

                  return <Image src={img} alt="hero" width={1000}
                    height={500} key={img} />
                })}
              </div>
              <div className="blogCardContent">

                <h5 className="font-semibold ">
                  {report.bangla_title}

                </h5>
                <p>
                  {report?.bangla_short_description?.slice(0, 100)}
                </p>
                <Link href={`/report/${report._id}`}>
                  <Button sx={smallBtnStyle}>
                    <span>
                      <East sx={{ fontSize: "15px" }} />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          ))}

        </div>






      </Container>
    </div>
  );
};

export default page;
