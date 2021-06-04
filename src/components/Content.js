import React from "react"
import { Link } from "gatsby"
import Tag from "./Tag"

const Content = ({ node, link }) => {
  return (
    <div className="content">
      {link ? (
        <h1 className="header-link">
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </h1>
      ) : (
        <h1>{node.frontmatter.title}</h1>
      )}
      <p className="date">
        {node.frontmatter.type === "page" && "Updated "} {node.frontmatter.date}
        {node.frontmatter.type === "post" && ` · ${node.timeToRead} min read`}
      </p>
      {node.frontmatter.category && (
        <Tag category={node.frontmatter.category} />
      )}
      <div className="body" dangerouslySetInnerHTML={{ __html: node.html }} />
    </div>
  )
}

export default Content
