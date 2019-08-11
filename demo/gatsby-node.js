const createPosts = require('./gatsby/createPosts');
// const createPages = require('./gatsby/createPages');
// const createCategories = require('./gatsby/createCategories');

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql });
  // await createPages({ actions, graphql });
  // await createCategories({ actions, graphql });
}