
import styled from "styled-components";


export const Wrapper = styled.div`
 display: flex;
 justify-content: center;

@media only screen and (max-width: 968px) {

}

@media only screen and (max-width: 768px) {

}
`;




export const LeftSection = styled.div`
grid-area: a;
border-right: solid 2px black;
height: 737px;

@media only screen and (max-width: 968px) {
    height: 797px;

}

@media only screen and (max-width: 768px) {
height: 450px;
grid-area: a;
border: none;
}
`;


export const RightSection = styled.div`
grid-area: b;
a {
    color: black;
}
a:hover {
    color: aquamarine;
    transition: 1s;
}
@media only screen and (max-width: 768px) {
grid-area: b;
}
`;

export const Title = styled.div`
text-align: center;
padding: 25px;
font-size: 25px;
color: aquamarine;
@media only screen and (max-width: 768px) {
    margin-top: 105px;
    padding: 0;
    font-size: 35px;

}   
`

 

export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 1em;
.img {
    background: teal;
    border-radius: 25px;
    width: 85px;
    height: 85px;
    margin: 0;
    padding: 0;
}
@media only screen and (max-width: 768px) {
 

}   
`
