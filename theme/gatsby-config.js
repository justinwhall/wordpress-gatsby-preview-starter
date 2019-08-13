module.exports = {
  siteMetadata: {
    title: `WordPress + Gatsby + Preview`,
    author: `Justin W. Hall`,
    description: `A starter for WordPress + Gatsby that supports live previews.`,
    siteUrl: `https://justinwhall.com`,
    social: {
      twitter: `justinwhall`,
    },
  },
  plugins: [
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
