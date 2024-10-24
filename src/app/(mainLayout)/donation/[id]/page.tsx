"use client";
import React from "react";
import Banner from "../_components/Banner";
import Container from "@/components/shared/Container";

import Blog from "../_components/Blog";
// import Donate from "../_components/Donate";
import Volunteer from "../_components/Volunteer";
import Search from "../_components/Search";
import Progress from "../_components/Progress";
import CommonBanner from "@/components/shared/CommonBanner/CommonBanner";

const Page = () => {
  return (
    <div className="bg-gray-100">
      <CommonBanner title="Donate Now" />
      <Container>
<h4>test</h4>
        
        


{/*
  <div className="lg:flex md:flex gap-10 py-16">
    <Progress />
    <div className="lg:w-[600px] w-full rounded lg:mt-0 md:mt-0 mt-10">
      <Search />
      <Volunteer />
      {/* <Donate /> */}
      {/* <Blog /> */}
    {/* </div>
  </div> */}




      </Container>
    </div>
  );
};

export default Page;
