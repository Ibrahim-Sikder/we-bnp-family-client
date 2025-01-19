'use client'
import React, { useState, useEffect, useRef } from "react"
import Container from "@/components/shared/Container"
import LightGallery from "lightgallery/react"
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import { LightGallery as LightGalleryType } from 'lightgallery/lightgallery'
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"
import Image from "next/image"
import { TImgGallery } from "@/types/prison"
import { useLanguage } from "@/provider/LanguageProvider"
import CommonBanner from "@/components/shared/CommonBanner/CommonBanner"

const Page = () => {
  const { language } = useLanguage()
  const [galleryData, setGalleryData] = useState<TImgGallery[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const lightGalleryRef = useRef<LightGalleryType | null>(null)

  useEffect(() => {
    const fetchAffiliationData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/image-gallery?limit=10000`,
          { cache: "no-store" }
        )
        const data = await response.json()
        setGalleryData(data.data?.galleries || [])
      } catch (err) {
        setError("Failed to fetch gallery data.")
      } finally {
        setLoading(false)
      }
    }

    fetchAffiliationData()
  }, [])

  const title = language === "ENG" ? "Image Gallery" : "ফটো  গ্যালারি"

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString)
    const day = date.getDate().toString().padStart(2, "0")
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const year = date.getFullYear()
    return `${day}-${month}-${year}`
  }

  const onInit = (detail: { instance: LightGalleryType }) => {
    if (detail) {
      lightGalleryRef.current = detail.instance

      const addCustomCloseButton = () => {
        const closeButton = document.createElement('button')
        closeButton.classList.add('lg-close-custom')
        closeButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6"1="6" x2="18" y2="18"></line>
          </svg>
        `
        closeButton.onclick = () => {
          if (lightGalleryRef.current) {
            lightGalleryRef.current.closeGallery()
          }
        }

        const lgContainer = document.querySelector('.lg-container')
        if (lgContainer && !lgContainer.querySelector('.lg-close-custom')) {
          lgContainer.appendChild(closeButton)
        }
      }

      setTimeout(addCustomCloseButton, 100)
    }
  }

  return (
    <>
      <CommonBanner title={title} />
      <div className="App my-10">
        <Container>
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
            onInit={onInit}
          >
            {galleryData?.map((data) => (
              <a
                key={data._id}
                className="gallery-item cursor-pointer"
                data-src={data.images[0]}
                data-sub-html={`<h4>${language === "ENG" ? data.eng_title : data.bng_title}</h4>`}
              >
                <div className="relative group">
                  <Image
                    className="w-full h-[300px] object-cover transition-transform duration-300 transform group-hover:scale-110"
                    src={data.images[0]}
                    alt={data.bng_title}
                    width={500}
                    height={300}
                  />
                  <div
                    className="absolute w-full bottom-0 bg-black bg-opacity-75 py-2 px-4 text-white opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-center "
                  >
                    <h3 className="text-base font-semibold truncate">
                      {language === "ENG" ? data.eng_title : data.bng_title}
                    </h3>
                  </div>
                </div>
              </a>
            ))}
          </LightGallery>

          <style jsx global>{`
            .lg-close-custom {
              position: fixed;
              right: 20px;
              top: 20px;
              z-index: 1050;
              cursor: pointer;
              background: rgba(0, 0, 0, 0.7);
              border: none;
              color: white;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: background-color 0.3s ease, transform 0.3s ease;
            }
            .lg-close-custom:hover {
              background: rgba(0, 0, 0, 0.9);
              transform: scale(1.1);
            }
            .lg-close-custom svg {
              width: 24px;
              height: 24px;
            }
          `}</style>
        </Container>
      </div>
    </>
  )
}

export default Page
