import React from "react"
import { navigate } from "gatsby"

const Tag = ({ category }) => {
  return (
    <button
      className={`${category}`}
      onClick={() => navigate(`/categories/${category}`)}
    >
      {category}
    </button>
  )
}

export default Tag
