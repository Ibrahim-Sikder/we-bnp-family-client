/* eslint-disable react/no-unescaped-entities */

import Container from "@/components/shared/Container";
import "../Murder.css";
import banner from "../../../../assets/images/gallery/gallery19.png";
import banner2 from "../../../../assets/images/gallery/gallery13.jpeg";
import banner3 from "../../../../assets/images/gallery/gallery10.jpeg";
import chief from "../../../../assets/images/banner/hero2.jpeg";
import Image from "next/image";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  MenuItem,
  MenuList,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  KeyboardArrowRight,
  SupportAgent,
  X,
  YouTube,
} from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const page = () => {
  return (
    <>
      <div className="bannerWrap">
        <div className="bannerContent">
          <h3 className="text-4xl font-semibold ">গুম ও খুন</h3>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 my-20">
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
          <div className="xl:col-span-9">
            <div className="murderRightSide">
              <div className="imgWrap">
                <Image className="w-full" src={banner} alt="banner" />
              </div>
              <div className="my-10">
                <h2>
                  বাংলাদেশে গুম ও হত্যার নির্মম চিত্র: মানবাধিকার লঙ্ঘন ও
                  রাজনৈতিক নির্যাতন
                </h2>
                <p className="text-xl mt-3">
                  বাংলাদেশের সাম্প্রতিক ইতিহাসে গুম ও হত্যার ঘটনা গভীর উদ্বেগের
                  কারণ। রাজনৈতিক বিরোধীদের দমন করতে গুমের কৌশল ব্যবহার করা হয়।
                  এসব ঘটনায় অনেকেই নিখোঁজ হয়েছেন, যাদের অধিকাংশের কোন হদিস
                  মেলেনি। অনেক ক্ষেত্রে গুমের শিকার ব্যক্তিরা পরবর্তীতে মৃত
                  অবস্থায় পাওয়া গেছে। এ ধরনের নিষ্ঠুরতা মানবাধিকারের চরম লঙ্ঘন
                  এবং রাষ্ট্রীয় অব্যবস্থাপনার উদাহরণ হিসেবে দেখা হয়। গুম ও
                  হত্যার এই ভয়াবহ চিত্র আমাদের সামাজিক ও রাজনৈতিক বাস্তবতার
                  প্রতিফলন। অপরাধীদের আইনের আওতায় আনতে কার্যকর পদক্ষেপ নেওয়া
                  জরুরি।
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
                <h3 className="text-4xl font-bold">
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
        </div>
      </Container>
    </>
  );
};

export default page;
