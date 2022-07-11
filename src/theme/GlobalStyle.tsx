import { createGlobalStyle } from "styled-components"
import { theme } from './Theme'

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #__next {
    min-height: 100vh;
    height: 100%;
  }
  
  body {
    background-color: ${theme.colors.base_0};
    font-family: ${theme.fonts.baseFontFamily};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: ${theme.colors.base_100};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  input, a {
    font-size: 16px;
    line-height: 24px;
    color: ${theme.colors.base_100};
  }

  a {
    font-size: 14px;
    line-height: 16px;
    color: ${theme.colors.primary};
    text-decoration: none;
  }

  button {
    border: 0;
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }

  h1, h2, h3, h4, h5, p {
    padding: 0;
    margin: 0;
  }

  ol, ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`
