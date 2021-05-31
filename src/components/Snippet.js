import React from "react"
import { Link } from "gatsby"
import Tag from "./Tag"

const Snippet = ({ node }) => {
  return (
    <div className="snippet" key={node.id}>
      <Link to={node.fields.slug} class="title">
        {node.frontmatter.title}
      </Link>
      <p class="grey date">{node.frontmatter.date}</p>
      {Tag(node.frontmatter.tag)}
      <p>{node.frontmatter.description}</p>
    </div>
  )
}

export default Snippet
