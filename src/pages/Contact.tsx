import React from 'react'
import { PageProps } from '../lib/types'
import * as Styled from './style'
import { BsArrowLeft } from 'react-icons/bs'
import { Footer } from '../components/layout'
import { CarouselButton, LinkButton, ScrollToTop } from '../components/button'

const Contact: React.FC<PageProps> = ({ propRef }) => {
  // 클릭 시, 맨 위로 이동한다.
  const handleScrollToTop = () => {
    window[`scrollTo`]({ top: 0, behavior: 'smooth' })
  }

  return (
    <Styled.Contact ref={propRef}>
      <div className="contact-container">
        <ul className="social-media-container">
          <li>
            <LinkButton
              href="https://github.com/donghakang"
              title="Github"
              icon={<BsArrowLeft size="20" className="arrow" />}
            />
          </li>
          <li>
            <LinkButton
              href="https://instgram.com/donghakang"
              title="Instagram"
              icon={<BsArrowLeft size="20" className="arrow" />}
            />
          </li>
        </ul>

        <CarouselButton href="mailto:dkang0602@gmail.com" />
      </div>
      <ScrollToTop handleClick={handleScrollToTop} />
      <Footer />
    </Styled.Contact>
  )
}

export default Contact
