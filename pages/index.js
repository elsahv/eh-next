import Head from 'next/head'
import Image from 'next/image'

import { sanityClient, urlFor } from "../client"
import {
  Wrapper,
  JtImg,
  HomeLeft,
  HomeRight,
  IntroSection,
  Intro,
  Headline,
  About,
  Content,
  Skills,
  ToolsTitle,
  Contact,
  Grid,
  ToolsWrapper,
  SkillsTitle,
  // PortfolioImg
} from '../components/styles/IndexGrid.styled'
import IndexHeader from '../components/IndexHeader'
import ContactForm from '../components/ContactForm'
  

export default function Home({posts}) {
  return (
    <>
    <div>
      <Head>
        <title>Elsa Hovey | Development/ Design</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <HomeLeft>
          <IndexHeader />
              <JtImg>
               <Image
                 className='jt-img'
                 src='/images/joshuatreeabout.png'
                 alt='joshua tree'
                 width="970"
                 height="460"
                 />
                 </JtImg>
               </HomeLeft>
 
               <HomeRight>
                {/* RECENT PROJECTS
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nihil esse ipsam iste eos eum excepturi quae odio, itaque sed libero beatae architecto tempora, quas voluptatibus quam officiis maiores deserunt? */}
               <IntroSection id="aboutJump"> 
              <Intro>{"Hi there, I'm Elsa"}</Intro>         
              <Headline>{"I'm a web developer based in Joshua Tree, CA. I create niche websites and solutions for small business owners and creatives. "}</Headline>
              </IntroSection>

                <About>
                  {/* <PortfolioImg> */}
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


                <Skills>
                  <SkillsTitle>Skills</SkillsTitle>
               <ul>
                <h3>- Frontend Web Design</h3> 
                          <li>Colorful websites for creative niches and small businesses.</li>
                          <li>Quick and interactive styling</li>
                          <li>Effective SEO</li>
                          </ul> 

                <ul>
                <h3>- Content Management</h3>  
                          <li>Currently using Sanity.io for content writing, image management, and backend data storage</li>
                          <li>I work one on one with customers to create the ideal website product</li>
                          <li>In my freetime, I also work and manage my
                             own projects
                              </li> 
                          </ul>
                </Skills>


                <ToolsWrapper>
                <ToolsTitle>Tools</ToolsTitle>  

                   <Grid>
                      {posts &&
                      posts.map((post, index) => (   
                        <span key={index}>
                              <img
                              className="img"
                              src={urlFor(post.icon)}
                              alt=""
                              />
                                <h2>{post.name}</h2>
                        </span>
                        ))}
                      </Grid>

                      </ToolsWrapper>


                 {/* JUMP TO MARKER */}
                <Contact id="contactJump">
                  <ContactForm />
                  </Contact>

                
         </HomeRight>

         </Wrapper>
    </div>

    </>
  )
}
  


export const getServerSideProps = async() => {
  const query = '*[ _type == "skills"] | order(_createdAt desc)[0..9]'
  const posts = await sanityClient.fetch(query)

  if (!posts.length) {
    return {
      props: {
        posts: [],
      },
    }
  } else {
    return {
      props: {
        posts,
      },
    }
  }
}
 
