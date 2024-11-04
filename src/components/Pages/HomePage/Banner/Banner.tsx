"use client";
import {
  backgroundImage,
  blurColorAnimate,
  textAnimateChild,
  textAnimateParient,
} from "@/animate/banner.animate";
import pattern from "@/assets/images/Pattern.png";
import manPhoto from "@/assets/images/manPhoto.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Banner = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  return (
    <>
      <div ref={ref} className="relative h-full overflow-hidden">
        {/* Background  */}
        <div>
          <motion.div
            variants={backgroundImage}
            initial="hidden"
            animate={inView ? "animate" : "hidden"}
            className="banner-blur-container"
          ></motion.div>
          {/* Background overlay top*/}
          <div className="banner-overlay-container"></div>
          <div className="absolute inset-0">
            <div className="bg-white backdrop-blur-3xl opacity-5 w-full"></div>
          </div>
        </div>
        {/* Background Image */}
        <motion.div
          variants={blurColorAnimate}
          initial="hidden"
          animate="visible"
          className="pattern-image"
          style={{ backgroundImage: `url(${pattern.src})` }}
        ></motion.div>
        <motion.div
          variants={textAnimateParient}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="md:py-16 "
        >
          {/*Left Content */}
          <motion.div
            variants={textAnimateParient}
            className="py-6 px-10 col-span-2"
          >
            <motion.h1 variants={textAnimateChild} className="first-hedding">
              Your Way
            </motion.h1>
            <motion.span variants={textAnimateChild} className=" effect-text">
              Your Network
            </motion.span>
            <motion.p
              variants={textAnimateChild}
              className="md:text-2xl text-sm md:mt-5 mt-2 md:max-w-xl"
            >
              Effortlessly manage your contacts with a powerful tool designed to
              organize, streamline, and simplify all in one place, customized
              for you
            </motion.p>

            <motion.div
              variants={textAnimateChild}
              className="my-9 relative z-10"
            >
              <button className="gredient-button">See more</button>
            </motion.div>
          </motion.div>
        </motion.div>
        {/*RightContent */}
        <motion.div
          variants={backgroundImage}
          initial="hidden"
          animate="animate"
          className="right-side-image"
          style={{ backgroundImage: `url(${manPhoto.src})` }}
        ></motion.div>
      </div>
    </>
  );
};

export default Banner;
