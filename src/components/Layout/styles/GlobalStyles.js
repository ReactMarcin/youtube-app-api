import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *,*::after,*::before{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Lato', sans-serif;
    }
`
export default GlobalStyles