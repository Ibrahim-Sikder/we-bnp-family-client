"use client";
import React, { useState } from "react";
import Container from "@/components/shared/Container";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Image from "next/image";
import { TImgGallery } from "@/types/prison";
import { useLanguage } from "@/provider/LanguageProvider";
import CommonBanner from "@/components/shared/CommonBanner/CommonBanner";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language } = useLanguage();
  const [galleryData, setGalleryData] = React.useState<TImgGallery[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchAffiliationData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/image-gallery?limit=10000`,
          { cache: 'no-store' }
        );
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

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const nextImage = () =>
    setCurrentIndex((currentIndex + 1) % galleryData.length);
  const prevImage = () =>
    setCurrentIndex(
      (currentIndex + galleryData.length - 1) % galleryData.length
    );

  const title = language === 'ENG' ? 'Image Gallery' : 'ইমেজ গ্যালারি'

  return (
    <>
      <CommonBanner title={title} />
      <div className="App my-10">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {galleryData?.map((data, index) => (
              <div
                key={data._id}
                className="cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                {/* Display the first image from the images array */}
                {data.images.length > 0 && (
                  <Image
                    className="w-full h-auto rounded-lg"
                    src={data.images[0]}
                    alt={data.bng_title}
                    width={500}
                    height={500}
                  />
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Lightbox for full-screen image viewing */}
      {isOpen && galleryData[currentIndex].images.length > 0 && (
        <Lightbox
          mainSrc={galleryData[currentIndex].images[0]}
          nextSrc={
            galleryData[(currentIndex + 1) % galleryData.length].images[0]
          }
          prevSrc={
            galleryData[
              (currentIndex + galleryData.length - 1) % galleryData.length
            ].images[0]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={prevImage}
          onMoveNextRequest={nextImage}
        />
      )}
    </>
  );
};

export default Page;
