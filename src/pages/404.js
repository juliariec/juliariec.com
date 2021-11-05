import React from "react"
import Layout from "../components/Layout"

const Error = () => (
  <Layout title="Error 404" description="Page not found." article={false}>
    <div className="content">
      <h1>Error 404</h1>
      <p>The page you requested could not be found.</p>
    </div>
  </Layout>
)

export default Error
