import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Cormorant Garamond', serif;
  }

  body {
  }

  p {
    line-height: 1.5;
  }

  .main-container {
    width: 100%;
    height: 740px;
    background: #3aa1aa;
    border-top: solid 2px black;  
    border-bottom: solid 2px black;  
}

.main-grid {
  list-style: none;   
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 695px;
grid-template-areas:
'a b';
}
`




export default GlobalStyles
