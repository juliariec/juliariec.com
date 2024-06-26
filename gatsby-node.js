const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            frontmatter {
              title
              author
              date
              category
              type
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const all = result.data.allMarkdownRemark.edges
  const posts = all.filter(item => item.node.frontmatter.type === "post")
  const pages = all.filter(item => item.node.frontmatter.type === "page")
  const books = all.filter(item => item.node.frontmatter.type === "book")
  const categorySet = new Set()

  posts.forEach((post, i) => {
    const previous = i === posts.length - 1 ? null : posts[i + 1].node
    const next = i === 0 ? null : posts[i - 1].node

    if (post.node.frontmatter.category) {
      categorySet.add(post.node.frontmatter.category)
    }

    createPage({
      path: post.node.fields.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: post.node.fields.slug,
        previous: previous,
        next: next,
      },
    })
  })

  pages.forEach(page => {
    createPage({
      path: page.node.fields.slug,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        slug: page.node.fields.slug,
      },
    })
  })

  books.forEach((book, i) => {
    const previous = i === books.length - 1 ? null : books[i + 1].node
    const next = i === 0 ? null : books[i - 1].node

    createPage({
      path: book.node.fields.slug,
      component: path.resolve(`./src/templates/book.js`),
      context: {
        slug: book.node.fields.slug,
        previous: previous,
        next: next,
      },
    })
  })

  const categories = Array.from(categorySet)
  categories.forEach(category => {
    createPage({
      path: `/categories/${category}/`,
      component: path.resolve(`./src/templates/category.js`),
      context: {
        category,
      },
    })
  })
}
