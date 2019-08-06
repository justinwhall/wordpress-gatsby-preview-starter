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
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-source-graphql-universal',
      options: {
        typeName: 'WORDPRESS',
        fieldName: 'wordpress',
        url: `http://localhost:8000/graphql`,
      },
    },
  ],
};
