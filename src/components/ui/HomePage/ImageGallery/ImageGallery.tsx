"use client";

import React from "react";
import img1 from "../../../../../src/assets/images/flood/flood10.jpeg";
import img3 from "../../../../../src/assets/images/flood/flood12.jpeg";
import img4 from "../../../../../src/assets/images/news/treate.webp";
import img5 from "../../../../../src/assets/images/news/treatment.jpeg";
import img6 from "../../../../../src/assets/images/news/treatment2.jpeg";
import img7 from "../../../../../src/assets/images/news/treatment7.jpeg";
import Image from "next/image";
import Container from "@/components/shared/Container";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ImageGallery = () => {
  const gallery = [
    { id: 1, image: img1, date: "08-22-2024", title: "ফেনীতে বন্যার্তদের পাশে ‘আমরা বিএনপি পরিবার" },
    { id: 3, image: img3, date: "08-22-2024", title: "ফেনীতে বন্যার্তদের পাশে ‘আমরা বিএনপি পরিবার" },
    { id: 3, image: img4, date: "08-22-2024", title: "আন্দোলনে আহতদের পাশে 'আমরা বিএনপি পরিবার" },
    { id: 3, image: img5, date: "08-22-2024", title: "আন্দোলনে আহতদের পাশে 'আমরা বিএনপি পরিবার" },
    { id: 3, image: img6, date: "08-22-2024", title: "আন্দোলনে আহতদের পাশে 'আমরা বিএনপি পরিবার" },
    { id: 3, image: img7, date: "08-22-2024", title: "আন্দোলনে আহতদের পাশে 'আমরা বিএনপি পরিবার" },
  ];

  return (
    <div>
      <Container>
        <div className="my-16">
          <h2>ফটো গ্যালারি</h2>
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
                640: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
            >
              {gallery.map((data) => (
                <SwiperSlide key={data.id}>
                  <div className="relative group overflow-hidden rounded">
                    <Image
                      src={data.image}
                      alt={data.title}
                      className="w-full h-[300px] object-cover transition-transform duration-300 transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded flex justify-center items-end p-5 cursor-pointer">
                      <div className="text-white text-center">
                        <p className="text-sm">{data.date}</p>
                        <h3 className="text-xl font-bold">{data.title}</h3>
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
                সবগুলো দেখুন
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ImageGallery;
