import React from "react"
import Layout from "../components/Layout"
import Posts from "../components/Posts"

export default function Blog() {
  return (
    <Layout
      title="Blog"
      description="A list of all of the posts published on this blog."
      article={false}
    >
      <Posts />
    </Layout>
  )
}
