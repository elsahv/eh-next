import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Cormorant Garamond', serif;
  }

  p {
    line-height: 1.5; 
  }

  .main-container {
    width: 100%;
    height: 700px;
    background: #3aa1aa;
    border-top: solid 2px black;  
    border-bottom: solid 2px black;

    @media only screen and (max-width: 1024px) {
    height: 1000px;
    overflow: hidden;

    }

    @media only screen and (max-width: 810px) {
      height: 850px;
      }
      
      @media only screen and (max-width: 500px) {
        height: 1000px;
        }
    
}

.main-grid {
  list-style: none;   
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 695px;
grid-template-areas:
'a b';
@media only screen and (max-width: 768px) {
  list-style: none;   
  display: grid;
  grid-template-columns: 1fr;
  // grid-template-rows: 695px;
  grid-template-areas:
  'a'
  'b';
}
}
`




export default GlobalStyles
