'use client'

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import DisappearanceCard from './_components/DisappearanceCard';
import { TDisappearance } from '@/types/disappearance';
import { prisonFields } from '@/utils/fields';
import Loading from '@/app/loading';

const Prison = () => {
  const { language } = useLanguage();
  const [disappearanceData, setDisappearanceData] = useState<TDisappearance[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false)
  const category = `গুমের তালিকা`
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/disappearance?fields=${prisonFields}&category=${category}`);
        const result = await res.json();
        if (result?.data) {
          setDisappearanceData(result.data?.disappearances || []);
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
    return <Loading />
  }
  if (error) {
    return <h1>Oops! data not found.</h1>;
  }


  return (
    <>
      <DisappearanceCard disappearanceData={disappearanceData} language={language} />
    </>
  );
};

export default Prison;