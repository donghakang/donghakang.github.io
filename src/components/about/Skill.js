import { Container, Row, Col } from "react-bootstrap";
import LanguageScene from "./LanguageScene";

function Skill() {
  return (
    <Container>
      <Row style={{ backgroundColor: "purple" }}>
        <Col style={{ backgroundColor: "yellowgreen" }}>
          <h2>Exposed to...</h2>
          <ul>
            <li>Algorithm / Data Structure</li>
            <li>Computer Vision</li>
            <li>Graphics & Gaming</li>
            <li>Software Developing</li>
            <li>App Developing</li>
            <li>Web Developing</li>
          </ul>

          <h2></h2>
        </Col>
        <Col style={{ backgroundColor: "cyan" }}>
          <LanguageScene />
        </Col>
      </Row>
    </Container>
  );
}

export default Skill;
