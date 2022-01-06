import React, { useEffect } from "react";

// import { useSpring, animated, config } from "react-spring";

import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import * as Styled from "./style/ContactView.styled";
import {
  buttonColor1,
  buttonColor2,
  hoverTextColor,
} from "../../components/color/Color";
// import { useTrail, a } from "@react-spring/web";

import { Trail, VerticalTrail } from "../../components/animation";

import Layout from "../../components/layout";
import Emoji from "../../components/emoji/Emoji";

function ContactView() {
  const color = {
    start: buttonColor1,
    end: buttonColor2,
    text: "white",
    hoverTextColor: hoverTextColor,
  };

  useEffect(() => {}, []);

  return (
    <Layout home>
      <Styled.ContactView theme={color}>
        <div className="contact-content">
          <Trail>
            <h1>Contact me</h1>
            <p>
              제가 제일 후회하는 것이 있다면, 발 벗고 뛰어 다니면서 팰로우
              프로그래머들과 선배 프로그래머들에게 많이 배우지 못한 것, 혼자서
              코딩을 하는 것을 즐거워 했다는 것 입니다.
              <br />
              <br /> 겸손한 자세로 많은 사람들과 소통하며 많이 성장하고
              싶습니다.
              <br /> 같이 코딩해요! <Emoji label="code" symbol="👨🏻‍💻"/>
            </p>
          </Trail>
        </div>
        <div className="contact-buttons">
          <VerticalTrail>
            <a href="https://github.com/donghakang">
              <FaGithub />
            </a>
            <a href="https://facebook.com/dkang0602">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/donghakang">
              <FaInstagram />
            </a>
            <a href="mailto:dkang0602@gmail.com">
              <FiMail />
            </a>
          </VerticalTrail>
        </div>
      </Styled.ContactView>
    </Layout>
  );
}

export default ContactView;
