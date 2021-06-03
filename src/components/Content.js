import React from "react"
import { Link } from "gatsby"
import Tag from "./Tag"

const Content = ({ node, link }) => {
  return (
    <div className="content">
      {link ? (
        <Link to={node.fields.slug}>
          <h1>{node.frontmatter.title}</h1>
        </Link>
      ) : (
        <h1>{node.frontmatter.title}</h1>
      )}
      <p className="date">
        {node.frontmatter.type === "page" && "Updated "} {node.frontmatter.date}
      </p>
      {node.frontmatter.category && (
        <Tag category={node.frontmatter.category} />
      )}
      <div className="body" dangerouslySetInnerHTML={{ __html: node.html }} />
    </div>
  )
}

export default Content
