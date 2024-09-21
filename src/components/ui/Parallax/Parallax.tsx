import React from "react";
import Image from "next/image";
import icon1 from "../../../../src/assets/images/icon/balance.png";
import icon2 from "../../../../src/assets/images/icon/humanitarian.png";
import icon3 from "../../../../src/assets/images/icon/training.png";
import bg from "../../../../src/assets/images/banner/bg-banner.jpg";
import Container from "@/components/shared/Container";
import "./Parallax.css";

const Parallax = () => {
  return (
    <div className="text-white my-16 lg:py-36 py-10 bg-cover bg-fixed bg-center bgImage">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-10">
          {/* Left Section */}
          <div className="space-y-7">
            <h1 className="lg:text-4xl text-3xl font-bold">
              আমাদের তথ্য পাঠানোর মাধ্যম ।
            </h1>
            <div className="w-36 h-1 bg-gradient-to-r from-red-600 to-green-600 my-4 rounded-full"></div>
            <p className="text-justify text-lg">
              আপনার ও আপনার পাশের নির্যাতিত তথ্য চিত্র, ভিডিও ডকুমেন্টস পাঠান
              আমাদেরকে । যেন আমরা সহজেই আমাদের ভাইদের পাশে দাঁড়াতে পারি ।
            </p>
            <button className="bg-gradient-to-r from-red-600 to-green-600 text-white py-3 px-8 rounded inline-block font-medium text-xl w-full md:w-auto">
              তথ্য পাঠান
            </button>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:gap-10 gap-5">
            <div className="bg-gradient-to-r from-red-600 to-green-600 flex justify-center py-5 rounded items-center">
              <div>
                <h1 className="text-center lg:text-4xl text-3xl font-bold text-white">
                  600+
                </h1>
                <h3 className="text-white font-medium text-center">গুম</h3>
              </div>
            </div>
            <div className="bg-gradient-to-r from-red-600 to-green-600 flex justify-center py-5 rounded items-center">
              <div>
                <h1 className="text-center lg:text-4xl text-3xl font-bold text-white">
                  1000+
                </h1>
                <h3 className="text-white font-medium text-center">খুন</h3>
              </div>
            </div>
            <div className="bg-gradient-to-r from-red-600 to-green-600 flex justify-center py-5 rounded items-center">
              <div>
                <h1 className="text-center lg:text-4xl text-3xl font-bold text-white">
                  150k+
                </h1>
                <h3 className="text-white font-medium text-center">মামলা</h3>
              </div>
            </div>
            <div className="bg-gradient-to-r from-red-600 to-green-600 flex justify-center py-5 rounded items-center">
              <div>
                <h1 className="text-center lg:text-4xl text-3xl font-bold text-white">
                  10M+
                </h1>
                <h3 className="text-white font-medium text-center">আসামি</h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Parallax;
