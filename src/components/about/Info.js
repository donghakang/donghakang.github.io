import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VisualInfo from "./VisualInfo";

const Info = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch(props.data)
        .then((res) => res.json())
        .then((res) => setInfo(res))
        .then(setIsLoading(false))
        .catch((err) => console.log("cannot fetch a data: ", err));
    };

    fetchData();
  }, []);
  return (
    <>
      {!isLoading ? (
        <Container className="info">
          <Row className="title-row">
            <Col xs={1} className="title-col-emoji">
              {props.emoji}
            </Col>
            <Col xs={19} className="title-col-name">
              {props.name}
            </Col>
          </Row>
          <br />
          <InfoComponent data={info} />
          <hr />
        </Container>
      ) : (
        <div> isLoading... </div>
      )}
    </>
  );
};

const InfoComponent = (props) => {
  const info = props.data.map((res) => (
    <div key={res.id} className="task">
      <Row key={res.id}>
        <Col className="task-title">{res.title}</Col>
        <Col className="task-date">{res.date}</Col>
      </Row>
      <Row>
        <Col className="task-info">
          <ul className="task-info-ul">
            {res.info.map((item, index) => (
              <li key={index} className="task-info-li">
                {item}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  ));

  return <>{info}</>;
};

export function Education() {
  return <Info name="Education" emoji="👨🏻‍🎓" data="/data/education.json" />;
}

export function Work() {
  return <Info name="Work" emoji="👷🏻‍♂️" data="/data/work.json" />;
}

export function Skill() {
  return <VisualInfo name="Skill" emoji="👨🏻‍💻" data="/data/skill.json" />;
}
