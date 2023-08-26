import React, { useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Mousewheel } from 'swiper'
import * as Styled from './style'
import TechStack from './TechStack'
import ProjectDescription from './ProjectDescription'

interface ProjectItemProps {
  title: string
  imgs: string[]
  date?: string
  stack: string[]
  description: ProjectDescriptionProps
}

export interface ProjectDescriptionProps {
  main?: string[]
  detail?: string[]
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  imgs,
  date,
  stack,
  description,
}) => {
  const [opened, setOpened] = useState<boolean>(false)
  const ref = useRef<HTMLLIElement>(null)

  return (
    <Styled.ProjectItem
      opened={opened}
      onClick={() => {
        setOpened((opened) => !opened)
        ref.current?.scrollIntoView({ behavior: 'smooth' })
      }}
      ref={ref}
    >
      <img src={imgs[0]} className="phone-view-image" />
      <h2 className="title">
        <div className="main-image-wrapper">
          <img className="preview-image" src={imgs[0]} />
        </div>
        {title}
      </h2>
      <div className="content">
        <span className="date-text">{date}</span>
        <Swiper
          modules={[FreeMode, Mousewheel]}
          spaceBetween={20}
          slidesPerView={'auto'}
          //   loop={true}
          //   loopedSlides={5}
          freeMode={true}
          mousewheel={{ releaseOnEdges: true }}
        >
          {imgs.map((img: string, i: number) => (
            <SwiperSlide key={`slide-${i}`}>
              <div className="thumb-wrapper">
                <img src={img} />
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
    </Styled.ProjectItem>
  )
}

export default ProjectItem
