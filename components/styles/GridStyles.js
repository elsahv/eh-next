import styled from 'styled-components'


//STYLES
export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 797px;  
grid-template-areas: 
'a b';
@media only screen and (max-width: 768px) {
 display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(2, 438px);
grid-template-areas: 
'a' 
'b';
}

`
export const LeftSide = styled.div`
 grid-area: a;
 border: solid 1px black; 
` 

export const RightSide = styled.div`
 grid-area: b;
 border: solid 1px black; 
`

//END STYLES