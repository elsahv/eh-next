/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {
  LeftSection,
  Bio,
  Title,
  RightSection
} from "../components/styles/Contact.styled";



const Contact = () => {
  return (
    <>
      <div className="main-grid"
         data-aos='fade-left'
         data-aos-duration='1000'
         data-aos-once='true'
         data-aos-anchor-placement='center bottom'
      >
        <LeftSection>
          <img
            className='portfolio-img'
            src='images/portfolio-pic.jpg'
            alt='portfolio pic'
            width="300"
            height="477"
            />
              <Bio>
                <Title>Hello! Im Elsa.</Title>
               <p> Im currently working as a freelance web developer while building up my own side projects.
              I like to keep multiple hobbies and small business projects, and have created websites to keep track of my progress. My curiosity is what keeps me going, along with the desire to help other people with their endeavors.</p>
              </Bio>
        </LeftSection>

            <RightSection>
              email form
            </RightSection>
      </div>
    </>
  )
}

export default Contact