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
        <h4>ITKSNAP?</h4>
        <p>
          <b>ITKSNAP</b>is C++ medical imaging open sourc that can open dcm, nii, img format files and modify them
        </p>
        <br />
        <h4>👨🏻‍💻 Personal job</h4>
        <ul>
          <li>Intensity modification</li>
          <li>used Qt to modify and add extra features</li>
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
        <h4>ITKSNAP 이란?</h4>
        <p>
          <b>ITKSNAP</b>은 C++ 메디컬 이미징 open source로서 dcm, nii, img
          파일을 열고 수정할 수 있는 툴입니다.
        </p>
        <br />
        <h4>👨🏻‍💻 개인의 역할</h4>
        <ul>
          <li>Intensity 수정</li>
          <li>Qt를 사용하여 기능 추가</li>
        </ul>
      </div>
    </div>
  );
};

export default function ItksnapModal(props) {
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
