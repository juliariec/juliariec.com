import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PostSnippet from "../components/PostSnippet"
import postCategories from "../data/categories"
import Tag from "./Tag"

const Posts = () => {
  const data = useStaticQuery(
    graphql`
      query getPosts {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
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
  const ALL_CATEGORIES = "all"
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES)

  const handleSelectCategory = category => {
    if (activeCategory !== category) setActiveCategory(category)
    else setActiveCategory(ALL_CATEGORIES)
  }

  return (
    <>
      <div className="collection">
        <h1>Blog</h1>
        <p className="grey">{data.allMarkdownRemark.totalCount} posts</p>
        <div className="browse">
          <p>
            Browse by category: &nbsp;
            {[ALL_CATEGORIES].concat(postCategories).map(category => {
              return (
                category !== "books" && (
                  <Tag
                    key={category}
                    category={category}
                    isActive={activeCategory === category}
                    onClick={() => handleSelectCategory(category)}
                  />
                )
              )
            })}
          </p>
        </div>
        <div className="items">
          {years.map(year => {
            const yearPosts = posts.filter(
              ({ node }) =>
                node.frontmatter.year === year &&
                (activeCategory === ALL_CATEGORIES ||
                  activeCategory === node.frontmatter.category)
            )
            return (
              <>
                {yearPosts.length > 0 ? <h2 key={year}>{year}</h2> : null}
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
