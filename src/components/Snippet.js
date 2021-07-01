import React from "react"
import { Link } from "gatsby"

const Snippet = ({ node }) => {
  const isPage = node.frontmatter.type === "page"
  const isPost = node.frontmatter.type === "post"
  return (
    <div key={node.id} className="snippet">
      <Link to={node.fields.slug} className="title">
        {node.frontmatter.title}
      </Link>
      <p className="date">
        {isPage && "Updated "} {isPost && "Posted "} {node.frontmatter.date}
        {isPost === "post" && ` · ${node.timeToRead} min read`}
      </p>
    </div>
  )
}

export default Snippet
