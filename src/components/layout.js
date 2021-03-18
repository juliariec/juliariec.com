import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ children }) => {
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
    <div className="container">
      <header>
        <Link to="/">
          <h3>{data.site.siteMetadata.title}</h3>
        </Link>
        <ul>
          <ListLink to="/about/">About</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}

export default Layout
