import Container from "@/components/shared/Container";
import "./ReportSection.css";
import { Divider } from "@mui/material";

import InternationReport from "./InternationReport";
import MediaReport from "./MediaReport";

const ReportSection = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/report?limit=100000`, {
        cache: 'no-store'
    });
    const data = await res.json();
    const reportData = data?.data?.reports
    const internationReportData = reportData.filter((item:any) => item.category === 'আর্ন্তজাতিক সংস্থার রিপোর্ট')
    const mediaReportData = reportData.filter((item:any) => item.category === 'মিডিয়ায় প্রকাশিত তথ্য')



    const dividerStyle = {
        width: "150px",
        height: "5px",
        marginTop: "5px",
        background: "linear-gradient(to right, #2B8444, #CB2D2E)",
    };

    return (
        <Container className="mt-14 lg:mt-44">
            <div className=" mb-10 ">
                <h2> আর্ন্তজাতিক সংস্থার রিপোর্ট</h2>
                <Divider sx={dividerStyle} />
            </div>
            <InternationReport internationReportData={internationReportData}/>
            <div>

                <div className=" sectionMargin ">
                    <div className=" mb-10">
                        <h2>মিডিয়ায় প্রকাশিত তথ্য </h2>
                        <Divider sx={dividerStyle} />
                    </div>

                    <MediaReport mediaReportData={mediaReportData} />
                </div>
            </div>
        </Container>
    );
};

export default ReportSection;
