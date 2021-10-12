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

body{
    font-size: 0.825rem;
    font-weight: 300px;
    line-height: 1.22;
    color: #353532;
    text-align: left;
    overflow-x: hiddens;
    background-color: #f2f3ee;
}

`
export default GlobalStyles
