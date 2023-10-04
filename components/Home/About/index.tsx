import React from 'react'
import cx from 'classnames'
import Circles from '@/components/animation'
import { FaHandSparkles } from 'react-icons/fa'
import theme from '@/styles/theme'
import styles from './about.module.scss'
import Timeline from './Timeline'

function AboutContainer() {
  return (
    <div className={cx(styles.AboutSection)}>
      <div className={cx(styles.mainIntroduction)}>
        <div className={cx(styles.animationContainer)}>
          <Circles.Rotating color={theme.color.primary} />
        </div>

        <div className={cx(styles.aboutDescription)}>
          <h2 className={cx(styles.textTitle, styles.kr)}>
            <FaHandSparkles className={cx(styles.hiHand)} />
            프론트엔드 개발자 강동하입니다
          </h2>
          <div>
            안녕하세요, 저는 주니어 프론트엔드 개발자로서 현재 서울대학교 병원
            영상의학과에 근무중이며 주로 웹 서비스 개발을 맡았습니다. 또한,
            필요에 따라서 기획 및 디자인을 한 경험이 있습니다.
          </div>
          <div>
            주로 사용자들에게 흥미를 주는 인터페이스 혹은 시각적인 효과에 관심이
            많으며 사용자들이 필요로 하는 서비스를 찾으려고 노력하고 있는 개발자
            입니다. 서울대학교 병원에서도 CT이미지에 정보를 공유하는 일이 많아
            CT이미지를 웹에서 보여주는 사이트를 제작했으며 현재 9개의 병원
            영상의학과에서 사용중입니다.
          </div>
        </div>
      </div>
      <Timeline />
    </div>
  )
}

export default AboutContainer
