'use client'

import Container from "@/components/shared/Container";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import bannerImage from "../../../../../src/assets/images/banner/newSlider.jpeg";
import { Button } from "@mui/material";
import { East } from "@mui/icons-material";
import './Media.css'
import { TReport } from "@/types/report";
import { useReportData } from "@/hooks/useReportData";
import { useLanguage } from "@/provider/LanguageProvider";
import { loadBtnStyle } from "@/utils/customStyle";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import truncateText from "@/utils/truncate";
import { formatDate } from "@/utils/formatedate";
import { reportedFields } from "@/utils/fields";
import Loading from "@/app/loading";
const MediaPage = () => {
    // const { reportData } = useReportData()
    // const { language } = useLanguage()
    const { language } = useLanguage();
    const [mediaReportData, setMediaData] = useState<TReport[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>()
    const category = `মিডিয়ায় প্রকাশিত তথ্য`
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/report?category=${category}&fields=${reportedFields}`);
                const result = await res.json();
                if (result?.data) {
                    setMediaData(result.data?.reports);
                } else {
                    setError("Data not found");
                }
            } catch (error) {
                setError("An error occurred while fetching data.");
            } finally {
                setLoading(false)
            }
        };

        fetchData();
    }, [category]);

    const smallBtnStyle = {
        background: "#2B8444",
        color: "#fff",
        borderRadius: "10px",
        marginTop: "5px",
        width: "25px",
        height: "25px",
        padding: '0px'
    }

    const sortedMediaData = mediaReportData?.sort(
        (a: TReport, b: TReport) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return dateA - dateB;
        },
    );

    const [visibleCount, setVisibleCount] = useState(6);
    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 6);
    };
    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <h2>Oops! data not founds.</h2>;
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
                        {language === 'ENG' ? 'Media Published Informations' : ' মিডিয়ায় প্রকাশিত তথ্য'}
                    </h1>
                    <p className="text-lg md:text-2xl mt-3 text-center">

                    </p>
                </div>
            </div>
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-5 mt-10">
                    {sortedMediaData?.slice(0, visibleCount)?.map((report: TReport) => (
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

                                <h5 className="font-semibold ">
                                    {language === 'ENG' ? truncateText(report?.english_title, 50) : truncateText(report?.bangla_title, 50)}

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
                {visibleCount < sortedMediaData?.length && (
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

export default MediaPage;
