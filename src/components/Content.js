import React from "react"
import { Link } from "gatsby"
import Tag from "./Tag"

const Content = ({ node, link }) => {
  const isPage = node.frontmatter.type === "page"
  const isPost = node.frontmatter.type === "post"
  const isBook = node.frontmatter.type === "book"
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
        {isBook && `by ${node.frontmatter.author} · `}
        {isPage ? "Updated " : "Posted "}
        {node.frontmatter.date}
        {isPost && ` · ${node.timeToRead} min read`}
      </p>
      {node.frontmatter.category && (
        <Tag category={node.frontmatter.category} />
      )}
      <div className="body" dangerouslySetInnerHTML={{ __html: node.html }} />
    </div>
  )
}

export default Content
