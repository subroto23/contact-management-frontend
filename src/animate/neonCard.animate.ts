export const neonCardAnimateParient = {
  hidden: {},
  visible: {
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

export const neonCardAnimateChild = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
    },
  },
};
