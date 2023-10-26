'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Test = () => {
  const teamAheadRef = useRef(null);

  useEffect(() => {
    const element2 = teamAheadRef.current;
    if (element2) {
      gsap.from(element2, {
        opacity: 0,
        scrollTrigger: {
          trigger: element2,
          start: "top 50%",
          // markers: true,
        },
      });

      gsap.to(element2, {
        duration: 0.5,
        opacity: 1,
        scrollTrigger: {
          trigger: element2,
          start: "top 50%",
          ease: "power4.out" 
        },
      });
    }
  }, []);

  return (
    <div className="flex my-20 flex-col items-center justify-center gap-3 w-1/2 m-auto">
      <span className="">
        We take privacy seriously.
      </span>
      <h1 className="text-3xl font-bold">Before you get started</h1>
      <p className="text-xl text-center">
        We wont share your answers with anyone (and wont ever tell you which
        friends said what about you)
      </p>
      <div>
        <span className="font-semibold">with love, </span>
        <span className="font-semibold font-mono text-2xl" ref={teamAheadRef}
        
        >
          Team Ahead
        </span>
      </div>
      <button className="bg-black text-white py-3 px-4 mt-2 rounded-full text-sm">
        Start a test
      </button>
      <span className="text-sm">Take only 5 minutes</span>
    </div>
  );
};

export default Test;
