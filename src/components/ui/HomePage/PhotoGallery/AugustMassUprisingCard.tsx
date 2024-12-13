import { TDisappearance } from "@/types/disappearance";
import Image from "next/image";
import Link from "next/link";




interface AugustMassCardProps {
    augostilterData: TDisappearance[];
    language: string,
}

const AugustMassUprisingCard: React.FC<AugustMassCardProps> = ({ augostilterData, language }) => {




    return (
        <>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                {augostilterData?.map((data: TDisappearance) => (
                    <div key={data._id} className="disappeareCard">
                        <div className="flex gap-x-5 items-end justify-between flex-col md:flex-row ">
                            <div className="disappeareImgWrap ">


                                {data?.bng_Images.slice(0, 1)?.map((img) => {

                                    return <Image src={img} alt="hero" width={500}
                                        height={500} key={img} />
                                })}
                            </div>
                            <div className="disappeareContent text-left items-end  justify-end ">
                                <div className="flex text-left gap-x-8 items-center">
                                    <div className="flex items-center justify-between w-[60px]">
                                        <div className="flex flex-col  gap-y-2 text-sm ">
                                            <b> {language === 'ENG' ? 'Name' : 'নাম'}  </b>
                                        </div>
                                        <div className="flex flex-col ">
                                            <b> : </b>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">

                                        <small>{language === "ENG" ? data.name_english : data.name_bangla}</small>
                                    </div>
                                </div>

                                <div className="flex text-left gap-x-10 ">
                                    <div className="flex text-left items-center justify-between  w-[60px]">
                                        <div className=" text-sm ">
                                            <b>{language === 'ENG' ? 'Address' : 'ঠিকানা'}</b>
                                        </div>
                                        <div>
                                            <b>: </b>
                                        </div>
                                    </div>
                                    <div className="text-left ">
                                        <small className="text-left">
                                            {language === "ENG" ? data.address_english : data.address_bangla}
                                        </small>
                                    </div>
                                </div>

                                <span className="mt-3 block text-sm ">

                                    <b>
                                        {language === "ENG" ? 'Short Description' : 'সংক্ষিপ্ত বিবরণী'} :</b>

                                    {language === "ENG" ? data.english_short_description : data.bangla_short_description}


                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-end items-end w-full mr-16 mt-5 ">
                <Link href="/august-mass-uprising">
                    <button className="bg-gradient-to-r from-red-600 to-green-600 text-white py-2 px-8 rounded inline-block font-semibold uppercase">
                        {language === 'ENG' ? 'See All' : 'সবগুলো দেখুন'}
                    </button>
                </Link>
            </div>
        </>
    );
};

export default AugustMassUprisingCard;