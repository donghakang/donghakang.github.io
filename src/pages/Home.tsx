import React from 'react'
import { PageProps } from '../lib/types'

// components
import Circles from '../components/animation/Circles'

// styling
import { motion } from 'framer-motion'
import * as Styled from './style'
import { titleVariants, titleItem } from '../animation/HomeAnimation'

const Home: React.FC<PageProps> = ({ propRef }) => {
  return (
    <Styled.Home ref={propRef}>
      <motion.div
        className="home-container"
        variants={titleVariants}
        initial={'inactive'}
        animate={'active'}
      >
        <motion.h2 className="first-line heading" variants={titleItem}>
          FRONTEND
          <div className="animation-wrapper">
            <Circles size={0} color={'var(--primary)'} />
          </div>
        </motion.h2>
        <motion.h2 className="second-line heading" variants={titleItem}>
          DEVEL
          <span className="symbol">
            &#123;<span className="tiny vivid">2021~</span>&#125;
          </span>
          PER
        </motion.h2>
        <motion.h2 className="name heading" variants={titleItem}>
          <div className="name-block firstname">
            DONGHA<span className="strong vivid ">/</span>
          </div>
          <div className="name-block lastname">
            KANG
            <span className="tiny tiny-name">
              강<span className="tiny strong vivid">/</span>동하
            </span>
          </div>
        </motion.h2>
      </motion.div>
    </Styled.Home>
  )
}

export default Home
