import React from "react"

import SEO from "./Seo"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ title, description, article, children }) => {
  return (
    <>
      <SEO title={title} description={description} article={article}></SEO>
      <div className="container">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
