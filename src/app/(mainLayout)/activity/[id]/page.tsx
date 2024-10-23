import Image from "next/image";
import React from "react";

import Container from "@/components/shared/Container";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ShareLink from "@/components/ShareLink/ShareLink";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";

interface victimId {
  params: {
    id: string;
  };
}


const DetailsPage = async ({ params }: victimId) => {
  const { id } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/activity/${id}`
  );
  const data = await res.json();

  const singleData = data?.data

  if (!data) {
    return {
      title: "Data not found",
      description: "The requested blog was not found.",
    };
  }

  const renderContent = (content: string) => {
    const parsedContent = ReactHtmlParser(content);

    return parsedContent.map((element, index) => {
      if (element.type === "h1") {
        return (
          <h1 key={index} className="text-2xl font-bold mb-2 ">
            {element.props.children}
          </h1>
        );
      } else if (element.type === "h2") {
        return (
          <h2 key={index} className="text-xl font-bold mb-2 ">
            {element.props.children}
          </h2>
        );
      } else if (element.type === "h3") {
        return (
          <h3 key={index} className="text-xl font-bold mb-2 ">
            {element.props.children}
          </h3>
        );
      } else if (element.type === "p") {
        return (
          <p key={index} className="mb-2">
            {element.props.children}
          </p>
        );
      }

      // else if (element.type === "img") {
      //   return (
      //     <img
      //       key={index}
      //       className="w-full h-auto object-cover mb-4 hidden "
      //       src={element.props.src}
      //       alt="Blog Image"
      //     />
      //   );
      // }
      else if (
        element.type === "div" &&
        element.props.className === "ql-align-center"
      ) {
        return (
          <div key={index} className="text-center mb-2">
            {element.props.children}
          </div>
        );
      } else if (
        element.type === "div" &&
        element.props.className === "ql-align-right"
      ) {
        return (
          <div key={index} className="text-right mb-2">
            {element.props.children}
          </div>
        );
      } else if (
        element.type === "div" &&
        element.props.className === "ql-align-left"
      ) {
        return (
          <div key={index} className="text-left mb-2">
            {element.props.children}
          </div>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div>
        <div className="bannerWrap">
          <div className="bannerContent">
            <h3 className="text-xl w-full  md:text-4xl font-semibold ">
              {singleData?.bangla_title}
            </h3>
          </div>
        </div>
        <Container>
          <div className=" grid grid-cols-12 gap-10 my-20">
            <div className="xl:col-span-9">
              <div className=" h-full  text-lg ">
                <div className="space-y-4 md:space-y-4 lg:space-y-8 xl:space-y-8">
                  {/* <Image
                    width={500}
                    height={500}
                    src={data.data.img_bangla}
                    className="h-[400px] object-contain w-full rounded-lg"
                    alt="Cover Image"
                  /> */}


                  {singleData?.bng_Images?.slice(0, 1)?.map((img: any) => {

                    return <Image

                      width={500}
                      height={500}
                      src={img}
                      className="h-[400px] object-contain w-full rounded-lg"
                      alt="Cover Image"
                      layout="responsive" key={img} />
                  })}

                  <h3>{singleData?.bangla_title}</h3>
                  <div className="text-justify">
                    {renderContent(singleData?.bangla_description)}
                  </div>

                  <div className="bg-gray-100 rounded-lg p-4 md:p-6 lg:p-8 xl:p-8 space-y-2 lg:px-20 xl:px-20">
                    <p className="text-justify italic text-xl">
                      <FormatQuoteIcon className="rotate-180" />
                      ত্রাণসামগ্রীর মধ্যে ছিল- চিড়া, গুড়, চাল, আলু, স্যালাইন,
                      নাপা/প্যারাসিটামল, শিশু পোশাক, বড়দের জন্য শাড়ি, লুঙ্গি,
                      গামছা, মোমবাতি, লাইটার, টর্চলাইট প্রভৃতি।
                      <FormatQuoteIcon />
                    </p>
                  </div>

                  <div className="lg:flex xl:flex lg:gap-5 xl:gap-5 my-2 space-y-4 md:space-y-0 lg:space-y-0 xl:space-y-0 ">



                    {singleData?.bng_Images?.slice(1, 4)?.map((img: any) => {

                      return <Image

                        width={500}
                        height={500}
                        src={img}
                        className="lg:w-[260px] h-[300px] object-cover rounded-lg"
                        alt="this is cover img" key={img} />
                    })}

                  </div>
                  <div className="text-justify">{renderContent(singleData?.bangla_description)}</div>

                  {/* <PublishInfo name={singleData?.name_published_newspaper} time={singleData?.news_release_date} link={singleData?.Link_published_newspaper} /> */}
                </div>

                <ShareLink />
              </div>
            </div>

            <div className="xl:col-span-3">
              <div>
                <div className="flex justify-between my-3">
                  <button className="font-medium">গুমের তালিকা</button>{" "}
                  <span className="block font-medium">(3)</span>
                </div>

                <hr />
                <div className="flex justify-between my-3">
                  <button className="font-medium">শহীদদের তালিকা </button>{" "}
                  <span className="block font-medium">(3)</span>
                </div>
                <hr />

                <hr />
                <div className="flex justify-between my-3">
                  <button className="font-medium">আওয়ামী লীগের নির্যাতন</button>{" "}
                  <span className="block font-medium">(3)</span>
                </div>
                <hr />
                <div className="flex justify-between my-3">
                  <button className="font-medium">কারাগারে নির্যাতন</button>{" "}
                  <span className="block font-medium">(3)</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default DetailsPage;
