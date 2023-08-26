import styled from '@emotion/styled'

export const Cursor = styled.div`
  width: 25px;
  height: 25px;
  border: 4px solid var(--primary);
  border-radius: 100%;
  background-color: var(--primary);
  position: fixed;
  transform: translate(-50%, -50%);

  mix-blend-mode: difference;

  /* transition: all 100ms ease; */
  z-index: 98;
  transition-property: opacity;
  pointer-events: none;

  transition: all 100ms ease;
  transition-property: opacity, background-color, transform, width, height;
  /* filter: blur(0.125rem); */

  ${({ theme }) => theme.screen.phone} {
    width: 0px;
    height: 0px;
    border: none;
  }
  ${({ theme }) => theme.screen.monitor} {
    width: 25px;
    height: 25px;
  } ;
`
