import React, { useRef, useState } from 'react'

import cx from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Mousewheel } from 'swiper/modules'
import TechStack from './TechStack'
import ProjectDescription from './ProjectDescription'
import styles from './project.module.scss'

function ProjectItem({
  title,
  images,
  date,
  stack,
  description,
}: Omit<ProjectProps, 'id'>) {
  const [opened, setOpened] = useState<boolean>(false)
  const ref = useRef<HTMLLIElement>(null)

  return (
    <li
      role="presentation"
      className={cx(styles.ProjectItem, opened ? styles.opened : styles.closed)}
      onClick={() => {
        setOpened((prev) => !prev)
        ref.current?.scrollIntoView({ behavior: 'smooth' })
      }}
      ref={ref}
    >
      <img
        src={images[0]}
        className={cx(styles.phoneViewImage)}
        alt="phone preview"
      />
      <h2 className={cx(styles.title)}>
        <div className={cx(styles.mainImageWrapper)}>
          <img
            className={cx(styles.previewImage)}
            src={images[0]}
            alt="preview"
          />
        </div>
        {title}
      </h2>
      <div className={cx(styles.content)}>
        <span className={cx(styles.dateText)}>{date}</span>
        <Swiper
          modules={[FreeMode, Mousewheel]}
          spaceBetween={20}
          slidesPerView="auto"
          //   loop={true}
          //   loopedSlides={5}
          freeMode
          mousewheel={{ releaseOnEdges: true }}
        >
          {images.map((img: string, idx: number) => (
            <SwiperSlide key={img}>
              <div className="thumb-wrapper">
                <img src={img} alt={`project screenshot-${idx}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <TechStack stack={stack} />
        <ProjectDescription
          main={description.main}
          detail={description.detail}
        />
      </div>
    </li>
  )
}

export default ProjectItem
