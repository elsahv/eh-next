import React from 'react'
// import Tools from '../../components/Tools'
// import Skills from '../../components/Skills'
import {
LeftSection,
RightSection,
Title,
}
from "../components/styles/Contact.styled";





export default function About() {
  return (
    <>
          <div className="main-grid"
                  data-aos='fade-left'
                  data-aos-duration='1000'
                  data-aos-once='true'
                  data-aos-anchor-placement='center bottom'
          >  

      {/* //*********LEFT SIDE**************/}
        <LeftSection>
        <Title>Tools/ Programs Used</Title>
        {/* map skills here */}
        </LeftSection>
       {/* //********************************/}


        {/* //*********RIGHT SIDE**************/}
              <RightSection>
              <Title>What I do</Title>
{/* 
              <div> 
                  <h3>Frontend Web Design</h3> 
                  <ul>
                          <li>Colorful websites for creative niches and small businesses.</li>
                          <li>Quick and interactive styling</li>
                          <li>Effective SEO</li>
                      </ul>  
                  </div>
                <div>
                <h3>Content Management</h3>  
                <ul>
                          <li>Currently using Sanity.io for content writing, image management, and backend data storage</li>
                          <li>I work one on one with customers to create the ideal website product</li>
                          <li>In my freetime, I also work and manage my
                            <a href="/websites">own projects</a>
                              </li>
                      </ul> 
                </div> */}
              </RightSection>
            {/* //********************************/}
          </div>

 
    
    </>
  );
}