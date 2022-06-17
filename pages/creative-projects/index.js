import React from 'react'
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
       <Title>Creative Projects</Title>
      <ProjectLink>
        <Link href="/creative-projects/big-o-notation-data-algorithms-structures"> 
       Big O Notation, Algorithms, Data Structures
       </Link>
       </ProjectLink>
      <ProjectLink>
       <Link href="/creative-projects/javascript-css-gallery"> 
        Javascript/ Css Gallery
       </Link>
       </ProjectLink>
       

     </RightSide>
   </div>
    </>
  )
}

export default Projects
