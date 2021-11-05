import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import BookSnippet from "../components/BookSnippet"

export default function Bookshelf({ data }) {
  const allBooks = data.allMarkdownRemark.edges
  const [sort, setSort] = useState("date")
  const [books, setBooks] = useState(allBooks)
  const [showExplanation, setExplanation] = useState(false)
  const [filter, setFilter] = useState("")

  // For sorting books
  const sortByDate = (a, b) => {
    return new Date(a.node.frontmatter.date) < new Date(b.node.frontmatter.date)
      ? 1
      : -1
  }
  const sortByRating = (a, b) => {
    return a.node.frontmatter.rating < b.node.frontmatter.rating ? 1 : -1
  }
  const sortByTitle = (a, b) => {
    return a.node.frontmatter.title > b.node.frontmatter.title ? 1 : -1
  }

  useEffect(() => {
    let sortedBooks = [...allBooks]
    if (sort === "date") {
      sortedBooks.sort(sortByDate)
    } else if (sort === "rating") {
      sortedBooks.sort(sortByRating)
    } else if (sort === "title") {
      sortedBooks.sort(sortByTitle)
    }
    setBooks(sortedBooks)
  }, [sort, allBooks])

  // For filtering books
  useEffect(() => {
    var filteredBooks = [...allBooks]
    let filterText = filter.toLowerCase()
    filteredBooks = filteredBooks.filter(book => {
      return (
        book.node.frontmatter.title.toLowerCase().indexOf(filterText) !== -1 ||
        book.node.frontmatter.author.toLowerCase().indexOf(filterText) !== -1
      )
    })
    setBooks(filteredBooks)
  }, [filter, allBooks])

  return (
    <Layout
      title="Bookshelf"
      description="A list of books I've read."
      article={false}
    >
      <div className="collection">
        <h1>Bookshelf</h1>
        <p className="grey">{data.allMarkdownRemark.totalCount} books</p>
        <p>
          I love to read. In 2015 I started using my{" "}
          <a
            href="https://goodreads.com/juliariec"
            rel="noreferrer noopener"
            target="_blank"
          >
            Goodreads account
          </a>{" "}
          to faithfully track what I was reading, and in 2018 I began to write
          short reviews/reactions after I finished a book. This page is a list
          of every book I've read that has an associated rating and review; many
          entries will include a quote in italics, and may also include my notes
          on the book.
        </p>
        <button onClick={() => setExplanation(!showExplanation)}>
          {showExplanation
            ? "Hide explanation"
            : "How does your rating system work?"}
        </button>
        {showExplanation && (
          <>
            <p>My ratings are based off of the Goodreads system:</p>
            <ol>
              <li>
                <strong>Didn't like it</strong> &mdash; unusual; I quit books
                that I don't enjoy unless I'm hoping they'll get better
              </li>
              <li>
                <strong>It was okay</strong> &mdash; I probably had some
                specific motivation for finishing it
              </li>
              <li>
                <strong>Liked it</strong> &mdash; most common; I liked it enough
                to finish it
              </li>
              <li>
                <strong>Really liked it</strong> &mdash; I particularly enjoyed
                it and would probably recommend it
              </li>
              <li>
                <strong>Loved it</strong> &mdash; it really resonated with me,
                and I will probably reread and/or purchase it
              </li>
            </ol>
          </>
        )}
        <div className="flex-container">
          <div className="first">
            Search by title or author:
            <input
              type="text"
              onChange={event => setFilter(event.target.value)}
            />
          </div>
          <div className="second">
            Sort list by: &nbsp;
            <button
              className={`blue ${sort === "date" && "active"}`}
              onClick={() => setSort("date")}
            >
              date
            </button>
            <button
              className={`purple ${sort === "title" && "active"}`}
              onClick={() => setSort("title")}
            >
              title
            </button>
            <button
              className={`pink ${sort === "rating" && "active"}`}
              onClick={() => setSort("rating")}
            >
              rating
            </button>
          </div>
        </div>
        {books.map(({ node }) => (
          <BookSnippet key={node.id} node={node}></BookSnippet>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "book" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            author
            description
            date(formatString: "MMMM D, YYYY")
            type
            shelf
            category
            rating
            pages
            review
            notes
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
