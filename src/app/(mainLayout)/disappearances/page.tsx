'use client'

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import DisappearanceCard from './_components/DisappearanceCard';
import { TDisappearance } from '@/types/disappearance';

const Prison = () => {
  const { language } = useLanguage();
  const [disappearanceData, setDisappearanceData] = useState<TDisappearance[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/disappearance?limit=10000`);
        const result = await res.json();
        if (result?.data) {
          setDisappearanceData(result.data?.disappearances || []);
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
      <DisappearanceCard disappearanceData={disappearanceData} language={language} />
    </>
  );
};

export default Prison;