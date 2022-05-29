import React from 'react'
import Link from 'next/link'

import {
  Title,
  ProjectLink,
  LeftSide,
  RightSide
} from '../components/styles/CreativeProjects.styled'


const Projects = () => {
  return (
    <>
   <div className="main-grid"
           data-aos='fade-left'
           data-aos-duration='1000'
           data-aos-once='true'
           data-aos-anchor-placement='center bottom'>

     <LeftSide>
      <Title>Writing Projects</Title>

<ProjectLink>
<Link href="/"> 
On Finding Creativity- Blog 
  </Link>
  </ProjectLink>

 <ProjectLink>
<Link href="/"> 
 Case Studies/ Growth
  </Link>
       </ProjectLink>
     </LeftSide>
     <RightSide>
   

       <Title>Design/ Development Resources</Title>
      <ProjectLink>
        <Link href="/study-guide"> 
       Technical Interview study guide- computer science and javascript notes
       </Link>
       </ProjectLink>
      <ProjectLink>
       <Link href="/misc-projects"> 
         Misc Projects
       </Link>
       </ProjectLink>
     </RightSide>
   </div>
    </>
  )
}

export default Projects
