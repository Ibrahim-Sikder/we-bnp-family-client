"use client";
import * as React from "react";
import gallery9 from "../../../assets/images/gallery/gallery.jpg";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";
import Container from "@/components/shared/Container";
import cases from "../../../assets/images/gum/gum.jpg";
import "./Murder.css";
import { AccountCircle, Bookmark, ChatBubble } from "@mui/icons-material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function PhotoGallery() {
  
  const galleryData = [
    {
      id: 1,
      title: "ঘুম খুনের নির্যাতনের শিকার: বাস্তবতার নির্মম চিত্র",
      img: gallery9,
      description:
        "ঘুম খুনের নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন।",
    },
    {
      id: 1,
      title: "ঘুম খুনের নির্যাতনের শিকার: বাস্তবতার নির্মম চিত্র",
      img: gallery9,
      description:
        "ঘুম খুনের নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন।",
    },
    {
      id: 1,
      title: "ঘুম খুনের নির্যাতনের শিকার: বাস্তবতার নির্মম চিত্র",
      img: gallery9,
      description:
        "ঘুম খুনের নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন।",
    },
    {
      id: 1,
      title: "ঘুম খুনের নির্যাতনের শিকার: বাস্তবতার নির্মম চিত্র",
      img: gallery9,
      description:
        "ঘুম খুনের নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন।",
    },
    {
      id: 1,
      title: "ঘুম খুনের নির্যাতনের শিকার: বাস্তবতার নির্মম চিত্র",
      img: gallery9,
      description:
        "ঘুম খুনের নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন।",
    },
    {
      id: 1,
      title: "ঘুম খুনের নির্যাতনের শিকার: বাস্তবতার নির্মম চিত্র",
      img: gallery9,
      description:
        "ঘুম খুনের নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন।",
    },
    {
      id: 1,
      title: "ঘুম খুনের নির্যাতনের শিকার: বাস্তবতার নির্মম চিত্র",
      img: gallery9,
      description:
        "ঘুম খুনের নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন।",
    },
    {
      id: 1,
      title: "ঘুম খুনের নির্যাতনের শিকার: বাস্তবতার নির্মম চিত্র",
      img: gallery9,
      description:
        "ঘুম খুনের নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন।",
    },
    {
      id: 1,
      title: "ঘুম খুনের নির্যাতনের শিকার: বাস্তবতার নির্মম চিত্র",
      img: gallery9,
      description:
        "ঘুম খুনের নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন।",
    },
  ];

  return (
    <>
      <div className="bannerWrap">
        <div className="bannerContent">
          <h3 className="text-4xl font-semibold ">গুম </h3>
        </div>
      </div>
      <Container className="my-10">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 ">
          {galleryData.map((data) => (
            <div key={data.id}>
              <Link href="/missing/1">
                <div className="casesCard">
                  <div className="prisonImgWrap">
                    <Image src={cases} alt="case" width={500} />
                  </div>
                  <div className="caseCardContent">
                    {/* <div className="flex items-center w-full text-sm space-x-2 ">
                      <span>
                        <Bookmark sx={{ fontSize: "15px", color: "red" }} />{" "}
                        POLITICS /{" "}
                      </span>
                      <span>
                        <AccountCircle
                          sx={{ fontSize: "15px", color: "red" }}
                        />{" "}
                        BY ADMIN /{" "}
                      </span>
                      <span>
                        <ChatBubble sx={{ fontSize: "15px", color: "red" }} />{" "}
                        COMMENT{" "}
                      </span>
                    </div> */}
                    <h4 className="my-3">
                      Principle stability in the future with activity
                    </h4>
                    <p>
                      The point of using is that it has a more-or-less normal
                      distribution of letters, as opposed to using making it…
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-5 ">
          <Button className="bg-gradient-to-r from-red-600 to-green-600">
            Load More <ArrowRightAltIcon />
          </Button>
        </div>
      </Container>
    </>
  );
}
