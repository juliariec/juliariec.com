import React from "react"
import { Link } from "gatsby"
import Tag from "./Tag"

const Snippet = ({ node }) => {
  return (
    <div key={node.id} className="snippet">
      <Link to={node.fields.slug} className="title">
        {node.frontmatter.title}
      </Link>
      <p className="date">
        {node.frontmatter.type === "page" && "Updated "} {node.frontmatter.date}
        {node.frontmatter.type === "post" && ` · ${node.timeToRead} min read`}
      </p>
      {node.frontmatter.category && (
        <Tag category={node.frontmatter.category} />
      )}
      <p>{node.frontmatter.description}</p>
    </div>
  )
}

export default Snippet
