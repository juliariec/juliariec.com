import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Snippet from "../components/Snippet"

const PageList = ({ data }) => {
  return (
    <Layout
      title="Pages"
      description="A list of all of the pages published on this blog."
      article={false}
    >
      <div className="collection">
        <h1>Pages</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Snippet node={node}></Snippet>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "page" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "MMM D, YYYY")
            category
            type
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default PageList
