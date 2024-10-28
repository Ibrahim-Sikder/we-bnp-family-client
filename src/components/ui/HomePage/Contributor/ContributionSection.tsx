'use client'

import { useLanguage } from "@/provider/LanguageProvider";
import Contributor from "./Contributor";

const ContributionSection = () => {
    const {language} = useLanguage()
    return (
        <>
           <Contributor language={language} /> 
        </>
    );
};

export default ContributionSection;