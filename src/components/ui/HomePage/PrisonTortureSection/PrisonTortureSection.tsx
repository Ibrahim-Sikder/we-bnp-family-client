import Container from "@/components/shared/Container";
import "./PrisonTortureSection.css";
import Image from "next/image";
import victime from "../../../../assets/images/victime/karagar.jpeg";
import { Button } from "@mui/material";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Link from "next/link";

const PrisonTortureSection = () => {
  const buttonStyle = {
    width: { xs: "100px", md: "150px", sm: "140px", xl: "150px" },
    height: { md: "40px", xs: "35px", xl: "40px" },
    fontSize: { md: "16px", xs: "9px", xl: "16px" },
    borderRadius: "30px",
    background: "#2B8444",
  };

  return (
    <Container className="sectionMargin">
      <div className="w-[200px] relative -left-[260px]">
        <SectionTitle title="কারাগারে  নির্যাতন" subtitle="" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14  place-items-center ">
        <div className="space-y-2 order-3 lg:order-2">
          <h2>কারাগারে নির্যাতনের শিকার: বাস্তবতার নির্মম চিত্র</h2>
          <p className="text-justify">
            কারাগারে নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না।
            এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার
            সম্মুখীন হন। বন্দিদের উপর অত্যাচার চালানো হয় তাদের দমন করার জন্য,
            এবং অনেক ক্ষেত্রেই তাদের অধিকার লঙ্ঘন করা হয়। এসব অত্যাচারের ফলে
            ...
            <Link href={"/"} className="text-blue-500">
              বিস্তারিত দেখুন
            </Link>
          </p>
          <div className="flex items-center gap-3 bnpBtnStyle">
            <Button component={Link} href="/prison-torture" sx={buttonStyle}>
              <span> ‍সবগুলো দেখুন </span>
            </Button>
          </div>
        </div>
        <div className="order-2 lg:order-3">
          <Image
            className="rounded-md"
            src={victime}
            alt="victime"
            width={500}
            height={500}
          />
        </div>
      </div>
    </Container>
  );
};

export default PrisonTortureSection;
