import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"
import Layout from "./layout"

const Post = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext
  return (
    <Fragment>
      <Layout
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        article={true}
      >
        <div className="post">
          <h1>{post.frontmatter.title}</h1>
          <p className="grey">Published {post.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <div className="post-links">
          <div className="half">
            {previous && (
              <Fragment>
                <p>Previous</p>
                <Link to={previous.fields.slug}>
                  <h4>{previous.frontmatter.title}</h4>
                </Link>
              </Fragment>
            )}
          </div>

          <div className="half">
            {next && (
              <Fragment>
                <p>Next</p>
                <Link to={next.fields.slug}>
                  <h4>{next.frontmatter.title}</h4>
                </Link>
              </Fragment>
            )}
          </div>
        </div>
      </Layout>
    </Fragment>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        tag
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default Post
