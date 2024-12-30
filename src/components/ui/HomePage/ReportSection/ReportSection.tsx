'use client'
import Container from "@/components/shared/Container";
import "./ReportSection.css";
import { Divider } from "@mui/material";

import InternationReport from "./InternationReport";
import MediaReport from "./MediaReport";
import { useLanguage } from "@/provider/LanguageProvider";
import { useEffect, useState } from "react";
import { TReport } from "@/types/report";
import { useSectionData } from "@/hooks/useSectionData";

const ReportSection = () => {


    const { language } = useLanguage();
    const { sectionData } = useSectionData()
    const [reportData, setReportData] = useState<TReport[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/report?limit=10000`);
                const result = await res.json();
                if (result?.data) {
                    setReportData(result.data?.reports);
                } else {
                    setError("Report data not found");
                }
            } catch (error) {
                setError("An error occurred while fetching data.");
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    const internationReportData = reportData.filter((item: any) => item.category === 'আর্ন্তজাতিক সংস্থার রিপোর্ট')
    const mediaReportData = reportData.filter((item: any) => item.category === 'মিডিয়ায় প্রকাশিত তথ্য')

    const dividerStyle = {
        width: "150px",
        height: "5px",
        marginTop: "5px",
        background: "linear-gradient(to right, #2B8444, #CB2D2E)",
    };



    return (
        <Container className="mt-14 lg:mt-44">
            {
                sectionData.map((data) => (
                    <div key={data._id} className=" mb-10 ">
                        <h2> {language === 'ENG' ? data.internation_report_title_english : data.internation_report_title_bangla} </h2>
                        <Divider sx={dividerStyle} />
                    </div>
                ))
            }
            <InternationReport language={language} internationReportData={internationReportData} />
            <div>

                <div className=" sectionMargin ">
                    {
                        sectionData.map((data) => (
                            <div key={data._id} className=" mb-10 ">
                                <h2> {language === 'ENG' ? data.media_report_title_english : data.media_report_title_bangla} </h2>
                                <Divider sx={dividerStyle} />
                            </div>
                        ))
                    }

                    <MediaReport language={language} mediaReportData={mediaReportData} />
                </div>
            </div>

        </Container>
    );
};

export default ReportSection;
