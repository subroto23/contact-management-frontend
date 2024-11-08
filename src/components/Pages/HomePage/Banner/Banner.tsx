"use client";
import {
  backgroundImage,
  blurColorAnimate,
  characterAnimationChildren,
  characterAnimationParient,
  textAnimateChild,
  textAnimateParient,
} from "@/animate/banner.animate";
import pattern from "@/assets/images/Pattern.png";
import manPhoto from "@/assets/images/manPhoto.png";
import { delay, motion, stagger, useAnimate, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const Banner = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const text = "Way";

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
            variants={textAnimateChild}
            className="py-6 px-10 col-span-2"
          >
            {/* Animate Text Effect */}
            <div className="relative h-full overflow-hidden">
              {/* Heading text with staggered color wave animation */}
              <motion.div
                variants={characterAnimationParient}
                initial="hidden"
                animate="visible"
                className="flex space-x-1 text-4xl font-bold"
              >
                <span className="first-hedding">Your </span>
                {text.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={characterAnimationChildren}
                    className="first-hedding"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            <span className=" effect-text">Your Network</span>
            <p className="md:text-2xl text-sm md:mt-5 mt-2 md:max-w-xl">
              Effortlessly manage your contacts with a powerful tool designed to
              organize, streamline, and simplify all in one place, customized
              for you
            </p>
            <div className="my-9 relative z-10">
              <Link href="/add-contact">
                <button className="gredient-button uppercase">
                  New Contact
                </button>
              </Link>
            </div>
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
