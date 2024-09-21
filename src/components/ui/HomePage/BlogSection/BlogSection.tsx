import Container from "@/components/shared/Container";
import "./BlogSection.css";
import Image from "next/image";
import { Box, Button, Divider } from "@mui/material";
import { East } from "@mui/icons-material";

import international from "../../../../assets/images/international/prison6.png";
import international2 from "../../../../assets/images/international/international.webp";
import international3 from "../../../../assets/images/international/internationl2.webp";
import media from "../../../../assets/images/media/media6.jpeg";
import media2 from "../../../../assets/images/media/media8.jpeg";
import media3 from "../../../../assets/images/media/media7.jpg";
import Link from "next/link";

const BlogSection = () => {

  const buttonStyle = {
    width: { xs: "120px", md: "140px", sm: "140px" },
    height: { md: "40px", xs: "30px" },
    fontSize: { md: "14px", xs: "9px", xl: "16px" },
    borderRadius: "30px",
    background: "#2B8444",
    marginTop: '30px'
  };
  const dividerStyle = {
    width: "150px",
    height: "5px",
    marginTop: "5px",
    background: "linear-gradient(to right, #2B8444, #CB2D2E)",
  };
  const interNaionalData = [
    {
      id: 1,
      title: "মানবাধিকার রক্ষাকর্মীদের ওপর হামলা",
      description: "২০২১ সালের ডিসেম্বরে বাংলাদেশের র‌্যাপিড অ্যাকশন ব্যাটালিয়ন (র‌্যাব) এবং এর কিছু শীর্ষ কমান্ডারের বিরুদ্ধে মার্কিন গ্লোবাল ম্যাগনিটস্কি মানবাধিকার নিষেধাজ্ঞার পরে, বিচারবহির্ভূত হত্যাকাণ্ড এবং বলপূর্বক গুম নাটকীয়ভাবে হ্রাস পেয়েছে,",
      img: international,
    },
    {
      id: 1,
      title: "বাংলাদেশঃ কর্মকর্তারা শত শত “গুম”-এর সাথে সম্পর্কযুক্ত",
      description: "জোরপূর্বক গুমের শিকার মানুষের জন্য দিবসে অধিকার সংশ্লিষ্ট দলগুলো পদক্ষেপ নেওয়ার আহ্বান জানায়",
      img: international2,
    },
    {
      id: 1,
      title: "বাংলাদেশঃ “গুম” বিষয়ক অনুসন্ধানে জাতিসংঘকে সহযোগিতা করার অনুমতি দিন।",
      description: "২০শে আগস্ট, ২০২২ তারিখে বাংলাদেশের ঢাকায় জাতীয় প্রেসক্লাবের সামনে নিরাপত্তা বাহিনীর দ্বারা জোরপূর্বক গুমের শিকার ব্যক্তিদের পক্ষে প্রতিবাদ সমাবেশ চলাকালীন আত্মীয়রা তাদের নিখোঁজ পরিবারের সদস্যদের প্রতিকৃতি ধারণ করেন। © ২০২২ মামুনুর রশীদ/নুর ফটো ভায়া এপি",
      img: international3,
    },
  ];



  const mediaData = [
    {
      id: 1,
      title: "১০ বছরে গুম ১ হাজার ২০৯ জন: বিএনপি",
      description:
        "আওয়ামী লীগের শাসনামলে গত ১০ বছরে ১ হাজার ২০৯ জন গুম হয়েছেন দাবি করে বিএনপি বলছে, কোনো একদিন যথাযথ তদন্তের মাধ্যমে এ ধরনের মানবতাবিরোধী অপরাধের বিচার করা হবে।",
      img: media,
    },
    {
      id: 1,
      title: "গুম হওয়া সাবেক এমপি হিরু, বিএনপি নেতা পারভেজকে ফেরত চায় পরিবার",
      description:
        "২০১৩ সালে গুম হয়েছিলেন কুমিল্লার লাকসামের সাবেক সংসদ সদস্য ও উপজেলা বিএনপির সভাপতি সাইফুল হিরু। দীর্ঘ ১১ বছর অতিবাহিত হলেও তার কোনো খবর পায়নি পরিবার। তিনি বেঁচে আছেন নাকি মারা গেছেন এই তথ্যটুকুও জানেন না তারা।",
      img: media3,
    },
    {
      id: 1,
      title: "‘গুম’ হওয়া ২৫ জনের তালিকা দিলো বিএনপি",
      description:
        "বিএনপির সিনিয়র যুগ্ম মহাসচিব রুহুল কবির রিজভী ‘গুম’ হওয়া দলের ২৫ জন নেতা-কর্মীর নাম প্রকাশ করেছেন।",
      img: media2,
    },

  ];



  const smallBtnStyle = {
    background: "#2B8444",
    color: "#fff",
    borderRadius: "10px",
    marginTop: "5px",
    width: "25px",
    height: "25px",
    padding: "0px",
  };

  return (
    <Container className="mt-14 lg:mt-44">
      <div>
        <div className="bnpBtnStyle">
          <div className=" mb-10 ">
            <h2> আর্ন্তজাতিক সংস্থার রিপোর্ট</h2>
            <Divider sx={dividerStyle} />
          </div>
          <div>
            {/* frontend data */}
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
              {interNaionalData.slice(0, 3).map((blog) => (
                <div key={blog.id} className="blogCard mt-5">
                  <div className="blogImgWrap">
                    <Image
                      src={blog.img}
                      width={1000}
                      height={500}
                      alt="report"
                    />
                  </div>
                  <div className="blogCardContent">
                    {/* <h6 className="text-[#2B8444]">
                      বিচারবহির্ভূত হত্যা ও গুম
                    </h6> */}
                    <h5 className="font-semibold ">
                      {blog.title}
                      {/* মানবাধিকার লঙ্ঘনের বিভিন্ন দিক: */}
                    </h5>
                    <p>
                      {blog.description.slice(0, 100)}
                    </p>
                    <Link href='/international-report/1'>
                      <Button sx={smallBtnStyle}>
                        <span>
                          <East sx={{ fontSize: "15px" }} />
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Button component={Link} href="/international-report" sx={buttonStyle}>
                {" "}
                <span>সবগুলো দেখুন </span>{" "}
              </Button>
            </Box>
          </div>
        </div>

        <div className="bnpBtnStyle sectionMargin ">
          <div className=" mb-10">
            <h2>মিডিয়ায় প্রকাশিত তথ্য </h2>
            <Divider sx={dividerStyle} />
          </div>

          <div>
            {/* Details page data */}
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5">
              {mediaData.slice(0, 3).map((media) => (
                <div key={media.id} className="blogCard mt-5">
                  <div className="w-full blogImgWrap">
                    <Image
                      src={media.img}
                      width={1000}
                      height={500}
                      alt="report"
                    />
                  </div>
                  <div className="blogCardContent">
                    {/* <h6 className="text-[#2B8444]">{media.title}</h6> */}
                    <h5 className="font-semibold ">
                      {media.title}
                    </h5>
                    <p>{media.description.slice(0, 80)}</p>

                    <Link href="/media-info/1">
                      <Button sx={smallBtnStyle}>
                        {" "}
                        <span>
                          <East />
                        </span>{" "}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <Box display="flex" justifyContent="center" alignItems="center" marginTop='20px'>
              <Button component={Link} href="/media-info" sx={buttonStyle}>
                <span>সবগুলো দেখুন </span>{" "}
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlogSection;
