import Container from "@/components/shared/Container";
import React from "react";
import Image from "next/image";
// import "./Blog.css";
import Link from "next/link";
import { Button } from "@mui/material";
import { East } from "@mui/icons-material";
import '@/components/ui/HomePage/BlogSection/BlogSection.css'

import { TReport } from "@/types/report";
import CommonBanner from "@/components/shared/CommonBanner/CommonBanner";
type LanguageProps = {
    language: string,
    internationalData: TReport[]
}
export default function InternationalReportCard({ language, internationalData }: LanguageProps) {

    const smallBtnStyle = {
        background: "#2B8444",
        color: "#fff",
        borderRadius: "10px",
        marginTop: "5px",
        width: "25px",
        height: "25px",
        padding: '0px'
    }
    const filterInnternationReportData = internationalData.filter((item: any) => item.category === 'আর্ন্তজাতিক সংস্থার রিপোর্ট')
    // const mediaReportData = reportData.filter((item: any) => item.category === 'মিডিয়ায় প্রকাশিত তথ্য')

    const title = language === 'ENG' ? 'International report' : 'আন্তর্জাতিক রিপোর্ট'

    return (
        <div>
            <CommonBanner title={title} />
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-5 mt-10">
                    {filterInnternationReportData?.slice(0, 3)?.map((report: TReport) => (
                        <div key={report._id} className="blogCard mt-5">
                            <div className="blogImgWrap">

                                {report?.bng_Images?.slice(0, 1)?.map((img: any) => {

                                    return <Image src={img} alt="hero" width={1000}
                                        height={500} key={img} />
                                })}
                            </div>
                            <div className="blogCardContent">

                                <h5 className="font-semibold ">
                                    {language === 'ENG' ? report.english_title : report.bangla_title}

                                </h5>
                                <p>
                                    {language === 'ENG' ? report?.english_short_description?.slice(0, 100) : report?.bangla_short_description?.slice(0, 100)}
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

