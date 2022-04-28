import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import { constructUrl } from "../utils"
import favicon from "../../favicon.ico"

const Seo = ({ title, description, article, imageUrl, imageAlt }) => {
  const { pathname } = useLocation()
  const { site, ogImageDefault } = useStaticQuery(query)

  const { author, defaultTitle, titleTemplate, defaultDescription, siteUrl } =
    site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  }

  const defaultImageUrl = constructUrl(
    siteUrl,
    ogImageDefault?.childImageSharp?.gatsbyImageData?.images.fallback.src
  )

  const ogImageUrl = imageUrl || defaultImageUrl

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{ lang: "en" }}
      meta={[
        { name: "charSet", content: "utf-8" },
        { name: "author", content: author },
        { name: "description", content: seo.description },
        { property: "og:url", content: seo.url },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.description },
        { property: "og:type", content: article ? "article" : "website" },
        { property: `og:image`, content: ogImageUrl },
        { property: "twitter:title", content: seo.title },
        { property: "twitter:description", content: seo.description },
        { property: "twitter:card", content: "summary" },
        {
          property: `twitter:card`,
          content: imageUrl ? "summary_large_image" : "summary",
        },
        {
          property: `twitter:image:alt`,
          content: imageAlt || "juliariec.com logo",
        },
      ]}
    >
      <link rel="shortcut icon" type="image/png" href={favicon} />
      <link rel="canonical" href={seo.url} />
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
    ogImageDefault: file(
      absolutePath: { glob: "**/src/images/og/default.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          width: 1200
          placeholder: BLURRED
          layout: FIXED
        )
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
