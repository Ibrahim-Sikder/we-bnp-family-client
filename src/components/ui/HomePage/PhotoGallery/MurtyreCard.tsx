import { TDisappearance } from "@/types/disappearance";

import Image from "next/image";
import Link from "next/link";




interface MurtyreCardProps {
    murtyreFilterData: TDisappearance[];
    language: string,
}


const MurtyreCard: React.FC<MurtyreCardProps> = ({ murtyreFilterData, language }: MurtyreCardProps) => {

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {murtyreFilterData?.map((data: TDisappearance) => (
                    <div key={data._id} className="disappeareCard">
                        <div className="flex gap-x-5 items-end justify-between flex-col md:flex-row ">
                            <div className="disappeareImgWrap ">

                                {
                                    language === 'ENG' ? data.bng_Images?.slice(0, 1).map((img) => (
                                        <Image src={img} alt="hero" width={500}
                                            height={500} key={img} />
                                    )) : data.eng_iamges?.slice(0, 1).map((img) => (
                                        <Image src={img} alt="hero" width={500}
                                            height={500} key={img} />
                                    ))
                                }
                            </div>
                            <div className="disappeareContent text-left items-end  justify-end ">
                                <div className="flex items-center justify-between ">

                                    <div className=' flex flex-col lg:w-[40px] space-y-1 '>
                                        <b>{language === 'ENG' ? 'Name' : 'নাম'}</b>
                                        <b>{language === 'ENG' ? 'Designation' : 'পদবী'}</b>
                                        <b>{language === 'ENG' ? 'Address' : 'ঠিকানা'}</b>
                                    </div>
                                    <div className='flex flex-col  space-y-1 '>
                                        <small>: {language === "ENG" ? data.name_english : data.name_bangla}</small>
                                        <small className="text-justify">
                                            : {language === 'ENG' ? data.designation_english : data.designation_bangla}
                                        </small>
                                        <small className="text-left">
                                            : {language === "ENG" ? data.address_english : data.address_bangla}
                                        </small>
                                    </div>

                                </div>

                                <span className="mt-3 block text-sm ">

                                    <b>
                                        {language === "ENG" ? 'Short Description' : 'সংক্ষিপ্ত বিবরণী'} :</b>

                                    {language === "ENG" ? data.english_short_description : data.bangla_short_description}

                                    {/*                               
                              <Link href="/disappearances/1">
                                <button className="mt-3 bg-gradient-to-r from-red-600 to-green-600 text-white py-0 text-[10px] px-2  rounded inline-block font-semibold uppercase">
                                  আরও পড়ুন
                                </button>
                              </Link>  */}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-end items-end w-full mr-16 mt-5 ">
                <Link href="/disappearances">
                    <button className="bg-gradient-to-r from-red-600 to-green-600 text-white py-2 px-8 rounded inline-block font-semibold uppercase">
                        {language === 'ENG' ? 'See All' : 'সবগুলো দেখুন'}
                    </button>
                </Link>
            </div>
        </>
    );
};

export default MurtyreCard;