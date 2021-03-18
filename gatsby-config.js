/**
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "juliariec",
    titleTemplate: "%s",
    description: "Thoughts on books, tech, and life.",
    url: "http://www.juliariec.com",
  },
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
  ],
}
