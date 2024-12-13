'use client'
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import { useDisappearanceData } from '@/hooks/useDisappearanceData';
import AugustMassUprisingCard from './_components/AugustMassUprisingCard';

const AugustMassUprising = () => {
  const { language } = useLanguage();
const {disappearanceData,loading} = useDisappearanceData()


  return (
    <>
      <AugustMassUprisingCard disappearanceData={disappearanceData} language={language} />
    </>
  );
};

export default AugustMassUprising;