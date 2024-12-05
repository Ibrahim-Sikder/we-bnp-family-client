'use client'

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import SingleTotureData from '../_components/SingleTotureData';

interface pressId {
  params: {
    id: string;
  };
}

const Torture = ({ params }: pressId) => {
  const { language } = useLanguage();
  const { id } = params;

  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/prison/${id}`);
        const result = await res.json();
        if (result?.data) {
          setData(result.data);
        } else {
          setError("Report data not found");
        }
      } catch (error) {
        setError("An error occurred while fetching data.");
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <>{data && <SingleTotureData language={language} singleTortureData={data} />}</>

    </>
  );
};

export default Torture;