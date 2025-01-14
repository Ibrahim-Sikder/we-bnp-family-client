
import Loading from '@/app/loading';
import { useActivityData } from '@/hooks/useActivityData';
import { useReportData } from '@/hooks/useReportData';
import { useLanguage } from '@/provider/LanguageProvider';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ActivitySidebar = () => {
    const { activityData, loading, error } = useActivityData()
    const { language } = useLanguage()
    if (loading) {
        return <Loading />
    }
    if (error) {
        return <h1>Oops! data not found.</h1>
    }
    return (
        <div className="flex flex-col gap-8 mt-5">
            <h3>{language === 'ENG' ? 'Recent Post ' : 'সাম্প্রতিক পোস্ট'}</h3>
            <hr className="w-16 h-1 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
            {activityData?.map((data) => (
                <div key={data._id}>
                    <Link href={`/activity/${data._id}`}>
                        <div key={data._id} className="flex gap-5">
                            <div>
                                {
                                    language === 'ENG' ? data.bng_Images?.slice(0, 1).map((img) => (
                                        <Image key={img}
                                            src={img}
                                            width={50}
                                            height={30}
                                            alt="victime"
                                            className="w-44 h-16 object-fill rounded-sm" />
                                    )) : data.eng_iamges?.slice(0, 1).map((img) => (
                                        <Image key={img}
                                            src={img}
                                            width={50}
                                            height={30}
                                            alt="victime"
                                            className="w-44 h-16 object-fill rounded-sm" />
                                    ))
                                }
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

export default ActivitySidebar;