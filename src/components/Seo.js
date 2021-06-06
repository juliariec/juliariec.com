import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import favicon from "../../favicon.ico"

const Seo = ({ title, description, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const { author, defaultTitle, titleTemplate, defaultDescription, siteUrl } =
    site.siteMetadata

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
      <meta charSet="utf-8" />
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      <link rel="shortcut icon" type="image/png" href={favicon} />
      {seo.url && <link rel="canonical" href={seo.url} />}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {article && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
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

Seo.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  article: PropTypes.bool,
}

Seo.defaultProps = {
  author: null,
  title: null,
  description: null,
  article: false,
}

export default Seo
