import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Snippet from "../components/snippet"

const Homepage = ({ data }) => {
  return (
    <Fragment>
      <Layout
        title="Homepage"
        description={data.site.siteMetadata.description}
        article={false}
      >
        <div>
          <h1>Posts</h1>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Snippet node={node}></Snippet>
          ))}
        </div>
      </Layout>
    </Fragment>
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
            date(formatString: "DD MMM YYYY")
          }
          fields {
            slug
          }
          excerpt(pruneLength: 200)
        }
      }
    }
    site {
      siteMetadata {
        author
        description
        title
        url
      }
    }
  }
`

export default Homepage
