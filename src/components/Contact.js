import Nav from "./Nav";

import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import "../App.scss";

export default function Contact() {
  const m_size = 60;
  const m_style = { color: "#dddddd" };
  return (
    <>
      <Nav />
      <div className={"contact"}>
        <a href="https://www.github.com/donghakang">
          <div>
            <FaGithub size={m_size} style={m_style} />
          </div>
          <span>Github</span>
        </a>
        <a href="https://www.instagram.com/donghakang">
          <div>
            <FaInstagram size={m_size} style={m_style} />
          </div>
          <span>Instagram</span>
        </a>
        <a href="https://www.facebook.com/dkang0602">
          <div>
            <FaFacebook size={m_size} style={m_style} />
          </div>
          <span>facebook</span>
        </a>
        <a href="mailto:dkang0602@gmail.com">
          <div>
            <FiMail size={m_size} style={m_style} />
          </div>
          <span>mail</span>
        </a>
      </div>
    </>
  );
}
