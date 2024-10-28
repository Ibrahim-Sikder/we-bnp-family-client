'use client'
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import { TPrison } from '@/types/prison';
import MurderPageCard from './_components/MurderPageCard';
import { TDisappearance } from '@/types/disappearance';

const Prison = () => {
  const { language } = useLanguage();
  const [murderData, setMurderData] = useState<TDisappearance[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/disappearance?limit=10000`);
        const result = await res.json();
        if (result?.data) {
          setMurderData(result.data?.disappearances);
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
      <MurderPageCard murderData={murderData} language={language} />
    </>
  );
};

export default Prison;