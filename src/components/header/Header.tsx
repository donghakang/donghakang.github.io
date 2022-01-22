import React, { useState } from "react";
// import { Link } from "gatsby";
// import { ThemeSwitch, LangSwitch } from "../switch";
import { Link } from "react-router-dom";
// import { LanguageSwitch, ThemeSwitch } from "../switch";
import { BiMenu, BiX } from "react-icons/bi";
import * as Styled from "./style/Header.styled";

const Header: React.FC<{ home?: boolean }> = ({
  home
}): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const handleCloseMenu = () => {
    // when pressed, chnage the menu open state
    setOpen(!open);
  };

  return (
    <Styled.Header open={open} home={home}>
      <div className="logo">
        <Link to="/">DH</Link>
      </div>
      <ul className="nav-menu">
        <li>
          <Link className={"link"} to="/about">
            about
          </Link>
        </li>
        <li>
          <Link className={"link"} to="/project">
            project
          </Link>
        </li>
        <li>
          <Link className={"link"} to="/tag?tag=all">
            blog
          </Link>
        </li>
        <li>
          <Link className={"link"} to="/contact">
            contact
          </Link>
        </li>
      </ul>
      <button className="hamburger-menu" onClick={handleCloseMenu}>
        {open ? <BiX size={32} /> : <BiMenu size={32} />}
      </button>
      {open && <div className="nav-background" onClick={handleCloseMenu}></div>}
    </Styled.Header>
  );
};

export default Header;