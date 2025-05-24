import { css } from "styled-components";

export const reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  blockquote {
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    list-style: none;
  }

  body {
    line-height: 1.5;
    font-family: "Noto Sans KR", sans-serif;
    background-color: #f5f5f5;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
