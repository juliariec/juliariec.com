import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoCafe,
  IoLogoRss,
} from "react-icons/io5"

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
          buildTime(formatString: "YYYY")
        }
      }
    `
  )

  return (
    <footer>
      <div className="half">
        {data.site.siteMetadata.author} &copy; {data.site.buildTime}
      </div>
      <div className="half">
        <a
          title="GitHub"
          className="icon"
          href="https://github.com/juliariec"
          rel="noreferrer noopener"
          target="_blank"
        >
          <IoLogoGithub />
        </a>
        <a
          title="LinkedIn"
          className="icon"
          href="https://www.linkedin.com/in/juliariec"
          rel="noreferrer noopener"
          target="_blank"
        >
          <IoLogoLinkedin />
        </a>
        <a
          title="Buy Me a Coffee"
          className="icon"
          href="https://www.buymeacoffee.com/juliariec"
          rel="noreferrer noopener"
          target="_blank"
        >
          <IoCafe />
        </a>
        <a
          title="RSS"
          className="icon"
          href="/rss.xml"
          rel="noreferrer noopener"
          target="_blank"
        >
          <IoLogoRss />
        </a>
      </div>
    </footer>
  )
}

export default Footer
