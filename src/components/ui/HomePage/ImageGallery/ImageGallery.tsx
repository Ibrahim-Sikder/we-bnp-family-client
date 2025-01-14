"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/shared/Container";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { TImgGallery } from "@/types/prison";
import { useLanguage } from "@/provider/LanguageProvider";
import Loading from "@/components/Loading/Loading";

const ImageGallery = () => {
  const { language } = useLanguage()
  const [galleryData, setGalleryData] = React.useState<TImgGallery[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [value, setValue] = React.useState("1");

  React.useEffect(() => {
    const fetchAffiliationData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/image-gallery?limit=10000`, {
          cache: 'no-store'
        });
        const data = await response.json();
        setGalleryData(data.data?.galleries || []);

      } catch (err) {
        setError('Failed to fetch gallery data.');
      } finally {
        setLoading(false);
      }
    };

    fetchAffiliationData();
  }, []);

  if (loading) {
    return <Loading />
  }

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }


  return (
    <div>
      <Container>
        <div className="my-16">
          <h2>{language === 'ENG' ? 'Photo Gallery' : 'ফটো গ্যালারি'}</h2>
          <hr className="w-24 h-1 bg-gradient-to-r from-red-600 to-green-600 mt-2 rounded-full" />
          <div className="mt-10">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={30}
              slidesPerView={3}
              autoplay={{
                delay: 3500,
                disableOnInteraction: true,
              }}
              speed={3400}
              navigation
              loop={true}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                300: { slidesPerView: 1, spaceBetween: 10 },
                640: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
            >
              {galleryData?.map((data: TImgGallery) => (
                <SwiperSlide key={data._id}>
                  <div className="relative group overflow-hidden rounded">

                    {data?.images.slice(0, 1)?.map((img) => {

                      return <Image className="w-full h-[300px] object-cover transition-transform duration-300 transform group-hover:scale-110" src={img} alt="hero" width={500}
                        height={500} key={img} />
                    })}
                    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded flex justify-center items-end p-5 cursor-pointer">
                      <div className="text-white text-center">
                       
                        <h3 className="text-xl font-bold">{language === 'ENG' ? data.eng_title : data.bng_title}</h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex justify-center mt-7">
            <Link href="/gallery">
              <button className="bg-gradient-to-r from-red-600 to-green-600 text-white py-2 px-8 rounded inline-block font-semibold uppercase">
                {language === 'ENG' ? 'See All' : 'সবগুলো দেখুন'}
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ImageGallery;
