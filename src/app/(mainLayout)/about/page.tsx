'use client'
import About from './_components/About';
import { useLanguage } from '@/provider/LanguageProvider';

const AboutPage = () => {
    const { language } = useLanguage()
    return (
        <div>
            <About language={language} />
        </div>
    );
};

export default AboutPage;