import React, { Fragment } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import SEO from "./seo"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ title, description, article, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <Fragment>
      <SEO title={title} description={description} article={article}></SEO>
      <div className="container">
        <header>
          <Link to="/">
            <h3>{data.site.siteMetadata.title}</h3>
          </Link>
          <ul>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/now/">Now</ListLink>
          </ul>
        </header>
        {children}
      </div>
    </Fragment>
  )
}

export default Layout
