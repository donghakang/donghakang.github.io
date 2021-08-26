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
        <h4>Animation</h4>
        <p>
          <b>Animation</b> is written in processing. Implemented Particles
          simulation, Clothes simulation, A* algorithm, boid alogrithm and so
          on..
        </p>
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
        <h4>Animation</h4>
        <p>
          <b>Animation</b>은 Processing으로 쓰여졌으며, A*, Boid 등과 같은
          알고리즘을 사용하고, Cloth 시뮬레이션, Particle 시뮬레이션 등을
          구현했습니다.
        </p>
      </div>
    </div>
  );
};

export default function AnimationModal(props) {
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
