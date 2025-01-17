'use client'
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/provider/LanguageProvider';

import { TProgramm } from '@/types';
import LatestProgrammNewsCard from './LatestProgrammNewsCard';


const LatestProgrammNews = () => {
    const { language } = useLanguage();
    const [programmData, setProgrammData] = useState<TProgramm[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/programm?limit=10000`);
                const result = await res.json();
                if (result?.data) {
                    setProgrammData(result.data?.programms);
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
            <LatestProgrammNewsCard programmData={programmData} language={language} />
        </>
    );
};

export default LatestProgrammNews;