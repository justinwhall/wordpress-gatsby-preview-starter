const createPosts = require('./gatsby/createPosts');
const createBeerPosts = require('./gatsby/createBeerPosts');

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql });
  await createBeerPosts({ actions, graphql });
}