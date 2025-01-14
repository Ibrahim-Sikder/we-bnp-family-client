'use client'

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import SingleReportPage from '../_component/SingleReportPage';
import Loading from '@/app/loading';

interface pressId {
  params: {
    id: string;
  };
}
const Prison = ({ params }: pressId) => {
  const { language } = useLanguage();
  const { id } = params;

  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/report/${id}`);
        const result = await res.json();
        if (result?.data) {
          setData(result.data);
        } else {
          setError("Report data not found");
        }
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <h1>Oops! data not found.</h1>;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <>{data && <SingleReportPage language={language} singleReportData={data} />}</>

    </>
  );
};

export default Prison;