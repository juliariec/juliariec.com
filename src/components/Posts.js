import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PostSnippet from "../components/PostSnippet"
import Tag from "../components/Tag"
import postCategories from "../data/categories"

const Posts = () => {
  const data = useStaticQuery(
    graphql`
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
            }
          }
        }
      }
    `
  )

  const posts = data.allMarkdownRemark.edges
  const years = Array.from(
    new Set(posts.map(post => post.node.frontmatter.year))
  )

  return (
    <>
      <div className="collection">
        <h1>Blog</h1>
        <p className="grey">{data.allMarkdownRemark.totalCount} posts</p>
        <div className="browse">
          <p>
            Browse by category: &nbsp;
            {postCategories.map(category => {
              return (
                category !== "books" && (
                  <Tag key={category} category={category} />
                )
              )
            })}
          </p>
        </div>
        <div className="items">
          {years.map(year => {
            const yearPosts = posts.filter(
              ({ node }) => node.frontmatter.year === year
            )
            return (
              <>
                <h2 key={year}>{year}</h2>
                {yearPosts.map(({ node }) => (
                  <PostSnippet key={node.id} node={node} />
                ))}
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Posts
