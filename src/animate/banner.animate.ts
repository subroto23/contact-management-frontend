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
    transition: {
      duration: 1,
    },
  },
};
