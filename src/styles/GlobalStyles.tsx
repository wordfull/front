import { createGlobalStyle } from 'styled-components'
import theme from 'styles/theme'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    background-color: ${theme.default.base};
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
  }
`

export default GlobalStyle
