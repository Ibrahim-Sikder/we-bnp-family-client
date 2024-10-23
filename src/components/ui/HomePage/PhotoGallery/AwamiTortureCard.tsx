import { TPrison } from '@/types/prison';
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface AwamiTortureCardProps {
    tortureData: TPrison[];
  }
  
  const AwamiTortureCard: React.FC<AwamiTortureCardProps> = ({ tortureData }) => {

    const getLinkHref = (index: number) => {
        switch (index) {
            case 0:
                return "/prison/1";
            case 1:
                return "/prison/prison-second";
            case 2:
                return "/prison/prison-third";
            default:
                return "/prison/1";
        }
    };

    const buttonStyle = {
        width: { xs: "70px", md: "120px", sm: "120px" },
        height: { md: "30px", xs: "30px", lg: "50px" },
        fontSize: { md: "12px", xs: "10px", xl: "13px" },
        borderRadius: "30px",
        background: "#2B8444",
        padding: "0px",
    };


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {tortureData.map((data, index: number) => (
                    <div key={data._id} className="imgGalleryImgWraps ">
                        <div className="murtyreImgWraps">
                            {data?.bng_Images.slice(0, 1)?.map((img) => {

                                return <Image src={img} alt="hero" width={500}
                                    height={500} key={img} />
                            })}
                        </div>
                        <div className="imgGalleryContent">
                            <h3>{data.bangla_title}</h3>
                            <Button
                                component={Link}
                                href={getLinkHref(index)}
                                sx={buttonStyle}
                            >
                                আরও পড়ুন
                            </Button>
                        </div>

                        <div className="galleryContent">
                            <h3>{data.bangla_title}</h3>
                            <p>{data.bangla_short_description}</p>
                            <Button
                                component={Link}
                                href={getLinkHref(index)}
                                sx={buttonStyle}
                            >
                                আরও পড়ুন
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-end items-end w-full mr-16 mt-5 ">
                <Link href="/prison">
                    <button className="bg-gradient-to-r from-red-600 to-green-600 text-white py-2 px-8 rounded inline-block font-semibold uppercase">
                        সবগুলো দেখুন
                    </button>
                </Link>
            </div>
        </>
    );
};

export default AwamiTortureCard;