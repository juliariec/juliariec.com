import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Navigation = () => {
  return (
    <nav class="sidenav">
      <div className="title">
        <Link to="/">julia cooke</Link>
      </div>
      <div className="menu">
        <ul>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/bookshelf/">Bookshelf</ListLink>
          <ListLink to="/now/">Now</ListLink>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
