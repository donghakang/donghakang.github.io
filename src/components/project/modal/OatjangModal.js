import React from "react";
// import "../../../App.scss";

const EnglishVersion = (props) => {
  const { item } = props;
  return (
    <div className="project-modal">
      <img
        src={item.img}
        className="project-img"
        style={{
          margin: "auto",
          maxWidth: "720px",
          width: "100%",
          height: "100%",
        }}
      />
      <br />
      <div className="project-description">
        <h4>🎉 OatJang?</h4>
        <p>
          <b>OatJang</b>is website, which was written in JSP, Java, SQL. 
          Main goal of this website was to create a community that share used clothes
        </p>
        <br />
        <h4>👨🏻‍💻 Individual Work</h4>
        <ul>
          <li>Used kakao map API to create map view</li>
          <li>Basic web design and servlet programming</li>
        </ul>
      </div>
    </div>
  );
};

const KoreanVersion = (props) => {
  const { item } = props;
  return (
    <div className="project-modal">
      <img
        src={item.img}
        className="project-img"
        style={{
          margin: "auto",
          maxWidth: "720px",
          width: "100%",
          height: "100%",
        }}
      />
      <br />
      <div className="project-description">
        <h4>🎉 옷장 이란?</h4>
        <p>
          <b>OatJang</b>은 Java, JSP, SQL을 사용한 웹사이트이며,
          이 웹사이트는 중고 옷 거래를 하는 커뮤니티 웹사이트입니다.
        </p>
        <br />
        <h4>👨🏻‍💻 개인의 역할</h4>
        <ul>
          <li>카카오 맵 API 를 사용한 맵 뷰</li>
          <li>백엔드 전체적인 설계</li>
        </ul>
      </div>
    </div>
  );
};

export default function OatjangModal(props) {
  const { language, item } = props; // 'en' : 'ko'
  return (
    <>
      {language ? (
        <EnglishVersion item={item} />
      ) : (
        <KoreanVersion item={item} />
      )}
    </>
  );
}
