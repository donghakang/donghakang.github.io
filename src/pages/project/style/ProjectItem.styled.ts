import styled from "styled-components";

export const StyledProjectItem = styled.div<{
  background: string;
}>`
  width: 100%;
  height: 100%;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  text-align: center;
  .image-view {
    // Image
    width: inherit;
    height: inherit;
    position: absolute;

    background-image: url(${(props) => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    &:hover {
      /* Add the blur effect */
      -webkit-transition: 0.2s -webkit-filter ease-in-out;
      transition: 0.2s filter ease-in-out, 0.2s -webkit-filter ease-in-out;

      /* animation: -webkit-filter 3s infinite; */
      filter: blur(4px);
      -webkit-filter: blur(4px);
    }
  }
  .image-title {
    -webkit-transition: 0.2s all ease-in-out;
    transition: 0.2s all ease-in-out, 0.2s all ease-in-out;

    position: absolute;
    // font
    font-weight: 700;
    font-size: 28px;
    opacity: 0;
    /* color: ${(props) => props.theme.colors.main_blue}; */
    /* color: white;
    text-shadow: 2px 2px 2px ${(props) =>
      props.theme.colors.alternate_blue_1}; */
  }

  &:hover {
    .image-title {
      opacity: 1;
      color: ${(props) => props.theme.colors.main_blue};
    }
  }

  1 @media screen and (max-width: 870px) {
    background: url(${(props) => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0em;
  }
`;
