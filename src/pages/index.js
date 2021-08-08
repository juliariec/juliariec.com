import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Content from "../components/Content"

const Homepage = ({ data }) => {
  return (
    <Layout
      title="Homepage"
      description={data.site.siteMetadata.description}
      article={false}
    >
      <div className="posts">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <>
            <Content key={node.id} node={node} link={true} />
            <hr key={`hr-${node.id}`} />
          </>
        ))}
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
          html
          frontmatter {
            title
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
