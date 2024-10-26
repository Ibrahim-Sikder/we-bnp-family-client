import { East } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TReport } from '@/types/report';

interface MurtyreCardProps {
  mediaReportData: TReport[];
}


const MediaReport: React.FC<MurtyreCardProps> = ({ mediaReportData }) => {

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
  return (
    <>
      <div className="bnpBtnStyle">

        <div>
          {/* frontend data */}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
            {mediaReportData?.slice(0, 3)?.map((report) => (
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
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button component={Link} href="/international-report" sx={buttonStyle}>
              {" "}
              <span>সবগুলো দেখুন </span>{" "}
            </Button>
          </Box>
        </div>
      </div>
    </>
  );
};

export default MediaReport;