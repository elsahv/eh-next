import styled from 'styled-components'

export const Title = styled.h2`
text-align: center;
padding: 20px;

`
export const Description = styled.span`
 padding: 25px;
 font-size: 13px;
`


export const Wrapper = styled.div`
display: flex;
justify-content: center;
padding-top: 50px;
`

export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 370px);
grid-gap: 3em;
cursor: pointer;
.image {
    width: 100%;
    height: 215px;
    border-top: solid 2px black;
    border-bottom: solid 2px black;
}
`

export const PostTitles = styled.h4`
 font-size: 20px;
 padding: 5px;
 
`

export const GridSquare = styled.h4`
background: teal;
border: solid 2px black;
border-radius: 45px;
text-align: center;
height: 340px;
transition: all 0.3s ease;
&:hover{
    transform: rotate(3deg);
   }
   a {
       color: #000;
       text-decoration: none;
   }
`

export const Tags = styled.h4`
font-size: 12px;
`