export const navLogo = {
  hidden: { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.25,
    },
  },
};

export const navLinkAnimateParient = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.4,
    },
  },
};

export const navLinkAnimateChild = {
  hidden: { y: -100 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.4,
      type: "spring",
      bounce: 0.2,
    },
  },
};
