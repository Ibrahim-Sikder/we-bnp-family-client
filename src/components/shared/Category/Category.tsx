'use client';

import { useLanguage } from '@/provider/LanguageProvider';
import Link from 'next/link';
import React from 'react';

const Category = () => {
    const { language } = useLanguage();
    const [metaData, setMetaData] = React.useState<{
        totalDisappearance: number;
        totalMartyre: number;
        totalPrison: number;
        totalTorture: number;
    } | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchMetaData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/meta`, {
                    cache: 'no-store',
                });
                const data = await response.json();
                setMetaData(data?.data || {});
            } catch (err) {
                setError('Failed to fetch metadata.');
            } finally {
                setLoading(false);
            }
        };

        fetchMetaData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='-[300px]'>
            <Link href='/disappearances'>
                <div className="flex justify-between my-3">
                    <button className="font-medium">
                        {language === 'ENG' ? 'Disappeared List' : 'গুমের তালিকা'}
                    </button>
                    <span className="block font-medium">({metaData?.totalDisappearance || 0})</span>
                </div>
            </Link>
            <hr />

            <Link href='/murdered'>
                <div className="flex justify-between my-3">
                    <button className="font-medium">
                        {language === 'ENG' ? 'Marty List' : 'শহীদদের তালিকা'}
                    </button>
                    <span className="block font-medium">({metaData?.totalMartyre || 0})</span>
                </div>
            </Link>
            <hr />

            <Link href='/torture'>
                <div className="flex justify-between my-3">
                    <button className="font-medium">
                        {language === 'ENG' ? 'Awami League Torture' : 'আওয়ামী লীগের নির্যাতন'}
                    </button>
                    <span className="block font-medium">({metaData?.totalTorture || 0})</span>
                </div>
            </Link>
            <hr />

            <Link href='/prison'>
                <div className="flex justify-between my-3">
                    <button className="font-medium">
                        {language === 'ENG' ? 'Torture in Prison' : 'কারাগারে নির্যাতন'}
                    </button>
                    <span className="block font-medium">({metaData?.totalPrison || 0})</span>
                </div>
            </Link>
        </div>
    );
};

export default Category;
