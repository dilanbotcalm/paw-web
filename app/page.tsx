"use client";

import * as React from "react";

import BG from "../assets/bg.png";

import TopLogo from "@/components/TopLogo";
import PawCardHeader from "@/components/PawCardHeader";
import HomeSection1 from "@/components/Homesection1";
import HomeSection2 from "@/components/Homesection2";
import HomeSection3 from "@/components/Homesection3";
import Validators from "@/components/Validator";
import Validator1 from "@/components/Validator1";

type Props = {};

function Home({}: Props) {
  return (
    <div
      style={{
        backgroundImage: `url(${BG.src})`,
        objectFit: "cover",
      }}
      className="flex flex-col items-center bg-cover px-2 py-1 min-h-screen h-auto"
    >
      {/* TopLogo */}
      <TopLogo />

      <div className="max-w-[1200px] w-full px-5  pt-5">
        <div className="bg-[#091E49] md:pb-16 pb-8 flex flex-col justify-center rounded-2xl ">
          {/* header section */}
          <PawCardHeader/>
          <HomeSection1/>
          <Validator1/>
         <div className="flex flex-col 2xl:px-40 xl:px-32 lg:px-24 md:px-16 sm:px-10 px-5 md:pt-16 pt-8 "></div>
        </div>
      </div>
    </div>
  );
}

export default Home;

