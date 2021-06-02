import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Tag from "../components/Tag"
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
      <div className="post">
        <h1>{post.frontmatter.title}</h1>
        <p className="grey date">{post.frontmatter.date}</p>
        {Tag(post.frontmatter.tag)}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <Extension previous={previous} next={next} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
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
