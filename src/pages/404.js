import React from "react"
import Layout from "../components/Layout"

const Error = () => (
  <Layout title="404 error" description="Page not found." article={false}>
    <h1>404 error</h1>
    <p>The page you requested could not be found.</p>
  </Layout>
)

export default Error
