import { TReport } from '@/types/report';
import { East } from '@mui/icons-material';
import { Box, Button, Divider } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';



interface MurtyreCardProps {
  internationReportData: TReport[];
  language: string,
}


const InternationReport: React.FC<MurtyreCardProps> = ({ internationReportData, language }) => {



  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(window.innerWidth < 769 ? 2 : 3);
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);
  const buttonStyle = {
    width: { xs: "120px", md: "140px", sm: "140px" },
    height: { md: "40px", xs: "30px" },
    fontSize: { md: "14px", xs: "9px", xl: "16px" },
    borderRadius: "30px",
    background: "#2B8444",
    marginTop: '30px'
  };

  const smallBtnStyle = {
    background: "#2B8444",
    color: "#fff",
    borderRadius: "10px",
    marginTop: "5px",
    width: "25px",
    height: "25px",
    padding: "0px",
  };

  const sortedInternationalData = internationReportData?.sort(
    (a: TReport, b: TReport) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateA - dateB;
    },
  );

  return (
    <>
      <div className="bnpBtnStyle">

        <div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
            {sortedInternationalData?.slice(0, itemsToShow)?.map((report) => (
              <div key={report._id} className="blogCard mt-5">
                <div className="blogImgWrap">



                  {report?.bng_Images?.slice(0, 1)?.map((img) => {

                    return <Image src={img} alt="hero" width={1000}
                      height={500} key={img} />
                  })}
                </div>
                <div className="blogCardContent">

                  <h5 className="font-semibold md:text-xl text-[16px] mb-2 ">
                    {language === 'ENG' ? report?.english_title?.slice(0, 50) : report?.bangla_title?.slice(0, 50)}...

                  </h5>
                  <p>
                    {language === 'ENG' ? report?.english_short_description?.slice(0, 80) : report?.bangla_short_description?.slice(0, 80)}...
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
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button component={Link} href="/international-report" sx={buttonStyle}>
              {" "}
              <span>{language === 'ENG' ? 'See All' : 'সবগুলো দেখুন'} </span>{" "}
            </Button>
          </Box>
        </div>
      </div>
    </>
  );
};

export default InternationReport;