'use client'
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import ActivityPage from './_components/ActivityPage';
import { TActivity } from '@/types';

const Activity = () => {
    const { language } = useLanguage();
    const [activityData, setActivityData] = useState<TActivity[]>([]);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/activity?limit=10000`);
          const result = await res.json();
          if (result?.data) {
            setActivityData(result.data?.activities);
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
            <ActivityPage activityData={activityData} language={language} />
        </>
    );
};

export default Activity;