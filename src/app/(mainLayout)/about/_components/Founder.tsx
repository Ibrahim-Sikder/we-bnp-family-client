import Image from "next/image";
import cardimg3 from "../../../../assets/images/founder/founder.jpeg";
import { LanguageProps } from "@/types";

const Founder = ({ language }: LanguageProps) => {
  return (
    <div>
      <div className="shadow-lg rounded-lg lg:rounded-3xl overflow-hidden grid grid-cols-12 my-10 border place-items-center ">
        {/* Left Part */}
        <div className="col-span-12 md:col-span-4">
          <div className=" bg-[#fdf7f4] shadow-lg rounded-xl ">
            <div className=" ">
              <Image
                src={cardimg3}
                alt={" তারেক রহমান"}
                className="w-[300px] h-full lg:h-[500px] md:w-full"
              />
            </div>
          </div>
        </div>
        {/* Right Part */}

        <div className="col-span-12 md:col-span-8 lg:h-[500px] p-3 lg:p-6 bg-[#fdf7f4] space-y-6">
          <p className="text-justify text-xl">
            {
              language === 'ENG' ? 'Deshanayak Tariq Rahman, one of the political figures of Bangladesh, has long stood by the victimized family. He has actively participated in various social and humanitarian activities. These initiatives of Tariq Rahman have played a significant role in justice, assistance and rehabilitation of oppressed families. Under the leadership of Tariq Rahman, the victimized families are being provided with legal assistance, financial assistance, and moral support. His works have raised awareness in the society and sent a strong message of standing with victims of torture. Through such humanitarian activities, Deshanayak Tariq Rahman continues to strive to lead the backward sections of the society towards a better life...' : ' তারেক রহমান, বাংলাদেশের অন্যতম রাজনৈতিক ব্যক্তিত্ব, দীর্ঘদিন ধরে নির্যাতিত পরিবারের পাশে দাঁড়িয়ে আসছেন। তিনি বিভিন্ন সময়ে সামাজিক ও মানবিক কার্যক্রমে সক্রিয়ভাবে অংশগ্রহণ করেছেন। তারেক রহমানের এ উদ্যোগগুলো নির্যাতিত পরিবারদের ন্যায়বিচার, সহায়তা ও পুনর্বাসনে উল্লেখযোগ্য ভূমিকা পালন করেছে। তারেক রহমানের নেতৃত্বে নির্যাতিত পরিবারগুলোকে আইনি সহায়তা, আর্থিক সহায়তা, এবং নৈতিক সমর্থন প্রদান করা হচ্ছে। তাঁর এ কাজগুলো সমাজে সচেতনতা বৃদ্ধি করেছে এবং নির্যাতনের শিকার ব্যক্তিদের পাশে দাঁড়ানোর একটি শক্তিশালী বার্তা প্রদান করেছে। এ ধরনের মানবিক কার্যক্রমগুলোর মাধ্যমে,  তারেক রহমান সমাজের পিছিয়ে পড়া  জনগোষ্ঠীকে উন্নত জীবনের দিকে এগিয়ে নিয়ে যাওয়ার প্রচেষ্টা চালিয়ে     যাচ্ছেন ...'
            }
          </p>
        </div>
      </div>
    </div>
  );
};
export default Founder;