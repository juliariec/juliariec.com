import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Layout from "./layout"

const Post = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Fragment>
      <Layout
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        article={true}
      >
        <div>
          <h1>{post.frontmatter.title}</h1>
          <p className={"date"}>Published {post.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    </Fragment>
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
