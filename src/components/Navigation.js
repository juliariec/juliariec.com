import React from "react"
import { Link } from "gatsby"
import { IoMenu, IoClose } from "react-icons/io5"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const navLinks = [
  { route: "/about", label: "About" },
  { route: "/", label: "Blog" },
  { route: "/bookshelf/", label: "Bookshelf" },
  { route: "/newsletter/", label: "Newsletter" },
  { route: "/now/", label: "Now" },
  { route: "/recipes/", label: "Recipes" },
]

const Navigation = () => {
  const [showMobileLinks, setShowMobileLinks] = React.useState(false)
  const Links = () => {
    return (
      <ul>
        {navLinks.map(item => (
          <ListLink key={item.route} to={item.route}>
            {item.label}
          </ListLink>
        ))}
      </ul>
    )
  }

  return (
    <header>
      <div className="title">
        <Link to="/">julia rodenburg</Link>
      </div>
      <nav className="desktop-menu">{Links()}</nav>
      <div className="mobile-button">
        {!showMobileLinks ? (
          <button
            className="icon icon-button"
            onClick={() => setShowMobileLinks(true)}
          >
            <IoMenu />
          </button>
        ) : (
          <button
            className="icon icon-button"
            onClick={() => setShowMobileLinks(false)}
          >
            <IoClose />
          </button>
        )}
      </div>
      {showMobileLinks && <nav className="mobile-menu">{Links()}</nav>}
    </header>
  )
}

export default Navigation
