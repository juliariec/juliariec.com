import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Content from "../components/Content"
import Comment from "../components/Comment"
import Extension from "../components/Extension"
import { constructUrl } from "../utils"

const Post = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { site } = data
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
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      article={true}
      imageUrl={constructUrl(
        site.siteMetadata.siteUrl,
        post.frontmatter.image?.childImageSharp?.gatsbyImageData?.images
          .fallback.src
      )}
      imageAlt={post.frontmatter.imageAlt}
    >
      <Content node={post} link={false} />
      <Extension previous={previous} next={next} />
      <Comment comments={comments} />
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        category
        date(formatString: "MMMM D, YYYY")
        type
        image {
          childImageSharp {
            gatsbyImageData(
              height: 400
              width: 800
              placeholder: BLURRED
              layout: FIXED
            )
          }
        }
        imageAlt
      }
      timeToRead
    }
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`

export default Post
