import React from "react"
import { Link } from "gatsby"

const PostSnippet = ({ node }) => {
  return (
    <div key={node.id} className="post snippet">
      <div className="title">
        <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
      </div>
    </div>
  )
}

export default PostSnippet
