import Head from 'next/head'
import styled from 'styled-components'
import SubscribeForm from '../components/SubscribeForm'





//STYLES 

 const Wrapper = styled.div`
 width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  
  ul {
    margin: 55px;
  }
 ` 

 const Title = styled.h2`
 display: flex;
 justify-content: center;
 padding: 20px;
`


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;  
  grid-template-areas: 
  'a b';
`


const LeftSide = styled.div`
border-right: solid 2px #000;
display: flex;
justify-content: center;
padding-top: 70px;
p {
  font-size: 20px;  
}
`

const RightSide = styled.div``



 const PostTitle   = styled.div`
 font-weight: bold;
 font-size: 30px;
 text-decoration: underline;
 color: #007ba5;

`

const Date = styled.div`

`

const Description = styled.div`
width: 800px;
font-size: 20px;
`

const SubscribeWrapper = styled.div`
border: solid 2px black;
background: #3aa1aa;
height: 280px;
width: 700px;
h2 {
  text-align: center;
  padding: 25px;
}
p {
  padding: 20px;
}
`





//END STYLES


 



 const Projects = () => {
   return (
     <>
     <Head>
        <title>Elsa Hovey | Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <Wrapper>
       <Title>Recent Posts</Title>

     <Grid>


     <LeftSide>
      <SubscribeWrapper>
      <Title>Subscribe Form</Title>

      <p>I write about my progress as a web developer, and document my projects.</p>

       <SubscribeForm />
       </SubscribeWrapper>      
       </LeftSide>


       <RightSide>
       <ul>
        <PostTitle>Post Title 1</PostTitle>
        <Date>6/30/22</Date>
        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ex a ut dolorem dignissimos sequi voluptas blanditiis, at aliquam eius numquam! Culpa, architecto doloribus minima dolorem rerum dolor ipsam ipsum!</Description>
       </ul>

       <ul>
        <PostTitle>Post Title 2</PostTitle>
        <Date>7/4/22</Date>
        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ex a ut dolorem dignissimos sequi voluptas blanditiis, at aliquam eius numquam! Culpa, architecto doloribus minima dolorem rerum dolor ipsam ipsum!</Description>
       </ul>

       <ul>
        <PostTitle>Post Title 3</PostTitle>
        <Date>7/10/22</Date>
        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ex a ut dolorem dignissimos sequi voluptas blanditiis, at aliquam eius numquam! Culpa, architecto doloribus minima dolorem rerum dolor ipsam ipsum!</Description>
       </ul>

       <ul>
        <PostTitle>Post Title 4</PostTitle>
        <Date>7/20/22</Date>
        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ex a ut dolorem dignissimos sequi voluptas blanditiis, at aliquam eius numquam! Culpa, architecto doloribus minima dolorem rerum dolor ipsam ipsum!</Description>
       </ul>
       </RightSide>



       </Grid>
 
       </Wrapper>
     </>
   )
 }
  
 

 export default Projects