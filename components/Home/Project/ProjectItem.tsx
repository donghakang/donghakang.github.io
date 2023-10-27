import { useRef, useState } from 'react'

import cx from 'classnames'
import styles from './project.module.scss'

function ProjectItem({
  title,
  images, // eslint-disable-line @typescript-eslint/no-unused-vars
  date, // eslint-disable-line @typescript-eslint/no-unused-vars
  stack, // eslint-disable-line @typescript-eslint/no-unused-vars
  description, // eslint-disable-line @typescript-eslint/no-unused-vars
}: Omit<ProjectProps, 'id'>) {
  const [opened, setOpened] = useState<boolean>(false) // eslint-disable-line @typescript-eslint/no-unused-vars
  const ref = useRef<HTMLLIElement>(null)

  const handleProjectItemClick = () => {
    setOpened((prev) => !prev)
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
          PROJECT DESCRIPTION COMING SOON.... PROJECT DESCRIPTION COMING
          SOON.... PROJECT DESCRIPTION COMING SOON.... PROJECT DESCRIPTION
          COMING SOON.... PROJECT DESCRIPTION COMING SOON.... PROJECT
          DESCRIPTION COMING SOON.... PROJECT DESCRIPTION COMING SOON....
          PROJECT DESCRIPTION COMING SOON.... PROJECT DESCRIPTION COMING
          SOON.... PROJECT DESCRIPTION COMING SOON.... PROJECT DESCRIPTION
          COMING SOON.... PROJECT DESCRIPTION COMING SOON.... PROJECT
          DESCRIPTION COMING SOON.... PROJECT DESCRIPTION COMING SOON....
          PROJECT DESCRIPTION COMING SOON.... PROJECT DESCRIPTION COMING
          SOON.... PROJECT DESCRIPTION COMING SOON.... PROJECT DESCRIPTION
          COMING SOON.... PROJECT DESCRIPTION COMING SOON.... PROJECT
          DESCRIPTION COMING SOON.... PROJECT DESCRIPTION COMING SOON....
          PROJECT DESCRIPTION COMING SOON.... PROJECT DESCRIPTION COMING
          SOON.... PROJECT DESCRIPTION COMING SOON.... PROJECT DESCRIPTION
          COMING SOON.... PROJECT DESCRIPTION COMING SOON.... PROJECT
          DESCRIPTION COMING SOON.... PROJECT DESCRIPTION COMING SOON....
        </div>
      </div>
    </li>
  )
}

export default ProjectItem
