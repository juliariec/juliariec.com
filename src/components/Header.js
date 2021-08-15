import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h3>julia cooke</h3>
      </Link>
      <ul>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/blog/">Blog</ListLink>
        <ListLink to="/bookshelf/">Bookshelf</ListLink>
        <ListLink to="/now/">Now</ListLink>
      </ul>
    </header>
  )
}

export default Header
