import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  ${normalize}
  body {
    display: flex;
    min-height: 100vh;
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    text-decoration: none;
  
    div {
      width: 100%;
    }

    #background1 {
      background-image: url("/images/capcom.jpg");
    }
  }
`
export default GlobalStyle

    /* font-family:  ${({ theme }) => theme.fontFamily};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background}; */