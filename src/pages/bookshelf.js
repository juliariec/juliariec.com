import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import BookSnippet from "../components/BookSnippet"

const Bookshelf = ({ data }) => {
  return (
    <Layout
      title="Bookshelf"
      description="A list of books I've read."
      article={false}
    >
      <div className="collection">
        <h1>Bookshelf</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BookSnippet node={node}></BookSnippet>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "book" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            author
            description
            date(formatString: "MMMM D, YYYY")
            type
            category
            rating
            pages
            review
            notes
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Bookshelf
