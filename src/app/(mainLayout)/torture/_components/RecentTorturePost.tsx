import { usePrisonData } from '@/hooks/usePrisonData';
import { useLanguage } from '@/provider/LanguageProvider';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RecentTorturePost = () => {
    const { prisonData, loading } = usePrisonData()
    const { language } = useLanguage()
    return (
        <div className="flex flex-col gap-8 mt-5">
            {prisonData?.slice(1, 5).map((data) => (
                <div key={data._id}>
                    <Link href={`/torture/${data._id}`}>
                        <div key={data._id} className="flex gap-5">
                            <div className="">
                                <div className="">
                             

                                    {language === 'ENG'
                                        ? data?.eng_iamges?.slice(0, 1)?.map((img: any) => (
                                            <Image
                                                key={img}
                                                src={img}
                                                width={50}
                                                height={30}
                                                alt="victime"
                                                className="w-44 h-16 object-fill rounded-sm"
                                            />
                                        ))
                                        : data?.bng_Images?.slice(0, 1)?.map((img: any) => (
                                            <Image
                                                key={img}
                                                src={img}
                                                width={50}
                                                height={30}
                                                alt="victime"
                                                className="w-44 h-16 object-fill rounded-sm"
                                            />
                                        ))}
                                </div>
                            </div>
                            <p>
                                {language === 'ENG' ? data.english_short_description.slice(0, 50) : data.bangla_short_description.slice(0, 30)}...
                            </p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default RecentTorturePost;