import React from "react"
import Seo from "./Seo"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ title, description, article, children }) => {
  return (
    <>
      <Seo title={title} description={description} article={article}></Seo>
      <div className="site-content">
        <div className="container">
          <Header />
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
