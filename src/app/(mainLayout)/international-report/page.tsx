'use client'
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import InternationalReportCard from './_components/InternationalReportCard';
import { TReport } from '@/types/report';
import { reportedFields } from '@/utils/fields';
import Loading from '@/app/loading';

const InternationReport = () => {
  const { language } = useLanguage();
  const [internationalData, setInternationalData] = useState<TReport[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>()
  const category = `আর্ন্তজাতিক সংস্থার রিপোর্ট`
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/report?category=${category}&fields=${reportedFields}`);
        const result = await res.json();
        if (result?.data) {
          setInternationalData(result.data?.reports);
        } else {
          setError("Data not found");
        }
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, [category]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <h2>Oops! data not founds.</h2>;
  }
  return (
    <>
      <InternationalReportCard internationalData={internationalData} language={language} />
    </>
  );
};


export default InternationReport;