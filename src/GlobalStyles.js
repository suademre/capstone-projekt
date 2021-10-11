import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
}
* {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
}

`
export default GlobalStyles
