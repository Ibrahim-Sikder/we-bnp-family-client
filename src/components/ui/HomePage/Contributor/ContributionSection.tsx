'use client'

import { useLanguage } from "@/provider/LanguageProvider";
import Contributor from "./Contributor";
import { useSectionData } from "@/hooks/useSectionData";

const ContributionSection = () => {
    const { language } = useLanguage()
    const { sectionData, loading } = useSectionData()
    return (
        <>
            <Contributor sectionData={sectionData} language={language} />
        </>
    );
};

export default ContributionSection;