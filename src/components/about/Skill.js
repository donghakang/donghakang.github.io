import { Container, Row, Col } from "react-bootstrap";
import Contribution from "./Contribution";
import LanguageScene from "./LanguageScene";
import SkillInformation from "./SkillInformation";

function Skill() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <Container>
        <Row style={{ backgroundColor: "purple" }}>
          <Col lg={6} style={{ backgroundColor: "yellowgreen" }}>
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
        <Row style={{ backgroundColor: "purple" }}>
          <Col style={{ backgroundColor: "cyan" }}>
            <Contribution />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skill;
