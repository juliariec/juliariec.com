import React from "react"
import Tag from "./Tag"

const Content = ({ post }) => {
  return (
    <div className="content">
      <h1>{post.frontmatter.title}</h1>
      <p className="date">{post.frontmatter.date}</p>
      <Tag tag={post.frontmatter.tag} />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export default Content
