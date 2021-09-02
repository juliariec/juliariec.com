import React from "react"
import { navigate } from "gatsby"

const Tag = ({ category }) => {
  const goTo = category => {
    if (category === "books") {
      return navigate(`/bookshelf`)
    } else {
      return navigate(`/categories/${category}`)
    }
  }

  return (
    <button className={`${category}`} onClick={() => goTo(category)}>
      {category}
    </button>
  )
}

export default Tag
