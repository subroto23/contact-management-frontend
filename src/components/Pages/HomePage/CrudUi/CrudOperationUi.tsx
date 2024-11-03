"use client";
import {
  hexagonalAnimateChild,
  hexagonalAnimateParient,
} from "@/animate/hexagonal.animate";
import Hexagonal from "@/components/ui/Hexagonal/Hexagonal";
import { motion } from "framer-motion";

const CrudOperationUi = () => {
  return (
    <motion.div
      variants={hexagonalAnimateParient}
      initial="hidden"
      whileInView="visible"
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
