'use client'
import React from 'react';
import OverviewCard from './OverviewCard';
import { useLanguage } from '@/provider/LanguageProvider';
import { useSectionData } from '@/hooks/useSectionData';

const OverviewSection = () => {
    const {language} = useLanguage()
    const {sectionData} = useSectionData()

    return (
        <>
            <OverviewCard sectionData={sectionData}  language={language} />
        </>
    );
};

export default OverviewSection;