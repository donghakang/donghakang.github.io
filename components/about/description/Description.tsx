import * as Styled from './style'
import Emoji from '../../emoji'
import { useCursorDispatch } from '../../../context/CursorContext'
import theme from '../../../assets/theme/theme'
import { css } from '@emotion/react'
const parentVariant = {
  hidden: {
    rotate: 0,
  },
  visible: {
    rotate: 180,
    transition: { repeat: Infinity, duration: 2, ease: 'linear' },
  },
}

const titleContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
}

const item = {
  hidden: { rotateX: -90 },
  visible: {
    rotateX: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const subtitleContainer = {
  hidden: { opacity: 1 },
  visible: {
    delay: 1,
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.1,
      ease: 'easeInOut',
    },
  },
}

const subitem = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
}

function Description() {
  const dispatch = useCursorDispatch()

  return (
    <div css={Styled.descriptionStyle}>
      <div css={Styled.titleContainerStyle}>
        <Styled.titleStyle>
          <span>HELLO,</span>
          <span>MY NAME IS</span>
          <span
            onMouseOver={() => dispatch({ type: 'CURSOR_IMAGE_ON' })}
            onMouseOut={() => dispatch({ type: 'CURSOR_IMAGE_OFF' })}
          >
            DONGHA KANG
          </span>
        </Styled.titleStyle>
      </div>
      <div css={Styled.descriptionContainerStyle}>
        <Styled.descriptionTextStyle
          variants={subtitleContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="kr">
            <Emoji label="hello" symbol="👋🏻" />
            <strong>
              <span>안녕하세요!!</span>
            </strong>
          </div>
          <div className="kr">
            <Emoji label="learner" symbol="🧑🏻‍🏫" />
            <span>
              저는 변화를 두려워하지 않고 새로운 기술을 배우는 것에 흥미가 많은
              개발자입니다.
            </span>
          </div>
          <div className="kr">
            <Emoji label="artist" symbol="🧑🏻‍🎨" />
            <span>
              저는 사용자들에게 편리함을 제공하며 동시에 시각적인 재미를 주는
              프론트엔드 개발자입니다.
            </span>
          </div>
          <div className="kr">
            <Emoji label="programmer" symbol="👨🏻‍💻" />
            <span>
              저는 프로그래머가 아닌 개발자가 되려고 오늘도 컴퓨터를 꺼냈습니다.
            </span>
          </div>
          <div className="kr">
            <Emoji label="resume" symbol="📝" />
            <span>
              더 자세한 저의 소개는{' '}
              <a
                href="https://well-market-4f7.notion.site/FE-91405b2f028a4bee8d5b3ad02daf09c9"
                css={css`
                  color: ${theme.colors.main_blue};
                  font-weight: 800;
                `}
              >
                여기
              </a>
              에서 확인하세요 (이력서)
            </span>
          </div>
        </Styled.descriptionTextStyle>
      </div>
    </div>
  )
}

export default Description
