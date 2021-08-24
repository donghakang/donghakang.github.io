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
          <b>VR Paint</b>is application written in Unity, C# that is for Virtual
          Reality and paint/draw in 3D environment. Not only drawing lines and
          changing colors, but also chaning texture is available. Also, to
          emphasize User Interface, the paint tool is fiited on the wrist
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
          <b>VR Paint</b>는 Unity 와 C#을 사용하여 만들어진 어플리케이션으로,
          Oculus 등 VR 을 끼고 가상환경에 그림을 그릴 수 있는 3D 그림판
          어플리케이션 입니다. 선 뿐만아니라 색깔 및 텍스쳐까지 바꿀 수 있도록
          구현하고, 또한 User Interface의 중요성을 강조하기 위해 손목에 tool을
          넣는 구현도 했습니다.
        </p>
      </div>
    </div>
  );
};

export default function VRModal(props) {
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
