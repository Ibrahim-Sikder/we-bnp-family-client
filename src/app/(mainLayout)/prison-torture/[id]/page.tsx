import Image from "next/image";
import React from "react";
import banner1 from "../../../../assets/images/banner/banner7.jpg";
import banner2 from "../../../../assets/images/banner/banner6.jpg";
import details from "../../../../assets/images/donation/donation3.jpeg";
import Container from "@/components/shared/Container";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Sidebar from "@/components/ui/HomePage/Sidebar/Sidebar";

const DetailsPage = () => {
  return (
    <>
      <div>
        <div>
          <Image
            src={banner1}
            className="w-full h-[200px] md:h-[350px] lg:h-[400px] xl:h-[400px]"
            alt="this is cover img"
          />
        </div>
        <Container>
          <div className="lg:flex md:flex gap-10 my-16 ">
            <div className="w-full h-full  text-lg ">
              <div className="space-y-8">
                <Image
                  src={banner2}
                  className="h-auto w-full rounded-lg"
                  alt="Cover Image"
                />
                <p className="text-justify">
                  Construction is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen vived not only
                  five centuries, With the rise of technological advances,
                  promotions can be done outside of local contexts and across
                  geographic.
                </p>
                <p className="text-justify">
                  1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with desktopAldus Page Maker
                  including versions of contexts and across geographic.
                  Technological advances, is simply dummy text of the printing
                  and typesetting industry publishing industry coming.
                </p>
                <div className="bg-gray-100 rounded-lg p-8 space-y-2 px-20">
                  <p className="text-justify italic text-xl">
                    <FormatQuoteIcon className="rotate-180" />
                    Construction got modernized so quickly, that’s its now
                    really the time to match up the industrial modernization and
                    upgrade for benefits keep coming this year.
                    <FormatQuoteIcon />
                  </p>
                </div>
                <p className="text-justify">
                  Release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishin Aldus PageMaker
                  including versions of Lorem Ipsum. Facebook, Twitter, and
                  Linkedin is simply dummy text of the printing and typesetting
                  industry publishing industry coming ipsum.
                </p>
                <div className="flex gap-5 my-2">
                  <Image
                    src={details}
                    className="w-[260px] h-[300px] rounded-lg"
                    alt="this is cover img"
                  />
                  <Image
                    src={details}
                    className="w-[260px] h-[300px] rounded-lg"
                    alt="this is cover img"
                  />
                  <Image
                    src={details}
                    className="w-[260px] h-[300px] rounded-lg"
                    alt="this is cover img"
                  />
                </div>
                <p className="text-justify">
                  1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with desktop publishin Aldus
                  PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry’s text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen.
                </p>
              </div>

            </div>
              <Sidebar />
          </div>
        </Container>
      </div>
    </>
  );
};

export default DetailsPage;
