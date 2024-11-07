"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
const HoverBasedEffect = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.1, 1]);
  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className="mt-16 w-full h-[300px] bg-gradient-to-r from-[#0f0426] via-[#9a2496] to-[#0f0426] rounded-lg text-white overflow-hidden relative transform-gpu perspective-[1000px] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-y-3 hover:rotate-x-3 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-bodyColor/10 z-10 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:translate-x-full" />
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-bodyColor/10 z-10 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-x-full" />
      <div className="relative z-20 p-5 flex flex-col gap-2 items-center justify-center text-center h-full">
        <p className="text-2xl font-bold uppercase">Contact Managemnet</p>
        <p className="opacity-80 text-lg">
          Effortless Contact, Endless Possibilities
        </p>
      </div>
    </motion.div>
  );
};

export default HoverBasedEffect;
