import React, { useState } from "react";
// import { Link } from "gatsby";
// import { ThemeSwitch, LangSwitch } from "../switch";
import { Link, useLocation } from "react-router-dom";
// import { LanguageSwitch, ThemeSwitch } from "../switch";
import { BiMenu, BiX } from "react-icons/bi";
import * as Styled from "./style/Header.styled";
import { headerColor } from "../color";

const Header: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();

  return (
    <Styled.Header open={open} color={headerColor}>
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
        {/* <li>
          <LanguageSwitch />
        </li> */}
        {/* <li>
          <ThemeSwitch />
        </li> */}
      </ul>
      <button className="hamburger-menu" onClick={() => setOpen(!open)}>
        {open ? (
          <BiX size={24} color={headerColor} />
        ) : (
          <BiMenu size={24} color={headerColor} />
        )}
      </button>
    </Styled.Header>
  );
};

export default Header;
