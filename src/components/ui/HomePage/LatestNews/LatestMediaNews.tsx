'use client'
import React from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import LatestMediaNewsCard from './LatestMediaNewsCard';
import { useReportData } from '@/hooks/useReportData';
import Loading from '@/app/loading';



const LatestMediaNews = () => {
    const { language } = useLanguage();
    const { reportData, loading, error } = useReportData()

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <p>Oops report data not found</p>
    }
    return (
        <>
            <LatestMediaNewsCard reportData={reportData} language={language} />
        </>
    );
};

export default LatestMediaNews;