import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const Now = ({ data }) => (
  <Layout title="Now" description="What I'm currently up to." article={false}>
    <h1>Now</h1>
    <p className="grey">Updated {data.allFile.nodes[0].modifiedTime}</p>
    <ul>
      <li>Staying at home until restrictions lift in Toronto.</li>
      <li>Focusing on writing content for this blog.</li>
      <li>Working on freelance web development work.</li>
      <li>Cleaning through my old files and adding them to my Notion.</li>
      <li>Learning about Acceptance and Commitment Therapy (ACT).</li>
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
