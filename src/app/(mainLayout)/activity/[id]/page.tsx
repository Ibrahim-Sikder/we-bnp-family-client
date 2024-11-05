'use client'
import React, { useEffect, useState } from 'react';
import SingleActivityPage from '../_components/SingleActivityPage';
import { useLanguage } from '@/provider/LanguageProvider';

interface victimId {
  params: {
    id: string;
  };
}
const ActivityPage = ({ params }: victimId) => {
  const { language } = useLanguage();
  const { id } = params;

  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/activity/${id}`);
        const result = await res.json();
        if (result?.data) {
          setData(result.data);
        } else {
          setError("Data not found");
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
    <>{data && <SingleActivityPage language={language} singleActivity={data} />}</>
  );
};


export default ActivityPage;
