"use client";
import Image from "next/image";
import ahead7 from "../images/ahead7.png";
import { motion } from "framer-motion";
export default function Homepage() {
  return (
    <div className="flex bg-[#fdf8f0] mx-10 rounded-2xl p-5 justify-center h-116 my-12">
      <div className="flex w-1/2 flex-col p-5 gap-4 justify-center">
        <span className="font-semibold">Built out of frustration</span>
        <h1 className="font-bold text-4xl">Meet the ahead app</h1>
        <div className="flex items-center justify-center w-72 h-56">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 3 }}
              className="flex border-8 border-slate-200 rounded-full w-48 h-48 items-center justify-center bg-white shadow-lg"
            >
              <Image
                src={ahead7}
                alt="ahead7"
                width={100}
                height={100}
              />
            </motion.div>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-center justify-center w-1/2 px-24">
        <p>
          A personalized pocket coach that provides bite-sized, science-driven
          tools to boost emotional intelligence.
        </p>
        <p>
          Think of it as a pocket cheerleader towards a better, more fulfilling.
        </p>
      </div>
    </div>
  );
}
