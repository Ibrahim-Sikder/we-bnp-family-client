'use client'

import { useLanguage } from '@/provider/LanguageProvider';
import Footer from './Footer';

const FooterSection = () => {
    const {language} = useLanguage()
    return (
        <>
          <Footer language={language}/>  
        </>
    );
};

export default FooterSection;