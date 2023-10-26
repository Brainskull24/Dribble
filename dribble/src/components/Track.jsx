"use client";
import React, { useEffect, useRef } from "react";
import SIpoint from "./Sipoint.jsx";
import Image from "next/image";
import ahead8 from "../images/ahead8.png";
import gsap from "gsap";
const Track = () => {
  const ppRef = useRef(null);
  useEffect(() => {
    const element2 = ppRef.current;
    if (element2) {
      gsap.from(element2, {
        x: 300,
        opacity: 0,
        scrollTrigger: {
          trigger: element2,
          start: "top 50%",
          // markers: true,
        },
      });

      gsap.to(element2, {
        x: 50, // Move from the left
        duration: 0.5, // Animation duration in seconds
        opacity: 1,
        scrollTrigger: {
          trigger: element2,
          start: "top 50%",
          // markers: true,
        },
      });
    }
  }, []);
  return (
    <div className="my-[75px] w-full rounded-[25px]">
      <div className="flex w-full py-3 px-[8%] gap-10">
        <div>
          <p data-aos="fade-left">
            Wrong with self-improvement & how we're fixing it.
          </p>
          <p className="text-4xl font-bold pt-3" data-aos="fade-left">
            Self-improvement. Ugh.
          </p>
        </div>
        <Image
          ref={ppRef}
          src={ahead8}
          width={60}
          height={40}
          style={{ transform: `rotate(${15}deg)` }}
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-out-back"
        />
      </div>
      <div className="px-72 flex flex-col gap-10 h-[500px] overflow-y-auto mt-5 relative ">
        <div className="max-w-[40rem] relative align-top">
          <div className="absolute left-[-12%] top-1/2 transform -translate-y-1/2 ">
            🟣
          </div>
          <SIpoint
            title="It is not as easy as 1-2-3."
            text="The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)."
          />
        </div>
        <div className="max-w-[40rem] relative align-top">
          <div className="absolute left-[-12%] top-1/2 transform -translate-y-1/2">
            🟣
          </div>
          <SIpoint
            title="It is not as easy as 1-2-3."
            text="The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)."
          />
        </div>
        <div className="max-w-[40rem] relative align-top">
          <div className="absolute left-[-12%] top-1/2 transform -translate-y-1/2">
            🟣
          </div>
          <SIpoint
            title="It is not as easy as 1-2-3."
            text="The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)."
          />
        </div>
        <div className="max-w-[40rem] relative align-top">
          <div className="absolute left-[-12%] top-1/2 transform -translate-y-1/2">
            🟣
          </div>
          <SIpoint
            title="It is not as easy as 1-2-3."
            text="The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)."
          />
        </div>
        <div className="max-w-[40rem] relative align-top">
          <div className="absolute left-[-12%] top-1/2 transform -translate-y-1/2">
            🟣
          </div>
          <SIpoint
            title="It is not as easy as 1-2-3."
            text="The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)."
          />
        </div>
        <div className="max-w-[40rem] relative align-top">
          <div className="absolute left-[-12%] top-1/2 transform -translate-y-1/2">
            🟣
          </div>
          <SIpoint
            title="It is not as easy as 1-2-3."
            text="The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)."
          />
        </div>
        <div className="max-w-[40rem] relative align-top">
          <div className="absolute left-[-12%] top-1/2 transform -translate-y-1/2">
            🟣
          </div>
          <SIpoint
            title="It is not as easy as 1-2-3."
            text="The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)."
          />
        </div>
      </div>
    </div>
  );
};

export default Track;
