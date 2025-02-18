import { createGlobalStyle } from "styled-components"

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
}

export const colors = {
  primaryColor: "#d8b994",
  secundaryColor: '#a98460',
  titleColor: 'rgb(53, 51, 44)',
  textColor: '#fff'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #423f32;
    list-style: none;
    font-family: Roboto, sans-serif;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  html, body {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
`
