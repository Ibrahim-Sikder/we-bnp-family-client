'use client'
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import { TPrison } from '@/types/prison';
import InternationalReportCard from './_components/InternationalReportCard';
import { TReport } from '@/types/report';

const InternationReport = () => {
    const { language } = useLanguage();
    const [internationalData, setInternationalData] = useState<TReport[]>([]);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/report?limit=10000`);
          const result = await res.json();
          if (result?.data) {
            setInternationalData(result.data?.reports);
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
            <InternationalReportCard internationalData={internationalData} language={language} />
        </>
    );
};

export default InternationReport;