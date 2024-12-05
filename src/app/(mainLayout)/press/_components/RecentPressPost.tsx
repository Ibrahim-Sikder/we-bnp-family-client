import { usePrisonData } from '@/hooks/usePrisonData';
import { useProgrammData } from '@/hooks/useProgrammData';
import { useLanguage } from '@/provider/LanguageProvider';
import Image from 'next/image';
import React from 'react';

const RecentPressPost = () => {
    const { programmData, loading } = useProgrammData()
    const { language } = useLanguage()

    return (
        <div className="flex flex-col gap-8 mt-5">
            {programmData?.slice(1, 5).map((data) => (
                <div key={data._id} className="flex gap-5">
                    <div className="">
                        <div className="">
                            {
                                data.bng_Images?.slice(0, 1).map((img) => (
                                    <Image
                                        key={img}
                                        src={img}
                                        width={50}
                                        height={30}
                                        alt="victime"
                                        className="w-44 h-16 object-fill rounded-sm"
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <p>
                        {language === 'ENG' ? data.english_short_description.slice(0, 50) : data.bangla_short_description.slice(0, 30)}...
                    </p>
                </div>
            ))}
        </div>
    );
};

export default RecentPressPost;