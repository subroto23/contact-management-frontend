"use client";
import { subscribeAnimate } from "@/animate/Subscribe.animate";
import GredentBorder from "@/components/ui/GredientBorder/GredientBorder";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SubscribeNewsLetter = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <>
      <motion.div
        ref={ref}
        variants={subscribeAnimate}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="md:p-10 mx-1 mt-16"
      >
        <GredentBorder
          gradintDirection={"bg-gradient-to-l"}
          className="md:p-16 p-2 md:py-16 py-8 bg-bodyColor"
        >
          <div className="md:space-y-6 space-y-2">
            <h1 className="md:text-4xl md-range:text-3xl text-base text-center uppercase font-semibold font-josefin">
              Subscribe to our newsLetter
            </h1>
            <p className="font-josefin md:text-xl text-xs mx-auto text-center md:my-3 w-56 lg:w-[440px] md-range:w-96">
              Join our newsletter, so that we reach out to you with our best
              news and offers.
            </p>

            {/* Group Button */}
            <div className="rounded-full bg-white shadow flex w-full bg-gradient-to-l from-primaryColor to-secondaryColor md:p-2 p-1">
              <input
                type="email"
                className="w-full rounded-tl-full rounded-bl-full md:py-3 py-1 px-4 text-black font-bold text-2xl"
              />
              <button className="rounded-tr-full rounded-br-full md:py-3 py-1 md:px-12 px-3 bg-primaryColor hover:bg-secondaryColor hover:text-bodyColor">
                <p className="font-semibold md:text-base text-xs hover:transition-all">
                  Subscribe
                </p>
              </button>
            </div>
          </div>
        </GredentBorder>
      </motion.div>
    </>
  );
};

export default SubscribeNewsLetter;
