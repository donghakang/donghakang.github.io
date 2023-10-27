import cx from 'classnames'
import Timeline from './Timeline'
import styles from './about.module.scss'

function AboutContainer() {
  return (
    <div className={cx(styles.AboutSection)}>
      {/* <div className={cx(styles.mainIntroduction)}>
        <div className={cx(styles.animationContainer)}>
          <Circles.Rotating color={theme.color.primary} />
        </div>

        <div className={cx(styles.aboutDescription)}>
          <h2 className={cx(styles.textTitle, styles.kr)}>
            <FaHandSparkles className={cx(styles.hiHand)} />
            프론트엔드 개발자 강동하입니다
          </h2>
          <div>
            현재 주니어 프론트엔드 개발자로서 아데나 소프트웨어에서 근무하고
            있습니다.
          </div>
        </div>
      </div> */}
      <Timeline />
    </div>
  )
}

export default AboutContainer
