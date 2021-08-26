import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Contribution from "./SkillComponent/Contribution";
import LanguageScene from "./SkillComponent/LanguageScene";
import SkillInformation from "./SkillComponent/SkillInformation";
import { useSelector } from "react-redux";

const SkillDiv = styled.div`
  // min-height: 100vh;
  padding:  10vh 0;
  display: flex;
  align-items: center;



  .skill-language {
    justify-content: center;
    padding: 0;
  }
`;

function Skill({t}) {
  const {theme} = useSelector(state => state.theme)

  return (
    <SkillDiv>
      <Container>
        <Row>
          <Col lg={6}>
            <SkillInformation t={t} theme={theme}/>
          </Col>
          <Col lg={6} className="skill-language">
            <LanguageScene theme={theme}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Contribution theme={theme}/>
          </Col>
        </Row>
      </Container>
    </SkillDiv>
  );
}

export default Skill;
