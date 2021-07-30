import React from "react"
import { Link } from "gatsby"

const Snippet = ({ node }) => {
  const isPost = node.frontmatter.type === "post"
  return (
    <div key={node.id} className="snippet">
      <div className="row">
        <div className="title">
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </div>
        <div className="date">
          {node.frontmatter.date}
          {isPost === "post" && ` · ${node.timeToRead} min read`}
        </div>
      </div>
    </div>
  )
}

export default Snippet
