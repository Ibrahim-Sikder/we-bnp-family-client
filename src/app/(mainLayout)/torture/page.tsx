'use client'
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import { TPrison } from '@/types/prison';
import { TDisappearance } from '@/types/disappearance';
import TortureCard from './_components/TortureCard';

const Toture = () => {
    const { language } = useLanguage();
    const [tortureData, setTortureData] = useState<TPrison[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/prison?limit=10000`);
                const result = await res.json();
                if (result?.data) {
                    setTortureData(result.data?.prisons);
                } else {
                    setError("Murder data not found");
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
            <TortureCard tortureData={tortureData} language={language} />
        </>
    );
};

export default Toture;