
import React from 'react';
import SinglePressPage from '../_components/SinglePressPage';
import { Metadata } from 'next';




interface pressParams {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: pressParams): Promise<Metadata> {
  const baseApi = process.env.NEXT_PUBLIC_BASE_API_URL;
  const id = params.id;
  const res = await fetch(`${baseApi}/programm/${id}`, { next: { revalidate: 60 } });
  const data = await res.json();
  const programmData = data.data;
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const title = programmData.bangla_title || programmData.english_title || 'Program';
  const description = programmData.bangla_description || programmData.english_description || '';
  const imgUrl = programmData.bng_Images?.[0] || programmData.eng_images?.[0] || '';

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

const PressPage = () => {
  // const { id } = params;

  // const [data, setData] = useState(null);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/programm/${id}`);
  //       const result = await res.json();
  //       if (result?.data) {
  //         setData(result.data);
  //       } else {
  //         setError("Data not found");
  //       }
  //     } catch (error) {
  //       setError("An error occurred while fetching data.");
  //     }
  //   };

  //   fetchData();
  // }, [id]);

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <>
      <SinglePressPage />

    </>
  );
};

export default PressPage;