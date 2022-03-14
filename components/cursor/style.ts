import styled from "@emotion/styled";

export const Cursor = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid orange;
  border-radius: 100%;
  position: fixed;
  transform: translate(-50%, -50%);

  /* transition: all 100ms ease; */
  z-index: 98;
  transition-property: opacity;
  pointer-events: none;

  transition: all 100ms ease;
  transition-property: opacity, background-color, transform, width, height;
  /* filter: blur(0.125rem); */

  .image-wrapper {
    position: absolute;
    border-radius: 100%;

    width: 0;
    height: 0;

    .profile_image {
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }
  }
`;
