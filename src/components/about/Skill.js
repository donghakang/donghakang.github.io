import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Contribution from "./SkillComponent/Contribution";
import LanguageScene from "./SkillComponent/LanguageScene";
import SkillInformation from "./SkillComponent/SkillInformation";

const SkillDiv = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;

  .skill-language {
    justify-content: center;
    padding: 0;
  }
`;

function Skill() {
  return (
    <SkillDiv>
      <Container>
        <Row>
          <Col lg={6}>
            <SkillInformation />
          </Col>
          <Col lg={6} className="skill-language">
            <LanguageScene />
          </Col>
        </Row>
        <Row>
          <Col>
            <Contribution />
          </Col>
        </Row>
      </Container>
    </SkillDiv>
  );
}

export default Skill;
