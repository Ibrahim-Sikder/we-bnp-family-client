'use client';
import React, { useEffect, useState } from 'react';
import PressPage from './_components/PressPage';
import { useLanguage } from '@/provider/LanguageProvider';
import { TProgramm } from '@/types';
import { activityFields } from '@/utils/fields';
import Loading from '@/app/loading';

const Press = () => {
  const { language } = useLanguage();
  const [programmData, setProgrammData] = useState<TProgramm[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/programm?fields=${activityFields}`);
        const result = await res.json();
        if (result?.data) {
          setProgrammData(result.data?.programms);
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
  }, []);

  if (error) {
    return <h1>Oops! data not found </h1>;
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <PressPage language={language} programmData={programmData} />
    </>
  );
};

export default Press;
