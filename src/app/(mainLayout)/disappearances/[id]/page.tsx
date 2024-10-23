/* eslint-disable react/no-unescaped-entities */

import Container from "@/components/shared/Container";
import "../../murdered/Murder.css";
import banner2 from "../../../../assets/images/gallery/gallery13.jpeg";
import banner3 from "../../../../assets/images/gallery/gallery10.jpeg";
import gum from "../../../../assets/images/gum/gum4.jpeg";
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
          <h3 className="text-4xl font-semibold "> গুমের তালিকা </h3>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 my-20">
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
                    আওয়ামী নির্যাতন
                  </Typography>
                  <KeyboardArrowRight className="leftCard-icon" />
                </div>
              </div>
            </div>

          </div>
          <div className="xl:col-span-9">
            <div className="murderRightSide">
              <div className="imgWrap">
                <Image className="w-full" src={gum} alt="banner" />
              </div>
              <div className="my-10">
                <h2>
                  কুমিল্লার সাবেক এমপি হিরুসহ ২ বিএনপি নেতার গুম হওয়ার ৬ বছর
                </h2>
                <p className="text-xl mt-3">
                  ২০১৩ সালের ২৭ নভেম্বর। এদিন কুমিল্লার লাকসাম উপজেলা বিএনপির তৎকালীন সভাপতি ও সাবেক সংসদ সদস্য মো.সাইফুল ইসলাম হিরুসহ দুই বিএনপি নেতাকে র‌্যাব পরিচয়ে অপহরণের পর গুম করা হয়েছিল বলে অভিযোগ পরিবারের। হিরুর সঙ্গে সেদিন গুমের শিকার হয়েছিলেন হুমায়ুন কবির পারভেজ। পারভেজ লাকসাম পৌরসভা বিএনপির সভাপতি তৎকালীন সভাপতি ছিলেন। আজ বুধবার (২৭ নভেম্বর) ওই দুই বিএনপি নেতার গুমের ৬ বছর পূর্ণ হলো।
                </p>
                <p className="text-xl mt-3">
                  কিন্তু আজও জানা যায়নি তাঁরা জীবিত না মৃত। সাইফুল ইসলাম হিরুর ছেলে রাফসান ইসলাম বলেন, আমার আজও জানি না বাবা বেঁচে আছেন, নাকি তাঁদের খুন করা হয়েছে। এই প্রশ্নের উত্তর জানতে গত ছয়টি বছর পাগলের মতো ঘুরছি। কিন্তু কোন উত্তর আজও পাইনি। যদি শুনতাম উনাদের মেরে ফেলা হয়েছে, তাহলে মনকে বুঝিয়ে তাঁদের রুহের আত্নার শান্তি কামনা করে অন্তত দোয়া করতে পারতাম। আমরা সরকারের কাছে আর কিছু না হোক অন্তত এইটুকু জানতে চাই তাঁরা জীবিত না মৃত।
                </p>
                <p className="text-xl mt-3">
                  খোঁজ নিয়ে জানা গেছে, ওই দুই বিএনপি নেতাকে অপহরণের পর গুমের অভিযোগে র‌্যাব-১১ এর বাধ্যতামূলক অবসরে যাওয়া সাবেক অধিনায়ক (সিইও) লে.কর্ণেল তারেক সাঈদ মোহাম্মদসহ র‌্যাবের ৫ কর্মকর্তার বিরুদ্ধে দায়ের করা মামলাটি গত ৫৫ মাসের (৪ বছর ৭ মাস) বেশি সময় ধরে তদন্ত করছেন পুলিশের অপরাধ তদন্ত বিভাগ (সিআইডি)। ২০১৫ সালের ৩ ফেব্রুয়ারী কুমিল্লার আদালত দ্বিতীয় দফায় মামলাটি সিআইডিকে তদন্ত করে প্রতিবেদন দাখিলের নির্দেশ প্রদান করেন। ওই সময় থেকে বর্তসান সময় পর্যন্ত আদালতের দেওয়া সর্বমোট ৫৮ দফা সময়ের মধ্যেও মামলাটির তদন্ত প্রতিবেদন জমা দিতে পারেননি তদন্ত কর্মকর্তা।
                </p>
                <p className="text-xl mt-3">
                  বাদীপক্ষে এই মামলার প্রধান আইনজীবি অ্যাডভোকেট মুহাম্মদ বদিউল আলম সুজন বলেন, ২০১৫ সালের ৩ ফেব্রুয়ারী আদালত মামলাটি সিআইডিকে তদন্ত করে প্রতিবেদন দাখিলের নির্দেশ প্রদান করেন। কিন্তু এ পর্যন্ত ৫৮ দফা সময় পার হলেও এখনও তদন্ত প্রতিবেদন দাখিল করেননি মামলার বর্তমান তদন্ত কর্মকর্তা। মামলার বাদী মো. গোলাম ফারুক বলেন, লাকসামের সামাজিক ও রাজনৈতিক অঙ্গনে সাইফুল ইসলাম হিরু ও হুমায়ুন কবির পারভেজ জনপ্রিয় মুখ। গত ৬ বছর থেকে তাদের ফিরে আসার প্রতীক্ষার প্রহর গুনছি। কিন্তু আমরা জানিনা তাদের ভাগ্যে কি ঘটেছে। হিরু-হুমায়ুন এর সন্ধান নিশ্চিতে তিনি সকলের সহযোগিতা কামনা করেন।
                </p>
                <p className="text-xl mt-3">
                  এই প্রসঙ্গে জানতে চাইলে মামলাটির তদন্ত কর্মকর্তা, পুশিশের অপধার তদন্ত বিভাগ (সিআইডি) কুমিল্লা জোনের অতিরিক্ত পুলিশ সুপার মো.জামাল উদ্দিন বলেন, মামলার প্রতিবেদন মোটামুটি প্রস্তুত। সহসা আদালতে প্রতিবেদন জমা দিতে পারবো বলে আশা করছি।
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
