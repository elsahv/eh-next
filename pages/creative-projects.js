import React from 'react'
import Link from 'next/link'
import { FiArrowDown } from "react-icons/fi";
import {
  Title,
  ProjectLink,
  LeftSide,
  RightSide,
  CTA,
  ArrowStyles
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
       <CTA>
          I update my projects weekly... Subscribe for post updates!
          <ArrowStyles>
          <FiArrowDown />
          </ArrowStyles>
          </CTA>

     </RightSide>
   </div>
    </>
  )
}

export default Projects
