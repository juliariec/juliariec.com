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
          className="icon"
          href="https://github.com/juliariec"
          rel="noreferrer noopener"
          title="GitHub"
        >
          <IoLogoGithub />
        </a>
        <a
          className="icon"
          href="https://www.linkedin.com/in/juliariec"
          rel="noreferrer noopener"
          title="LinkedIn"
        >
          <IoLogoLinkedin />
        </a>
        <a
          className="icon"
          href="https://ko-fi.com/juliariec"
          rel="noreferrer noopener"
          title="Ko-Fi"
        >
          <IoCafe />
        </a>
        <a
          className="icon"
          href="/rss.xml"
          rel="noreferrer noopener"
          title="RSS"
        >
          <IoLogoRss />
        </a>
      </div>
    </footer>
  )
}

export default Footer
