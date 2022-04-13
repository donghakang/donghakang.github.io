import React from "react"
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import * as Styled from "./style"

const Footer: React.FC = (): JSX.Element => {
  return (
    <Styled.Footer className="footer">
      <a href="https://github.com/donghakang">
        <FaGithub size={30} />
      </a>
      <a href="https://facebook.com/dkang0602">
        <FaFacebook size={30} />
      </a>
      <a href="https://instagram.com/donghakang">
        <FaInstagram size={30} />
      </a>
      <a href="mailto:dkang0602@gmail.com">
        <FiMail size={30} />
      </a>
      {/* <a href="https://well-market-4f7.notion.site/FE-91405b2f028a4bee8d5b3ad02daf09c9">
        <GrDocumentText size={30}/>
      </a> */}
    </Styled.Footer>
  )
}

export default Footer
