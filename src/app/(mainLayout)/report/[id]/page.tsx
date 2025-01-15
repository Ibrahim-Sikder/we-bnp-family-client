

import React from 'react';
import SingleReportPage from '../_component/SingleReportPage';
import { Metadata } from 'next';

interface TortureParams {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: TortureParams): Promise<Metadata> {
  const baseApi = process.env.NEXT_PUBLIC_BASE_API_URL;
  const id = params.id;
  const res = await fetch(`${baseApi}/report/${id}`, { next: { revalidate: 60 } });
  const data = await res.json();
  const reportData = data.data;
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const title = reportData.bangla_title || reportData.english_title || 'report';
  const description = reportData.bangla_description || reportData.english_description || '';
  const imgUrl = reportData.bng_Images?.[0] || reportData.eng_images?.[0] || '';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: imgUrl,
          width: 800,
          height: 600,
          alt: title,
        },
      ],
      type: 'article',
      url: shareUrl,
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imgUrl],
    },
  };
}
const Torture = () => {

  return (
    <>
      <SingleReportPage />

    </>
  );
};

export default Torture;