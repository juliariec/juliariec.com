import React from "react"
import Seo from "./Seo"
import Navigation from "./Navigation"
import Footer from "./Footer"

const Layout = ({
  title,
  description,
  article,
  imageUrl,
  imageAlt,
  children,
}) => {
  return (
    <>
      <Seo
        title={title}
        description={description}
        article={article}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
      />
      <div className="full-layout">
        <div className="body-layout">
          <Navigation />
          <div className="main-body">
            <div className="all-content">{children}</div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
