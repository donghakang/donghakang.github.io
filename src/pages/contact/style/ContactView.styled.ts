import styled from "styled-components";

export const ContactView = styled.div<{
  theme: string & {
    start: string;
    end: string;
    text: string;
    hoverTextColor: string;
  };
}>`

  width:  100vw;
  height: 100vh;
  min-height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .contact-content {
    max-width: 640px;
    width: 100%;
    
    h1 {
      font-size: 4rem;
      font-weight: 700;
    }
  }

  .contact-buttons {
    display: flex;
  }

  a {
    display: flex;
    margin: auto 16px;
    background: linear-gradient(
      100deg,
      ${(props) => props.theme.start},
      ${(props) => props.theme.end}
    );
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
    margin: 40px;
    border-radius: 12px;
    font-size: 1.5rem;
    transition: 0.3s;

    * {
      color: white;
    }

    &:hover {
      transform: scale(1.2);
    }
  }

  // Phone View
  @media screen and (max-width: 640px) {
    .contact-content {
      padding: 1em;
      width: calc(100% - 2em);

      h1 {
        font-size: 2.75rem;
      }
      div {
        line-height: -0.04em
        margin: 1em  0;
      }
    }

    .contact-buttons {
      width: 90%;
      justify-content: space-around;
    }

    a {
      margin: 0;
      width: 44px;
      height: 44px;
    }
  }
`;
