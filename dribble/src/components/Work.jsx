"use client";
import React from "react";
import Workwithuscard from "./WorkCard";
import Image from "next/image";
import ahead10 from "@/images/ahead10.png";
const Work = () => {
  return (
    <div className="bg-[#E6E6FA] flex flex-col mx-20 rounded-2xl px-5 h-(screen+20vh) mt-20">
      <div className="w-full pt-6 px-5 flex items-center justify-between">
        <p className="text-black text-[42px] font-bold" data-aos="fade-right">
          Work with us
        </p>
        <p
          className="hidden sm:block text-[#6a47f8] text-[42px] font-bold pr-20"
          data-aos="fade-left"
        >
          ahead
        </p>
      </div>
      <div className="flex px-5 w-full justify-between">
        <div className="flex flex-col gap-y-0 w-2/5">
          <div className="flex flex-col gap-y-4 bg-white h-[250px] p-6 rounded-2xl mt-10 rounded-b-none ">
            <Image src={ahead10} width={50} height={50} alt="ahead10" />
            <h1 className="text-xl font-bold">About</h1>
            <p>
              At ahead our goal is to make self improvement fun and lasting. We
              know there is a way on how to make it.And thats what ahead is all
              about.
            </p>
          </div>
          <div className="flex flex-col gap-y-4 h-max p-6 rounded-2xl bg-amber-50">
            <h1 className="text-xl font-bold">Product</h1>
            <p>
              At ahead our goal is to make self improvement fun and lasting. We
              know there is a way on how to make it.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-2/5">
          <div className="h-116 mt-10 flex flex-col items-center gap-5 overflow-y-scroll custom-scrollbar ">
            <Workwithuscard />
            <Workwithuscard />
            <Workwithuscard />
            <Workwithuscard />
            <Workwithuscard />
            <Workwithuscard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
