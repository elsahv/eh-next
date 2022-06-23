import Head from 'next/head'
import Link from 'next/link'
import {
  Title,
  ProjectLink,
  LeftSide,
  RightSide,
} from '../../components/styles/CreativeProjects.styled'


const Projects = () => {
  return (
    <>
         <Head>
        <title>Elsa Hovey | Creative Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   <div className="main-grid">

     <LeftSide>
      <Title>Writing Projects</Title>

          <ProjectLink>
          <Link href="/creative-projects/on-finding-creativity"> 
      On Finding Creativity
            </Link>
            </ProjectLink>

          <ProjectLink>
          <Link href="/creative-projects/website-case-studies"> 
           Website Case Studies  
            </Link>
                </ProjectLink>
              </LeftSide>


     <RightSide>
       <Title>Web Dev Projects</Title>
      <ProjectLink>
        <Link href="/creative-projects/gallery"> 
      Graphic Arts Gallery
       </Link>
       </ProjectLink>
      <ProjectLink>
       <Link href="/creative-projects/javascript-css-gallery"> 
        Javascript Projects
       </Link>
       </ProjectLink>
       

     </RightSide>
   </div>
    </>
  )
}

export default Projects
