'use client';

import React, { useState, useRef } from 'react';
import { Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react'; // Correct import
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './HeroSection.css';
import { ArrowForwardIos } from '@mui/icons-material';
import tareque from '../../../../assets/images/hero/Layer 0 copy.png';
import khaleda from '../../../../assets/images/hero/pic 2.png';
import zia from '../../../../assets/images/banner/zia.png';

import Image from 'next/image';
import Container from '@/components/shared/Container';
import { TBanner } from '@/types';
import { useLanguage } from '@/provider/LanguageProvider';

const HeroSection = () => {

    const { language, setLanguage } = useLanguage();
    const [bannerData, setBannerData] = React.useState<TBanner[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchAffiliationData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/banner`, {
                    cache: 'no-store'
                });
                const data = await response.json();
                setBannerData(data.data?.banners || []);

            } catch (err) {
                setError('Failed to fetch banner data.');
            } finally {
                setLoading(false);
            }
        };

        fetchAffiliationData();
    }, []);

    const swiperRef = useRef<any>(null);
    const [fadeOut, setFadeOut] = useState(false);

    const btnStyle = {
        background: '#ffff', color: '#111', borderRadius: '10px', marginTop: '15px',
        fontSize: {
            lg: '20px',
            sm: '15px',
            xs: '13px'
        },
        width: {
            lg: '150px',
            md: '150px',
            sm: '100px',
            xs: '80px',
        },
        padding: '0px',
        height: {
            lg: '50px',
            md: '50px',
            sm: '30px',
            xs: '25px',
        }
    };
    

    const handleSlideChange = (index: number) => {
        if (swiperRef.current) {
            setFadeOut(true);
            setTimeout(() => {
                swiperRef.current.swiper.slideTo(index);
                setFadeOut(false);
            }, 500);
        }
    };

    return (
        <div className="heroSectionWrap">
            <Swiper
                ref={swiperRef}
                speed={4500}
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{ clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {bannerData?.map((slide: TBanner, index: number) => (
                    <SwiperSlide key={index}>
                        <Container>
                            <div className={`sliderWraps fade-in ${index === 1 ? 'secondSlide' : ''} ${index === 2 ? 'thirdSlide' : ''}`} >
                                <div className={`heroContent ${fadeOut ? 'fade-out zoom-out' : ''}`}>
                                    <div className="spacey-y-1 md:space-y-5">
                                        <h1 className='capitalize text-[15px] md:text-[20px] lg:text-[60px] w-[850px] font-bold md:leading-10'>{slide.name}</h1>
                                        <h2 className='capitalize text-[15px] md:text-3xl lg:text-5xl text-[#33c05b]'>{slide.designation}</h2>
                                        <p className='text-[15px] md:text-xl lg:text-2xl'>{slide.description}</p>
                                    </div>
                                    <Button sx={btnStyle}>যোগ দিন <ArrowForwardIos sx={{ fontSize: { md: '15px', sm: '10px', xs: '10px' } }} /> </Button>
                                </div>
                                <div className={`bannerImgWrap ${fadeOut ? 'fade-out' : ''}`}>

                                    {slide?.images?.slice(0, 1)?.map((img: any) => {

                                        return <Image src={img} alt="hero" width={1000}
                                            height={500}
                                            layout="responsive" key={img} />
                                    })}
                                </div>
                            </div>
                        </Container>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="slideNumber flex items-center gap-3 mt-10">
                <div className='slide' onClick={() => handleSlideChange(0)}>01</div>
                <div className='slide' onClick={() => handleSlideChange(1)}>02</div>
                <div className='slide' onClick={() => handleSlideChange(2)}>03</div>
            </div>
        </div>
    );
};

export default HeroSection;
