import {
    Wrapper,
    HomeLeft,
    HomeRight,
    IntroSection,
    Intro,
    Headline,
    About,
    Skills,
    Tools,
    Contact
  } from '../components/styles/IndexGrid.styled'
import FrontHeader from './FrontHeader'

const IndexGrid = () => {
  return (
    <>
    
    <Wrapper>
    <FrontHeader />
        
        <HomeLeft>
               <img
                 className='jt-img'
                 src='images/joshuatreeabout.png'
                 alt='joshua tree'
                 />
                 
               </HomeLeft>
 
               <HomeRight>

               <IntroSection> 
              <Intro>{"Hi there, I'm Elsa"}</Intro>         
              <Headline>{"I'm a web developer based in Joshua Tree, CA. I create niche websites and solutions for small business owners and creatives. "}</Headline>
              </IntroSection>
              
                <About>
                <img
                      className='portfolio-img'
                      src='images/portfolio-pic.jpg'
                      alt='portfolio pic'
                      width="180"
                      height="300"
                      />
   
                      {/* JUMP TO MARKER */}
                      <h2>About</h2> 
                <p> Im currently working as a freelance web developer while building up my own side projects.
                        I like to keep multiple hobbies and small business projects, and have created websites to keep track of my progress. My curiosity is what keeps me going, along with the desire to help other people with their endeavors.</p>
                </About>


                <Skills>

                <h3>Frontend Web Design</h3> 
                          <li>Colorful websites for creative niches and small businesses.</li>
                          <li>Quick and interactive styling</li>
                          <li>Effective SEO</li>

                <h3>Content Management</h3>  
                          <li>Currently using Sanity.io for content writing, image management, and backend data storage</li>
                          <li>I work one on one with customers to create the ideal website product</li>
                          <li>In my freetime, I also work and manage my
                            <a href="/websites">own projects</a>
                              </li> 
                </Skills>


                <Tools>tools</Tools>
                 latest

                <Contact>contact</Contact>





                
         </HomeRight>

         </Wrapper>
    </>
  )
}

export default IndexGrid