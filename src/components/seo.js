import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

import favicon from "../../static/favicons/favicon.ico"
import appleTouch from "../../static/favicons/apple-touch-icon.png"
import fav32 from "../../static/favicons/favicon-32x32.png"
import fav16 from "../../static/favicons/favicon-16x16.png"
import safari from "../../static/favicons/safari-pinned-tab.svg"

const SEO = ({ title, description, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    author,
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    author: author,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{
        lang: "en",
      }}
    >
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      <meta charSet="utf-8" />
      {seo.url && <link rel="canonical" href={seo.url} />}

      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      <link rel="shortcut icon" type="image/png" href={favicon} />
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouch} />
      <link rel="icon" type="image/png" sizes="32x32" href={fav32} />
      <link rel="icon" type="image/png" sizes="16x16" href={fav16} />
      <link rel="mask-icon" href={safari} color="#5d045b" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  )
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        author
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`

SEO.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  author: null,
  title: null,
  description: null,
  article: false,
}

export default SEO
