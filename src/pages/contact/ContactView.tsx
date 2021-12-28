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
              솔직히 말해서 혼자 코딩하면 재미없잖아요, 저는 스케일이 크고 멋진
              개발 커뮤니티를 만들고 싶습니다.
              <br /> 정말로, 같이 일하면 어떨까요?
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
