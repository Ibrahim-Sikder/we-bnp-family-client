'use client'

import { useLanguage } from "@/provider/LanguageProvider";
import NewsSection from "./NewsSection";

const NewsCard = () => {
  const { language } = useLanguage();

  return (
    <>
      <NewsSection language={language}/>
    </>
  );
};

export default NewsCard;
