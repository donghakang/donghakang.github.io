import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { useSelector } from "react-redux";

// Style

import {
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
} from "./ProjectContent.css.js";

import {
  Pulmorad,
  Oatjang,
  Merona,
  Animation,
  Itksnap,
  Football,
  VR,
  Bezier,
} from "./modal";

const ProjectContent = (props) => {
  const { item } = props;
  const { t, i18n } = useTranslation(["home"]);
  const [show, setShow] = useState(false);
  const { theme } = useSelector((state) => state.theme);

  const ProjectModal = (itemInfo) => {
    const { item } = itemInfo;

    if (item.title == "Pulmorad")
      return <Pulmorad language={props.language} item={item} />;
    else if (item.title == "OatJang")
      return <Oatjang language={props.language} item={item} />;
    else if (item.title == "Merona Todolist")
      return <Merona language={props.language} item={item} />;
    else if (item.title == "Animation")
      return <Animation language={props.language} item={item} />;
    else if (item.title == "ITKSNAP")
      return <Itksnap language={props.language} item={item} />;
    else if (item.title == "Football POV")
      return <Football language={props.language} item={item} />;
    else if (item.title == "VR Paint")
      return <VR language={props.language} item={item} />;
    else if (item.title == "Bezier Curve Generator")
      return <Bezier language={props.language} item={item} />;

    return <div>Description coming soon...</div>;
  };

  useEffect(() => {
    function handleChangeLanguage() {
      i18n.changeLanguage(props.language ? "en" : "ko");
    }
    handleChangeLanguage();
  }, [props.language]);

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
        <ModalHeader>
          <ModalTitle>{item.title}</ModalTitle>
          <button
            type="button"
            onClick={handleClose}
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </ModalHeader>
        <ModalBody>
          <ProjectModal item={item} />
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            {t("home:project.cancel_button")}
          </Button>
          <Button
            variant="primary"
            onClick={(event) => {
              event.preventDefault();
              window.location.href = item.link;
            }}
          >
            {t("home:project.link_button")}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ProjectContent;
