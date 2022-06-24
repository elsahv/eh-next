
import styled from "styled-components";


export const Wrapper = styled.div`
 display: flex;
 justify-content: center;

@media only screen and (max-width: 968px) {
margin: 0;
}

@media only screen and (max-width: 768px) {

}
`;




export const LeftSection = styled.div`
grid-area: a;
border-right: solid 2px black;

@media only screen and (max-width: 1024px) {
    background: red;

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
margin-top: 45px;
.img {
    background: teal;
    border-radius: 25px;
    width: 85px;
    height: 85px;
}
@media only screen and (max-width: 1024px) {
 

}   
`
export const SkillsTitle = styled.div`
height: 50px;
display: flex;
justify-content: center;
align-items: center;

@media only screen and (max-width: 768px) {
 

}   
`

 
export const Skills = styled.div`
margin: 15px;
h3 {
    font-size: 25px;
    text-shadow: 1px 1px 1px teal;
}
ul {
    margin: 55px;
    font-size: 18px;
}
li {
    margin: 10px 15px;
}
`

 