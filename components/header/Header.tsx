import Link from "next/link";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import * as Styled from "./style";
import { css, useTheme } from "@emotion/react";
import Footer from "../footer";
import { useRouter } from "next/router";
// import theme from "../../assets/theme/theme";
const LinkHeader = [
  { id: 0, title: "ABOUT", link: "/about" },
  { id: 1, title: "PROJECT", link: "/project" },
  // {title: 'BLOG', link: '/tag?tag=all'}
  { id: 2, title: "BLOG", link: "/blog" },
];

const Header: React.FC<{ home?: boolean; mobile?: boolean }> = ({
  home,
  mobile,
}): JSX.Element => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const handleCloseMenu = () => {
    // when pressed, chnage the menu open state
    setOpen(!open);
  };
  const theme = useTheme();

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
              <a
                className="link"
                css={css`
                  color: ${content.link === router.pathname &&
                  theme.colors.main_blue};

                  &:hover {
                    color: ${content.link === router.pathname
                      ? theme.colors.alternate_blue_2
                      : "orange"};
                    transform: scale(1, 0.8);
                  }
                `}
              >
                {content.title}
              </a>
            </Link>
          </li>
        ))}
        {mobile && <Footer />}
      </ul>

      {/** Mobile View */}
      <button className="hamburger-menu" onClick={handleCloseMenu}>
        {open ? <BiX size={32} /> : <BiMenu size={32} />}
      </button>
      {open && <div className="nav-background" onClick={handleCloseMenu}></div>}
    </Styled.Header>
  );
};

export default Header;
