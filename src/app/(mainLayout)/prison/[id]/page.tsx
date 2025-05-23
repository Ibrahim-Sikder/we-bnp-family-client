import React from 'react';
import SinglePrisonPage from '../_components/SinglePrisonPage';
import { Metadata } from 'next';
interface PrisonParams {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PrisonParams): Promise<Metadata> {
  const baseApi = process.env.NEXT_PUBLIC_BASE_API_URL;
  const id = params.id;
  const res = await fetch(`${baseApi}/prison/${id}`, { next: { revalidate: 60 } });
  const data = await res.json();
  const prisonData = data.data;
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const title = prisonData.bangla_title || prisonData.english_title || 'prison';
  const description = prisonData.bangla_description || prisonData.english_description || '';
  const imgUrl = prisonData.bng_Images?.[0] || prisonData.eng_images?.[0] || '';

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
const Prison = () => {

  return (
    <>
      <SinglePrisonPage />

    </>
  );

};

export default Prison;