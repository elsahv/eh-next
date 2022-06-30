import styled from 'styled-components'


//STYLES
export const Grid = styled.div`
margin-top: 155px;
border: solid 2px black;
background: #3aa1aa;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 500px;  
grid-template-areas: 
'a b';


@media only screen and (max-width: 1024px) {
 display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(2, 438px);
grid-template-areas: 
'a' 
'b';
}
@media only screen and (max-width: 768px) {
    display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: repeat(2, 238px);
   grid-template-areas: 
   'a' 
   'b';
   }

`
export const LeftSide = styled.div`
 grid-area: a;
 border-right: solid 1px black; 
` 

export const RightSide = styled.div`
 grid-area: b;
 border-left: solid 1px black; 
`

//END STYLES