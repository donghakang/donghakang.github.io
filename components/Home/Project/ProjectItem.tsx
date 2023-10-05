import React, { useRef, useState } from 'react'

import cx from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Mousewheel } from 'swiper/modules'
import { motion } from 'framer-motion'
import theme from '@/styles/theme'
import TechStack from './TechStack'
import ProjectDescription from './ProjectDescription'
import styles from './project.module.scss'

const sidebar = {
  open: () => ({
    opacity: 1,
    y: 0,
    height: '10vh',
  }),
  closed: {
    opacity: 0,
    y: -10,
    height: '0vh',
  },
}

function ProjectItem({
  title,
  images,
  date,
  stack,
  description,
}: Omit<ProjectProps, 'id'>) {
  const [opened, setOpened] = useState<boolean>(false)
  const ref = useRef<HTMLLIElement>(null)

  const handleProjectItemClick = () => {
    setOpened((prev) => !prev)
    // ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.li
      className={cx(
        styles.ProjectItemWrapper,
        opened ? styles.opened : styles.closed,
      )}
      onClick={handleProjectItemClick}
      ref={ref}
      aria-hidden="true"
      initial={{ x: 0 }}
      whileHover={{
        x: 20,
      }}
      transition={{ x: { duration: 0.4 } }}
    >
      <motion.div initial={false} animate={opened ? 'open' : 'closed'}>
        <h1 className={cx(styles.ProjectItemTitle)}>{title}</h1>
        <motion.div variants={sidebar}>check out motion</motion.div>
      </motion.div>
    </motion.li>
  )
}

export default ProjectItem
