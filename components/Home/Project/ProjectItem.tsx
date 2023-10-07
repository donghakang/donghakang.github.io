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
    height: '60vh',
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
    console.log('click', ref.current?.scrollTo)
    if (ref.current) ref.current.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    // <motion.li
    //   className={cx(styles.ProjectItemWrapper)}
    //   onClick={handleProjectItemClick}
    //   ref={ref}
    //   aria-hidden="true"
    //   initial={{ x: 0 }}
    //   whileHover={{
    //     x: 20,
    //   }}
    //   transition={{ x: { duration: 0.4 } }}
    // >
    //   <motion.div initial={false} animate={opened ? 'open' : 'closed'}>
    //     <h1 className={cx(styles.ProjectItemTitle)}>{title}</h1>
    //     <motion.div variants={sidebar} />
    //   </motion.div>
    // </motion.li>

    <li
      className={cx(styles.ProjectItemWrapper)}
      onClick={handleProjectItemClick}
      ref={ref}
      aria-hidden="true"
    >
      <div>
        <h1 className={cx(styles.ProjectItemTitle)}>{title}</h1>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam facere
          quos asperiores aliquam error sed, alias iste quae? Hic aperiam
          reprehenderit eaque dolorum minus est officia saepe assumenda quia
          sit? Perspiciatis fugit facilis et omnis soluta cumque impedit, vitae
          in eos vero exercitationem commodi blanditiis quod animi ad voluptatum
          saepe ipsam! Provident eos, sequi officiis iste hic veniam ullam
          distinctio? Aspernatur repellendus velit, accusantium consequuntur non
          voluptatibus numquam debitis sequi obcaecati temporibus odit quia?
          Enim ut temporibus doloremque soluta quos in deserunt possimus libero,
          aspernatur nihil laborum dolores atque dolor. Est nostrum, autem
          similique dolore explicabo distinctio atque officiis! Nam quas quis
          harum incidunt impedit odio dolores sit quia sunt maiores nobis,
          itaque quisquam inventore tempore voluptates qui et molestiae. Quas
          aliquam nobis blanditiis aliquid cupiditate voluptatum pariatur atque
          doloribus molestiae consectetur placeat quidem, aperiam fugit deleniti
          impedit minus magni omnis sint consequatur rerum? Delectus
          perspiciatis repudiandae molestiae recusandae? Voluptatibus.
          Necessitatibus, enim assumenda. Doloribus aliquam libero adipisci
          commodi, quos error obcaecati iusto ullam perspiciatis, ducimus beatae
          quia qui? Culpa, praesentium maiores. Reiciendis, inventore! At,
          fugiat natus. Reiciendis blanditiis eveniet vero. Incidunt sed sunt,
          quasi nulla ut veritatis nihil! Autem enim optio veritatis ex modi
          debitis, magnam possimus dignissimos nostrum voluptates cupiditate
          repellat deleniti a eum eius libero! Iure, quis dignissimos. Accusamus
          perspiciatis voluptatem explicabo eligendi minima. Deserunt
          exercitationem sapiente ex fugit. Quos neque ducimus minima tempora
          aspernatur inventore, voluptas nesciunt atque dolorem quaerat dolore
          tempore nemo laudantium consectetur eveniet et! Quam illum expedita,
          cumque neque odio, obcaecati deserunt deleniti ad quisquam officia eum
          animi blanditiis tempore iste omnis! Sed tempora officia quisquam
          explicabo tempore asperiores sapiente deserunt voluptatibus ipsam
          odio. Minus sunt, rerum consectetur fugit veritatis possimus quidem
          commodi iusto, recusandae tempore corrupti soluta. Cupiditate vel eius
          pariatur tempora harum similique aliquid quidem architecto veniam.
          Accusantium error illo quibusdam distinctio!
        </div>
      </div>
    </li>
  )
}

export default ProjectItem
