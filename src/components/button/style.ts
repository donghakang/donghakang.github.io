import styled from '@emotion/styled'

export const ScrollToTop = styled.button`
  display: flex;
  flex-direction: column;
  background: none;
  border: none;
  color: var(--primary);
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 100;

  //animation
  .arrow-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    .arrow-icon {
      animation: arrow_color 2s ease-in-out infinite;
      animation-delay: calc(var(--timing) * -0.2s);
      margin-top: -12px;
      width: 100%;
    }
    .icon-1 {
      --timing: 1;
    }
    .icon-2 {
      --timing: 2;
    }
    .icon-3 {
      --timing: 3;
      margin-bottom: 1rem;
    }
  }

  @-webkit-keyframes arrow_color {
    from {
      opacity: 0.3;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes arrow_color {
    from {
      opacity: 0.3;
    }
    to {
      opacity: 1;
    }
  }
`

export const LinkButton = styled.a`
  margin: 0 1rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--font-color);
  font-size: 1.5rem;
  font-weight: 300;

  svg {
    transition: transform 0.4s ease-in-out;
    transform: rotate(-45deg);
  }
  &:hover {
    color: var(--primary);

    svg {
      transform: rotate(0deg);
    }
  }
`

export const CarouselButton = styled.a`
  width: 100%;

  overflow: hidden;
  /* margin: 20vh auto; */
  border: 1px solid var(--primary);
  border-radius: 100px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--font-color);
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  background-color: var(--background-color);

  transform: translateZ(0);
  &:hover {
    background-color: var(--primary);
    color: var(--background-color);
  }

  .email {
    white-space: nowrap;
    line-height: 140px;
    width: var(--text-width);
    margin: 0;
    padding: 0;
    font-size: 8rem;
    font-weight: 400;

    animation: movingtext 5s linear infinite;
  }

  @keyframes movingtext {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(calc(-1 * var(--text-width)));
    }
  }

  ${({ theme }) => theme.screen.xs} {
    height: 100px;
    .email {
      font-size: 5rem;
    }
    --text-width: 860px;
  }
  ${({ theme }) => theme.screen.s} {
    height: 120px;
    .email {
      font-size: 6rem;
    }
    --text-width: 1040px;
  }
  ${({ theme }) => theme.screen.m} {
    height: 140px;
    .email {
      font-size: 7.8rem;
    }
    --text-width: 1350px;
  }
  ${({ theme }) => theme.screen.l} {
    height: 140px;
    .email {
      font-size: 8rem;
    }
    --text-width: 1399.17px;
  }
  ${({ theme }) => theme.screen.xl} {
    height: 140px;
    .email {
      font-size: 8rem;
    }
    --text-width: 1399.17px;
  }
`
