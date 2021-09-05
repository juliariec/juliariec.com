import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import CategorySnippet from "../components/CategorySnippet"
import postCategories from "../data/categories"

const Homepage = ({ data }) => {
  return (
    <Layout
      title="Homepage"
      description={data.site.siteMetadata.description}
      article={false}
    >
      <div className="intro">
        <div className="photo">
          <StaticImage src="../images/julia.jpg" alt="Photo of Julia" />
        </div>
        <div className="words">
          <p>
            I'm Julia, and this site is where I share my thoughts on books,
            software, and life.
          </p>
          <p>
            You can read <Link to="/about">about me</Link>, see what I'm up to{" "}
            <Link to="/now">now</Link>, browse my <Link to="/blog">blog</Link>{" "}
            and <Link to="/bookshelf">bookshelf</Link> archives, or check out my
            latest posts and book reviews below.
          </p>
        </div>
      </div>
      <h2>Recently Posted</h2>
      <div className="categories">
        {postCategories.map(category => {
          const items = data.allMarkdownRemark.edges.filter(
            ({ node }) => node.frontmatter.category === category
          )
          return <CategorySnippet category={category} items={items} />
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
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
        description
      }
    }
  }
`

export default Homepage
