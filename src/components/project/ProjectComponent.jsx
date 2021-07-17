import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";

const ProjectContent = (props) => {
  const { item } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const hoverTitle = () => {
    console.log("hoverTitle function", item.img);
  };

  return (
    <>
      <div
        className="col-md-4 padding-0 w-100 project-content"
        onClick={handleShow}
        onPointerOver={hoverTitle}
      >
        <div
          className="w-100 h-100 project-content-img"
          style={{ backgroundImage: `url('${item.img}')` }}
        >
          <div className="w-100 h-100 project-content-overlay"></div>
        </div>
        <h1 className="project-content-title">{item.title}</h1>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{item.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you're reading this text in a modal!Woohoo, you're reading
          this text in a modal!Woohoo, you're reading this text in a
          modal!Woohoo, you're reading this text in a modal!Woohoo, you're
          reading this text in a modal!Woohoo, you're reading this text in a
          modal!Woohoo, you're reading this text in a modal!Woohoo, you're
          reading this text in a modal!Woohoo, you're reading this text in a
          modal!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Link
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default function ProjectComponent() {
  const [project, setProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      fetch("/data/project.json")
        .then((res) => res.json())
        .then((res) => setProject(res))
        .then(setIsLoading(false))
        .catch((err) => console.log("cannot fetch a data: ", err));
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid mx-0 px-0 project-container">
      <div className="row no-gutters mx-0 px-0 project-row">
        {project.map((item) => (
          <ProjectContent key={item.id} item={item} />
        ))}
        <div className="col-md-4 project-content" style={{ height: "33vh" }}>
          <h1 className="project-content-last">More coming soon..</h1>
        </div>
      </div>
    </div>
  );
}
