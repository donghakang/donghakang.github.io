import React from "react";
import Emoji from "../emoji/Emoji";
import * as Styled from "./style/Footer.styled";

const Footer: React.FC = (): JSX.Element => {
  return (
    <Styled.Footer className="footer">
      <div>
        <Emoji label="hello" symbol="👋🏻" />
        <div>
          ©<a href="https://github.com/donghakang"> Dongha Kang</a>, 2021
        </div>
      </div>
    </Styled.Footer>
  );
};

export default Footer;
