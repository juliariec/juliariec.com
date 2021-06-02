import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Content from "../components/Content"
import Extension from "../components/Extension"

const Post = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext
  return (
    <Layout
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      article={true}
    >
      <Content post={post} />
      <Extension previous={previous} next={next} />
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        tag
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default Post
