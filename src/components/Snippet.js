import React from "react"
import { Link } from "gatsby"

const Snippet = ({ node }) => {
  return (
    <div className="snippet" key={node.id}>
      <Link to={node.fields.slug}>
        <h2>{node.frontmatter.title}</h2>
      </Link>
      <p>{node.excerpt}</p>
    </div>
  )
}

export default Snippet
