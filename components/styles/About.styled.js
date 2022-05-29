
import styled from "styled-components";




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

 