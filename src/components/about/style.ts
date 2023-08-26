import styled from '@emotion/styled'

export const AboutDescription = styled.div`
  .text-title {
    display: flex;
    align-items: center;
    .hi-hand {
      margin-right: 1rem;
      color: var(--primary);
      animation: sparkling_hands 250ms infinite linear;

      @keyframes sparkling_hands {
        0% {
          filter: none;
        }
        50% {
          filter: invert();
        }
        100% {
          filter: none;
        }
      }
    }
  }
`
