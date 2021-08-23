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
        <h4>🎉 Merona Todolist?</h4>
        <p>
          <b>Merona Todolist</b>is Android application that can save/share todo
          items with other users.
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
        <h4>🎉 올때, 메로나란?</h4>
        <p>
          <b>올때, 메로나</b>는 Android 어플리케이션으로 사용자들과 해야할 일들을 저장 및 공유할 수 있는 어플리케이션입니다.
        </p>
      </div>
    </div>
  );
};

export default function MeronaModal(props) {
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
