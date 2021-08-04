import { Container, Row, Col } from "react-bootstrap";
import Contribution from "./SkillComponent/Contribution";
import LanguageScene from "./SkillComponent/LanguageScene";
import SkillInformation from "./SkillComponent/SkillInformation";

function Skill() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <Container>
        <Row>
          <Col lg={6} style={{borderRadius: '12px', boxShadow: '0px 0px 4px 4px #444444'}}>
            <SkillInformation />
          </Col>
          <Col
            lg={6}
            style={{
              padding: "0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <LanguageScene />
          </Col>
        </Row>
        <Row>
          <Col>
            <Contribution />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skill;
