import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const Now = ({ data }) => (
  <Layout title="Now" description="What I'm currently up to." article={false}>
    <h1>Now</h1>
    <p className="grey">Updated May 31, 2021</p>
    <ul>
      <li>Working in web development.</li>
      <li>Staying (and working) at home until restrictions lift in Toronto.</li>
      <li>Improving and finalizing features for this blog.</li>
      <li>Learning about Acceptance and Commitment Therapy (ACT).</li>
      <li>Starting my own herb garden. </li>
      <li>Getting into cycling.</li>
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
