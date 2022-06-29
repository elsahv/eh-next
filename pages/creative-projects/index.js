import Head from 'next/head'
import Link from 'next/link'
import {
  Grid,
  LeftSide,
  RightSide
  } from '../../components/styles/GridStyles.js'

  import styled from 'styled-components'


  //STYLES

  export const Title = styled.h2`
  text-align: center;
  margin-top: 170px;
  padding: 15px;
  background: #3aa1aa;
  border: solid 2px black;
  `

  const GridTitle = styled.div`
  font-size: 35px;
     color: #007ba5;
     text-align: center;
     text-decoration: underline;
     padding-top: 105px;
     @media only screen and (max-width: 768px) {
       font-size: 30px;
     }
  `
 
  const ProjectLink = styled.div`
  text-align: center;
  margin: 45px;
  cursor: pointer;
  a {
    text-decoration: none;
   color: aquamarine;
  font-size: 30px;
  }
  a:hover {
    color: #fff;
    transition: 1s;
    text-decoration: underline;
  }
  }
  @media only screen and (max-width: 768px) {
    margin: 15px;
    a{
    }
   }
  `
  //END STYLES







const Projects = () => {
   return (
     <>
     <Head>
     <title>Elsa Hovey | Creative Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


       <Title>Creative Projects</Title>
     <Grid>
      <LeftSide>
      <GridTitle>Writing Projects</GridTitle>

          <ProjectLink>
          <Link href="/creative-projects/on-finding-creativity"> 
            Css Gallery
            </Link>
            </ProjectLink>

          <ProjectLink>
          <Link href="/creative-projects/website-case-studies"> 
           Website Templates
            </Link>
                </ProjectLink>
      </LeftSide> 
      
 
       
      <RightSide>
          <GridTitle>Javascript Projects</GridTitle>
      <ProjectLink>
        <Link href="/creative-projects/gallery"> 
      Data Stuctures and Algorithms
       </Link>
       </ProjectLink>
      <ProjectLink>
       <Link href="/creative-projects/javascript-css-gallery"> 
        Practice Problems 
       </Link>
       </ProjectLink>
       

     </RightSide>
     </Grid>



     </>
   )
 }
 
 
export default Projects
