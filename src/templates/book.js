import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Content from "../components/Content"
import Extension from "../components/Extension"

const Book = ({ data, pageContext }) => {
  const book = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout
      title={book.frontmatter.title}
      description={book.frontmatter.description}
      article={true}
    >
      <Content node={book} link={false} />
      <Extension previous={previous} next={next} />
    </Layout>
  )
}

export const query = graphql`
  query getBook($slug: String!) {
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
