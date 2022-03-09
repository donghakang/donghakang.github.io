import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import * as Styled from "./style";
import { css } from "@emotion/react";
const LinkHeader = [
  { id: 0, title: "ABOUT", link: "/about" },
  { id: 1, title: "PROJECT", link: "/project" },
  // {title: 'BLOG', link: '/tag?tag=all'}
  { id: 2, title: "BLOG", link: "/blog" },
];

const Header: React.FC<{ home?: boolean }> = ({ home }): JSX.Element => {
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);
  const handleCloseMenu = () => {
    // when pressed, chnage the menu open state
    setOpen(!open);
  };

  return (
    <Styled.Header open={open} home={home}>
      <div className="logo">
        <Link href="/">
          <a>DH</a>
        </Link>
      </div>
      <ul className="nav-menu">
        {LinkHeader.map((content) => (
          <li key={content.id}>
            <Link href={content.link}>
              <a className="link">{content.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <button className="hamburger-menu" onClick={handleCloseMenu}>
        {open ? <BiX size={32} /> : <BiMenu size={32} />}
      </button>
      {open && <div className="nav-background" onClick={handleCloseMenu}></div>}
    </Styled.Header>
  );
};

export default Header;
