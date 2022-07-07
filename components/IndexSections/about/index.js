import {
    IntroSection,
    Intro,
    Headline,
    Content,
    About,
} from './about.styled.js'

const about = () => {
  return (
    <>
      <IntroSection id="about"> 
              <Intro
                data-aos='fade-right'
                data-aos-duration='1000'
                data-aos-once='true'
                data-aos-anchor-placement='center bottom'
              >{"Hi there, I'm Elsa"}</Intro>         
              <Headline>{"I'm a web developer based in Joshua Tree, CA. I create niche websites and solutions for small business owners and creatives. "}</Headline>
              </IntroSection>

                <About>
                <img
                      className='portfolio-img'
                      src='/images/portfolio-pic.jpg'
                      alt='portfolio pic'
                      />
            
                      
                      <Content>
                       <h2>About</h2>  
                <p> Im currently working as a freelance web developer while building up my own side projects.
                        I like to keep multiple hobbies and small business projects, and have created websites to keep track of my progress. My curiosity is what keeps me going, along with the desire to help other people with their endeavors.</p>
                        </Content>
                </About>
    </>
  )
}

export default about