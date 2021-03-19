import React, { Fragment } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoCafe,
  IoLogoRss,
} from "react-icons/io5"
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
      <footer>
        <div class="half">Julia Cooke &copy; 2021.</div>
        <div class="half">
          <a
            class="icon"
            href="https://github.com/juliariec"
            rel="noreferrer noopener"
            alt="GitHub"
          >
            <IoLogoGithub />
          </a>
          <a
            class="icon"
            href="https://www.linkedin.com/in/juliariec"
            rel="noreferrer noopener"
            alt="LinkedIn"
          >
            <IoLogoLinkedin />
          </a>
          <a
            class="icon"
            href="https://ko-fi.com/juliariec"
            rel="noreferrer noopener"
            alt="Ko-Fi"
          >
            <IoCafe />
          </a>
          <a
            class="icon"
            href="/rss.xml"
            rel="noreferrer noopener"
            alt="RSS Feed"
          >
            <IoLogoRss />
          </a>
        </div>
      </footer>
    </Fragment>
  )
}

export default Layout
