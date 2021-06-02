import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Snippet from "../components/Snippet"

const Blog = ({ data }) => {
  return (
    <Layout
      title="Blog"
      description="A list of all of the posts published on this blog."
      article={false}
    >
      <div className="blog">
        <h1>All Posts</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Snippet node={node}></Snippet>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "MMM DD, YYYY")
            tag
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Blog
