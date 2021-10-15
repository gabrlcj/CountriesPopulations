import { createGlobalStyle } from 'styled-components'
import { Theme } from '../@types/types'

export const GlobalStyles = createGlobalStyle`
  :root {
    // Dark mode
    --dark-mode-elements: hsl(209, 23%, 22%);
    --dark-mode-bg: hsl(207, 26%, 17%);

    // Light mode
    --light-mode-text: hsl(200, 15%, 8%);
    --input: hsl(0, 0%, 52%);
    --light-mode-bg: hsl(0, 0%, 98%);

    --white-color: hsl(0, 0%, 100%); 
  }

  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${({ theme }: Theme) => theme.background};
    color: ${({ theme }: Theme) => theme.text};
    font: 300 1rem 'Nunito Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    transition: all 0.50s linear;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 800;
  }

  li, ul {
    list-style: none;
  }

  img {
    width: 280px;
    height: 160px;
  }

  button  {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
  }

  input {
    outline: none;
  }
`
