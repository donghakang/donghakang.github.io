import React from "react";
// import "../../../App.scss";

const EnglishVersion = (props) => {
  const { item } = props;
  console.log(item);
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
        <p>
          <b>Football POV </b>is python script that uses opencv and numpy for
          Computer Vision project. The goal of this project is to attach camera
          on a football and convert the recorded video to visible video
        </p>
      </div>
    </div>
  );
};

const KoreanVersion = (props) => {
  const { item } = props;
  console.log(item);
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
        <p>
          <b>Football POV </b>는 컴퓨터 비젼 수업시 opencv 와 numpy를 사용해서 만들어진 스크립트입니다. 
          이 프로젝트는 미국 미식축구 공에 카메라를 부착하여 촬영된 동영상을 실제로 보여지는 동영상과 같이 만들어 줍니다.
        </p>
      </div>
    </div>
  );
};

export default function FootballModal(props) {
  const { language, item } = props; // 'en' : 'ko'
  console.log(language, item);
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
