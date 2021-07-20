import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const ProjectContent = (props) => {
  const { item } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="col-md-4 padding-0 w-100 project-content"
        onClick={handleShow}
        // onPointerOver={hoverTitle}
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
        <Modal.Body>{item.info}</Modal.Body>
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
  const { language } = useSelector((state) => state.language);

  const [project, setProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const data = `/locales/${language ? "en" : "ko"}/project.json`;
    const fetchData = (dir) => {
      fetch(dir)
        .then((res) => res.json())
        .then((res) => setProject(res))
        .then(setIsLoading(false))
        .catch((err) => console.log("cannot fetch a data: ", err));
    };

    fetchData(data);
  }, [language]);

  return (
    <div className="container-fluid mx-0 px-0 project-container">
      <div className="row no-gutters mx-0 px-0 project-row">
        {project.map((item) => (
          <ProjectContent key={item.id} item={item} />
        ))}
        <div className="col-md-4 project-content" style={{ height: "33vh" }}>
          <h1
            className="project-content-last project-row"
            style={{ color: "darkgray" }}
          >
            More coming soon..
          </h1>
        </div>
      </div>
    </div>
  );
}
