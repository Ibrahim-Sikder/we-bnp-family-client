'use client'
import React from 'react';
import OverviewCard from './OverviewCard';
import { useLanguage } from '@/provider/LanguageProvider';

const OverviewSection = () => {
    const {language} = useLanguage()
    return (
        <>
            <OverviewCard language={language} />
        </>
    );
};

export default OverviewSection;