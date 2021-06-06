import React from "react"

const Comment = ({ comments }) => {
  return (
    <div id="comments">
      <h2>Comments</h2>
      <div ref={comments} />
    </div>
  )
}

export default Comment
