export const imageVariants = {
  hidden: {
    rotate: 45,
    scale: 2,
    opacity: 0,
  },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "-100vw",
    scale: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const containerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      ease: "easeInOut",
      stiffness: 120,
    },
  },
  exit: {
    x: "-100vw",
    scale: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const textVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      type: "spring",
      ease: "easeInOut",
      stiffness: 120,
    },
  },
  exit: {
    x: "-100vw",
    scale: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const buttonVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    scale: [1, 1.1],
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.3,
      ease: "easeInOut",
      scale: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  },
  exit: {
    x: "-100vw",
    scale: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const buttonHoverVariants = {
  hidden: {
    opactiy: 0,
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
  exit: {
    x: "-100vw",
    scale: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const backdropVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.6,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export const modalVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
    transition: {
      duration: 0.6,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      type: "spring",
    },
  },
};
