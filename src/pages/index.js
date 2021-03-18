import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const Homepage = ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>Posts</h1>
        <p>You can read all my piping hot takes here.</p>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>{node.frontmatter.title} </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
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
            date(formatString: "DD MMM YYYY")
          }
          fields {
            slug
          }
          excerpt(pruneLength: 175)
        }
      }
    }
  }
`

export default Homepage
