import styled from "@emotion/styled"
import { motion } from "framer-motion"

// BLOG POST
export const PostContainer = styled(motion.div)`
  margin: auto;
  max-width: ${({ theme }) => theme.screen.mobile_view};
  padding: 1rem;

  .markdown-container {
    // background-color: red;
    width: 100%;
    height: 100%;
  }
`

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
      background-color: ${({ theme }) => theme.colors.alternate_blue_5};
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
`
