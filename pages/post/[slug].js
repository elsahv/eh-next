import React from 'react'
import { sanityClient } from '../../client'
import { PortableText } from '@portabletext/react'
import styled from 'styled-components'



//STYLES
const Wrapper = styled.div`
padding: 75px;
background: #3aa1aa;
font-size: 18px;

@media only screen and (max-width: 1024px) {
  margin: 80px 20px;
}
`

const Title = styled.h2`
margin: 10px 0;
`

//END STYLES


const post = ({
  title,
  body,
}) => {
  return (
    <>
    <Wrapper>
    <Title>{title}</Title>
    <PortableText value={body} />
    </Wrapper>
    </>
  )
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug

  const query = `*[_type in ["post"] && slug.current == $pageSlug][0]{
    title,
    // mainImage,
    body
  }`

  const post = await sanityClient.fetch(query, { pageSlug})

  if (!post) {
    return {
      props: null,
      notFound: true,
    } 
  } else {
    return {
      props: {
        title: post.title,
        // mainImage: post.mainImage,
        body: post.body,
      },
    }
  }
}
 
export default post