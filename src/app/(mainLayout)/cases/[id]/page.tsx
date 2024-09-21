/* eslint-disable react/no-unescaped-entities */

import Container from "@/components/shared/Container";
import "../../murdered/Murder.css";
import banner from "../../../../assets/images/mamla/mamla11.jpeg";
import banner2 from "../../../../assets/images/gallery/gallery13.jpeg";
import banner3 from "../../../../assets/images/gallery/gallery10.jpeg";
import Image from "next/image";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Stack,
  Typography,
} from "@mui/material";
import {
  KeyboardArrowRight,
} from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const page = () => {
  return (
    <>
      <div className="bannerWrap">
        <div className="bannerContent">
          <h3 className="text-4xl font-semibold ">মামলা</h3>
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
                  মামলা: ন্যায়বিচারের পথে এক দীর্ঘযাত্রা
                </h2>
                <p className="text-xl mt-3">
                  মামলা হলো ন্যায়বিচার পাওয়ার একটি গুরুত্বপূর্ণ মাধ্যম, যা আইন ও বিচার ব্যবস্থার মাধ্যমে সমাজে সুবিচার প্রতিষ্ঠা করতে সহায়ক। তবে মামলার প্রক্রিয়া প্রায়ই দীর্ঘ এবং জটিল হয়ে থাকে, যেখানে নানা রকম আইনি জটিলতা ও বিলম্ব সাধারণ মানুষের জীবনে প্রভাব ফেলে। অনেক সময় মামলার পেছনে লুকিয়ে থাকে ব্যক্তিগত স্বার্থ, প্রতিশোধ, বা ক্ষমতার দ্বন্দ্ব। মামলার প্রক্রিয়ার প্রতিটি ধাপ, সাক্ষ্যপ্রমাণ থেকে শুরু করে রায়, সবকিছুই নির্ভর করে আইনের সঠিক প্রয়োগ এবং বিচারকের ন্যায়বিচারিক ক্ষমতার উপর। ন্যায়বিচার পেতে হলে সঠিক প্রমাণ, আইনজ্ঞান, এবং ধৈর্যের প্রয়োজন, যা এই দীর্ঘ যাত্রায় প্রয়োজনীয় সহায়ক হতে পারে।
                </p>
              </div>
              <Stack
                direction={{
                  xs: "column",
                  md: "row",
                }}
                gap={{
                  md: 8,
                  xs: 3,
                }}
              >
                <div>
                  <div className="flex items-center">
                    <Checkbox defaultChecked />
                    <b className="text-xl">গুম ও নিখোঁজদের সংখ্যা</b>
                  </div>
                  <div className="flex items-center">
                    <Checkbox defaultChecked />
                    <b className="text-xl">গুম ও নিখোঁজদের সংখ্যা</b>
                  </div>

                  <div className="flex items-center">
                    <Checkbox defaultChecked />
                    <b className="text-xl">রাজনৈতিক বিরোধীদের দমন</b>
                  </div>

                  <div className="flex items-center">
                    <Checkbox defaultChecked />
                    <b className="text-xl">মানবাধিকার লঙ্ঘন</b>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <Checkbox defaultChecked />
                    <b className="text-xl">আইনের শাসনের অভাব</b>
                  </div>

                  <div className="flex items-center">
                    <Checkbox defaultChecked />
                    <b className="text-xl">পরিবারের যন্ত্রণাদায়ক অভিজ্ঞতা</b>
                  </div>

                  <div className="flex items-center">
                    <Checkbox defaultChecked />
                    <b className="text-xl">
                      আন্তর্জাতিক সম্প্রদায়ের প্রতিক্রিয়া
                    </b>
                  </div>
                </div>
              </Stack>
              <div className="md:flex space-y-3 justify-between items-center mt-5 ">
                <Image
                  className="w-[450px] xl:w-[450px]"
                  src={banner2}
                  alt="banner"
                />
                <Image
                  className="w-[450px] xl:w-[450px]"
                  src={banner3}
                  alt="banner"
                />
              </div>
              <div className="mt-10">
                <h3 className="text-2xl md:text-4xl font-bold">
                  আপনার কি কোনো প্রশ্ন আছে?
                </h3>
                <p className="mt-5">
                  আমাদের টিমের টুইলাররা আপনার কার্গো এমন একটি জাহাজে পৌঁছে দেয়
                  যা আপনার চাহিদার জন্য সর্বোত্তম। আপনি আমাদের সাথে বুকিং করলে,
                  বিশ্বের সবচেয়ে বড় ব্র্যান্ডগুলোর মতোই একই নেটওয়ার্ক পাবেন,
                  যা কোনো অতিরিক্ত খরচ ছাড়াই ১৫০ টিরও বেশি দেশে ৩০০+ লোকেশনে
                  বিস্তৃত।
                </p>
              </div>
              <div className="mt-10 ">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <h3>Reasons to Vote for us?</h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    Choosing us means choosing a proven track record of success,
                    visionary leadership, and a community-centered approach.
                    We’re committed to transparency, integrity, and fairness,
                    ensuring that every decision we make is in the best interest
                    of those we serve.
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <h3> What you need to know before caucus?</h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    Before attending a caucus, it's important to be
                    well-prepared and informed. First, know the time, location,
                    and any specific requirements for participation in your
                    precinct. Understanding the key issues, candidates, and
                    their platforms is crucial, as this will guide your
                    decision-making process. It's also beneficial to familiarize
                    yourself with the caucus procedures, including how votes are
                    cast and how delegates are selected.
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <h3> How do I know that I’ve voted?</h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    Here’s a paragraph that explains how someone can know
                    they’ve successfully voted: After you cast your vote, you
                    can confirm that it’s been recorded in several ways. First,
                    many voting systems provide a confirmation screen or receipt
                    indicating that your vote has been submitted. If you’re
                    voting in person, you may also receive a sticker or other
                    acknowledgment
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4-content"
                    id="panel4-header"
                  >
                    <h3> What you need to know before caucus?</h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    Before attending a caucus, it's important to understand the
                    basics to ensure a smooth and effective participation.
                    First, make sure you know the exact time and location of
                    your caucus, as well as any eligibility requirements
                    specific to your precinct. Familiarize yourself with the
                    candidates and key issues, as you'll likely be discussing
                    and debating these during the event. Understanding the
                    caucus process, including how votes are cast
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3">
            <div className="murderLeftSide">
              <div className="space-y-3">
                <div className="leftCard">
                  <Typography variant="h6" className="leftCard-text">
                    গুম
                  </Typography>
                  <KeyboardArrowRight className="leftCard-icon" />
                </div>
                <div className="leftCard">
                  <Typography variant="h6" className="leftCard-text">
                    খুন
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
                    আওয়ামী নির্যাতন
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
