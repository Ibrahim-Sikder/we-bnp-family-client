'use client'
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import { TReport } from '@/types/report';
import LatestMediaNewsCard from './LatestMediaNewsCard';



const LatestMediaNews = () => {
    const { language } = useLanguage();
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
                    setError("Programm data not found");
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
    return (
        <>
            <LatestMediaNewsCard reportData={reportData} language={language} />
        </>
    );
};

export default LatestMediaNews;