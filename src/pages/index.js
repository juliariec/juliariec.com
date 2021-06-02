import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Tag from "../components/Tag"

const Homepage = ({ data }) => {
  return (
    <Layout
      title="Homepage"
      description={data.site.siteMetadata.description}
      article={false}
    >
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="post">
            <Link to={node.fields.slug}>
              <h1>{node.frontmatter.title}</h1>
            </Link>
            <p className="grey date">{node.frontmatter.date}</p>
            {Tag(node.frontmatter.tag)}
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: node.html }}
            />
            <hr />
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
          html
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            tag
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
