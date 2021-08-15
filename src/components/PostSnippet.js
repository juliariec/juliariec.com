import React from "react"
import { Link } from "gatsby"

const PostSnippet = ({ node }) => {
  return (
    <div key={node.id} className="snippet">
      <div className="row">
        <div className="title">
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </div>
        <time className="date">{node.frontmatter.date}</time>
      </div>
    </div>
  )
}

export default PostSnippet
