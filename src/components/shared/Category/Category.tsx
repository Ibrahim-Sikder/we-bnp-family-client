'use client'
import { useLanguage } from '@/provider/LanguageProvider';
import Link from 'next/link';
import React from 'react';

const Category = () => {
    const { language } = useLanguage()
    return (
        <div>
            <Link href='/disappearances'>
                <div className="flex justify-between my-3">
                    <button className="font-medium">{language === 'ENG' ? 'Missing List' : 'গুমের তালিকা'}</button>{" "}
                    <span className="block font-medium">(3)</span>
                </div>
            </Link>

            <hr />
            <Link href='/murdered'>
                <div className="flex justify-between my-3">
                    <button className="font-medium"> {language === 'ENG' ? 'Murtyr List' : 'শহীদদের তালিকা'}  </button>{" "}
                    <span className="block font-medium">(3)</span>
                </div>
            </Link>
            <hr />

            <hr />
            <Link href='/torture'>
                <div className="flex justify-between my-3">
                    <button className="font-medium">{language === 'ENG' ? 'Awami League torture' : 'আওয়ামী লীগের নির্যাতন'} </button>{" "}
                    <span className="block font-medium">(3)</span>
                </div>
            </Link>
            <hr />
            <Link href='/prison'>
                <div className="flex justify-between my-3">
                    <button className="font-medium"> {language === 'ENG' ? 'Torture in prison' : 'কারাগারে নির্যাতন'}   </button>{" "}
                    <span className="block font-medium">(3)</span>
                </div>
            </Link>
        </div>
    );
};

export default Category;