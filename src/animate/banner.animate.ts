export const textAnimateParient = {
  hidden: { x: -200 },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.25,
    },
  },
};

export const textAnimateChild = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.2,
    },
  },
};

export const blurColorAnimate = {
  hidden: { scale: 1, opacity: 0 },
  visible: {
    opacity: 1,
    scale: 1.5,
    transition: {
      duration: 1,
      delay: 0.2,
    },
  },
};

export const backgroundImage = {
  hidden: { x: 570 },
  animate: {
    x: -20,
    rotate: -3,
    delay: 2,
    scale: 1.07,
    transition: {
      duration: 1,
      rotate: {
        delay: 3,
        duration: 6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
      scale: {
        delay: 3,
        duration: 6,
        repeat: Infinity,
        repeatDelay: 2,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  },
};

export const characterAnimationParient = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const characterAnimationChildren = {
  hidden: { opacity: 0.8, color: "#FFFFFF" },
  visible: {
    opacity: 1,
    color: ["#DC02D5", "#FFFFFF", "#0FFBF9", "#FFFFFF", "#DC02D5", "#FFFFFF"],
    transition: {
      duration: 30,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};
