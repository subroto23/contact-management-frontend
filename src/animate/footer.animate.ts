import { delay } from "framer-motion";

export const footerAnimate = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
export const footerAnimateIconParint = {
  hidden: { scale: 1.3 },
  visible: {
    scale: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
      delay: 1,
    },
  },
};

export const footerAnimateIconChild = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "spring",
      bounce: 1,
    },
  },
};

export const footerIconLeftAnimate = {
  hidden: { x: 100, y: -60, rotate: 0 },
  visible: {
    opacity: 1,
    x: [-50, 90, -60, 0, 100],
    y: 0,
    rotate: [0, 45, 90, 0],
    transition: {
      duration: 15,
      delay: 0.3,
      repeat: Infinity,
      type: "tween",
      ease: "linear",
      repeatType: "mirror",
    },
  },
};

export const footerIconRightAnimate = {
  hidden: { x: 100, y: -60, rotate: 0 },
  visible: {
    opacity: 1,
    x: [100, 0, -60, 90, 50],
    y: 0,
    rotate: [0, 45, 90, 0],
    transition: {
      duration: 15,
      delay: 0.7,
      repeat: Infinity,
      type: "tween",
      ease: "linear",
      repeatType: "mirror",
    },
  },
};
