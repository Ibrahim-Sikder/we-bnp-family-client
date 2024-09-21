"use client";
import Container from "@/components/shared/Container";
import React from "react";
import Banner from "./_components/Banner";
import Image from "next/image";

// Images
import img1 from "../../../../src/assets/images/donation/donation1.jpg";
import img2 from "../../../../src/assets/images/donation/donation2.jpg";
import img3 from "../../../../src/assets/images/donation/donation3.jpg";
import img4 from "../../../../src/assets/images/donation/donation4.jpg";
import img5 from "../../../../src/assets/images/donation/donation5.jpg";
import img6 from "../../../../src/assets/images/donation/donation6.jpg";
import Link from "next/link";

const page = () => {
  const donation = [
    {
      id: 1,
      img: img1,
      title: "Help Candidate’s Campaign",
      goal: 1000,
      raised: 500,
    },
    {
      id: 2,
      img: img2,
      title: "Can you Help Fight Poverty",
      goal: 1000,
      raised: 150,
    },
    {
      id: 3,
      img: img3,
      title: "Urgent Help of Volunteering",
      goal: 50000,
      raised: 20510,
    },
    {
      id: 4,
      img: img4,
      title: "$1M Donations for Medical Aid",
      goal: 1000,
      raised: 800,
    },
    {
      id: 5,
      img: img5,
      title: "Study gift for make good life",
      goal: 5000,
      raised: 3000,
    },
    {
      id: 6,
      img: img6,
      title: "Help Children Find Their Smiles",
      goal: 1000,
      raised: 0,
    },
  ];

  return (
    <div className="bg-gray-50">
      <Banner />
      <Container>
        <div className="py-16">
          <div className="text-center mb-16">
            <p className="text-sm text-red-600 font-medium">
              {" "}
              ---A help to those who need it---
            </p>
            <h1 className="text-5xl font-bold">
              Each donation is an essential help which <br /> improves
              everyone&apos;s life
            </h1>
            <hr className="w-32 mx-auto mt-3 h-1 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {donation.map((data) => {
              const progress = (data.raised / data.goal) * 100;
              return (
                <div key={data.id}>
                  <Link href={`/donation/${data.id}`}>
                    <div className="bg-white p-5 shadow-md rounded cursor-pointer">
                      <div className="relative overflow-hidden">
                        <Image
                          src={data.img}
                          alt=""
                          className="w-full object-cover rounded transition-transform duration-300 ease-in-out transform hover:scale-110"
                        />
                      </div>
                      <h3 className="mt-4 font-semibold text-lg">
                        {data.title}
                      </h3>
                      <div className="relative pt-1 mt-2">
                        <div className="flex mb-2 items-center justify-between">
                          <div className="text-right">
                            <span className="text-xs font-semibold inline-block text-green-500">
                              {progress.toFixed(2)}%
                            </span>
                          </div>
                        </div>
                        <div className="overflow-hidden h-3 mb-4 text-xs flex rounded-full bg-gray-200">
                          <div
                            style={{ width: `${progress}%` }}
                            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                              progress >= 50
                                ? "bg-green-600 rounded-full"
                                : "bg-red-600 rounded-full"
                            }`}
                          ></div>
                        </div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <div>
                          <p>Goal:</p>
                          <p className="text-red-600">${data.goal}</p>
                        </div>
                        <div>
                          <p>Raised:</p>
                          <p className="text-red-600">${data.raised}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
