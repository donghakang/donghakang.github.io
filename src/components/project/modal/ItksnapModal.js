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
        <h4>🎉 Pulmorad?</h4>
        <p>
          <b>Pulmorad</b>is React-based website that opens/modifies medical images(DICOM).
          Used/implemented OHIF Viewer (open source). Also, included additional tools in cornerstone-tools, and dicom-client (open source)
        </p>
        <br />
        <h4>👨🏻‍💻 Individual Work</h4>
        <ul>
          <li>UI that can change image threshold</li>
          <li>Fastapi, Postgres Backend</li>
          <li>
            Save & Share annotations with self/groups/all
          </li>
          <li>and so on ...</li>
        </ul>
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
        <h4>🎉 Pulmorad 란?</h4>
        <p>
          <b>Pulmorad</b>는 React 기반 웹사이트로서 의료이미지(DICOM)를 오픈하고
          이미지를 변형 할 수 있게해주는 툴입니다. OHIF Viewer라는 기존에 있는
          오픈소스를 사용했으며, 추가적인 기능을 cornerstone-tools,
          dicomweb-client와 React를 이용하여 구현 했습니다.
        </p>
        <br />
        <h4>👨🏻‍💻 개인의 역할</h4>
        <ul>
          <li>이미지의 Threshold를 바꿀 수 있는 UI 개발</li>
          <li>Fastapi, Postgres를 사용하여 Annotation 저장 기능 구현</li>
          <li>
            Annotation 저장시 자기에게만/그룹에게/모두에게 공유할 수 있는 기능
            구현
          </li>
          <li>기타 등등 ...</li>
        </ul>
      </div>
    </div>
  );
};

export default function ItksnapModal(props) {
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
