'use client'
import React from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import ImportantMediaNewsCard from './ImportantMediaNewsCard';
import { useReportData } from '@/hooks/useReportData';
import Loading from '@/app/loading';


const ImportantMediaNews = () => {
    const { language } = useLanguage();
    const { reportData, error, loading } = useReportData()
    if (loading) {
        return <Loading />
    }
    if (error) {
        return <p>Oops report data not found</p>
    }

    return (
        <>
            <ImportantMediaNewsCard reportData={reportData} language={language} />
        </>
    );
};

export default ImportantMediaNews;