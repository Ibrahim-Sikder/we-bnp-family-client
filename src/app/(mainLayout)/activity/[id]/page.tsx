import { Metadata } from 'next';
import SingleActivityPage from '../_components/SingleActivityPage';

interface ActivityParams {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ActivityParams): Promise<Metadata> {
  const baseApi = process.env.NEXT_PUBLIC_BASE_API_URL;
  const id = params.id;
  const res = await fetch(`${baseApi}/activity/${id}`, { next: { revalidate: 60 } });
  const data = await res.json();
  const activity = data.data;
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const title = activity.bangla_title || activity.english_title || 'Activity';
  const description = activity.bangla_description || activity.english_description || '';
  const imgUrl = activity.bng_Images?.[0] || activity.eng_images?.[0] || '';

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

export default function Page() {
  return (
    <div>
      <SingleActivityPage />
    </div>
  );
}

