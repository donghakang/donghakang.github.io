import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

// BLOG POST
export const PostContainer = styled(motion.div)`
  margin: auto;
  max-width: ${({ theme }) => theme.screen.mobile_view};
  padding: 1rem;
`;

export const PostTitleStyle = styled(motion.div)`
  margin: 4rem auto;

  h1 {
    font-size: 4rem;
    line-height: 1;
  }

  .title-info {
    display: flex;
    align-items: center;
    
    .memoji {
      background-color: greenyellow;
      border-radius: 50px;
    }

    * {
      margin: 0.4rem;
    }
  }

  ${({ theme }) => theme.screen.mq.mobile} {
    h1 {
      font-size: 3rem;
    }
  }
`;
