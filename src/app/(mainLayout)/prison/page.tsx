'use client'
import React, { useEffect, useState } from 'react';
import PrisonPage from './_components/PrisonPage';
import { useLanguage } from '@/provider/LanguageProvider';
import { TPrison } from '@/types/prison';

const Prison = () => {
    const { language } = useLanguage();
    const [prisonData, setPrisonData] = useState<TPrison[]>([]);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/prison?limit=10000`);
          const result = await res.json();
          if (result?.data) {
            setPrisonData(result.data?.prisons);
          } else {
            setError("Data not found");
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
            <PrisonPage prisonData={prisonData} language={language} />
        </>
    );
};


export default Prison;