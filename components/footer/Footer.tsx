import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import * as Styled from "./style";

const Footer: React.FC = (): JSX.Element => {
  return (
    <Styled.Footer className="footer">
      <a href="https://github.com/donghakang">
        <FaGithub size={24}/>
      </a>
      <a href="https://facebook.com/dkang0602">
        <FaFacebook size={24}/>
      </a>
      <a href="https://instagram.com/donghakang">
        <FaInstagram size={24}/>
      </a>
      <a href="mailto:dkang0602@gmail.com">
        <FiMail size={24}/>
      </a>
    </Styled.Footer>
  );
};

export default Footer;
