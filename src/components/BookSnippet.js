import React from "react"
import { Link } from "gatsby"

const BookSnippet = ({ node }) => {
  let empty = "&star;"
  let filled = "&starf;"
  let stars =
    filled.repeat(node.frontmatter.rating) +
    empty.repeat(5 - node.frontmatter.rating)
  return (
    <>
      <div key={node.id} className="book snippet">
        <div className="row">
          <div className="title">
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="subtitle">
          {`by ${node.frontmatter.author} · read ${node.frontmatter.date}`}
          {node.frontmatter.notes && (
            <span style={{ fontWeight: "500" }}>{` · includes notes`}</span>
          )}
        </div>
        <div className="rating" dangerouslySetInnerHTML={{ __html: stars }} />
        <div
          className="review"
          dangerouslySetInnerHTML={{ __html: node.frontmatter.review }}
        />
        <br />
        <br />
      </div>
    </>
  )
}

export default BookSnippet
