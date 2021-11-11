import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PostSnippet from "../components/PostSnippet"

export default function Blog({ data }) {
  const posts = data.allMarkdownRemark.edges
  const years = Array.from(
    new Set(posts.map(post => post.node.frontmatter.year))
  )

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
          {years.map(year => {
            const yearPosts = posts.filter(
              ({ node }) => node.frontmatter.year === year
            )
            return (
              <>
                <h2 key={year}>{year}</h2>
                {yearPosts.map(({ node }) => (
                  <PostSnippet key={node.id} node={node}></PostSnippet>
                ))}
              </>
            )
          })}
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
            date(formatString: "MMM D")
            year: date(formatString: "YYYY")
            category
            type
          }
          fields {
            slug
          }
          timeToRead
          excerpt(pruneLength: 180)
        }
      }
    }
  }
`
