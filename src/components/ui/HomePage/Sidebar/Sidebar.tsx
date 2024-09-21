import { TextField } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import blog from "../../../../../src/assets/images/victime/victime.png";
import flood4 from "../../../../assets/images/flood/flood10.jpeg";
import flood5 from "../../../../assets/images/flood/flood11.jpeg";
import flood6 from "../../../../assets/images/flood/flood12.jpeg";
import flood7 from "../../../../assets/images/flood/flood15.jpeg";


const newsData = [
  {
    id: 1,
    description:
      "ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল",
    img: flood4
  },
  {
    id: 1,
    description:
      "ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল",
    img: flood5
  },
  {
    id: 1,
    description:
      "ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল",
    img: flood6
  },
  {
    id: 1,
    description:
      "ফেনীতে বন্যাদুর্গত মানুষের পাশে দাঁড়িয়েছে ‘আমরা বিএনপি পরিবার’ সেল",
    img: flood7
  },
];

const Sidebar = () => {
  return (
    <>
      <div className=" lg:mt-0 md:mt-0 mt-5">
        <div className="mb-10">
          <TextField
            id="outlined-basic"
            label="Search Here"
            variant="outlined"
            fullWidth
            size="small"
          />
        </div>



        <h3>ক্যাটাগরি</h3>
        <hr className="w-16 h-1 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />

        <div>
          <div className="flex justify-between my-3">
            <button className="font-medium">গুম</button>{" "}
            <span className="block font-medium">(3)</span>
          </div>

          <hr />
          <div className="flex justify-between my-3">
            <button className="font-medium">খুন</button>{" "}
            <span className="block font-medium">(3)</span>
          </div>
          <hr />
          
          <hr />
          <div className="flex justify-between my-3">
            <button className="font-medium">আওয়ামী নির্যাতন</button>{" "}
            <span className="block font-medium">(3)</span>
          </div>
          <hr />
          <div className="flex justify-between my-3">
            <button className="font-medium">কারাগারে নির্যাতন</button>{" "}
            <span className="block font-medium">(3)</span>
          </div>
        </div>
        {/* Recent Posts */}
        <div className="mt-16">
          <h3>সাম্প্রতিক পোস্ট</h3>
          <hr className="w-32 h-1 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
          <div className="flex flex-col gap-8 mt-5">
            {newsData?.map((data) => (
              <div key={data.id} className="flex gap-2">
                <div className="recentBlogImgwrap">
                  <div className="recentBlogImgwrap">
                    <Image
                      src={data.img}
                      alt="this is img"
                      className='rounded-full w-[150px] lg:w-[90px] h-[60px] lg:h-[56px]'
                    />
                  </div>
                </div>
                <p>
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>



      </div>
    </>
  );
};

export default Sidebar;