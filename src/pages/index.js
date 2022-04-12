import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Posts from "../components/Posts"

const Homepage = ({ data }) => {
  return (
    <Layout
      title="Homepage"
      description={data.site.siteMetadata.description}
      article={false}
    >
      <Posts />
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        description
      }
    }
  }
`

export default Homepage
