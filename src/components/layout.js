import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginLeft: `1.5rem` }}>
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
    <div
      style={{
        margin: `3rem auto`,
        maxWidth: 700,
        padding: `1rem`,
      }}
    >
      <header style={{ marginBottom: `60px` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right`, margin: `0` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}

export default Layout
