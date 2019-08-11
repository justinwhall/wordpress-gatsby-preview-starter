module.exports = {
  siteMetadata: {
    title: `WordPress + Gatsby + Preview`,
    author: `Justin W. Hall`,
    description: `A starter for WordPress + Gatsby that supports live previews.`,
    siteUrl: `https://localhost:3000`,
    social: {
      twitter: `justinwhall`,
    },
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-graphql-universal',
      options: {
        typeName: 'WPGraphQL',
        fieldName: 'wpgraphql',
        url: `http://localhost:3030/graphql`,
      },
    },
  ],
};
