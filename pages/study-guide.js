/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from "next/link"

import { sanityClient, urlFor } from "../client"

import {
Title, 
Wrapper,
Grid,
PostTitles,
} from '../components/styles/StudyGuide.styled'




export default function Home({posts}) {
  return (
    <>  
      <Head>
        <title>Elsa Hovey | Study Guide</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>     
      
     <Title>Study Guide</Title>
     <Wrapper> 
       <Grid>
       {posts &&
        posts.map((post, index) => (   
          <span key={index}>
            <Link href={`post/${post.slug.current}`}>
            <div>
          <PostTitles>{post.title}</PostTitles>
          <img 
               src={urlFor(post.imgUrl)}
               alt="main pic"
               className="image"
               width="300"
               height="250"
               />
          </div>
          </Link>
          </span>
          ))}
          </Grid>
          </Wrapper>
    </>
  )
}


export const getServerSideProps = async () => {
  const query = '*[ _type == "studyGuide"] | order(_createdAt desc)[0..9]'
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
 