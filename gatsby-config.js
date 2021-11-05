module.exports = {
  siteMetadata: {
    title: "julia cooke",
    titleTemplate: "%s · julia cooke",
    author: "Julia Cooke",
    description: "Thoughts on books, software, and life.",
    siteUrl: "https://www.juliariec.com",
    url: "https://www.juliariec.com",
    image: "logo.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 90,
              linkImagesToOriginal: true,
              showCaptions: false,
              wrapperStyle: "margin:2rem 0;",
            },
          },
          `gatsby-remark-external-links`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
            exportLocalsConvention: "camelCaseOnly",
          },
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
            {
              site {
                siteMetadata {
                  title
                  description
                  siteUrl
                  site_url: siteUrl
                }
              }
            }
          `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
                {
                  allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] },
                    filter: {frontmatter: {type: {eq: "post"}}}
                  ) {
                    edges {
                      node {
                        html
                        fields { slug }
                        frontmatter {
                          title
                          description
                          date
                        }
                      }
                    }
                  }
                }
              `,
            output: "/rss.xml",
            title: "juliariec",
          },
        ],
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-robots-txt`,
  ],
}
