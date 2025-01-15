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

  const title = activity.bangla_title || activity.english_title || 'Activity';
  const description = activity.bangla_description || activity.english_description || '';
  const image = activity.bng_Images?.[0] || activity.eng_images?.[0] || '';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'article',
      url: `${process.env.NEXT_PUBLIC_BASE_API_URL}/activity/${id}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export default function Page({ params }: ActivityParams) {
  return (
    <div>
      <SingleActivityPage />
    </div>
  );
}

