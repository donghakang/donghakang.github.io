import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { useTranslation } from "react-i18next";

const IntroductionAnimation = (props) => {
  const { t, i18n } = useTranslation(["home"]);
  return (
    <div style={{ marginLeft: "4px" }} className="animated-text">
      <div className="animated-text-desc">👨🏻‍💻 {t("home:status.1")}</div>
      <div className="animated-text-desc">🧑🏻‍🎨 {t("home:status.2")}</div>
      <div className="animated-text-desc">👨🏻‍🔬 {t("home:status.3")}</div>
      <div className="animated-text-desc">👨🏻‍💻 {t("home:status.1")}</div>
    </div>
  );
};

// function ContactView() {
//   return (

//   );
// }
function Intro() {
  return (
    <Container>
      <Row>
        <Col
          md={5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0",
          }}
        >
          <img
            src="IMG_1455.jpg"
            alt="face"
            style={{
              margin: "0",
              width: "300px",
              height: "300px",
              borderRadius: "150px",
              objectFit: "cover",
            }}
          />
        </Col>
        <Col md={7}>
          <h1 style={{ fontSize: "4vw" }}>I want to be crazy</h1>
          <p style={{ fontSize: "14px" }}>
            저는 강동하입니다, 개발자가 되고싶습니다저는 강동하입니다, 개발자가
            되고싶습니다저는 강동하입니다, 개발자가 되고싶습니다저는
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
  );
}
// function Intro() {
//   return (

//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         backgroundColor: "purple",
//       }}
//     >
//       {/* <IntroductionAnimation /> */}
//       <img
//         src="IMG_1455.jpg"
//         alt="face"
//         style={{
//           width: "400px",
//           height: "400px",
//           borderRadius: "200px",
//           objectFit: "cover",
//         }}
//       />
//       <div
//         style={{
//           width: "50%",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           margin: "16px",
//         }}
//       >

//       </div>
//     </div>
//   );
// }

export default Intro;
