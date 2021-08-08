import React from "react"
import { Link } from "gatsby"

const Snippet = ({ node }) => {
  //const isPost = node.frontmatter.type === "post"
  const isBook = node.frontmatter.type === "book"

  return (
    <div key={node.id} className="snippet">
      <div className="row">
        <div className="title">
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </div>
        <div className="date">
          {isBook ? `by ${node.frontmatter.author}` : node.frontmatter.date}
        </div>
      </div>
    </div>
  )
}

export default Snippet
