/* eslint-disable @next/next/no-img-element */
import { sanityClient } from "../../client"
import { PortableText } from '@portabletext/react'

 
import {
  Title, 
  Wrapper
  } from '../../components/styles/Post.styled'


const Category = ({
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

  const query = `*[_type in "category"]{
    title,
    body  
  }`

  const category = await sanityClient.fetch(query, { pageSlug })
  if (!category) {
    return {
      props: null,
      notFound: true,
    }
  } else {
    return {
      props: {
        title: category.title,
        body: category.body,
      },
    }
  }
}

export default Category
