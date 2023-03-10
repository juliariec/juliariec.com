import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Posts from "../components/Posts"

const Homepage = ({ data }) => {
  return (
    <Layout
      title="Blog"
      description={data.site.siteMetadata.description}
      article={false}
    >
      <Posts />
    </Layout>
  )
}

export const query = graphql`
  query getDescription {
    site {
      siteMetadata {
        description
      }
    }
  }
`

export default Homepage
