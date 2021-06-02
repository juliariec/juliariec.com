import React from "react"

const Tag = ({ tag }) => {
  return <span className={`tag ${tag}`}>{tag}</span>
}

export default Tag
