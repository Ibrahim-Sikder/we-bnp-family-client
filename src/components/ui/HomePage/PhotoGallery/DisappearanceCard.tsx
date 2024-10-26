import { useLanguage } from "@/provider/LanguageProvider";
import { TDisappearance } from "@/types/disappearance";
import Image from "next/image";
import Link from "next/link";




interface AwamiTortureCardProps {
    disappearanceData: TDisappearance[];
}

const DisappearanceCard: React.FC<AwamiTortureCardProps> = ({ disappearanceData }) => {
    const { language } = useLanguage();



    return (
        <>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                {disappearanceData?.map((data: TDisappearance) => (
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
                                            <b>নাম </b>
                                        </div>
                                        <div className="flex flex-col ">
                                            <b> : </b>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        {/* <small> {data.name_bangla}</small> */}
                                        <small>{language === "ENG" ? data.name_english : data.name_bangla}</small>
                                    </div>
                                </div>
                                <div className="flex text-left gap-x-8 items-center ">
                                    <div className="flex justify-between w-[60px]">
                                        <div className=" text-sm ">
                                            <b>পদবী </b>
                                        </div>
                                        <div>
                                            <b>:</b>
                                        </div>
                                    </div>
                                    <div>
                                        <small className="text-justify">
                                            {data.designation_bangla}{" "}
                                        </small>
                                    </div>
                                </div>
                                <div className="flex text-left gap-x-10 ">
                                    <div className="flex text-left items-center justify-between  w-[60px]">
                                        <div className=" text-sm ">
                                            <b>ঠিকানা</b>
                                        </div>
                                        <div>
                                            <b>:</b>
                                        </div>
                                    </div>
                                    <div className="text-left ">
                                        <small className="text-left">
                                            {language === "ENG" ? data.name_english : data.name_bangla}
                                        </small>
                                    </div>
                                </div>

                                <span className="mt-3 block text-sm ">
                                    {" "}
                                    <b>সংক্ষিপ্ত বিবরণী:</b>
                                    {data.bangla_short_description}
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
                        সবগুলো দেখুন
                    </button>
                </Link>
            </div>
        </>
    );
};

export default DisappearanceCard;