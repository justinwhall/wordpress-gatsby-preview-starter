/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: `WordPress Gatsby Starter`,
    author: `Justin W Hall`,
    description: `A Gatsby WordPress Starter with special love for Netlify`,
    siteUrl: `https://gatsby-wordpress-netlify-production.netlify.com`,
    social: {
      twitter: `justinwhall`,
    },
    postPrefix : '/blog',
    pagePrefix: '',
  },
  plugins: [
    'wordpress-gatsby-preview-starter',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
