"use client";
import { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import Image from "next/image";
import home from "../../public/home.jpg";
import appstore from "../../public/appstore.png";
import StarRating from "./StarRating";
export default function Homepage() {
  let spanItem = useRef(null);
  useEffect(() => {
    TweenMax.to(spanItem, 0.5, {
      opacity: 1,
      color: "yellow",
    });
  }, []);
  return (
    <div className="flex bg-[#E6E6FA] mx-10 rounded-2xl p-5 justify-between h-116 mt-20">
      <div className="flex w-1/2 flex-col p-5 gap-4 justify-center">
        <span className="font-semibold">Ahead app</span>
        <h1 className="font-bold text-6xl">
          Master your life by mastering emotions
        </h1>
        <div className="flex gap-5 items-center ">
          <Image
            src={appstore}
            width={120}
            height={100}
            className="rounded-lg mt-5 items-center"
          ></Image>
          <StarRating />
        </div>
      </div>
      <div className="flex w-2/5">
        <Image
          src={home}
          width={500}
          height={300}
          className="rounded-xl"
        ></Image>
      </div>
    </div>
  );
}
