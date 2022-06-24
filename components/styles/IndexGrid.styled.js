import styled from 'styled-components'




//STYLES
export const HomeLeft = styled.div`
.jtpic{
    grid-area: a;
    padding-top: 152px;
    border-right: solid 2px black;
}
.jt-img {
  width: 100%;
}

@media only screen and (max-width: 968px) {
  .jtpic{
    grid-area: a;
   width: 100%;

}
.jt-img {
  height: 309px;
  width: 100%;
}
}

  @media only screen and (max-width: 768px) {
  .jtpic {
    grid-area: b;
    border-right: none;
    padding-top: 5px;
  }
    .jt-img {
      height: 770px;
      width: 1500px;
      padding-right: 550px;
    }
  }
`

export const HomeRight = styled.div`
@media only screen and (min-width: 769px) {
  grid-area: b;
  display: flex; 
  align-itemDescriptions: center;
  flex-direction: column;
  padding-top: 235px;
  .intro{
      color: #007ba5;
      font-size: 35px;
      text-align: center;
  }
  .about-me{
       color: aquamarine;
       text-align: center;
       cursor: pointer;
       font-size: 25px;
       margin: 5px 30px;
  }
  .about-btn{
      color: #007ba5;
      text-decoration: underline;
      font-size: 30px;
  }
  .about-btn:hover{
      color: aquamarine;
      transition: 2s;
      cursor: pointer;
  }
  button {
  background: #3aa1aa;
  border: none;
    text-decoration: underline;
    color: #007ba5; 
  font-size: 35px;
  cursor: pointer;
  padding: 9px;
  font-weight: bold;
  &:hover {
    color: aquamarine;
    transition: 2s;
  }
  }
}
 

@media only screen and (max-width: 768px) {
  grid-area: a; 
   padding: 20px;
   .intro{
    color: #007ba5;
    font-size: 40px;
    margin-top: 25px;
    line-height: 1.5em;
    margin-bottom: 20px;
}


.about-me{  
  color: aquamarine;
  text-align: center;
  cursor: pointer;
  font-size: 27px;
  line-height: 1.5em;
}

.about-btn{
  color: #007ba5;
  text-decoration: underline;
  padding: 5px;
}
 
 
button {
  font-weight: 900;
  background: #3aa1aa;
  border: none;
    text-decoration: underline;
    color: #007ba5; 
  font-size: 40px;
  cursor: pointer;
  margin: 5px;
}
}
`
