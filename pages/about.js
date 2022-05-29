import { sanityClient, urlFor } from "../client"

import {
LeftSection,
RightSection,
Title,
Wrapper,
Grid,
SkillsTitle
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
 