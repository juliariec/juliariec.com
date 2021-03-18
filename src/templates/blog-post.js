import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h4
          css={css`
            color: #bbb;
          `}
        >
          {post.frontmatter.date}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMM YYYY")
      }
    }
  }
`
