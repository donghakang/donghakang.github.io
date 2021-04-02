import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import '../App.scss'

export default function Footer() {
  const m_size = 24;
  const m_style = { color: "#dddddd" };
  return (
    <div className="footer">
      <div className={"contact"}>
        <a href="https://www.github.com/donghakang">
          <div className="icon">
            <FaGithub size={m_size} style={m_style} />
          </div>
        </a>
        <a href="https://www.instagram.com/donghakang">
          <div className="icon">
            <FaInstagram size={m_size} style={m_style} />
          </div>
        </a>
        <a href="https://www.facebook.com/dkang0602">
          <div className="icon">
            <FaFacebook size={m_size} style={m_style} />
          </div>
        </a>
        <a href="mailto:dkang0602@gmail.com">
          <div className="icon">
            <FiMail size={m_size} style={m_style} />
          </div>
        </a>
      </div>
    </div>
  );
}
