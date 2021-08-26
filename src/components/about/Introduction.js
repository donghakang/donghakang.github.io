import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const IntroductionDiv = styled.div`
  width: 100%;
  // min-height: 100%;
  padding: 100px 0;

  .introduction-column {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .introduction-main-image {
    margin: 0;
    width: 300px;
    height: 300px;
    border-radius: 150px;
    object-fit: cover;
  }

  .introduction-title {
    // font-size: 4vw;
    font-size: 120px;
    font-weight: 600;
  }

  .introduction-paragraph {
    font-size: 14px;
    white-space: pre-line;
  }

  @media only screen and (max-width: 768px) {
    .introduction-title{
      font-size: 70px;
    }
  }
`;

function Introduction({ t }) {
  return (
    <IntroductionDiv>
      <Container className="introduction-container">
        <Row className="introduction-row">
          <Col md={5} className="introduction-column">
            <img
              src="/IMG_1455.png"
              alt="face"
              className="introduction-main-image"
            />
          </Col>
          <Col md={7} style={{whiteSpace:'pre-line'}}>
            <h1 className="introduction-title">{t("about:title")}</h1>
            <p className="introduction-paragraph">{(t("about:description"))}</p>
          </Col>
        </Row>
      </Container>
    </IntroductionDiv>
  );
}

export default Introduction;
