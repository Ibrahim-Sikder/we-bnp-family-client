'use client'
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import { TPrison } from '@/types/prison';
import TortureCard from './_components/TortureCard';
import { programFields } from '@/utils/fields';

const Toture = () => {
    const { language } = useLanguage();
    const [tortureData, setTortureData] = useState<TPrison[]>([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null);
    const category = `আওয়ামী লীগের নির্যাতন`
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/prison?fields=${programFields}&category=${category}`);
                const result = await res.json();
                if (result?.data) {
                    setTortureData(result.data?.prisons);
                } else {
                    setError("Murder data not found");
                }
            } catch (error) {
                setError("An error occurred while fetching data.");
            } finally {
                setLoading(false)
            }
        };

        fetchData();
    }, [category]);

    if (error) {
        return <h1>Oops! data not found.</h1>;
    }
    return (
        <>
            <TortureCard tortureData={tortureData} language={language} />
        </>
    );
};

export default Toture;