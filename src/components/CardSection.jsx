"use client";
import Card from "./Card";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import ahead3 from "../images/ahead3.png"
gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    emoji: "&#128577;",
    bgColor: "#9a82fa",
    title: "Card 1",
    description: "This is the description for Card 1",
  },
  {
    emoji: "&#128544;",
    bgColor: "#fefbec",
    title: "Card 2",
    description: "This is the description for Card 2",
  },
  {
    emoji: "&#128577;",
    bgColor: "#ffefd6",
    title: "Card 3",
    description: "This is the description for Card 3",
  },
  {
    emoji: "&#128522;",
    bgColor: "#f1f8f7",
    title: "Card 4",
    description: "This is the description for Card 4",
  },
  {
    emoji: "&#128577;",
    bgColor: "#ff9370",
    title: "Card 5",
    description: "This is the description for Card 5",
  },
  {
    emoji: "&#128577;",
    bgColor: "#9a82fa",
    title: "Card 6",
    description: "This is the description for Card 6",
  },
];

const CardSection = () => {
  const pRef = useRef(null);
  const ppRef = useRef(null);
  useEffect(() => {
    const element = pRef.current;
    const element2 = ppRef.current;
    if (element) {
      gsap.from(element, {
        x: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: element,
          start: "top 50%",
          // markers: true,
        },
      });

      gsap.to(element, {
        x: 0, // Move from the left
        duration: 0.5, // Animation duration in seconds
        opacity: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 50%",
          // markers: true,
        },
      });
    }
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
    <div className="flex flex-col mx-10 mt-10 h-96">
      <div className="flex mx-5 gap-10">
        <p
          ref={pRef}
          className="font-bold text-[42px] font-[Poppins,sans-serif]"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-out-back"
        >
          Does this sound familiar...
        </p>
        <Image
        ref={ppRef}
        src = {ahead3}
        alt = "ahead3"
        width = {50}
        style={{transform: `rotate(${345}deg)`}}
        data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-out-back"
        />
      </div>
      <div className="py-5">
        <div
          className="h-60 flex items-center gap-6 overflow-x-scroll overflow-hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {cardData.map((card, index) => (
            <Card
              key={index}
              emoji={card.emoji}
              bgColor={card.bgColor}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
