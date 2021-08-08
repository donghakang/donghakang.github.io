import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const IntroductionDiv = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  .introduction-container {
    min-height: 100vh;
    min-width: 100vw;
  }

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
    font-size: 4vw;
    font-weight: 600;
  }

  .introduction-paragraph {
    font-size: 14px;
  }
`;

function Introduction() {
  return (
    <IntroductionDiv>
      <Container className="introduction-container">
        <Row className="introduction-row">
          <Col md={5} className="introduction-column">
            <img
              src="IMG_1455.jpg"
              alt="face"
              className="introduction-main-image"
            />
          </Col>
          <Col md={7}>
            <h1 className="introduction-title">I want to be crazy</h1>
            <p className="introduction-paragraph">
              저는 강동하입니다, 개발자가 되고싶습니다저는 강동하입니다,
              개발자가 되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다 저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다 저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다 저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다 저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다 저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다 저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다 저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다 저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다 저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다 저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다저는
              강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
              되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다
            </p>
          </Col>
        </Row>
      </Container>
    </IntroductionDiv>
  );
}

export default Introduction;