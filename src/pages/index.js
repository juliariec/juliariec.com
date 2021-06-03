import React from "react"
import { Link, graphql } from "gatsby"
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
            <Content node={node} link={true} />
            <hr />
          </>
        ))}
        <Link to="/blog/">See All Posts &#8594;</Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      limit: 3
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
            date(formatString: "MMM DD, YYYY")
            category
            type
          }
          fields {
            slug
          }
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
