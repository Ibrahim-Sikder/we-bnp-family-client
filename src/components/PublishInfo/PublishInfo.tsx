import Link from 'next/link';
import React from 'react';

type TPublish = {
    name:string,
    time:string,
    link:string,
}
const PublishInfo = ({name,time,link}:TPublish) => {
    return (
        <div className="flex gap-5 mt-10 ">
        <div className="flex flex-col gap-2">
          <b> প্রকাশিত পত্রিকার নাম </b>
          <b>সংবাদ প্রকাশের তারিখ</b>
          <b>পত্রিকার প্রকাশিত লিংক</b>

        </div>
        <div className="flex flex-col gap-2">
          <small> : The Daily Star Bangla</small>
          <small> : বুধবার নভেম্বর ৩০, ২০২২ ০৭:০৯ অপরাহ্ন</small>
          <small>: <Link target="_blank" href="https://bangla.thedailystar.net/news/bangladesh/politics/news-423256">
            <button className=" bg-gradient-to-r from-red-600 to-green-600 text-white py-0 text-[10px] px-2  rounded inline-block font-semibold uppercase">
              লিংক দেখুন
            </button>
          </Link></small>
        </div>
      </div>
    );
};

export default PublishInfo;