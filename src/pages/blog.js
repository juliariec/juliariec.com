import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PostSnippet from "../components/PostSnippet"

export default function Blog({ data }) {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout
      title="Blog"
      description="A list of all of the posts published on this blog."
      article={false}
    >
      <div className="collection">
        <h1>Blog</h1>
        <p className="grey">{data.allMarkdownRemark.totalCount} posts</p>
        <div className="items">
          {posts.map(({ node }) => (
            <PostSnippet key={node.id} node={node}></PostSnippet>
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
          excerpt(pruneLength: 190)
        }
      }
    }
  }
`
