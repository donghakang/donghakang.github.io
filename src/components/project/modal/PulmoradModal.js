import React, { useState } from "react";

const EnglishVersion = (props) => {
  const { item } = props;
  console.log(item);
  return (
    <>
      Pulmorad is the website that...
      <img src={item.img} style={{ width: "100%", height: "100%" }} />
      More description coming soon...
    </>
  );
};

const KoreanVersion = (props) => {
  const { item } = props;
  console.log(item);
  return (
    <>
      {" "}
      Pulmorad는 React 기반 웹사이트로서 ..{" "}
      {/* <div style={{ width: "100%", height: "300px", backgroundColor: "red" }}> */}
      <img src={item.img} style={{ width: "100%", height: "100%" }} />
      {/* </div> */}
    </>
  );
};

export default function PulmoradModal(props) {
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
