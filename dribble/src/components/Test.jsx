"use client";
import React from "react";

const Test = () => {
  return (
    <div className="flex my-20 flex-col items-center justify-center gap-3 w-1/2 m-auto">
      <span className="">We take privacy seriously.</span>
      <h1 className="text-3xl font-bold">Before you get started</h1>
      <p className="text-xl text-center">
        "We won't share your answers with anyone (and won't ever tell you which
        friends said what about you)"
      </p>
      <div>
        <span className="font-semibold">with love, </span>
        <span className="font-semibold font-mono text-2xl">Team Ahead</span>
      </div>
      <button className="bg-black text-white py-3 px-4 mt-2 rounded-full text-sm">Start a test</button>
      <span className="text-sm">Take only 5 minutes</span>
    </div>
  );
};

export default Test;
