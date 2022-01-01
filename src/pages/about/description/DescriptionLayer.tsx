import React from "react";
import Emoji from "../../../components/emoji/Emoji";
import { Trail, VerticalTrail } from "../../../components/animation";
import * as Styled from "./style/DescriptionLayer.styled";

function DescriptionLayer() {
  return (
    <Styled.DescriptionLayer className="layer">
      <div className="description-container">
        <Trail>
          <h1>About page</h1>
          <div className="description-text">
            <Trail>
              <div>
                <Emoji label="student" symbol="👨🏻‍🎓" /> 2020년 5월 미네소타
                대학교에서 컴퓨터 공학 전공으로 졸업을 한 뒤, 국비지원 교육으로
                웹과 앱을 공부했으며 현재는 서울대학교 병원에서 웹 개발 및
                소프트웨어 개선을 하고 있습니다.
              </div>
              <div>
                <Emoji label="artist" symbol="🧑🏻‍🎨" /> 제가 좋아하는 것과 배운
                것들을 토대로 더 나은 웹/앱 서비스를 구축하고 사용자들에게
                편리와 재미를 주는 어플리케이션을 개선하며 개발하는 것이 최종
                목표입니다.
              </div>
              <div>
                <Emoji label="programmer" symbol="👨🏻‍💻" /> 저는 프로그래머가 아닌
                개발자가 되려고 오늘도 컴퓨터를 꺼냈습니다.
              </div>
            </Trail>
          </div>
        </Trail>
      </div>
      <VerticalTrail>
        <img src="img/profile.png" alt="profile" srcSet="" width="250px" />
      </VerticalTrail>
    </Styled.DescriptionLayer>
  );
}

export default DescriptionLayer;
