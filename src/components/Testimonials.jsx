'use client'
import React from "react";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
gsap.registerPlugin(ScrollTrigger);

const JobItem = ({ title, details }) => (
  <div className="flex flex-col gap-3 p-5 bg-[#fefbec] rounded-[16px] transition-all hover:bg-[#ffefd6] group" data-aos="flip-down">
    <h4 className="font-medium">{title}</h4>
    {details.map((detail, index) => (
      <li className="text-xs" key={index}>
        {detail}
      </li>
    ))}
    <button className="w-max text-sm py-3 px-5 rounded-[1.25rem] bg-black text-white cursor-pointer sm:hidden group-hover:block">
      See details
    </button>
  </div>
);

const Testimonials = () => {
  const jobs = [
    {
      title: "Senior Full-stack Engineer",
      details: ["Full-time position", "Berlin or remote", "CTC 12LPA 0.5-1% equity share options"],
    },
    {
      title: "Senior Designer",
      details: ["Full-time position", "Berlin or remote", "CTC 12LPA 0.5-1% equity share options"],
    },
    {
      title: "Software Intern",
      details: ["Full-time position", "Berlin or remote", "CTC 12LPA 0.5-1% equity share options"],
    },
  ];
  const elementRef = useRef(null);

  useEffect(() => {
    AOS.init();
    gsap.to(elementRef.current, {
      x: 100,
      opacity: 1,
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: true,
        // markers: true,
      },
      ease: 'power2.out',
    });
  }, []);
  return (
    <div className="mx-20 mt-10 sm:p-6 h-max md:h-[400px]">
      <div className="pb-12">
      <h1
        className="text-4xl font-bold"
        ref={elementRef}
        data-aos="zoom-out-right"
        style={{ x: -100, opacity: 0 }}
      >
        Open vacancies
      </h1>
    </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start justify-between">
        {jobs.map((job, index) => (
          <JobItem key={index} title={job.title} details={job.details} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
