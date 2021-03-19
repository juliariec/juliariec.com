import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Now = ({ data }) => (
  <Layout>
    <h1>Now</h1>
    <p className="date">Updated {data.allFile.nodes[0].modifiedTime}</p>
    <ul>
      <li>Staying at home until restrictions lift in Toronto.</li>
      <li>Focusing on writing content for this blog.</li>
      <li>Working on freelance web development work.</li>
      <li>Cleaning through my old files and adding them to my Notion.</li>
    </ul>
    <p className="aside">
      Inspired by{" "}
      <a
        href="https://nownownow.com/about"
        rel="noreferrer noopener"
        target="_blank"
      >
        NowNowNow
      </a>
      .
    </p>
  </Layout>
)

export const query = graphql`
  query {
    allFile(filter: { name: { eq: "now" } }) {
      nodes {
        modifiedTime(formatString: "MMMM DD YYYY")
      }
    }
  }
`

export default Now