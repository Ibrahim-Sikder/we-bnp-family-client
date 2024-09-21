/* eslint-disable react/no-unescaped-entities */

import Container from "@/components/shared/Container";
import "../../murdered/Murder.css";
import banner from "../../../../assets/images/prison/karagar.webp";
import banner2 from "../../../../assets/images/gallery/gallery13.jpeg";
import banner3 from "../../../../assets/images/gallery/gallery10.jpeg";

import Image from "next/image";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  Stack,
  Typography,
} from "@mui/material";
import {
  KeyboardArrowRight
} from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
const page = () => {
  return (
    <>
      <div className="bannerWrap">
        <div className="bannerContent">
          <h3 className="text-xl  md:text-4xl font-semibold ">কারাগারে নির্যাতন</h3>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 my-20">
          <div className="xl:col-span-9">
            <div className="murderRightSide">
              <div className="imgWrap">
                <Image className="w-full" src={banner} alt="banner" />
              </div>
              <div className="my-10">
                <h2>
                  নয়াপল্টনে গ্রেপ্তার বিএনপি নেতার কারাগারে মৃত্যু
                </h2>
                <div className="space-y-5">


                  <p className="text-xl mt-3">
                    <b>ঢাকা:</b>
                    বিএনপির গোলাপুর রহমান (৫৮) নামে এক নেতার কারাগারে মৃত্যু হয়েছে। ইন্না লিল্লাহি ওয়া ইন্না ইলাহি রাজিউন।


                  </p>
                  <p>
                    বিএনপির গত ২৮ অক্টোবর মহাসমাবেশের আগের দিন দলটির কেন্দ্রীয় কার্যালয়ের সামনে থেকে গ্রেপ্তার হওয়ার পর থেকে তিনি কারাগারে ছিলেন।</p>
                  <p>শনিবার (২৫ নভেম্বর) বিকেলে গাজীপুরের কাশিমপুর কারাগারে তিনি মৃত্যুবরণ করেন বলে গণমাধ্যমকে জানিয়েছেন বিএনপি চেয়ারপারসনের প্রেস উইং কর্মকর্তা শামসুদ্দিন দিদার।  </p>
                  <p>এই নেতার মৃত্যুর বিষয়টি নিশ্চিত করেছেন বিএনপি জাতীয় নির্বাহী কমিটির সাংগঠনিক সম্পাদক মাহবুবের রহমান শামীম। </p>
                  <p>মৃত গোলাপুর রহমান ছিলেন চট্টগ্রাম মহানগরের চাঁন্দগাও থানার ৫ নম্বর মোহরা ওয়ার্ড বিএনপির সিনিয়র সহ-সভাপতি।</p>
                  <p>বিএনপি চেয়ারপারসনের প্রেস উইং কর্মকর্তা শামসুদ্দিন দিদার জানান, গত ২৮ অক্টোবর ঢাকায় বিএনপির মহাসমাবেশের আগের দিন শুক্রবার (২৭ অক্টোবর), রাজধানীর নয়াপল্টনস্থ বিএনপির কেন্দ্রীয় কার্যালয়ের সামনে থেকে পল্টন থানা পুলিশ গোলাপুর রহমানকে গ্রেপ্তার করে।</p>
                  <b>বাংলাদেশ সময়: ০৮৫৩ ঘণ্টা, নভেম্বর ২৬, ২০২৩</b>
                </div>
                <div className="flex gap-10">
                  <div className="flex flex-col mt-5 ">
                    <b> প্রকাশিত পত্রিকার নাম  </b>
                    <b>সংবাদ প্রকাশের তারিখ </b>
                    <b> পত্রিকার প্রকাশিত লিংক</b>
                  </div>
                  <div className="flex flex-col mt-5 ">
                    <span>: Banlga News 24</span>
                    <span>: নভেম্বর ২৬, ২০২৩</span>
                    <span>: <Link target="_blank" href="https://www.banglanews24.com/politics/news/bd/1231669.details">
                      <button className=" bg-gradient-to-r from-red-600 to-green-600 text-white py-1 text-[10px] px-3  rounded inline-block font-semibold uppercase">
                      লিংক দেখুন
                      </button>
                    </Link>
                    </span>
                  </div>
                </div>
              </div>




            </div>
          </div>
          <div className="xl:col-span-3">
            <div className="murderLeftSide">
              <div className="space-y-3">
                <div className="leftCard">
                  <Typography variant="h6" className="leftCard-text">
                    গুমের তালিকা
                  </Typography>
                  <KeyboardArrowRight className="leftCard-icon" />
                </div>
                <div className="leftCard">
                  <Typography variant="h6" className="leftCard-text">
                    শহীদদের তালিকা
                  </Typography>
                  <KeyboardArrowRight className="leftCard-icon" />
                </div>

                <div className="leftCard">
                  <Typography variant="h6" className="leftCard-text">
                    কারা নির্যাতন
                  </Typography>
                  <KeyboardArrowRight className="leftCard-icon" />
                </div>
                

                <div className="leftCard">
                  <Typography variant="h6" className="leftCard-text">
                  আওয়ামী লীগের নির্যাতন
                  </Typography>
                  <KeyboardArrowRight className="leftCard-icon" />
                </div>
              </div>
            </div>
            {/* <div className="space-y-3 mt-10">
                            <div className="card">
                                <SupportAgent sx={{ fontSize: '70px' }} />
                                <div>
                                    <h3>Manifesto</h3>
                                    <p>Join the campaign</p>

                                </div>
                                <KeyboardArrowRight sx={{ fontSize: '30px' }} />
                            </div>
                            <div className="card">
                                <SupportAgent sx={{ fontSize: '70px' }} />
                                <div>
                                    <h3>Contribute </h3>
                                    <p>Become a volunteer </p>

                                </div>
                                <KeyboardArrowRight sx={{ fontSize: '30px' }} />
                            </div>
                            <div className="card">
                                <SupportAgent sx={{ fontSize: '70px' }} />
                                <div>
                                    <h3>Register to vote </h3>
                                    <p>Join the campaign </p>

                                </div>
                                <KeyboardArrowRight sx={{ fontSize: '30px' }} />
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="partyChiepCard bg-[#2B8444] text-white p-10 rounded-md w-[300px] text-cetner mx-auto flex flex-col justify-center items-center ">
                                <Image src={chief} alt='chief' className='w-[150px] rounded-full h-[150px] object-fill ' />
                                <div className="mt-5">
                                    <h3>Party Chiief Contact</h3>
                                    <div className="my-3">
                                        <p>Call: (+1) 555 234-8765
                                        </p>
                                        <p>Mail: bnp@gmail.com</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="socialIcon  ">
                                            <Facebook sx={{ color: 'black' }} />
                                        </div>
                                        <div className="socialIcon  ">
                                            <Instagram sx={{ color: 'black' }} />
                                        </div>
                                        <div className="socialIcon  ">
                                            <YouTube sx={{ color: 'black' }} />
                                        </div>
                                        <div className="socialIcon  ">
                                            <X sx={{ color: 'black' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default page;
