import React from "react"
import { Link } from "gatsby"

const Snippet = ({ node }) => {
  return (
    <div key={node.id}>
      <Link to={node.fields.slug}>
        <h3>{node.frontmatter.title} </h3>
      </Link>
      <p>
        {node.excerpt} <Link to={node.fields.slug}>{"(Read)"}</Link>
      </p>
    </div>
  )
}

export default Snippet
