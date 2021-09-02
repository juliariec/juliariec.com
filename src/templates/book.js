import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Content from "../components/Content"
import Comment from "../components/Comment"
import Extension from "../components/Extension"

const Book = ({ data, pageContext }) => {
  const book = data.markdownRemark
  const { previous, next } = pageContext
  const comments = React.createRef()

  // Credit goes to Tania Rascia for this Utterances implementation
  useEffect(() => {
    const commentScript = document.createElement("script")
    commentScript.async = true
    commentScript.src = "https://utteranc.es/client.js"
    commentScript.setAttribute("repo", "juliariec/comments")
    commentScript.setAttribute("issue-term", "pathname")
    commentScript.setAttribute("id", "utterances")
    commentScript.setAttribute("theme", "github-light")
    commentScript.setAttribute("crossorigin", "anonymous")
    if (comments && comments.current) {
      comments.current.appendChild(commentScript)
    }
  }, []) // eslint-disable-line

  return (
    <Layout
      title={book.frontmatter.title}
      description={book.frontmatter.description}
      article={true}
    >
      <Content node={book} link={false} />
      <Extension previous={previous} next={next} />
      <Comment comments={comments} />
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        description
        category
        date(formatString: "MMMM D, YYYY")
        type
      }
      timeToRead
    }
  }
`

export default Book
