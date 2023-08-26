const titleVariants = {
  inactive: { opacity: 1 },
  active: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
}

const titleItem = {
  inactive: { rotateX: -90, opacity: 0 },
  active: {
    rotateX: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
}

export { titleVariants, titleItem }
