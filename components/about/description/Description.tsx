import React, { useEffect, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import * as Styled from "./style";
import Emoji from "../../emoji";

const parentVariant = {
  hidden: {
    rotate: 0,
  },
  visible: {
    rotate: 180,
    transition: { repeat: Infinity, duration: 2, ease: "linear" },
  },
};

function Description() {

  return (
    <div css={Styled.descriptionStyle}>
      <div css={Styled.titleContainerStyle}>
        <Styled.titleStyle>
          <span>HELLO,</span>
          <span>MY NAME IS</span>
          <span
          // onMouseOver={() => dispatch({ type: "CURSOR_IMAGE_ON" })}
          // onMouseOut={() => dispatch({ type: "CURSOR_IMAGE_OFF" })}
          >
            DONGHA KANG
          </span>
        </Styled.titleStyle>
      </div>
      <div css={Styled.descriptionContainerStyle}>
        <Styled.descriptionTextStyle>
          <div className="kr">
            <Emoji label="artist" symbol="🧑🏻‍🎨" />
            <span>
              저는 사용자들에게 편리함을 제공하며 동시에 재미를 주는 프론트엔드
              개발자입니다.
            </span>
          </div>
          <div className="kr">
            <Emoji label="programmer" symbol="👨🏻‍💻" />
            <span>
              저는 프로그래머가 아닌 개발자가 되려고 오늘도 컴퓨터를 꺼냈습니다.
            </span>
          </div>
        </Styled.descriptionTextStyle>
      </div>
    </div>
  );
}

export default Description;
