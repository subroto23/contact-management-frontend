export const hexagonalAnimateParient = {
  hidden: { y: -200 },
  visible: {
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

export const hexagonalAnimateChild = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.5,
    },
  },
};
