import React, { useEffect, useState } from "react";
import Emoji from "../../../components/emoji/Emoji";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import * as Styled from "./style";
import { useCursorDispatch } from "../../../store/CursorContext";

const parentVariant = {
  hidden: {
    rotate: 0,
  },
  visible: {
    rotate: 180,
    transition: { repeat: Infinity, duration: 2, ease: "linear" },
  },
};

function DescriptionLayer() {
  const dispatch = useCursorDispatch();
  const { scrollY, scrollYProgress } = useViewportScroll();

  return (
    <Styled.DescriptionLayer>
      <h1 className="title-header">
        <span>HELLO,</span>
        <span>MY NAME IS</span>
        <span
          onMouseOver={() => dispatch({ type: "CURSOR_IMAGE_ON" })}
          onMouseOut={() => dispatch({ type: "CURSOR_IMAGE_OFF" })}
        >
          DONGHA KANG
        </span>
      </h1>
      <div className="description-container">
        <motion.div className="description-text">
          <img src="img/profile.png" alt="profile" srcSet="" width="250px" />
          {/* <div>
            <Emoji label="student" symbol="👨🏻‍🎓" />
            <strong>미네소타 대학교</strong>에서 Computer Science 졸업
            <br />
          </div>
          <div style={{ marginTop: 0 }}>
            <Emoji label="worker" symbol="👷🏻‍♂️" />
            <strong>서울대학교병원 영상의학과</strong>에서 웹/소프트웨어 개발
          </div> */}
          <div className="kr">
            <Emoji label="artist" symbol="🧑🏻‍🎨" /> &nbsp; 제가 좋아하는 것과
            배운 것들을 토대로 더 나은 웹/앱 서비스를 구축하고 사용자들에게
            편리와 재미를 주는 어플리케이션을 개선하며 개발하는 것이 최종
            목표입니다.
          </div>
          <div className="kr">
            <Emoji label="programmer" symbol="👨🏻‍💻" /> &nbsp; 저는 프로그래머가
            아닌 개발자가 되려고 오늘도 컴퓨터를 꺼냈습니다.
          </div>
        </motion.div>
      </div>
    </Styled.DescriptionLayer>
  );
}

export default DescriptionLayer;
