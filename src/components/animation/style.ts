import styled from '@emotion/styled'
import { AnimationProps } from '../../lib/types'

export const Circles = styled.div<AnimationProps>`
  position: relative;
  width: 100%;
  height: 100%;
  animation: rotating 10s linear infinite;
  animation-delay: calc((var(--variable-index) + 1) * 0.15s);
  .stick {
    position: absolute;
    width: 1px;
    height: 100%;
    top: 50%;
    left: 50%;
    background-color: ${({ color }) => color};
  }
  .one {
    transform: translateY(-50%) rotateZ(90deg);
  }
  .two {
    transform: translateY(-50%) rotateZ(45deg);
  }
  .three {
    transform: translateY(-50%) rotateZ(-45deg);
  }
  .four {
    transform: translateY(-50%) rotateZ(22.5deg);
  }
  .five {
    transform: translateY(-50%) rotateZ(67.5deg);
  }
  .six {
    transform: translateY(-50%) rotateZ(-22.5deg);
  }
  .seven {
    transform: translateY(-50%) rotateZ(-67.5deg);
  }
  .eight {
    transform: translateY(-50%) rotateZ(0deg);
  }

  @-webkit-keyframes rotating {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`

// Rotating Circles
export const RotatingCircles = styled.div<AnimationProps>`
  position: relative;
  width: 100%;
  height: 100%;
  .rotation {
    position: absolute;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    border: 1px solid ${({ color }) => color};
    animation: translation 4s infinite;
    transform: translate(-50%, -50%);
    animation-delay: calc(var(--timing) * -0.2s);
  }

  .circle-1 {
    --timing: 1;
  }
  .circle-2 {
    --timing: 2;
  }
  .circle-3 {
    --timing: 3;
  }
  .circle-4 {
    --timing: 4;
  }
  .circle-5 {
    --timing: 5;
  }
  .circle-6 {
    --timing: 6;
  }
  .circle-7 {
    --timing: 7;
  }
  .circle-8 {
    --timing: 8;
  }
  .circle-9 {
    --timing: 9;
  }
  .circle-10 {
    --timing: 10;
  }
  .circle-11 {
    --timing: 11;
  }
  .circle-12 {
    --timing: 12;
  }

  @-webkit-keyframes translation {
    from {
      -webkit-transform: translate(50%, 50%) rotate(0deg) translateX(40px)
        rotate(0deg);
      -o-transform: translate(50%, 50%) rotate(0deg) translateX(40px)
        rotate(0deg);
      transform: translate(50%, 50%) rotate(0deg) translateX(40px) rotate(0deg);
    }
    to {
      -webkit-transform: translate(50%, 50%) rotate(360deg) translateX(40px)
        rotate(-360deg);
      -o-transform: translate(50%, 50%) rotate(360deg) translateX(40px)
        rotate(-360deg);
      transform: translate(50%, 50%) rotate(360deg) translateX(40px)
        rotate(-360deg);
    }
  }
  @keyframes translation {
    from {
      -ms-transform: translate(50%, 50%) rotate(0deg) translateX(40px)
        rotate(0deg);
      -moz-transform: translate(50%, 50%) rotate(0deg) translateX(40px)
        rotate(0deg);
      -webkit-transform: translate(50%, 50%) rotate(0deg) translateX(40px)
        rotate(0deg);
      -o-transform: translate(50%, 50%) rotate(0deg) translateX(40px)
        rotate(0deg);
      transform: translate(50%, 50%) rotate(0deg) translateX(40px) rotate(0deg);
    }
    to {
      -ms-transform: translate(50%, 50%) rotate(360deg) translateX(40px)
        rotate(-360deg);
      -moz-transform: translate(50%, 50%) rotate(360deg) translateX(40px)
        rotate(-360deg);
      -webkit-transform: translate(50%, 50%) rotate(360deg) translateX(40px)
        rotate(-360deg);
      -o-transform: translate(50%, 50%) rotate(360deg) translateX(40px)
        rotate(-360deg);
      transform: translate(50%, 50%) rotate(360deg) translateX(40px)
        rotate(-360deg);
    }
  }
`

export const WalkingCircles = styled.div<AnimationProps>`
  width: 100%;
  height: 100%;
  .rotation {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    border: 1px solid ${({ color }) => color};
    animation: carousel 4s infinite;
    animation-delay: calc(var(--timing) * -0.2s);
  }

  .circle-1 {
    --timing: 1;
  }
  .circle-2 {
    --timing: 2;
  }
  .circle-3 {
    --timing: 3;
  }
  .circle-4 {
    --timing: 4;
  }
  .circle-5 {
    --timing: 5;
  }
  .circle-6 {
    --timing: 6;
  }
  .circle-7 {
    --timing: 7;
  }
  .circle-8 {
    --timing: 8;
  }
  .circle-9 {
    --timing: 9;
  }
  .circle-10 {
    --timing: 10;
  }
  .circle-11 {
    --timing: 11;
  }
  .circle-12 {
    --timing: 12;
  }

  @keyframes carousel {
    from {
      transform: translate(-50%, -50%) rotateY(0deg) translateX(-100px)
        rotateY(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotateY(360deg) translateX(-100px)
        rotateY(-360deg);
    }
  }
`
