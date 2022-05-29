import React from 'react'
 
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
          >  

      {/* //*********LEFT SIDE**************/}
        <LeftSection>
        <Title>Tools/ Programs Used</Title>
        </LeftSection>
       {/* //********************************/}


        {/* //*********RIGHT SIDE**************/}
              <RightSection>
              <Title>What I do</Title>
        
              </RightSection>
            {/* //********************************/}
          </div>

 
    
    </>
  );
}