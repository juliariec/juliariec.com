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
      <div className="title">
        <Link to="/">julia cooke</Link>
      </div>
      <nav className="menu">
        <ul>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
          <ListLink to="/bookshelf/">Bookshelf</ListLink>
          <ListLink to="/now/">Now</ListLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header
