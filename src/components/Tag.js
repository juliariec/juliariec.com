import React from "react"

const Tag = ({ category }) => {
  return <span className={`tag ${category}`}>{category}</span>
}

export default Tag
