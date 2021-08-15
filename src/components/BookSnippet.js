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
      <div key={node.id} className="snippet">
        <div className="row">
          <div className="title">
            {node.frontmatter.notes ? (
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            ) : (
              node.frontmatter.title
            )}
          </div>
          <div className="date">{`by ${node.frontmatter.author}`}</div>
        </div>
      </div>
      <div className="row">
        <div className="date">{`Read ${node.frontmatter.date}`}</div>
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
