/* eslint-disable @next/next/no-img-element */
import { sanityClient } from "../../client"
import { PortableText } from '@portabletext/react'

 
import {
  Title, 
  Wrapper
  } from '../../components/styles/Post.styled'


const Post = ({
  title,
  body
}) => {
  return (
    <>
      <Title>{title}</Title>
      <Wrapper>
          
      <PortableText value={body} />
      </Wrapper>
    </>
  ) 
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug

  const query = `*[_type in ["studyGuide", "miscProjects", ""] && slug.current == $pageSlug][0]{
    title,
    body
  }`

  const post = await sanityClient.fetch(query, { pageSlug })
  if (!post) {
    return {
      props: null,
      notFound: true,
    }
  } else {
    return {
      props: {
        title: post.title,
        body: post.body,
      },
    }
  }
}

export default Post
