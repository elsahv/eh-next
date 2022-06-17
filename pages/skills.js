import { sanityClient, urlFor } from "../client"

import {
LeftSection,
RightSection,
Title,
Wrapper,
Grid,
SkillsTitle,
Skills
// Icon
}
from "../components/styles/About.styled";





export default function About({posts}) {
  return (
    <>
          <div className="main-grid">  
        <LeftSection>
        <Title>Tools/ Programs Used</Title>
        <Wrapper>
        <Grid>
       {posts &&
        posts.map((post, index) => (   
          <span key={index}>
            <SkillsTitle>{post.name}</SkillsTitle>
                <img
                 className="img"
                 src={urlFor(post.icon)}
             
                 />
          </span>
          ))}
              </Grid>
          </Wrapper>
        </LeftSection>


              <RightSection>
              <Title>What I do</Title>


                       <Skills> 
                  <ul>
                  <h3>Frontend Web Design</h3> 

                          <li>Colorful websites for creative niches and small businesses.</li>
                          <li>Quick and interactive styling</li>
                          <li>Effective SEO</li>
                      </ul>  
             
 
                <ul>
                <h3>Content Management</h3>  

                          <li>Currently using Sanity.io for content writing, image management, and backend data storage</li>
                          <li>I work one on one with customers to create the ideal website product</li>
                          <li>In my freetime, I also work and manage my
                            <a href="/websites">own projects</a>
                              </li>
                      
                      </ul> 
                      </Skills>

              </RightSection>
          </div>
    </>
  );
}


export const getServerSideProps = async () => {
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
 