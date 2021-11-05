import React from "react"
import { Link } from "gatsby"
import Tag from "./Tag"

const PostSnippet = ({ node }) => {
  return (
    <>
      <div key={node.id} className="post snippet">
        <div className="title">
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </div>
        <div className="date">
          <Tag category={node.frontmatter.category} />
        </div>
        <div className="excerpt">
          <span className="real date">{node.frontmatter.date} · &nbsp; </span>
          {node.excerpt} &nbsp; <Link to={node.fields.slug}>[read]</Link>
        </div>
      </div>
    </>
  )
}

export default PostSnippet
