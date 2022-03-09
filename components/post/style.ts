import { css } from "@emotion/react";
import styled from "@emotion/styled";

// BLOG POST
export const PostContainer = styled.div`
  margin: auto;
  max-width: ${({ theme }) => theme.screen.phone_view};
  padding: 1rem;
`;

export const PostTitleStyle = styled.h1`
  margin: 4rem auto;
  font-size: 4rem;
  line-height: 1;

  ${({ theme }) => theme.screen.mq.mobile} {
    font-size: 3rem;
  }
`;
