import React from "react"
import { Link } from "gatsby"
import Tag from "./Tag"

const CategorySnippet = ({ category, items }) => {
  return (
    <div className="category">
      <Tag key={`${category}-tag`} category={category} />
      {items.slice(0, 3).map(({ node }) => (
        <p key={node.id}>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>{" "}
          <span className="date">· {node.frontmatter.date}</span>
        </p>
      ))}
    </div>
  )
}

export default CategorySnippet
