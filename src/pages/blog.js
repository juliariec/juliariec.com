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
      <div className="collection">
        <h1>Blog</h1>
        <div className="items">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Snippet node={node}></Snippet>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "MMMM D, YYYY")
            category
            type
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`

export default Blog
