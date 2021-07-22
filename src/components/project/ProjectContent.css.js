import styled from "styled-components";
import { Modal } from "react-bootstrap";

export const ModalHeader = styled(Modal.Header)`
  background-color: ${(props) => props.theme.background.primary};
  color: ${(props) => props.theme.text.primary};
`;

export const ModalTitle = styled(Modal.Title)`
  font-size: 4em;
`;

export const ModalBody = styled(Modal.Body)`
  background-color: ${(props) => props.theme.background.primary};
  color: ${(props) => props.theme.text.primary};
`;

export const ModalFooter = styled(Modal.Footer)`
  background-color: ${(props) => props.theme.background.primary};
  color: ${(props) => props.theme.text.primary};
`;
