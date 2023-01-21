import React from "react"
import { navigate } from "gatsby"

const Tag = ({ category, isActive, ...props }) => {
  return (
    <button
      className={`${category} ${isActive ? `active` : ``}`}
      onClick={() => navigate(`/categories/${category}`)}
      {...props}
    >
      {category}
    </button>
  )
}

export default Tag
