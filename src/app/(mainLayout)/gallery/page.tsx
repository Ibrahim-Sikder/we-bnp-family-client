"use client";
import React, { useState } from "react";
import Container from "@/components/shared/Container";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";  // Import lightgallery CSS
import Image from "next/image";
import { TImgGallery } from "@/types/prison";
import { useLanguage } from "@/provider/LanguageProvider";
import CommonBanner from "@/components/shared/CommonBanner/CommonBanner";

const Page = () => {
  const { language } = useLanguage();
  const [galleryData, setGalleryData] = React.useState<TImgGallery[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchAffiliationData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/image-gallery?limit=10000`,
          { cache: "no-store" }
        );
        const data = await response.json();
        setGalleryData(data.data?.galleries || []);
      } catch (err) {
        setError("Failed to fetch gallery data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAffiliationData();
  }, []);

  const title = language === "ENG" ? "Image Gallery" : "ফটো  গ্যালারি";

  return (
    <>
      <CommonBanner title={title} />
      <div className="App my-10">
        <Container>
          {/* Using LightGallery for image gallery */}
          <LightGallery speed={500}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {galleryData?.map((data, index) => (
                <div key={data._id} className="cursor-pointer">
                  {data.images.length > 0 && (
                    <a
                      href={data.images[0]} // Set the image source for the lightbox
                      data-lightbox="gallery"
                    >
                      <Image
                        className="w-full h-[300px] object-cover transition-transform duration-300 transform group-hover:scale-110"
                        src={data.images[0]}
                        alt={data.bng_title}
                        width={500}
                        height={500}
                      />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </LightGallery>
        </Container>
      </div>
    </>
  );
};

export default Page;
