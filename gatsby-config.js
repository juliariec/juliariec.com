module.exports = {
  siteMetadata: {
    title: "julia rodenburg",
    titleTemplate: "%s · julia rodenburg",
    author: "Julia Rodenburg",
    description: "Thoughts on books, software, and life.",
    siteUrl: "https://www.juliariec.com",
    url: "https://www.juliariec.com",
    image: "logo.png",
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
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
            author: "Julia Cooke",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `juliariec.com`,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
            buildTime(formatString: "YYYY-MM-DD")
          }
          allSitePage {
            nodes {
              path
            }
          }
          allMarkdownRemark {
            nodes {
              fields {
                slug
              }
              frontmatter {
                date
              }
            }
          }
        }        
      `,
        resolveSiteUrl: data => data.site.siteMetadata.siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allMarkdownRemark: { nodes: allPosts },
        }) => {
          const pathToDateMap = {}

          allPosts.map(post => {
            pathToDateMap[post.fields.slug] = {
              date: post.frontmatter.date,
            }
          })

          const pages = allPages.map(page => {
            return { ...page, ...pathToDateMap[page.path] }
          })

          return pages
        },
        serialize: ({ path, date, buildTime }) => {
          let entry = {
            url: path,
            lastmod: date || buildTime,
          }

          return entry
        },
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-netlify`,
  ],
}
