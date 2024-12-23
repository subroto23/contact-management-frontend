"use client";
import {
  hexagonalAnimateChild,
  hexagonalAnimateParient,
} from "@/animate/hexagonal.animate";
import Hexagonal from "@/components/ui/Hexagonal/Hexagonal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CrudOperationUi = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      variants={hexagonalAnimateParient}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 md:p-5 mt-8"
    >
      <motion.div variants={hexagonalAnimateChild}>
        <Hexagonal number={1} text={"Create"} />
      </motion.div>

      <motion.div variants={hexagonalAnimateChild}>
        <Hexagonal number={2} text={"Read"} />
      </motion.div>

      <motion.div variants={hexagonalAnimateChild}>
        <Hexagonal number={3} text={"Update"} />
      </motion.div>

      <motion.div variants={hexagonalAnimateChild}>
        <Hexagonal number={4} text={"Delete"} />
      </motion.div>
    </motion.div>
  );
};

export default CrudOperationUi;
