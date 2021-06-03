import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Content from "../components/Content"

const Page = ({ data }) => {
  const page = data.markdownRemark
  return (
    <Layout
      title={page.frontmatter.title}
      description={page.frontmatter.description}
      article={false}
    >
      <Content node={page} link={false} />
      <Link to="/pages/">&#8592; Back to Pages</Link>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        category
        date(formatString: "MMMM D, YYYY")
        type
      }
    }
  }
`

export default Page
