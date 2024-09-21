"use client";
import React from "react";
import { useParams } from "next/navigation";

// Images
import img1 from "../../../../../src/assets/images/donation/donation1.jpg";
import img2 from "../../../../../src/assets/images/donation/donation2.jpg";
import img3 from "../../../../../src/assets/images/donation/donation3.jpg";
import img4 from "../../../../../src/assets/images/donation/donation4.jpg";
import img5 from "../../../../../src/assets/images/donation/donation5.jpg";
import img6 from "../../../../../src/assets/images/donation/donation6.jpg";

const Donate = () => {
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
  const { id } = useParams();
  const donate = donation.find((data) => data.id === Number(id));
  if (!donate) {
    return <div>Post not found</div>;
  }
  const progress = (donate.raised / donate.goal) * 100;
  return (
    <div className="bg-white p-5 mt-10 rounded">
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
        <div className="flex gap-5">
          <p className="font-medium">
            Goal : <span className="text-red-600">${donate.goal}</span>
          </p>
          <p className="font-medium">Of</p>
          <p className="font-medium">
            Raised : <span className="text-red-600">${donate.raised}</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        <button className="bg-gradient-to-r from-red-600 to-green-600 py-5 rounded text-white font-medium text-lg">
          $10
        </button>
        <button className="bg-gradient-to-r from-red-600 to-green-600 py-5 rounded text-white font-medium text-lg">
          $25
        </button>
        <button className="bg-gradient-to-r from-red-600 to-green-600 py-5 rounded text-white font-medium text-lg">
          $50
        </button>
        <button className="bg-gradient-to-r from-red-600 to-green-600 py-5 rounded text-white font-medium text-lg">
          $100
        </button>
        <button className="bg-gradient-to-r from-red-600 to-green-600 py-5 rounded text-white font-medium text-lg">
          $250
        </button>
        <button className="bg-gradient-to-r from-red-600 to-green-600 py-5 rounded text-white font-medium text-lg">
          Custom Amount
        </button>
      </div>
    </div>
  );
};

export default Donate;
