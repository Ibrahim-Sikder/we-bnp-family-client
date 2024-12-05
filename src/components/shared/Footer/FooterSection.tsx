'use client'

import { useLanguage } from '@/provider/LanguageProvider';
import Footer from './Footer';
import { useSectionData } from '@/hooks/useSectionData';

const FooterSection = () => {
    const {language} = useLanguage()
    const {sectionData} = useSectionData()
    return (
        <>
          <Footer sectionData={sectionData} language={language}/>  
        </>
    );
};

export default FooterSection;