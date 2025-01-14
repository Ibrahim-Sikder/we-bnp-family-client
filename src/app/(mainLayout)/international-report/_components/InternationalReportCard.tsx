import Container from "@/components/shared/Container";
import React from "react";
import Image from "next/image";

import Link from "next/link";
import { Button } from "@mui/material";
import { East } from "@mui/icons-material";
import '../../media-info/_components/Media.css'
import { TReport } from "@/types/report";
import CommonBanner from "@/components/shared/CommonBanner/CommonBanner";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { loadBtnStyle } from "@/utils/customStyle";
import { formatDate } from "@/utils/formatedate";
import truncateText from "@/utils/truncate";
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

    const title = language === 'ENG' ? 'International Report' : 'আন্তর্জাতিক রিপোর্ট'

    const filterInnternationReportData = internationalData.filter((item: any) => item.category === 'আর্ন্তজাতিক সংস্থার রিপোর্ট')
    const sortedInternationalData = filterInnternationReportData?.sort(
        (a: TReport, b: TReport) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return dateA - dateB;
        },
    );

    const [visibleCount, setVisibleCount] = React.useState(6);
    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 6);
    };
    return (
        <div>
            <CommonBanner title={title} />
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-5 mt-10">
                    {sortedInternationalData?.slice(0, visibleCount)?.map((report: TReport) => (
                        <div key={report._id} className="blogCard mt-5">
                            <div className="blogImgWrap">

                                {
                                    language === 'ENG' ? report.bng_Images?.slice(0, 1).map((img) => (
                                        <Image src={img} alt="hero" width={1000}
                                            height={500} key={img} />
                                    )) : report.eng_iamges?.slice(0, 1).map((img) => (
                                        <Image src={img} alt="hero" width={1000}
                                            height={500} key={img} />
                                    ))
                                }
                            </div>
                            <div className="blogCardContent">

                                <h5 className="font-semibold md:text-xl text-[16px] mb-1 ">
                                    {language === 'ENG' ? truncateText(report?.english_title, 45) : truncateText(report?.bangla_title, 45)}

                                </h5>
                                <p>
                                    {language === 'ENG' ? truncateText(report?.english_short_description, 100) : truncateText(report?.bangla_short_description, 100)}
                                </p>
                                <div className="flex iems-cener justify-between mt-5 ">

                                    <b>{formatDate(report.date)}</b>
                                    <Link href={`/report/${report._id}`}>
                                        <Button sx={smallBtnStyle}>
                                            <span>
                                                <East sx={{ fontSize: "15px" }} />
                                            </span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                {visibleCount < sortedInternationalData?.length && (
                    <div className="flex items-center justify-center mt-5">
                        <Button
                            onClick={loadMore}
                            variant="contained"
                            sx={loadBtnStyle}
                        >
                            {language === 'ENG' ? 'Load More' : 'আরো লোড'} <ArrowRightAltIcon />
                        </Button>
                    </div>
                )}

            </Container>
        </div>
    );
};

